'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

interface LoginFormProps {
  closeModal: () => void;
  onForgotPassword: () => void;
  signUpRoute?: string;
  heading?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({
  closeModal,
  onForgotPassword,
  signUpRoute = '/signup',
  heading = 'Login',
}) => {
  const router = useRouter();

  return (
    <div className='fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-white rounded-3xl px-8 lg:px-16 xl:px-20 py-6 lg:py-8 xl:py-10 w-full max-w-sm lg:max-w-lg xl:max-w-xl relative'>
        <button onClick={closeModal} className='absolute top-4 right-4 cursor-pointer'>
          <i className='ri-close-line text-[#333333] text-3xl lg:text-4xl'></i>
        </button>

        <div className='text-center mb-4 lg:mb-6 mt-8 lg:mt-12'>
          <h2 className='text-xl lg:text-2xl xl:text-3xl font-bold text-[#333333]'>{heading}</h2>
        </div>

        <form className='space-y-6 lg:space-y-8'>
          <div>
            <label htmlFor='email' className='mb-3 lg:mb-5 block text-sm lg:text-base font-regular text-[#333333]'>
              Email
            </label>
            <input
              type='email'
              id='email'
              className='w-full h-12 lg:h-14 xl:h-16 px-6 lg:px-8 border border-[#787878] text-sm lg:text-base text-[#333333] rounded-full transition-all focus:outline-none'
            />
          </div>

          <div>
            <label htmlFor='password' className='mb-3 lg:mb-5 block text-sm lg:text-base font-regular text-[#333333]'>
              Password
            </label>
            <input
              type='password'
              id='password'
              className='w-full h-12 lg:h-14 xl:h-16 px-6 lg:px-8 border border-[#787878] text-sm lg:text-base text-[#333333] rounded-full transition-all focus:outline-none'
            />
          </div>

          <div className='flex items-center justify-between'>
            <label className='flex items-center'>
              <input type='checkbox' className='rounded border-gray-300 text-[#43A047] focus:ring-[#43A047]' />
              <span className='ml-2 text-xs lg:text-sm text-[#333333] font-regular'>Remember me</span>
            </label>
            <button type='button' className='text-xs lg:text-sm text-[#333333] font-regular' onClick={onForgotPassword}>
              Forgot password?
            </button>
          </div>

          <button type='submit' className='w-full bg-[#E4E4E4] text-[#333333] h-12 lg:h-14 xl:h-16 rounded-full font-medium cursor-pointer text-sm lg:text-base'>
            Sign In
          </button>
        </form>

        <div className='mt-6 lg:mt-8 flex justify-center items-center space-x-2'>
          <h1 className='text-sm lg:text-base text-[#333333] font-medium'>Don&apos;t have an account?</h1>
          <button
            type='button'
            className='border-b border-[#43A047] text-[#43A047] text-sm lg:text-base font-medium cursor-pointer'
            onClick={() => router.push(signUpRoute)}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
