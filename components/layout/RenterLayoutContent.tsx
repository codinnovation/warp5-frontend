'use client';

import { useState } from 'react';
import SidebarMenu from '@/components/layout/renter/SidebarMenu';
import PublicPageHeader from '@/components/layout/PublicPageHeader';

interface RenterLayoutContentProps {
  children: React.ReactNode;
}

export default function RenterLayoutContent({ children }: RenterLayoutContentProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='relative h-screen bg-[#E4E4E4]/40'>
      <div className='fixed top-0 left-0 right-0 z-50'>
        <div className='lg:hidden flex justify-between items-center p-4 bg-white shadow-md'>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className='text-[#333333] text-2xl'
            aria-label='Toggle sidebar'
          >
            <i className="ri-menu-line"></i>
          </button>
          <h1 className='text-[#000000] font-medium text-xl'>Warp5</h1>
        </div>
        <div className='hidden lg:block'>
          <PublicPageHeader />
        </div>
      </div>

      <div className={`fixed top-30 left-0 bottom-0 z-40 w-64 lg:w-80 xl:w-94 bg-white transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:block`}>
        <SidebarMenu />
      </div>

      {sidebarOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden'
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      <main className='lg:ml-64 xl:ml-80 2xl:ml-94 pt-32 lg:pt-40 pb-6 lg:pb-10 pl-4 lg:pl-6 xl:pl-10 pr-4 lg:pr-6 xl:pr-10 h-full overflow-hidden flex flex-col'>
        <div className='flex-1 overflow-hidden'>
          {children}
        </div>
      </main>
    </div>
  );
}