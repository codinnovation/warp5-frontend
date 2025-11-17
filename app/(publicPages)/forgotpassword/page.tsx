'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function Page() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  return (
    <>
      <div className='h-screen bg-white flex items-center justify-center'>
        <div className='bg-white min-h-auto w-full max-w-sm lg:max-w-md xl:max-w-lg shadow-xl py-12 px-8 md:px-16 lg:px-20 xl:px-24 rounded-2xl flex flex-col '>
          <div className='flex justify-end items-center w-full mb-8'>
            <i className="ri-close-line text-[#333333] text-4xl cursor-pointer" onClick={() => router.back()}></i>
          </div>

          {step === 1 && (
            <>
              <div className='w-full'>
                <div className='text-center mb-6 mt-12 space-y-4 lg:space-y-6 xl:space-y-8'>
                  <h2 className='text-xl lg:text-2xl xl:text-3xl font-bold text-[#333333]'>Forgot Password?</h2>
                  <p className='text-sm lg:text-base xl:text-lg'>Enter your email to receive a secure rest link.</p>
                  <p className='text-sm lg:text-base xl:text-lg'>*****@gmail.com</p>
                </div>

                <div className='space-y-6 lg:space-y-8 xl:space-y-10 mt-12 lg:mt-16 xl:mt-20' >
                  <div>
                    <label htmlFor='email' className='mb-4 lg:mb-5 xl:mb-6 block text-sm lg:text-base xl:text-lg font-regular text-[#333333]'>
                      Email Address
                    </label>
                    <input
                      type='email'
                      id='email'
                      className='w-full h-14 lg:h-16 xl:h-18 px-6 lg:px-8 xl:px-10 border border-[#787878] text-sm lg:text-base xl:text-lg text-[#333333] rounded-full transition-all focus:outline-none'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <button
                    type='button'
                    onClick={handleNext}
                    className='w-full bg-[#43A047] text-[#FFFFFF] h-14 lg:h-16 xl:h-18 rounded-full font-medium cursor-pointer'
                  >
                    Continue
                  </button>
                  <p className='text-[#333333] text-xs lg:text-sm xl:text-base font-medium text-center'>
                    Don&apos;t have an account?{' '}
                    <a href='/signup' className='text-[#43A047] hover:text-[#2E7D32] border-b border-[#43A047] font-medium'>
                      Sign up
                    </a>
                  </p>
                </div>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className='w-full'>
                <div className='text-center mb-6 mt-12 space-y-4 lg:space-y-6 xl:space-y-8'>
                  <h2 className='text-xl lg:text-2xl xl:text-3xl font-bold text-[#333333]'>Reset Password</h2>
                </div>

                <div className='space-y-6 lg:space-y-8 xl:space-y-10 mt-12 lg:mt-16 xl:mt-20' >
                  <div>
                    <label htmlFor='newPassword' className='mb-4 lg:mb-5 xl:mb-6 block text-sm lg:text-base xl:text-lg font-regular text-[#333333]'>
                      New Password
                    </label>
                    <input
                      type='password'
                      id='newPassword'
                      className='w-full h-14 lg:h-16 xl:h-18 px-6 lg:px-8 xl:px-10 border border-[#787878] text-sm lg:text-base xl:text-lg text-[#333333] rounded-full transition-all focus:outline-none'
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor='confirmPassword' className='mb-4 lg:mb-5 xl:mb-6 block text-sm lg:text-base xl:text-lg font-regular text-[#333333]'>
                      Confirm Password
                    </label>
                    <input
                      type='password'
                      id='confirmPassword'
                      className='w-full h-14 lg:h-16 xl:h-18 px-6 lg:px-8 xl:px-10 border border-[#787878] text-sm lg:text-base xl:text-lg text-[#333333] rounded-full transition-all focus:outline-none'
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>

                  <button
                    type='button'
                    onClick={handleNext}
                    className='mt-6 lg:mt-8 xl:mt-10 w-full bg-[#43A047] text-[#FFFFFF] h-14 lg:h-16 xl:h-18 rounded-full font-medium cursor-pointer'
                  >
                    Continue
                  </button>
                </div>
              </div>
            </>
          )}

          {step === 3 && (
            <>

              <div className='text-center mb-6 mt-12 space-y-4 lg:space-y-6 xl:space-y-8'>
                <h2 className='text-xl lg:text-2xl xl:text-3xl font-bold text-[#333333]'>Password Reset Successfully</h2>
                <p className='text-[#333333] text-sm lg:text-base xl:text-lg font-regular text-center w-full mx-auto'>You can now use your new password to login to your account</p>
              </div>

              <button
                className='mt-6 lg:mt-8 xl:mt-10 w-full bg-[#43A047] text-[#FFFFFF] h-14 lg:h-16 xl:h-18 rounded-full font-medium cursor-pointer'
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Page