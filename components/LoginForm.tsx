import React from 'react'

function LoginForm({ closeModal }: { closeModal: () => void }) {
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

          <div className='text-center mb-6 mt-12'>
            <h2 className='text-2xl font-bold text-[#333333]'>Login</h2>
          </div>

          <form className='space-y-8'>
            <div>
              <label htmlFor='email' className='mb-5 block text-base font-regular text-[#333333]'>
                Email
              </label>
              <input
                type='email'
                id='email'
                className='w-full h-16 px-8 border border-[#787878] text-base text-[#333333] rounded-full transition-all focus:outline-none'
              />
            </div>

            <div>
              <label htmlFor='password' className='mb-5 block text-base font-regular text-[#333333]'>
                Password
              </label>
              <input
                type='password'
                id='password'
                className='w-full h-16 px-8 border border-[#787878] text-base text-[#333333] rounded-full transition-all focus:outline-none'
              />
            </div>

            <div className='flex items-center justify-between'>
              <label className='flex items-center'>
                <input type='checkbox' className='rounded border-gray-300 text-[#43A047] focus:ring-[#43A047]' />
                <span className='ml-2 text-sm text-[#333333] font-regular'>Remember me</span>
              </label>
              <a href='#' className='text-sm text-[#333333] font-regular'>
                Forgot password?
              </a>
            </div>

            <button
              type='submit'
              className='w-full bg-[#E4E4E4] text-[#333333] h-16 rounded-full font-medium cursor-pointer'
            >
              Sign In
            </button>
          </form>

          <div className='text-center mt-6'>
            <p className='text-gray-600'>
              Don't have an account?{' '}
              <a href='#' className='text-[#43A047] hover:text-[#2E7D32] transition-colors font-medium'>
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginForm
