import React from 'react'

function PasswordResetDone({ closeModal, onLogin }: { closeModal: () => void; onLogin: () => void }) {
  return (
    <>
      <div className='fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center z-50'>
        <div className='bg-white rounded-3xl px-16 py-8 w-full max-w-lg relative'>
          <button
            onClick={closeModal}
            className='absolute top-4 right-4 cursor-pointer'
          >
            <i className="ri-close-line text-[#333333] text-4xl"></i>
          </button>

          <div className='text-center mb-6 mt-12 space-y-6'>
            <h2 className='text-2xl font-bold text-[#333333]'>Password Reset Successfully</h2>
            <p>You can now use your new password to login to your account</p>
          </div>

          <button
            onClick={onLogin}
            className='w-full bg-[#43A047] text-[#FFFFFF] h-16 rounded-full font-medium cursor-pointer'
          >
            Login
          </button>

        </div>
      </div>
    </>
  )
}

export default PasswordResetDone
