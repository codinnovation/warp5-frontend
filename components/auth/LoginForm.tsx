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
      <div className='bg-white rounded-3xl px-6 lg:px-12 xl:px-16 py-4 lg:py-6 xl:py-8 w-full max-w-xs lg:max-w-sm xl:max-w-md relative'>
        <button onClick={closeModal} className='absolute top-4 right-4 cursor-pointer'>
          <i className='ri-close-line text-[#333333] text-2xl lg:text-3xl'></i>
        </button>

        <div className='text-center mb-3 lg:mb-5 mt-6 lg:mt-10'>
          <h2 className='text-lg lg:text-xl xl:text-2xl font-bold text-[#333333]'>{heading}</h2>
        </div>

        <form className='space-y-4 lg:space-y-6'>
          <div>
            <label htmlFor='email' className='mb-2 lg:mb-4 block text-xs lg:text-sm font-regular text-[#333333]'>
              Email
            </label>
            <input
              type='email'
              id='email'
              className='w-full h-10 lg:h-12 xl:h-14 px-4 lg:px-6 border border-[#787878] text-xs lg:text-sm text-[#333333] rounded-full transition-all focus:outline-none'
            />
          </div>

          <div>
            <label htmlFor='password' className='mb-2 lg:mb-4 block text-xs lg:text-sm font-regular text-[#333333]'>
              Password
            </label>
            <input
              type='password'
              id='password'
              className='w-full h-10 lg:h-12 xl:h-14 px-4 lg:px-6 border border-[#787878] text-xs lg:text-sm text-[#333333] rounded-full transition-all focus:outline-none'
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

          <button type='submit' className='w-full bg-[#E4E4E4] text-[#333333] h-10 lg:h-12 xl:h-14 rounded-full font-medium cursor-pointer text-xs lg:text-sm'>
            Sign In
          </button>
        </form>

        <div className='mt-4 lg:mt-6 flex justify-center items-center space-x-2'>
          <h1 className='text-xs lg:text-sm text-[#333333] font-medium'>Don&apos;t have an account?</h1>
          <button
            type='button'
            className='border-b border-[#43A047] text-[#43A047] text-xs lg:text-sm font-medium cursor-pointer'
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
