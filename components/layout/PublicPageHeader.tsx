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
  const isUser = true;
  const [showUserModal, setShowUserModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
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
      <header className="relative h-20 bg-white flex items-center px-4 sm:px-0 shadow-sm">
        {/* Mobile: Menu icon left, logo center, actions right */}
        <div className="flex w-full items-center justify-between sm:hidden">
          <div className="flex items-center">
            <button
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors duration-300"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              aria-label="Open menu"
            >
              <i className="ri-menu-line text-[#333333] text-xl"></i>
            </button>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src={WarpLogo}
              alt="Warp Logo"
              width={80}
              height={80}
              className="w-16 cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => router.push('/home')}
            />
          </div>
          <div className="flex items-center space-x-2">
            <button className="flex items-center justify-center bg-[#FFF0F6] w-10 h-10 rounded-full hover:bg-[#FFE0EB] transition-colors duration-300">
              <i className="ri-heart-3-fill text-[#FF0063] text-lg font-medium"></i>
            </button>
            <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors duration-300">
              <i className="ri-notification-2-line text-[#000000] text-lg font-medium"></i>
            </button>
            {isUser ? (
              <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#F2F2F2] transition-colors duration-300" onClick={() => setShowUserModal(!showUserModal)}>
                <i className="ri-user-6-line text-[#333333] text-lg font-medium"></i>
              </button>
            ) : (
              <button
                type="button"
                className="flex items-center justify-center border border-[#333333] w-20 h-10 rounded-full hover:bg-gray-100 transition-all duration-300"
                onClick={handleLoginClick}
              >
                <span className="text-[#333333] text-xs font-medium">Log In</span>
              </button>
            )}
          </div>
        </div>
        {/* Desktop: Logo left, nav center, actions right */}
        <div className="hidden sm:flex w-[85vw] mx-auto items-center justify-between">
          <div className="flex items-center">
            <Image
              src={WarpLogo}
              alt="Warp Logo"
              width={100}
              height={100}
              className="w-24 lg:w-28 xl:w-32 cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => router.push('/home')}
            />
          </div>
          <nav className="flex items-center space-x-2 lg:space-x-4 xl:space-x-6">
            {navItems.map(({ label, path }) => (
              <button
                key={path}
                type="button"
                className={`${pathname === path ? 'bg-[#43A047] text-white' : 'text-[#333333] bg-white'} flex items-center justify-center w-32 lg:w-36 xl:w-40 h-10 lg:h-12 xl:h-14 rounded-full transition-all duration-300 hover:scale-105`}
                onClick={() => router.push(path)}
              >
                <span className="text-xs lg:text-sm xl:text-base font-medium">{label}</span>
              </button>
            ))}
          </nav>
          <div className="flex items-center space-x-6 lg:space-x-8 xl:space-x-10">
            <button className="flex items-center justify-center bg-[#FFF0F6] w-10 lg:w-12 xl:w-14 h-10 lg:h-12 xl:h-14 rounded-full hover:bg-[#FFE0EB] transition-colors duration-300 hover:scale-110">
              <i className="ri-heart-3-fill text-[#FF0063] text-lg lg:text-xl xl:text-2xl font-medium"></i>
            </button>
            <button className="flex items-center justify-center w-10 lg:w-12 xl:w-14 h-10 lg:h-12 xl:h-14 rounded-full hover:bg-gray-100 transition-colors duration-300 hover:scale-105">
              <i className="ri-notification-2-line text-[#000000] text-lg lg:text-xl xl:text-2xl font-medium"></i>
            </button>
            {isUser ? (
              <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <button className="flex items-center justify-center w-10 lg:w-12 xl:w-14 h-10 lg:h-12 xl:h-14 rounded-full hover:bg-[#F2F2F2] transition-colors duration-300 hover:scale-110">
                  <i className="ri-user-6-line text-[#333333] text-lg lg:text-xl xl:text-2xl font-medium"></i>
                </button>
                {showUserModal && (
                  <div className="absolute top-full mt-2 right-0 w-40 lg:w-48 xl:w-56 bg-white rounded-lg shadow-lg z-50">
                    <div className="py-4 lg:py-6 xl:py-8">
                      <div className="flex flex-col items-center space-y-2">
                        <div className="flex items-center justify-center bg-[#F2F2F2] w-10 lg:w-12 xl:w-14 h-10 lg:h-12 xl:h-14 rounded-full">
                          <i className="ri-user-6-line text-[#333333] text-lg lg:text-xl xl:text-2xl font-medium"></i>
                        </div>
                        <h1 className="font-medium text-[#333333] text-xs lg:text-sm xl:text-base">User Name</h1>
                      </div>
                      <div className="mt-4 lg:mt-6 xl:mt-8">
                        <button
                          type="button"
                          className="flex items-center justify-center w-full font-medium text-[#333333] text-xs lg:text-sm xl:text-base"
                          onClick={() => router.push('/profile')}
                        >
                          Account Management
                        </button>
                      </div>
                      <div className="mt-6 lg:mt-8 xl:mt-10 border-t border-[#E4E4E4] pt-3 lg:pt-4 xl:pt-5">
                        <button type="button" className="flex items-center justify-center w-full font-medium text-[#333333] text-xs lg:text-sm xl:text-base">
                          Sign Out
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                type="button"
                className="flex items-center justify-center border border-[#333333] w-28 lg:w-32 xl:w-36 h-10 lg:h-12 xl:h-14 rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-300"
                onClick={handleLoginClick}
              >
                <span className="text-[#333333] text-xs lg:text-sm xl:text-base font-medium">Log In</span>
              </button>
            )}
          </div>
        </div>
        {/* Mobile menu dropdown */}
        {showMobileMenu && (
          <div className="sm:hidden absolute left-0 top-20 w-full bg-white shadow-lg z-50 animate-slideDown">
            <div className="py-4">
              {navItems.map(({ label, path }) => (
                <button
                  key={path}
                  type="button"
                  className="block w-full text-left px-4 py-3 text-[#333333] text-base font-medium hover:bg-gray-100"
                  onClick={() => { router.push(path); setShowMobileMenu(false); }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
        {/* Mobile user modal */}
        {showUserModal && (
          <div className="sm:hidden absolute right-4 top-20 w-48 bg-white rounded-lg shadow-lg z-50 animate-slideDown">
            <div className="py-4">
              <div className="flex flex-col items-center space-y-2">
                <div className="flex items-center justify-center bg-[#F2F2F2] w-10 h-10 rounded-full">
                  <i className="ri-user-6-line text-[#333333] text-lg font-medium"></i>
                </div>
                <h1 className="font-medium text-[#333333] text-sm">User Name</h1>
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  className="flex items-center justify-center w-full font-medium text-[#333333] text-sm"
                  onClick={() => { router.push('/profile'); setShowUserModal(false); }}
                >
                  Account Management
                </button>
              </div>
              <div className="mt-6 border-t border-[#E4E4E4] pt-3">
                <button type="button" className="flex items-center justify-center w-full font-medium text-[#333333] text-sm">
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
      {showLoginModal && (
        <LoginForm closeModal={closeModal} onForgotPassword={handleForgotPassword} />
      )}
    </>
  );
};

export default PublicPageHeader;
