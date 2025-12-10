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
      <div className='min-h-screen bg-white flex items-center justify-center px-4'>
        <div className='bg-white min-h-auto w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg shadow-xl py-6 md:py-8 sm:py-8 px-6 md:px-10 lg:px-12 xl:px-16 rounded-2xl flex flex-col '>
          <div className='flex justify-end items-center w-full mb-4 md:mb-6 sm:mb-6'>
            <button className="hover:bg-gray-100 rounded-full p-1 transition-all" onClick={() => router.back()}>
              <i className="ri-close-line text-[#333333] text-2xl md:text-3xl sm:text-3xl cursor-pointer"></i>
            </button>
          </div>

          {step === 1 && (
            <>
              <div className='w-full'>
                <div className='text-center mb-4 md:mb-6 sm:mb-6 mt-6 md:mt-8 sm:mt-8 space-y-2 md:space-y-3 sm:space-y-3 lg:space-y-4'>
                  <h2 className='text-base md:text-lg sm:text-lg lg:text-xl xl:text-2xl font-bold text-[#333333]'>Forgot Password?</h2>
                  <p className='text-xs md:text-sm sm:text-xs lg:text-sm xl:text-base'>Enter your email to receive a secure reset link.</p>
                  <p className='text-xs md:text-sm sm:text-xs lg:text-sm xl:text-base'>*****@gmail.com</p>
                </div>

                <div className='space-y-3 md:space-y-4 sm:space-y-4 lg:space-y-6 mt-6 md:mt-8 sm:mt-8 lg:mt-10' >
                  <div>
                    <label htmlFor='email' className='mb-2 md:mb-3 sm:mb-3 lg:mb-4 block text-xs md:text-sm sm:text-xs lg:text-sm xl:text-base font-regular text-[#333333]'>
                      Email Address
                    </label>
                    <input
                      type='email'
                      id='email'
                      placeholder='example@gmail.com'
                      className='w-full h-10 md:h-12 sm:h-12 lg:h-14 px-4 md:px-6 lg:px-6 border border-[#787878] focus:border-[#43A047] focus:outline-none focus:ring-2 focus:ring-[#43A047] focus:ring-opacity-50 text-xs md:text-sm sm:text-xs lg:text-sm xl:text-base text-[#333333] rounded-full transition-all'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <button
                    type='button'
                    onClick={handleNext}
                    className='w-full bg-[#43A047] hover:bg-[#388E3C] active:scale-95 transition-all text-[#FFFFFF] h-10 md:h-12 sm:h-12 lg:h-14 rounded-full font-medium cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-[#43A047] text-xs md:text-sm sm:text-sm lg:text-base'
                  >
                    Continue
                  </button>
                  <p className='text-[#333333] text-xs md:text-sm sm:text-xs lg:text-sm xl:text-base font-medium text-center'>
                    Don&apos;t have an account?{' '}
                    <a href='/signup' className='text-[#43A047] hover:text-[#2E7D32] border-b border-[#43A047] hover:border-[#2E7D32] transition-colors font-medium'>
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
                <div className='text-center mb-4 md:mb-6 sm:mb-6 mt-6 md:mt-8 sm:mt-8 space-y-2 md:space-y-3 sm:space-y-3 lg:space-y-4'>
                  <h2 className='text-base md:text-lg sm:text-lg lg:text-xl xl:text-2xl font-bold text-[#333333]'>Reset Password</h2>
                </div>

                <div className='space-y-3 md:space-y-4 sm:space-y-4 lg:space-y-6 mt-6 md:mt-8 sm:mt-8 lg:mt-10' >
                  <div>
                    <label htmlFor='newPassword' className='mb-2 md:mb-3 sm:mb-3 lg:mb-4 block text-xs md:text-sm sm:text-xs lg:text-sm xl:text-base font-regular text-[#333333]'>
                      New Password
                    </label>
                    <input
                      type='password'
                      id='newPassword'
                      placeholder='Enter new password'
                      className='w-full h-10 md:h-12 sm:h-12 lg:h-14 px-4 md:px-6 lg:px-6 border border-[#787878] focus:border-[#43A047] focus:outline-none focus:ring-2 focus:ring-[#43A047] focus:ring-opacity-50 text-xs md:text-sm sm:text-xs lg:text-sm xl:text-base text-[#333333] rounded-full transition-all'
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor='confirmPassword' className='mb-2 md:mb-3 sm:mb-3 lg:mb-4 block text-xs md:text-sm sm:text-xs lg:text-sm xl:text-base font-regular text-[#333333]'>
                      Confirm Password
                    </label>
                    <input
                      type='password'
                      id='confirmPassword'
                      placeholder='Confirm your password'
                      className='w-full h-10 md:h-12 sm:h-12 lg:h-14 px-4 md:px-6 lg:px-6 border border-[#787878] focus:border-[#43A047] focus:outline-none focus:ring-2 focus:ring-[#43A047] focus:ring-opacity-50 text-xs md:text-sm sm:text-xs lg:text-sm xl:text-base text-[#333333] rounded-full transition-all'
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>

                  <button
                    type='button'
                    onClick={handleNext}
                    className='mt-3 md:mt-4 sm:mt-4 lg:mt-6 w-full bg-[#43A047] hover:bg-[#388E3C] active:scale-95 transition-all text-[#FFFFFF] h-10 md:h-12 sm:h-12 lg:h-14 rounded-full font-medium cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-[#43A047] text-xs md:text-sm sm:text-sm lg:text-base'
                  >
                    Continue
                  </button>
                </div>
              </div>
            </>
          )}

          {step === 3 && (
            <>

              <div className='text-center mb-4 md:mb-6 sm:mb-6 mt-6 md:mt-8 sm:mt-8 space-y-2 md:space-y-3 sm:space-y-3 lg:space-y-4'>
                <h2 className='text-base md:text-lg sm:text-lg lg:text-xl xl:text-2xl font-bold text-[#333333]'>Password Reset Successfully</h2>
                <p className='text-[#333333] text-xs md:text-sm sm:text-xs lg:text-sm xl:text-base font-regular text-center w-full mx-auto'>You can now use your new password to login to your account</p>
              </div>

              <button
                type='button'
                onClick={() => router.push('/')}
                className='mt-3 md:mt-4 sm:mt-4 lg:mt-6 w-full bg-[#43A047] hover:bg-[#388E3C] active:scale-95 transition-all text-[#FFFFFF] h-10 md:h-12 sm:h-12 lg:h-14 rounded-full font-medium cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-[#43A047] text-xs md:text-sm sm:text-sm lg:text-base'
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