'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function Page() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  return (
    <>
      <div className='h-screen bg-white flex items-center justify-center'>
        <div className='bg-white min-h-auto min-w-[25vw] shadow-xl py-12 px-8 md:px-16 lg:px-28 rounded-2xl flex flex-col '>
          <div className='flex justify-end items-center w-full mb-8'>
            <i className="ri-close-line text-[#333333] text-4xl cursor-pointer" onClick={() => router.back()}></i>
          </div>

          {step === 1 && (
            <>
              <div className='w-full'>
                <div className='text-center mb-6 mt-12 space-y-6'>
                  <h2 className='text-2xl font-bold text-[#333333]'>Forgot Password?</h2>
                  <p>Enter your email to receive a secure rest link.</p>
                  <p>*****@gmail.com</p>
                </div>

                <div className='space-y-8 mt-16' >
                  <div>
                    <label htmlFor='email' className='mb-5 block text-base font-regular text-[#333333]'>
                      Email Address
                    </label>
                    <input
                      type='email'
                      id='email'
                      className='w-full h-16 px-8 border border-[#787878] text-base text-[#333333] rounded-full transition-all focus:outline-none'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <button
                    type='button'
                    onClick={handleNext}
                    className='w-full bg-[#43A047] text-[#FFFFFF] h-16 rounded-full font-medium cursor-pointer'
                  >
                    Continue
                  </button>
                  <p className='text-[#333333] text-sm font-medium text-center'>
                    Don't have an account?{' '}
                    <a href='/signup' className='text-[#43A047] hover:text-[#2E7D32] border-b border-[#43A047]font-medium'>
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
                <div className='text-center mb-6 mt-12 space-y-6'>
                  <h2 className='text-2xl font-bold text-[#333333]'>Reset Password</h2>
                </div>

                <div className='space-y-8 mt-16' >
                  <div>
                    <label htmlFor='newPassword' className='mb-5 block text-base font-regular text-[#333333]'>
                      New Password
                    </label>
                    <input
                      type='password'
                      id='newPassword'
                      className='w-full h-16 px-8 border border-[#787878] text-base text-[#333333] rounded-full transition-all focus:outline-none'
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor='confirmPassword' className='mb-5 block text-base font-regular text-[#333333]'>
                      Confirm Password
                    </label>
                    <input
                      type='password'
                      id='confirmPassword'
                      className='w-full h-16 px-8 border border-[#787878] text-base text-[#333333] rounded-full transition-all focus:outline-none'
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>

                  <button
                    type='button'
                    onClick={handleNext}
                    className='mt-8 w-full bg-[#43A047] text-[#FFFFFF] h-16 rounded-full font-medium cursor-pointer'
                  >
                    Continue
                  </button>
                </div>
              </div>
            </>
          )}

          {step === 3 && (
            <>

              <div className='text-center mb-6 mt-12 space-y-6'>
                <h2 className='text-2xl font-bold text-[#333333]'>Password Reset Successfully</h2>
                <p className='text-[#333333] text-base font-regular text-center w-[85%] mx-auto'>You can now use your new password to login to your account</p>
              </div>

              <button
                className='mt-8 w-full bg-[#43A047] text-[#FFFFFF] h-16 rounded-full font-medium cursor-pointer'
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