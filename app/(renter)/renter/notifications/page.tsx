'use client';

import DashboardHeader from '@/components/renter/DashboardHeader';

function Page() {
  return (
    <>
      <main className='flex flex-col h-full'>
        <DashboardHeader title='Notifications' />

        <section className='flex mt-6 lg:mt-12'>
          <div className='flex justify-center items-center border border-[#CECECE] py-2 px-4 space-x-2 rounded-lg lg:px-8'>
            <h1 className='text-[#1C1D2180] font-regular text-sm lg:text-base'>Filter</h1>
            <i className="ri-arrow-down-s-line"></i>
          </div>
        </section>

        <section className='mt-6'>
          <div className='flex justify-between items-center shadow-sm px-4 py-8 rounded-lg'>
            <div className='flex flex-col space-y-2'>
              <h1 className='text-[#333333] font-medium text-sm lg:text-base'>Reservation Successful</h1>
              <p className='text-[#787878] font-regular text-xs lg:text-sm'>Equipment Abc With Reservation ID RTB4789....</p>
            </div>

            <div className='flex flex-col space-y-2'>
              <h1 className='text-[#333333] text-xs font-regular hidden lg:block lg:text-sm'>17th Nov 2025</h1>
              <div className='text-[#43A047] hidden lg:flex'>
                <i className="ri-arrow-down-s-fill text-base"></i>
                <h1 className='font-regular text-xs lg:text-sm'>Show All</h1>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Page
