import React from 'react'

function PasswordResetDone({ closeModal, onLogin }: { closeModal: () => void; onLogin: () => void }) {
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
            <h2 className='text-xl lg:text-2xl font-bold text-[#333333]'>Password Reset Successfully</h2>
            <p className='text-sm lg:text-base'>You can now use your new password to login to your account</p>
          </div>

          <button
            onClick={onLogin}
            className='w-full bg-[#43A047] text-[#FFFFFF] h-12 lg:h-14 xl:h-16 rounded-full font-medium cursor-pointer'
          >
            Login
          </button>

        </div>
      </div>
    </>
  )
}

export default PasswordResetDone
