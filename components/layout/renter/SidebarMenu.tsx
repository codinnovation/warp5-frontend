'use client';

import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { useUser } from '@/context/userContext';

const links = [
  { href: '/renter/dashboard', icon: 'ri-dashboard-line', label: 'Overview' },
  { href: '/renter/reservations', icon: 'ri-calendar-check-line', label: 'Reservations' },
];

const SidebarMenu: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const { user } = useUser();

  const isActive = (href: string) => {
    if (href === '/renter/reservations' && pathname.startsWith('/renter/reservations')) return true;
    return pathname === href;
  };

  return (
    <aside className='hidden lg:flex fixed left-0 top-0 h-full min-h-screen w-64 xl:w-72 flex-col bg-white border-r border-gray-100 px-4 py-6 z-40 justify-between'>

      <div>
        <div className="h-20 md:h-22 xl:h-24"></div>

        <nav className='flex flex-col space-y-2'>
          <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 mt-4 ml-1">Menu</p>
          {links.map(({ href, icon, label }) => (
            <button
              type='button'
              key={href}
              onClick={() => router.push(href)}
              className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 group ${isActive(href)
                ? 'bg-[#43A047] text-white shadow-lg shadow-green-600/20'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
            >
              <i className={`${icon} text-xl ${isActive(href) ? 'text-white' : 'text-gray-400 group-hover:text-gray-600'}`}></i>
              <span className='font-medium text-sm xl:text-base'>{label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className='space-y-6'>
        <div className="border-t border-gray-100 pt-6">
          <div className="flex items-center gap-3 px-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-sm shadow-sm shrink-0">
              {user?.firstName.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-bold text-gray-900 truncate">{user?.firstName} {user?.lastName}</h4>
              <p className="text-xs text-gray-400 truncate">{user?.email}</p>
            </div>
            <button
              onClick={async () => {
                await fetch('/api/auth/logout', { method: 'POST' });
                window.location.href = '/';
              }}
              className="text-gray-400 hover:text-red-500 transition-colors p-2"
              title="Logout"
            >
              <i className="ri-logout-box-r-line text-lg"></i>
            </button>
          </div>
        </div>
      </div>

    </aside>
  );
};

export default SidebarMenu;
