'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation';
import DashboardHeader from '@/components/renter/DashboardHeader';
import Car1Image from '../../../../../public/cars/car1.jpg';

function Page() {
  const router = useRouter();

  return (
    <>
      <main className='flex flex-col h-full'>
        <DashboardHeader title='Reservation Details' />

        <section className='mt-6 lg:mt-12 flex flex-wrap gap-4 justify-between items-center'>
          <div className='flex items-center justify-center border border-[#333333] rounded-lg px-4 py-2 lg:px-8 lg:py-2 cursor-pointer' onClick={() => router.back()}>
            <i className="ri-arrow-left-s-line text-lg lg:text-base"></i>
            <h1 className='text-[#000000] font-medium text-xs lg:text-base ml-1'>Back</h1>
          </div>
          <div className='bg-[#FF0000] flex justify-center items-center px-5 py-2 lg:px-8 lg:py-4 rounded-full cursor-pointer hover:bg-red-600 transition-colors'>
            <h2 className='font-medium text-xs lg:text-base text-white'>Cancel Reservation</h2>
          </div>
        </section>

        <section className='mt-6 lg:mt-16 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6 lg:gap-20'>
          <div>
            <div className='bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-6'>
              <div className='bg-gray-100 w-full h-48 sm:w-48 sm:h-36 lg:w-80 lg:h-60 relative overflow-hidden rounded-xl flex-shrink-0'>
                <Image
                  src={Car1Image}
                  alt='Car image'
                  fill
                  className='object-cover'
                />
              </div>

              <div className='space-y-4 lg:space-y-8 w-full'>
                <div className='flex justify-between items-start'>
                  <h2 className='text-[#43A047] text-sm lg:text-xl font-bold'>Excavators</h2>
                </div>

                <div className='flex flex-col gap-2'>
                  <div className='flex items-center gap-2'>
                    <i className="ri-calendar-line text-[#333333]"></i>
                    <span className='text-xs text-[#333333] font-medium lg:text-base'>Date:</span>
                    <span className='text-xs text-[#666666] lg:text-base'>Nov 1 - 30, 2025</span>
                  </div>
                </div>
                <div className='items-center bg-[#43A047] text-white w-35 px-6 py-2 lg:w-40 lg:px-8 lg:py-3 rounded-full text-xs font-medium text-center'>
                  Confirmed
                </div>
              </div>
            </div>

            <div className='mt-6 space-y-4 lg:space-y-8 lg:mt-12 px-2 sm:px-0'>
              <h1 className='text-[#333333] text-sm lg:text-xl font-semibold'>Description</h1>
              <p className='text-xs text-gray-600 font-normal leading-[20px] lg:leading-[40px] lg:text-base'>Any other relevant details. sit amet, consectetur adipiscing elit. Nullam turpis et, interdu
                Nullam turpis et, interdum leo. Nunc hendrerit volutpat risus sit amet ornare. Vestibulum
                sollicitudin lectus eu purus varius molestie vel at velit</p>

              <button className='flex justify-center items-center text-[#333333] font-regular text-xs lg:text-base'>
                <i className="ri-arrow-down-s-fill text-base"></i>
                Show more
              </button>
            </div>
          </div>

          <div className='space-y-6'>
            <div className='bg-white p-6'>
              <h3 className='text-sm lg:text-lg font-semibold text-[#333333] mb-6'>Reservation Info</h3>
              <div className='space-y-4 text-sm'>
                <div className='flex justify-between items-center py-2 border-b border-gray-50 last:border-0'>
                  <span className='text-gray-500 text-xs lg:text-base'>Reservation ID</span>
                  <span className='font-medium text-gray-900 text-xs lg:text-base'>R-EX23</span>
                </div>
                <div className='flex justify-between items-center py-2 border-b border-gray-50 last:border-0'>
                  <span className='text-gray-500 text-xs lg:text-base'>Vendor</span>
                  <span className='font-medium text-gray-900 text-right text-xs lg:text-base'>John Heavy Machine Rental</span>
                </div>
                <div className='flex justify-between items-center py-2 border-b border-gray-50 last:border-0'>
                  <span className='text-gray-500 text-xs lg:text-base'>Location</span>
                  <span className='font-medium text-gray-900 text-xs lg:text-base'>Kumasi</span>
                </div>
              </div>
              <div className='mt-6 flex justify-between items-center gap-3 pt-4 border-t border-gray-100'>
                <button className='flex-1 flex items-center justify-center gap-2 px-3 py-2 text-[#166534] bg-green-50 hover:bg-green-100 rounded-lg text-xs lg:text-base transition-colors'>
                  <i className='ri-chat-3-line'></i>
                  <span>Chat</span>
                </button>

                <button className='flex-1 flex items-center justify-center gap-2 px-3 py-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg text-xs lg:text-base transition-colors'>
                  <i className='ri-flag-line'></i>
                  <span>Report</span>
                </button>
              </div>
            </div>

            <div className='bg-white p-6'>
              <h3 className='text-base lg:text-lg font-semibold text-[#333333] mb-6'>Payment Details</h3>
              <div className='space-y-4 text-sm'>
                <div className='flex justify-between items-center py-2 border-b border-gray-50'>
                  <span className='text-gray-500 text-xs lg:text-base'>Total Cost</span>
                  <span className='font-bold text-[#43A047] text-xs lg:text-base'>GHC 30,000</span>
                </div>
                <div className='flex justify-between items-center py-2 border-b border-gray-50'>
                  <span className='text-gray-500 text-xs lg:text-base'>Status</span>
                  <span className='bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-medium'>Paid</span>
                </div>
                <div className='flex justify-between items-center py-2 border-b border-gray-50'>
                  <span className='text-gray-500 text-xs lg:text-base'>Invoice</span>
                  <span className='font-medium text-gray-900 text-xs lg:text-base'>INV-12345</span>
                </div>
                <div className='flex justify-between items-center py-2'>
                  <span className='text-gray-500 text-xs lg:text-base'>Method</span>
                  <div className='flex items-center gap-2'>
                    <i className="ri-bank-card-line text-gray-400"></i>
                    <span className='font-medium text-gray-900 text-xs lg:text-base'>Card</span>
                  </div>
                </div>
              </div>

              <div className='mt-6 pt-4 border-t border-gray-100'>
                <button className='w-full flex items-center justify-center gap-2 px-4 py-3 text-[#43A047] bg-[#43A047]/5 hover:bg-[#43A047]/10 rounded-xl text-xs lg:text-base font-medium transition-colors'>
                  <i className='ri-download-2-line'></i>
                  <span>Download Invoice</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Page
