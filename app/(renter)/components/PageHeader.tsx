import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import WarpLogo from '../../../public/logo/warp-logo.svg';
import LoginForm from './LoginForm';

function PageHeader() {
  const router = useRouter();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const closeModal = () => {
    setShowLoginModal(false);
  };

  const handleForgotPassword = () => {
    setShowLoginModal(false);
    router.push('/forgotpassword');
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setShowUserModal(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowUserModal(false);
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

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
              <h1 className='text-lg text-[#FFFFFF] font-medium'>Dashboard</h1>
            </div>
          </div>

          <div className='flex justify-end items-center space-x-8'>
            <div className='flex justify-center items-center bg-[#FFF0F6] w-14 h-14 rounded-full cursor-pointer hover:bg-[#FFE0EB] transition-colors duration-300 hover:scale-110 transform'>
              <i className="ri-heart-3-fill text-[#FF0063] text-2xl font-medium"></i>
            </div>

            <div className='flex justify-center items-center w-14 h-14 rounded-full cursor-pointer hover:bg-gray-100 transition-colors duration-300 hover:scale-105 transform'>
              <i className="ri-notification-2-line text-[#000000] text-2xl font-medium"></i>
            </div>

            {isUser ? (
              <div
                className='relative'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className='flex justify-center items-center w-14 h-14 rounded-full cursor-pointer hover:bg-[#F2F2F2] transition-colors duration-300 hover:scale-110 transform'
                >
                  <i className="ri-user-6-line text-[#333333] text-2xl font-medium"></i>
                </div>

                {showUserModal && (
                  <div className='absolute top-full mt-2 right-0 w-60 bg-white rounded-lg shadow-lg z-50'>
                    <div className='py-8 '>
                      <div className='flex flex-col justify-center items-center space-y-3'>
                        <div className='flex justify-center items-center bg-[#F2F2F2] w-14 h-14 rounded-full'>
                          <i className="ri-user-6-line text-[#333333] text-2xl font-medium"></i>
                        </div>
                        <h1 className='font-medium text-[#333333] text-base'>User Name</h1>
                      </div>

                      <div className='mt-8'>
                        <div className='flex justify-center items-center cursor-pointer' onClick={() => router.push('/profile')}>
                          <h1 className='font-medium text-[#333333] text-base'>Account Management</h1>
                        </div>
                      </div>

                      <div className='mt-12'>
                        <div className='flex justify-center items-center border-t border-[#E4E4E4] pt-5 cursor-pointer '>
                          <h1 className='font-medium text-[#333333] text-base'>Sign Out</h1>
                        </div>
                      </div>

                    </div>
                  </div>
                )}
              </div>
            ) :
              <div className='flex justify-center items-center border-[1px] border-[#333333] w-40 h-14 rounded-full cursor-pointer hover:bg-gray-100 hover:scale-105 transition-all duration-300' onClick={handleLoginClick}>
                <h1 className='text-[#333333] text-lg font-medium'>Log In</h1>
              </div>
            }

          </div>
        </div>
      </div>

      {showLoginModal && (
        <>
          <LoginForm closeModal={closeModal} onForgotPassword={handleForgotPassword} />
        </>
      )}
    </>
  )
}

export default PageHeader
