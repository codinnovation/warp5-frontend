'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/userContext';

function UserModal({ setShowUserModal }: { setShowUserModal: React.Dispatch<React.SetStateAction<boolean>> }) {
  const router = useRouter();
  const { user } = useUser()

  const menuItems = [
    { label: 'Renter Dashboard', icon: 'ri-dashboard-line', path: '/renter/dashboard' },
    { label: 'My Reservations', icon: 'ri-calendar-check-line', path: '/renter/reservations' },
    { label: 'Account Settings', icon: 'ri-settings-4-line', path: '/profile' },
    { label: 'Help & Support', icon: 'ri-question-line', path: '/help' },
  ];

  return (
    <>
      <div
        className="absolute top-full right-0 mt-3 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200"
        onMouseLeave={() => setShowUserModal(false)}
      >
        {/* User Stats Header */}
        <div className="bg-gray-50/50 p-5 border-b border-gray-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
            {user?.firstName?.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-gray-900 truncate">{user?.firstName}</h4>
            <p className="text-xs text-gray-500 truncate">{user?.email}</p>
          </div>
        </div>

        {/* Menu Items */}
        <div className="p-2 space-y-1">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => { router.push(item.path); setShowUserModal(false); }}
              className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-green-700 transition-all flex items-center gap-3 group"
            >
              <i className={`${item.icon} text-lg text-gray-400 group-hover:text-green-600 transition-colors`}></i>
              {item.label}
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="p-2 border-t border-gray-100">
          <button
            onClick={async () => {
              await fetch('/api/auth/logout', { method: 'POST' });
              window.location.href = '/';
            }}
            className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-all flex items-center gap-3"
          >
            <i className="ri-logout-box-r-line text-lg opacity-70"></i>
            Sign Out
          </button>
        </div>
      </div>
    </>
  )
}

export default UserModal
