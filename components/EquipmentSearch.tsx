import React from 'react'
import Image from 'next/image'
import BannerImage from '../public/images/banner.jpg'

function EquipmentSearch() {
  return (
    <>
      <div className='relative h-[500px] w-full overflow-hidden'>
        <Image
          src={BannerImage}
          alt='Banner'
          fill
          className='object-cover'
          priority
        />
        <div className='absolute inset-0 bg-black/30'></div>

        <div className='relative z-10 flex flex-col justify-end items-center h-full pb-40 px-8'>
          <div className='bg-white/20 backdrop-blur-sm rounded-4xl px-12 py-5 max-w-7xl w-full shadow-xl border border-white/50'>
            <div className='grid grid-cols-5'>

              <div className='flex flex-col items-start justify-center space-y-2 border-r-[1px] border-[#DDDDDDB2]/70'>
                <h1 className='text-[#FFFFFF] text-lg tracking-wide'>Location</h1>
                <div className='flex space-x-2'>
                  <h1 className='text-[#DDDDDD] tracking-wide text-base'>Select Your City</h1>
                  <i className="ri-arrow-down-s-line text-[#DDDDDD] text-lg"></i>
                </div>
              </div>

              <div className='flex flex-col items-start justify-center space-y-2 border-r-[1px] border-[#DDDDDDB2]/70 pl-8'>
                <h1 className='text-[#FFFFFF] text-lg tracking-wide'>Equipment</h1>
                <div className='flex space-x-2'>
                  <h1 className='text-[#DDDDDD] tracking-wide text-base'>Choose Type</h1>
                  <i className="ri-arrow-down-s-line text-[#DDDDDD] text-lg"></i>
                </div>
              </div>

              <div className='flex flex-col items-start justify-center space-y-2 border-r-[1px] border-[#DDDDDDB2]/70 pl-8'>
                <h1 className='text-[#FFFFFF] text-lg tracking-wide'>Price Range</h1>
                <div className='flex space-x-2'>
                  <h1 className='text-[#DDDDDD] tracking-wide text-base'>Choose Range</h1>
                  <i className="ri-arrow-down-s-line text-[#DDDDDD] text-lg"></i>
                </div>
              </div>

              <div className='flex flex-col items-start justify-center space-y-2 pl-8'>
                <h1 className='text-[#FFFFFF] text-lg tracking-wide'>Date</h1>
                <div className='flex space-x-2 items-center'>
                  <i className="ri-arrow-down-s-line text-[#DDDDDD] text-lg"></i>
                  <h1 className='text-[#DDDDDD] tracking-wide text-base whitespace-nowrap'>01/11/2025 - 01/11/2025</h1>
                </div>
              </div>

              <div className='flex items-center justify-end pl-8'>
                <div className='flex justify-center items-center w-32 h-12 bg-[#000000] rounded-xl'>
                  <h1 className='text-white text-base tracking-wide'>Search</h1>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EquipmentSearch
