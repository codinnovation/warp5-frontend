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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const renterLinks = [
    { label: 'Overview', path: '/renter/dashboard' },
    { label: 'My Reservations', path: '/renter/reservations' },
    { label: 'Payment', path: '/renter/payment' },
    { label: 'Notifications', path: '/renter/notifications' },
    { label: 'Manage Profile', path: '/renter/profile' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[9999] h-18 bg-white flex items-center px-4 shadow-sm lg:h-20">
        <div className="flex w-[90vw] mx-auto items-center justify-between lg:w-[85vw]">
          <div className="flex items-center">
            <Image
              src={WarpLogo}
              alt="Warp Logo"
              width={100}
              height={100}
              className="w-20 lg:w-28 xl:w-32 cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => router.push('/home')}
            />
          </div>
          <nav className="hidden sm:flex items-center space-x-6">
            {navItems.map(({ label, path }) => (
              <button
                key={path}
                type="button"
                className={`${pathname === path ? 'bg-[#43A047] text-white' : 'text-[#333333] bg-white'} flex items-center justify-center w-32 h-12 rounded-full transition-all duration-300 hover:scale-105`}
                onClick={() => router.push(path)}
              >
                <span className="text-xs lg:text-base font-medium">{label}</span>
              </button>
            ))}
          </nav>
          <div className="hidden sm:flex items-center space-x-8">
            <button className="flex items-center justify-center bg-[#FFF0F6] w-12 h-12 rounded-full hover:bg-[#FFE0EB] transition-colors duration-300 hover:scale-110">
              <i className="ri-heart-3-fill text-[#FF0063] text-lg lg:text-xl xl:text-2xl font-medium"></i>
            </button>
            <button className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-100 transition-colors duration-300 hover:scale-105">
              <i className="ri-notification-2-line text-[#000000] text-lg lg:text-xl xl:text-2xl font-medium"></i>
            </button>
            {isUser ? (
              <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <button className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-[#F2F2F2] transition-colors duration-300 hover:scale-110">
                  <i className="ri-user-6-line text-[#333333] text-lg lg:text-xl xl:text-2xl font-medium"></i>
                </button>
                {showUserModal && (
                  <div className="absolute top-full mt-2 right-0 w-40 lg:w-48 xl:w-56 bg-white rounded-lg shadow-lg z-50">
                    <div className="py-4">
                      <div className="flex flex-col items-center space-y-2">
                        <div className="flex items-center justify-center bg-[#F2F2F2] w-12 h-12 rounded-full">
                          <i className="ri-user-6-line text-[#333333] text-lg font-medium"></i>
                        </div>
                        <h1 className="font-medium text-[#333333] text-base lg:text-xl">User Name</h1>
                      </div>
                      <div className="mt-4">
                        <button
                          type="button"
                          className="flex items-center justify-center w-full font-medium text-[#333333] text-sm lg:text-lg"
                          onClick={() => router.push('/profile')}
                        >
                          Account Management
                        </button>
                      </div>
                      <div className="mt-6 border-t border-[#E4E4E4] pt-3">
                        <button type="button" className="flex items-center justify-center w-full font-medium text-[#333333] text-sm lg:text-lg">
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
                className="flex items-center justify-center border border-[#333333] w-28 h-12 rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-300"
                onClick={handleLoginClick}
              >
                <span className="text-[#333333] text-xs lg:text-base font-medium">Log In</span>
              </button>
            )}
          </div>
          {/* Mobile: hamburger/menu button */}
          <div className="sm:hidden flex items-center">
            <button
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-100 transition-colors duration-200"
            >
              {mobileMenuOpen ? (
                <i className="ri-close-line text-xl"></i>
              ) : (
                <i className="ri-menu-line text-xl"></i>
              )}
            </button>
          </div>
        </div>

        {showUserModal && (
          <div className="sm:hidden absolute right-4 top-20 w-48 bg-white rounded-lg shadow-lg z-50 animate-slideDown">
            <div className="py-4">
              <div className="flex flex-col items-center space-y-2">
                <div className="flex items-center justify-center bg-[#F2F2F2] w-12 h-12 rounded-full">
                  <i className="ri-user-6-line text-[#333333] text-lg font-medium"></i>
                </div>
                <h1 className="font-medium text-[#333333] text-base">User Name</h1>
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  className="flex items-center justify-center w-full font-medium text-[#333333] text-sm lg:text-lg"
                  onClick={() => { router.push('/profile'); setShowUserModal(false); }}
                >
                  Account Management
                </button>
              </div>
              <div className="mt-6 border-t border-[#E4E4E4] pt-3">
                <button type="button" className="flex items-center justify-center w-full font-medium text-[#333333] text-xs lg:text-base">
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="sm:hidden absolute left-0 right-0 top-full bg-white z-50 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {navItems.map(({ label, path }) => (
                <button
                  key={path}
                  type="button"
                  onClick={() => { router.push(path); setMobileMenuOpen(false); }}
                  className={`${pathname === path ? 'bg-[#43A047] text-white' : 'text-[#333333] bg-white'} w-full text-left px-4 py-3 rounded-md transition-colors duration-200`}
                >
                  <span className="font-medium text-xs">{label}</span>
                </button>
              ))}

              <div className="pt-2">
                <h2 className="text-xs font-semibold text-[#333333] mb-2">Renter</h2>
                {renterLinks.map(({ label, path }) => (
                  <button
                    key={path}
                    type="button"
                    onClick={() => { router.push(path); setMobileMenuOpen(false); }}
                    className={`${pathname === path ? 'bg-[#43A047] text-white' : 'text-[#333333] bg-white'} w-full text-left px-4 py-2 rounded-md transition-colors duration-200`}
                  >
                    <span className="text-xs">{label}</span>
                  </button>
                ))}
              </div>

              <div className="pt-2 border-t border-gray-100">
                {isUser ? (
                  <div className="space-y-2">
                    <button onClick={() => { router.push('/profile'); setMobileMenuOpen(false); }} className="w-full text-left px-4 py-3 text-xs">Account Management</button>
                    <button className="w-full text-left px-4 py-3 text-xs">Sign Out</button>
                  </div>
                ) : (
                  <button onClick={() => { handleLoginClick(); setMobileMenuOpen(false); }} className="w-full text-left px-4 py-3 font-medium text-xs">Log In</button>
                )}

                <button className='w-full text-left px-4 py-3 font-medium text-xs' onClick={() => router.push('/profile')}>Account Management</button>
              </div>
            </div>
          </div>
        )}
      </header>
      <div className="h-18 lg:h-20" aria-hidden="true" />
      {showLoginModal && (
        <LoginForm closeModal={closeModal} onForgotPassword={handleForgotPassword} />
      )}
    </>
  );
};

export default PublicPageHeader;
