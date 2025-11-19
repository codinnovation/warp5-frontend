'use client'

import React from 'react'

function ForgotPassword({ closeModal, onContinue }: { closeModal: () => void; onContinue: () => void }) {
  return (
    <>
      <div className='fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center z-50'>
        <div className='bg-white rounded-3xl px-12 lg:px-16 xl:px-18 py-6 lg:py-8 xl:py-9 w-full max-w-sm lg:max-w-md xl:max-w-lg relative'>
          <button
            onClick={closeModal}
            className='absolute top-4 right-4 cursor-pointer'
          >
            <i className="ri-close-line text-[#333333] text-3xl lg:text-4xl"></i>
          </button>

          <div className='text-center mb-4 lg:mb-6 mt-8 lg:mt-12 space-y-4 lg:space-y-6'>
            <h2 className='text-xl lg:text-2xl font-bold text-[#333333]'>Forgot Password?</h2>
            <p className='text-sm lg:text-base'>Enter your email to receive a secure rest link.</p>
            <p className='text-sm lg:text-base'>*****@gmail.com</p>
          </div>

          <form className='space-y-6 lg:space-y-8' onSubmit={(e) => { e.preventDefault(); onContinue(); }}>
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


            <button
              type='submit'
              className='w-full bg-[#43A047] text-[#FFFFFF] h-12 lg:h-14 xl:h-16 rounded-full font-medium cursor-pointer'
            >
              Continue
            </button>

          </form>

          <div className='text-center mt-4 lg:mt-6'>
            <p className='text-gray-600'>
              Don&apos;t have an account?{' '}
              <a href='/signup' className='text-[#43A047] hover:text-[#2E7D32] border-b border-[#43A047] font-medium'>
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword
