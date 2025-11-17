'use client'

import React from 'react'
import Image from 'next/image'
import DashboardHeader from '@/components/renter/DashboardHeader';
import Car1Image from '../../../../../public/cars/car1.jpg';

function Page() {
  return (
    <>
      <main className='flex flex-col h-full'>
        <DashboardHeader title='Reservation Details' />

        <section className='mt-8 lg:mt-12 flex flex-col lg:flex-row justify-between items-center shrink-0 space-y-4 lg:space-y-0'>
          <div className='flex items-center justify-center border border-[#333333] rounded-lg px-6 lg:px-8 py-2 space-x-2 cursor-pointer'>
            <i className="ri-arrow-left-s-line text-lg lg:text-xl"></i>
            <h1 className='text-[#000000] font-medium text-sm lg:text-base'>Back</h1>
          </div>
          <div className='bg-[#FF0000] flex justify-center items-center h-12 lg:h-14 py-2 px-6 lg:px-8 rounded-full'>
            <h2 className='text-[#000000] font-medium text-sm lg:text-base text-white'>Cancel Reservation</h2>
          </div>
        </section>

        <section className='mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 lg:gap-12'>
          <div className='flex flex-col'>
            <div className='flex justify-start items-center shadow-lg py-6 lg:py-8'>
              <div className='relative w-full max-w-96 lg:max-w-144 xl:max-w-192 h-56 lg:h-64 xl:h-72 rounded-lg overflow-hidden'>
                <Image src={Car1Image} alt="Car 1" fill className='object-cover object-center' />
              </div>
              <div className='flex flex-col ml-4 lg:ml-6'>
                <h1 className='text-[#43A047] text-xl lg:text-2xl font-bold'>Excavators</h1>
                <div className='flex mt-2'>
                  <h1 className='text-[#333333] font-bold text-sm lg:text-base'>Date:</h1>
                  <h1 className='text-[#333333] font-regular text-sm lg:text-base ml-2'>Nov 1 - 30, 2025</h1>
                </div>

                <div className='px-3 lg:px-4 py-1 lg:py-2 bg-[#333333] rounded-full mt-2 w-fit'>
                  <h1 className='text-white text-sm lg:text-base'>Confirmed</h1>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
    </>
  )
}

export default Page
