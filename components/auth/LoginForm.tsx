'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface LoginFormProps {
  closeModal: () => void;
  onForgotPassword: () => void;
}

const signInInput = [
  {
    label: 'Email',
    type: 'email',
    name: 'email',
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
    email: '',
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
          email: formData.email,
          password: formData.password
        })
      });

      const apiData = await apiRes.json();

      if (!apiRes.ok) {
        console.error(apiData.message || 'Something went wrong.');
        return;
      }

      console.log('Sign-in successful.', apiData);
    } catch (error) {
      console.error('Failed to sign in', error);
    } finally {
      setIsSigningIn(false);
    }
  };

  return (
    <div className='fixed top-8 inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-white relative rounded-3xl px-6 py-4 w-full max-w-xs xl:max-w-md xl:px-16 xl:py-8'>
        <button onClick={closeModal} className='absolute top-4 right-4 cursor-pointer'>
          <i className='ri-close-line text-[#333333] text-2xl xl:text-3xl'></i>
        </button>

        <div className='text-center mb-4 mt-6 xl:mt-10'>
          <h2 className='text-base xl:text-2xl font-bold text-[#333333]'>Login</h2>
        </div>

        <form className='space-y-4 lg:space-y-6' onSubmit={handleSignIn}>
          {signInInput.map((input, index) => (
            <div key={index}>
              <label htmlFor='email' className='mb-2 lg:mb-4 block text-xs lg:text-sm font-regular text-[#333333]'>
                {input.label}
              </label>
              <input
                type={input.type}
                name={input.name}
                onChange={handleChangeInput}
                value={formData[input.name as keyof typeof formData]}
                className='w-full h-10 px-4 border border-[#787878] text-xs text-[#333333] rounded-full xl:h-14'
              />
            </div>
          ))}

          <div className='flex items-center justify-between'>
            <label className='flex items-center'>
              <input type='checkbox' className='rounded border-gray-300 text-[#43A047] focus:ring-[#43A047]' />
              <span className='ml-2 text-xs text-[#333333] font-regular xl:text-sm'>Remember me</span>
            </label>
            <button type='button' className='text-xs text-[#333333] font-regular xl:text-sm' onClick={onForgotPassword}>
              Forgot password?
            </button>
          </div>

          <button className='mt-4 w-full bg-[#E4E4E4] text-[#333333] h-10 rounded-full font-medium text-xs lg:h-12 xl:h-14 xl:text-sm' type='submit' disabled={isSigningIn}>
            Sign In
          </button>
        </form>

        <div className='mt-4 flex justify-center items-center space-x-2'>
          <h1 className='text-xs text-[#333333] font-medium xl:text-sm'>Don&apos;t have an account?</h1>
          <button
            type='button'
            className='border-b border-[#43A047] text-[#43A047] text-xs font-medium cursor-pointer xl:text-sm'
            onClick={() => router.push('/signup')}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};