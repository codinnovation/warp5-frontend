'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

interface LoginFormProps {
  closeModal: () => void;
  onForgotPassword: () => void;
}

const signInInput = [
  {
    label: 'Email/Phone',
    type: 'text',
    name: 'loginId',
  },
  {
    label: 'Password',
    type: 'password',
    name: 'password',
  },
];

export default function LoginForm({ closeModal, onForgotPassword }: LoginFormProps) {

  const router = useRouter();
  const [isSigningIn, setIsSigningIn] = useState(false);

  const [formData, setFormData] = useState({
    loginId: '',
    password: '',
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignIn = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSigningIn(true);

    try {
      const apiRes = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          loginId: formData.loginId,
          password: formData.password
        })
      });

      const apiData = await apiRes.json();

      if (!apiRes.ok) {
        console.error(apiData.message || 'Something went wrong.');
        toast.error(apiData.message || 'Something went wrong.');
        return;
      }

      toast.success('Sign-in successful.');
      window.location.reload();
    } catch (error) {
      console.error('Failed to sign in', error);
      toast.error('Failed to sign in');
    } finally {
      setIsSigningIn(false);
    }
  };

  return (
    <div className='fixed inset-0 bg-black/60 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50 p-4'>
      <div className='bg-white/90 backdrop-blur-xl relative rounded-3xl px-6 py-8 w-full max-w-sm md:max-w-md shadow-2xl border border-white/20 transition-all duration-300 scale-100'>
        <button
          onClick={closeModal}
          className='absolute top-4 right-4 cursor-pointer hover:bg-gray-100/80 rounded-full p-2 transition-all duration-200 focus:outline-none group'
        >
          <i className='ri-close-line text-gray-500 group-hover:text-gray-800 text-2xl transition-colors'></i>
        </button>

        <div className='text-center mb-6 mt-2'>
          <h2 className='text-2xl font-bold text-gray-800'>Welcome Back</h2>
          <p className='text-sm text-gray-500 mt-1'>Please sign in to your account</p>
        </div>

        <form className='space-y-4 lg:space-y-6' onSubmit={handleSignIn}>
          {signInInput.map((input, index) => (
            <div key={index}>
              <label htmlFor={input.name} className='mb-2 block text-sm font-medium text-gray-700'>
                {input.label}
              </label>
              <input
                type={input.type}
                name={input.name}
                id={input.name}
                onChange={handleChangeInput}
                value={formData[input.name as keyof typeof formData]}
                placeholder={`Enter your ${input.label.toLowerCase()}`}
                className='w-full h-12 px-5 bg-gray-50 border border-transparent text-sm text-gray-800 rounded-full transition-all duration-200 focus:outline-none focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10 placeholder:text-gray-400'
              />
            </div>
          ))}

          <div className='flex items-center justify-between mt-2'>
            <label className='flex items-center cursor-pointer group'>
              <input type='checkbox' className='rounded border-gray-300 text-green-600 focus:ring-green-500 cursor-pointer' />
              <span className='ml-2 text-sm text-gray-600 group-hover:text-gray-800 transition-colors'>Remember me</span>
            </label>
            <button type='button' className='text-sm text-green-600 hover:text-green-700 font-medium transition-colors' onClick={onForgotPassword}>
              Forgot password?
            </button>
          </div>

          <button
            className='w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white h-12 rounded-full font-semibold tracking-wide cursor-pointer hover:shadow-lg hover:shadow-green-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'
            type='submit'
            disabled={isSigningIn}
          >
            {isSigningIn ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div className='mt-6 flex justify-center items-center space-x-2'>
          <h1 className='text-sm text-gray-600'>Don&apos;t have an account?</h1>
          <button
            type='button'
            className='text-green-600 font-semibold hover:text-green-700 hover:underline transition-all text-sm cursor-pointer'
            onClick={() => router.push('/signup')}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};