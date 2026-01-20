'use client'

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import Logo from '../../public/logo/warp-logo.svg';
import UserModal from './userModal';
import LoginForm from "@/components/auth/LoginForm";
import { useUser } from '@/context/userContext';


function PageHeader() {
  const router = useRouter();
  const pathname = usePathname();

  const { user } = useUser();

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
              <button
                onClick={() => router.push(path)}
                key={path}
                className={`${pathname === path ? 'bg-[#43A047] text-white' : 'text-[#333333] bg-white hover:bg-gray-50'} cursor-pointer flex items-center justify-center px-6 py-3 rounded-full transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#43A047] focus:ring-opacity-50`}
              >
                <h1 className="text-base font-medium">{label}</h1>
              </button>
            ))}
          </nav>

          <div className="flex justify-end items-center space-x-8">
            {user ? (
              <div className="relative hidden xl:flex">
                <button
                  className="flex justify-center items-center bg-[#000]/10 w-16 h-16 rounded-full cursor-pointer hover:bg-[#000]/20 transition-all focus:outline-none"
                  onClick={() => setShowUserModal(!showUserModal)}
                >
                  <i className="ri-user-3-line text-2xl"></i>
                </button>

                {showUserModal && (
                  <UserModal setShowUserModal={setShowUserModal} />
                )}
              </div>
            ) : (
              <button className="hidden justify-center items-center border-2 border-[#333333] hover:bg-[#333333] hover:text-white px-12 py-3 rounded-full xl:flex transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#333333] focus:ring-offset-2" onClick={() => setShowLoginModal(true)}>
                <h1 className="text-base font-semibold">Log In</h1>
              </button>
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
          <div className="xl:hidden absolute left-0 right-0 top-full bg-white z-50 shadow-xl border-t border-gray-100 rounded-b-3xl overflow-hidden pb-4 transition-all animate-in slide-in-from-top-2">
            <div className="px-4 py-4 space-y-1">

              {/* Main Nav Items */}
              {navItems.map(({ label, path }) => (
                <button
                  key={path}
                  type="button"
                  onClick={() => { router.push(path); setMobileMenuOpen(false); }}
                  className={`${pathname === path ? 'bg-green-50 text-green-700 font-bold' : 'text-gray-600 hover:bg-gray-50 font-medium'} w-full text-left px-4 py-3.5 rounded-xl transition-all duration-200 text-sm flex items-center justify-between group`}
                >
                  {label}
                  {pathname === path && <i className="ri-check-line text-green-600"></i>}
                </button>
              ))}

              {/* Renter Section (Only if User is Logged In) */}
              {user && (
                <div className="pt-4 mt-2 border-t border-gray-100">
                  <h2 className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Renter Dashboard</h2>
                  <div className="space-y-1">
                    {[
                      { label: 'Overview', path: '/renter/dashboard', icon: 'ri-dashboard-line' },
                      { label: 'My Reservations', path: '/renter/reservations', icon: 'ri-calendar-check-line' },
                      { label: 'Payment', path: '/renter/payment', icon: 'ri-wallet-3-line' },
                      { label: 'Notifications', path: '/renter/notifications', icon: 'ri-notification-3-line' },
                    ].map(({ label, path, icon }) => (
                      <button
                        key={path}
                        type="button"
                        onClick={() => { router.push(path); setMobileMenuOpen(false); }}
                        className={`${pathname === path ? 'bg-green-600 text-white shadow-lg shadow-green-600/20' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'} w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center gap-3 group`}
                      >
                        <i className={`${icon} text-lg ${pathname === path ? 'text-white' : 'text-gray-400 group-hover:text-gray-600'}`}></i>
                        <span className={`text-sm ${pathname === path ? 'font-bold' : 'font-medium'}`}>{label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Auth Section */}
              <div className="pt-4 mt-2 border-t border-gray-100">
                {user ? (
                  <div className="space-y-2">
                    <button onClick={() => { router.push('/profile'); setMobileMenuOpen(false); }} className="w-full text-left px-4 py-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-xl flex items-center gap-3">
                      <i className="ri-user-settings-line text-lg text-gray-400"></i>
                      Profile
                    </button>
                    <button
                      onClick={async () => {
                        await fetch('/api/auth/logout', { method: 'POST' });
                        window.location.href = '/';
                      }}
                      className="w-full text-left px-4 py-3.5 text-sm font-medium text-red-600 hover:bg-red-50 rounded-xl flex items-center gap-3">
                      <i className="ri-logout-box-r-line text-lg text-red-400"></i>
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <div className="p-2">
                    <button onClick={() => { handleLoginClick(); setMobileMenuOpen(false); }} className="w-full text-center px-4 py-3.5 font-bold text-sm bg-black text-white rounded-xl shadow-lg hover:shadow-xl active:scale-95 transition-all">
                      Log In / Sign Up
                    </button>
                  </div>
                )}
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
