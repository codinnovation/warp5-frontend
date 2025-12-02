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
        <div className='bg-white min-h-auto w-full max-w-xs lg:max-w-sm xl:max-w-md shadow-xl py-6 sm:py-8 px-6 md:px-12 lg:px-16 xl:px-20 rounded-2xl flex flex-col '>
          <div className='flex justify-end items-center w-full mb-4 sm:mb-6'>
            <i className="ri-close-line text-[#333333] text-2xl sm:text-3xl cursor-pointer" onClick={() => router.back()}></i>
          </div>

          {step === 1 && (
            <>
              <div className='w-full'>
                <div className='text-center mb-4 sm:mb-6 mt-6 sm:mt-8 space-y-2 sm:space-y-3 lg:space-y-5 xl:space-y-7'>
                  <h2 className='text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-[#333333]'>Forgot Password?</h2>
                  <p className='text-xs sm:text-xs lg:text-sm xl:text-base'>Enter your email to receive a secure rest link.</p>
                  <p className='text-xs sm:text-xs lg:text-sm xl:text-base'>*****@gmail.com</p>
                </div>

                <div className='space-y-3 sm:space-y-4 lg:space-y-6 xl:space-y-8 mt-6 sm:mt-8 lg:mt-12 xl:mt-16' >
                  <div>
                    <label htmlFor='email' className='mb-2 sm:mb-3 lg:mb-4 xl:mb-5 block text-xs sm:text-xs lg:text-sm xl:text-base font-regular text-[#333333]'>
                      Email Address
                    </label>
                    <input
                      type='email'
                      id='email'
                      className='w-full h-10 sm:h-12 lg:h-14 xl:h-16 px-4 lg:px-6 xl:px-8 border border-[#787878] text-xs sm:text-xs lg:text-sm xl:text-base text-[#333333] rounded-full transition-all focus:outline-none'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <button
                    type='button'
                    onClick={handleNext}
                    className='w-full bg-[#43A047] text-[#FFFFFF] h-10 sm:h-12 lg:h-14 xl:h-16 rounded-full font-medium cursor-pointer'
                  >
                    Continue
                  </button>
                  <p className='text-[#333333] text-xs sm:text-xs lg:text-sm xl:text-base font-medium text-center'>
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
                <div className='text-center mb-4 sm:mb-6 mt-6 sm:mt-8 space-y-2 sm:space-y-3 lg:space-y-5 xl:space-y-7'>
                  <h2 className='text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-[#333333]'>Reset Password</h2>
                </div>

                <div className='space-y-3 sm:space-y-4 lg:space-y-6 xl:space-y-8 mt-6 sm:mt-8 lg:mt-12 xl:mt-16' >
                  <div>
                    <label htmlFor='newPassword' className='mb-2 sm:mb-3 lg:mb-4 xl:mb-5 block text-xs sm:text-xs lg:text-sm xl:text-base font-regular text-[#333333]'>
                      New Password
                    </label>
                    <input
                      type='password'
                      id='newPassword'
                      className='w-full h-10 sm:h-12 lg:h-14 xl:h-16 px-4 lg:px-6 xl:px-8 border border-[#787878] text-xs sm:text-xs lg:text-sm xl:text-base text-[#333333] rounded-full transition-all focus:outline-none'
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor='confirmPassword' className='mb-2 sm:mb-3 lg:mb-4 xl:mb-5 block text-xs sm:text-xs lg:text-sm xl:text-base font-regular text-[#333333]'>
                      Confirm Password
                    </label>
                    <input
                      type='password'
                      id='confirmPassword'
                      className='w-full h-10 sm:h-12 lg:h-14 xl:h-16 px-4 lg:px-6 xl:px-8 border border-[#787878] text-xs sm:text-xs lg:text-sm xl:text-base text-[#333333] rounded-full transition-all focus:outline-none'
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>

                  <button
                    type='button'
                    onClick={handleNext}
                    className='mt-3 sm:mt-4 lg:mt-6 xl:mt-8 w-full bg-[#43A047] text-[#FFFFFF] h-10 sm:h-12 lg:h-14 xl:h-16 rounded-full font-medium cursor-pointer'
                  >
                    Continue
                  </button>
                </div>
              </div>
            </>
          )}

          {step === 3 && (
            <>

              <div className='text-center mb-4 sm:mb-6 mt-6 sm:mt-8 space-y-2 sm:space-y-3 lg:space-y-5 xl:space-y-7'>
                <h2 className='text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-[#333333]'>Password Reset Successfully</h2>
                <p className='text-[#333333] text-xs sm:text-xs lg:text-sm xl:text-base font-regular text-center w-full mx-auto'>You can now use your new password to login to your account</p>
              </div>

              <button
                className='mt-3 sm:mt-4 lg:mt-6 xl:mt-8 w-full bg-[#43A047] text-[#FFFFFF] h-10 sm:h-12 lg:h-14 xl:h-16 rounded-full font-medium cursor-pointer'
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