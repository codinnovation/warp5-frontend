'use client';

import React from 'react'

function DashboardAlert() {
  return (
    <section className='mt-6 pl-4 py-4 flex justify-start items-center bg-[#F7E6E6] rounded-lg space-x-3 lg:space-x-6 lg:pl-6 lg:mt-12 lg:py-10 shrink-0'>
      <i className="ri-information-line text-[#333333] text-lg lg:text-xl"></i>
      <h1 className='text-[#333333] font-regular text-xs lg:text-base'>Your rental for Excavator ends tomorrow 15 November, 2025</h1>
    </section>
  )
}

export default DashboardAlert
