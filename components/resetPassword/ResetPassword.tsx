'use client'

import React from 'react'

function ResetPassword({ closeModal, onReset }: { closeModal: () => void; onReset: () => void }) {
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
            <h2 className='text-xl lg:text-2xl font-bold text-[#333333]'>Reset Password</h2>
          </div>

          <form className='space-y-6 lg:space-y-8' onSubmit={(e) => { e.preventDefault(); onReset(); }}>
            <div>
              <label htmlFor='email' className='mb-3 lg:mb-5 block text-sm lg:text-base font-regular text-[#333333]'>
                Now Password
              </label>
              <input
                type='password'
                id='newPassword'
                className='w-full h-12 lg:h-14 xl:h-16 px-6 lg:px-8 border border-[#787878] text-sm lg:text-base text-[#333333] rounded-full transition-all focus:outline-none'
              />
            </div>

            <div>
              <label htmlFor='password' className='mb-3 lg:mb-5 block text-sm lg:text-base font-regular text-[#333333]'>
                Confirm Password
              </label>
              <input
                type='password'
                id='confirmPassword'
                className='w-full h-12 lg:h-14 xl:h-16 px-6 lg:px-8 border border-[#787878] text-sm lg:text-base text-[#333333] rounded-full transition-all focus:outline-none'
              />
            </div>

            <button
              type='submit'
              className='w-full bg-[#43A047] text-[#FFFFFF] h-12 lg:h-14 xl:h-16 rounded-full font-medium cursor-pointer'
            >
              Reset Password
            </button>
          </form>


        </div>
      </div>
    </>
  )
}

export default ResetPassword
