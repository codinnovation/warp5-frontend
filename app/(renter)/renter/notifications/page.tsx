'use client';

import React from 'react';
import DashboardHeader from '@/components/renter/DashboardHeader';

function Page() {
  return (
    <>
      <main className='flex flex-col h-full'>
        <DashboardHeader title='Notifications' />

        <section className='flex mt-8'>
          <div className='flex justify-center items-center border border-[#CECECE] py-2 px-8 space-x-2 rounded-lg'>
            <h1 className='text-[#1C1D2180] font-regular text-base'>Filter</h1>
            <i className="ri-arrow-down-s-line"></i>
          </div>
        </section>

        <section className='mt-8'>
          <div className='flex justify-between items-center shadow-sm px-4 py-8 rounded-lg'>
            <div className='flex flex-col space-y-2'>
              <h1 className='text-[#333333] font-medium text-base'>Reservation Successful</h1>
              <p className='text-[#787878] font-regular text-sm'>Equipment Abc With Reservation ID RTB4789....</p>
            </div>

            <div className='flex flex-col space-y-2'>
              <h1 className='text-[#333333] text-sm font-regular'>17th Nov 2025</h1>
              <div className='flex space-x-2 text-[#43A047]'>
                <i className="ri-arrow-down-s-fill text-base"></i>
                <h1 className='font-regular text-base'>Show All</h1>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Page
