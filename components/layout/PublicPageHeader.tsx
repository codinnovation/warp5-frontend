'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import LoginForm from '@/components/auth/LoginForm';
import WarpLogo from '@/public/logo/warp-logo.svg';

const PublicPageHeader: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const isUser = false;
  const [showUserModal, setShowUserModal] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleLoginClick = () => setShowLoginModal(true);
  const closeModal = () => setShowLoginModal(false);
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
    timeoutRef.current = setTimeout(() => setShowUserModal(false), 300);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const navItems = [
    { label: 'Home', path: '/home' },
    { label: 'Dashboard', path: '/renter/dashboard' },
    { label: 'Help', path: '/help' },
  ];

  return (
    <>
      <div className='h-30 bg-white flex items-center justify-center'>
        <div className='w-[85vw] mx-auto grid grid-cols-3'>
          <div className='flex justify-start items-center'>
            <Image
              src={WarpLogo}
              alt='Warp Logo'
              width={100}
              height={100}
              className='w-32 lg:w-36 xl:w-40 cursor-pointer hover:scale-105 transition-transform duration-300'
              onClick={() => router.push('/home')}
            />
          </div>

          <div className='flex justify-center items-center space-x-2 lg:space-x-4 xl:space-x-6'>
            {navItems.map(({ label, path }) => (
              <button
                key={path}
                type='button'
                className={`${pathname === path ? 'bg-[#43A047] text-white' : 'text-[#333333] bg-white'} flex justify-center items-center w-44 lg:w-52 xl:w-56 h-12 lg:h-14 xl:h-16 cursor-pointer rounded-full transition-all duration-300 hover:scale-105`}
                onClick={() => router.push(path)}
              >
                <span className='text-sm lg:text-base xl:text-lg font-medium'>{label}</span>
              </button>
            ))}
          </div>

          <div className='flex justify-end items-center space-x-6 lg:space-x-8 xl:space-x-10'>
            <div className='flex justify-center items-center bg-[#FFF0F6] w-12 lg:w-14 xl:w-16 h-12 lg:h-14 xl:h-16 rounded-full cursor-pointer hover:bg-[#FFE0EB] transition-colors duration-300 hover:scale-110'>
              <i className='ri-heart-3-fill text-[#FF0063] text-xl lg:text-2xl xl:text-3xl font-medium'></i>
            </div>

            <div className='flex justify-center items-center w-12 lg:w-14 xl:w-16 h-12 lg:h-14 xl:h-16 rounded-full cursor-pointer hover:bg-gray-100 transition-colors duration-300 hover:scale-105'>
              <i className='ri-notification-2-line text-[#000000] text-xl lg:text-2xl xl:text-3xl font-medium'></i>
            </div>

            {isUser ? (
              <div className='relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className='flex justify-center items-center w-12 lg:w-14 xl:w-16 h-12 lg:h-14 xl:h-16 rounded-full cursor-pointer hover:bg-[#F2F2F2] transition-colors duration-300 hover:scale-110'>
                  <i className='ri-user-6-line text-[#333333] text-xl lg:text-2xl xl:text-3xl font-medium'></i>
                </div>

                {showUserModal && (
                  <div className='absolute top-full mt-2 right-0 w-52 lg:w-60 xl:w-68 bg-white rounded-lg shadow-lg z-50'>
                    <div className='py-6 lg:py-8 xl:py-10'>
                      <div className='flex flex-col justify-center items-center space-y-3'>
                        <div className='flex justify-center items-center bg-[#F2F2F2] w-12 lg:w-14 xl:w-16 h-12 lg:h-14 xl:h-16 rounded-full'>
                          <i className='ri-user-6-line text-[#333333] text-xl lg:text-2xl xl:text-3xl font-medium'></i>
                        </div>
                        <h1 className='font-medium text-[#333333] text-sm lg:text-base xl:text-lg'>User Name</h1>
                      </div>

                      <div className='mt-6 lg:mt-8 xl:mt-10'>
                        <button
                          type='button'
                          className='flex justify-center items-center w-full font-medium text-[#333333] text-sm lg:text-base xl:text-lg cursor-pointer'
                          onClick={() => router.push('/profile')}
                        >
                          Account Management
                        </button>
                      </div>

                      <div className='mt-8 lg:mt-12 xl:mt-14 border-t border-[#E4E4E4] pt-4 lg:pt-5 xl:pt-6'>
                        <button type='button' className='flex justify-center items-center w-full font-medium text-[#333333] text-sm lg:text-base xl:text-lg cursor-pointer'>
                          Sign Out
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                type='button'
                className='flex justify-center items-center border border-[#333333] w-36 lg:w-40 xl:w-44 h-12 lg:h-14 xl:h-16 rounded-full cursor-pointer hover:bg-gray-100 hover:scale-105 transition-all duration-300'
                onClick={handleLoginClick}
              >
                <span className='text-[#333333] text-sm lg:text-base xl:text-lg font-medium'>Log In</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {showLoginModal && (
        <LoginForm closeModal={closeModal} onForgotPassword={handleForgotPassword} />
      )}
    </>
  );
};

export default PublicPageHeader;
