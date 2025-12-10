'use client'

import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import Logo from '../../public/logo/warp-logo.svg';
import UserModal from './userModal';
import LoginForm from "@/components/auth/LoginForm";


function PageHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const isUser = false;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);

  const handleLoginClick = () => setShowLoginModal(true);
  const closeModal = () => setShowLoginModal(false);

  const navItems = [
    { label: 'Home', path: '/' },
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

  const handleForgotPassword = () => {
    setShowLoginModal(false);
    router.push('/forgotpassword');
  };


  return (
    <>
      <header className="fixed right-0 left-0 top-0 h-20 md:h-22 z-[100] bg-white xl:h-24">
        <div className="max-w-[90vw] mx-auto grid grid grid-cols-2 items-center h-full xl:grid-cols-3 xl:max-w-[85vw]">
          <div className="flex items-center">
            <Image
              src={Logo}
              alt="Warp Logo"
              width={100}
              height={100}
              className="w-20 xl:w-30 cursor-pointer"
            />
          </div>

          <nav className="hidden xl:flex justify-center items-center space-x-6">
            {navItems.map(({ label, path }) => (
              <div
                onClick={() => router.push(path)}
                key={path}
                className={`${pathname === path ? 'bg-[#43A047] text-white' : 'text-[#333333] bg-white'} cursor-pointer flex items-center justify-center px-6 py-3 rounded-full transition-all hover:shadow-md`}
              >
                <h1 className="text-base font-medium">{label}</h1>
              </div>
            ))}
          </nav>

          <div className="flex justify-end items-center space-x-8">
            <div className="hidden justify-center items-center bg-[#FFF0F6] w-16 h-16 rounded-full xl:flex">
              <i className="ri-heart-3-fill text-[#FF0063] text-2xl"></i>
            </div>

            <div className="hidden justify-center items-center xl:flex">
              <i className="ri-notification-2-line text-[#000000] text-2xl"></i>
            </div>

            {isUser ? (
              <div className="relative hidden xl:flex">
                <div
                  className="flex justify-center items-center bg-[#000]/10 w-16 h-16 rounded-full cursor-pointer"
                  onClick={() => setShowUserModal(!showUserModal)}
                >
                  <i className="ri-user-3-line text-2xl"></i>
                </div>

                {showUserModal && (
                  <UserModal setShowUserModal={setShowUserModal} />
                )}
              </div>
            ) : (
              <div className="hidden justify-center items-center border border-[#333333] px-12 py-3 rounded-full xl:flex" onClick={() => setShowLoginModal(true)}>
                <h1 className="text-base text-[#333333] font-semibold">Log In</h1>
              </div>
            )}


            <div className="flex justify-end items-center xl:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? (
                <i className="ri-close-line text-xl"></i>
              ) : (
                <i className="ri-menu-line text-xl"></i>
              )}
            </div>
          </div>
        </div>

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
                    <button onClick={() => { router.push('/profile'); setMobileMenuOpen(false); }} className="w-full text-left px-4 py-3 text-xs">Profile</button>
                    <button className="w-full text-left px-4 py-3 text-xs">Sign Out</button>
                  </div>
                ) : (
                  <button onClick={() => { handleLoginClick(); setMobileMenuOpen(false); }} className="w-full text-left px-4 py-3 font-medium text-xs">Log In</button>
                )}

                <button className='w-full text-left px-4 py-3 font-medium text-xs' onClick={() => router.push('/profile')}>Profile</button>
              </div>
            </div>
          </div>
        )}
      </header>
      {showLoginModal && (
        <LoginForm closeModal={closeModal} onForgotPassword={handleForgotPassword} />
      )}
    </>
  )
}

export default PageHeader
