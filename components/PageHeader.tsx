import React, { useState } from 'react';
import Image from 'next/image';
import WarpLogo from '../public/logo/warp-logo.svg';
import LoginForm from './LoginForm';


function PageHeader() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const closeModal = () => {
    setShowLoginModal(false);
  };

  return (
    <>
      <div className='h-32 bg-white flex items-center justify-center'>
        <div className='w-[85vw] mx-auto grid grid-cols-3 '>
          <div className='flex justify-start items-center'>
            <Image
              src={WarpLogo}
              alt='Warp Logo'
              width={100}
              height={100}
              className='w-36 cursor-pointer hover:scale-105 transition-transform duration-300' />
          </div>

          <div className='flex justify-center items-center space-x-2'>
            <div className='flex justify-center items-center w-52 h-14 cursor-pointer hover:bg-gray-100 rounded-full transition-all duration-300 hover:scale-105'>
              <h1 className='text-lg text-[#333333] font-medium'>Help</h1>
            </div>

            <div className='flex justify-center items-center h-14 w-52 bg-[#43A047] rounded-full cursor-pointer hover:bg-[#2E7D32] transition-all duration-300 hover:scale-105'>
              <h1 className='text-lg text-[#FFFFFF] font-medium'>My Reservations</h1>
            </div>
          </div>

          <div className='flex justify-end items-center space-x-8'>
            <div className='flex justify-center items-center bg-[#FFF0F6] w-14 h-14 rounded-full cursor-pointer hover:bg-[#FFE0EB] transition-colors duration-300 hover:scale-110 transform'>
              <i className="ri-heart-3-fill text-[#FF0063] text-2xl font-medium"></i>
            </div>

            <div className='flex justify-center items-center w-14 h-14 rounded-full cursor-pointer hover:bg-gray-100 transition-colors duration-300 hover:scale-105 transform'>
              <i className="ri-notification-2-line text-[#000000] text-2xl font-medium"></i>
            </div>

            <div className='flex justify-center items-center border-[1px] border-[#333333] w-40 h-14 rounded-full cursor-pointer hover:bg-gray-100 hover:scale-105 transition-all duration-300' onClick={handleLoginClick}>
              <h1 className='text-[#333333] text-lg font-medium'>Log In</h1>
            </div>

          </div>
        </div>
      </div>

      {showLoginModal && (
        <>
          <LoginForm closeModal={closeModal} />
        </>
      )}
    </>
  )
}

export default PageHeader
