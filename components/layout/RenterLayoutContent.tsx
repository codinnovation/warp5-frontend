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
        <div className='lg:hidden flex justify-between items-center p-3 bg-white shadow-md'>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className='text-[#333333] text-xl'
            aria-label='Toggle sidebar'
          >
            <i className="ri-menu-line"></i>
          </button>
          <h1 className='text-[#000000] font-medium text-lg'>Warp5</h1>
        </div>
        <div className='hidden lg:block'>
          <PublicPageHeader />
        </div>
      </div>

      <div className={`fixed top-24 left-0 bottom-0 z-40 w-64 lg:w-80 xl:w-90 bg-white transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:block`}>
        <SidebarMenu />
      </div>

      {sidebarOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden'
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      <main className='lg:ml-80 xl:ml-90 2xl:ml-90 pt-32 lg:pt-36 pb-6 lg:pb-8 pl-4 lg:pl-5 xl:pl-8 pr-4 lg:pr-5 xl:pr-8 h-full overflow-hidden flex flex-col'>
        <div className='flex-1 overflow-hidden'>
          {children}
        </div>
      </main>
    </div>
  );
}