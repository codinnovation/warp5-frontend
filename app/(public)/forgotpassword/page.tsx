'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

function Page() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [resetToken, setResetToken] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleForgotPassword = async () => {
    setIsSubmitting(true);

    try {
      const apiRes = await fetch(`/api/auth/forgotpassword`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ emailOrPhone })
      });

      const apiData = await apiRes.json();

      if (!apiRes.ok) {
        toast.error(apiData.message);
        return;
      }

      toast.success(apiData.message);
      const rawMessage = apiData?.data?.message || '';
      const cleanToken = rawMessage.replace('Reset token: ', '').trim();
      setResetToken(cleanToken);
      setStep(2);

    } catch {
      toast.error("Failed to send password reset email. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }


  const handleResetPassword = async () => {
    setIsSubmitting(true);

    try {
      const apiRes = await fetch(`/api/auth/resetpassword`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ resetToken, newPassword })
      });

      const apiData = await apiRes.json();

      if (!apiRes.ok) {
        toast.error(apiData.message);
        return;
      }

      toast.success(apiData.message);
      setStep(3);

    } catch {
      toast.error("Failed to reset password. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <div className='min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center px-4'>
        <div className='bg-white/80 backdrop-blur-xl min-h-auto w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg shadow-2xl py-8 px-6 md:px-10 rounded-3xl border border-white/20 flex flex-col'>
          <div className='flex justify-end items-center w-full mb-4 md:mb-6 sm:mb-6'>
            <button className="hover:bg-gray-100 rounded-full p-1 transition-all" onClick={() => router.back()}>
              <i className="ri-close-line text-[#333333] text-2xl md:text-3xl sm:text-3xl cursor-pointer"></i>
            </button>
          </div>

          {step === 1 && (
            <>
              <div className='w-full'>
                <div className='text-center mb-6 mt-4 space-y-2'>
                  <h2 className='text-xl md:text-2xl font-bold text-gray-800'>Forgot Password?</h2>
                  <p className='text-sm text-gray-500'>Enter your email to receive a secure reset link.</p>
                </div>

                <div className='space-y-3 md:space-y-4 sm:space-y-4 lg:space-y-6 mt-6 md:mt-8 sm:mt-8 lg:mt-10' >
                  <div>
                    <label htmlFor='email' className='mb-2 block text-sm font-medium text-gray-700'>
                      Email Address
                    </label>
                    <input
                      type='text'
                      id='email'
                      placeholder='example@gmail.com'
                      className='w-full h-12 px-5 bg-gray-50 border border-transparent text-sm text-gray-800 rounded-full transition-all duration-200 focus:outline-none focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10 placeholder:text-gray-400'
                      value={emailOrPhone}
                      onChange={(e) => setEmailOrPhone(e.target.value)}
                    />
                  </div>

                  <button
                    type='button'
                    onClick={handleForgotPassword}
                    className='w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white h-12 rounded-full font-semibold tracking-wide cursor-pointer hover:shadow-lg hover:shadow-green-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200'
                  >
                    {isSubmitting ? "Sending..." : "Send Reset Link"}
                  </button>
                  <p className='text-gray-600 text-sm font-medium text-center'>
                    Don&apos;t have an account?{' '}
                    <a href='/signup' className='text-green-600 hover:text-green-700 font-semibold hover:underline transition-colors'>
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
                <div className='text-center mb-6 mt-4 space-y-2'>
                  <h2 className='text-xl md:text-2xl font-bold text-gray-800'>Reset Password</h2>
                </div>

                <div className='space-y-3 md:space-y-4 sm:space-y-4 lg:space-y-6 mt-6 md:mt-8 sm:mt-8 lg:mt-10' >
                  <div>
                    <label htmlFor='newPassword' className='mb-2 block text-sm font-medium text-gray-700'>
                      New Password
                    </label>
                    <input
                      type='password'
                      id='newPassword'
                      placeholder='Enter new password'
                      className='w-full h-12 px-5 bg-gray-50 border border-transparent text-sm text-gray-800 rounded-full transition-all duration-200 focus:outline-none focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10 placeholder:text-gray-400'
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>

                  <button
                    type='button'
                    onClick={handleResetPassword}
                    className='mt-6 w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white h-12 rounded-full font-semibold tracking-wide cursor-pointer hover:shadow-lg hover:shadow-green-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200'
                  >
                    Reset Password
                  </button>
                </div>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div className='text-center mb-6 mt-8 space-y-2'>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="ri-checkbox-circle-fill text-4xl text-green-500"></i>
                  </div>
                </div>
                <h2 className='text-xl md:text-2xl font-bold text-gray-800'>Password Reset Successfully</h2>
                <p className='text-gray-500 text-sm text-center w-full mx-auto'>You can now use your new password to login to your account</p>
              </div>

              <button
                type='button'
                onClick={() => router.push('/')}
                className='mt-6 w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white h-12 rounded-full font-semibold tracking-wide cursor-pointer hover:shadow-lg hover:shadow-green-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200'
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