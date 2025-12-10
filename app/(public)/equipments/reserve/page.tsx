'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import PageHeader from '@/components/public/PageHeader';
import Footer from '@/components/public/Footer'
import Car1Image from '../../../../public/cars/car1.jpg';

function Page() {
  const router = useRouter();
  return (
    <>
      <main className='min-h-screen bg-white'>
        <PageHeader />

        <section className='mt-20 md:mt-24 xl:mt-28 w-[90vw] mx-auto grid grid-cols-1 gap-8 xl:w-[85vw] xl:grid-cols-2 xl:gap-8'>

          <div className='px-4 md:px-6 py-6 md:py-8 xl:py-8 xl:px-20'>
            <div className='relative w-full aspect-[5/3] bg-gray-100 overflow-hidden rounded-2xl'>
              <Image
                src={Car1Image}
                alt=''
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 60vw"
                className='object-cover'
              />
            </div>

            <div className='mt-6 md:mt-8 xl:mt-8'>
              <div className='flex flex-col'>
                <div className='flex flex-col justify-center items-start'>
                  <h1 className='text-[#43A047] font-bold text-base md:text-lg lg:text-xl'>Excavators</h1>
                  <div className='mt-1 md:mt-2 flex flex-col space-y-1'>
                    <div className='flex items-center'>
                      <i className="ri-map-pin-2-line text-sm md:text-base"></i>
                      <h1 className='text-[#333333] text-xs md:text-sm lg:text-base font-regular'>Takoradi</h1>
                    </div>

                    <div className='flex space-x-1 items-center'>
                      <i className="ri-star-s-line text-sm md:text-base"></i>
                      <i className="ri-star-s-line text-sm md:text-base"></i>
                      <i className="ri-star-s-line text-sm md:text-base"></i>
                      <i className="ri-star-s-line text-sm md:text-base"></i>
                      <h1 className='text-[#333333] text-xs md:text-sm lg:text-base'>4.9</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-6 md:mt-8 lg:mt-8'>
              <div className='flex flex-col space-y-3 md:space-y-4 lg:space-y-6'>
                <div className='flex items-center space-x-3 lg:space-x-6'>
                  <i className="ri-check-line text-[#43A047] text-base md:text-lg"></i>
                  <h1 className='text-[#333333] text-xs md:text-sm lg:text-base font-medium'>Digging Depth: 15 - 25 Feet</h1>
                </div>

                <div className='flex items-center space-x-3 lg:space-x-6'>
                  <i className="ri-check-line text-[#43A047] text-base md:text-lg"></i>
                  <h1 className='text-[#333333] text-xs md:text-sm lg:text-base font-medium'>Lifting Capacity: 12,000 Pounds</h1>
                </div>

                <div className='flex items-center space-x-3 lg:space-x-6'>
                  <i className="ri-check-line text-[#43A047] text-base md:text-lg"></i>
                  <h1 className='text-[#333333] text-xs md:text-sm lg:text-base font-medium'>Fuel Type: Diesel</h1>
                </div>

                <div className='mt-6 md:mt-8 lg:mt-12'>
                  <div className='flex flex-col lg:flex-row justify-between items-center gap-3 lg:gap-6'>

                    <button className='flex justify-center items-center bg-[#43A047] hover:bg-[#388E3C] active:scale-95 transition-all text-white w-full h-10 lg:h-12 rounded-full space-x-2 cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-[#43A047]'>
                      <i className="ri-chat-3-line"></i>
                      <h1 className='text-xs md:text-sm lg:text-base'>Chat Vendor</h1>
                    </button>

                    <button className='flex justify-center items-center bg-[#fff] border border-[#333333] hover:bg-[#333333] hover:text-white active:scale-95 transition-all text-[#333333] w-full h-10 lg:h-12 rounded-full space-x-2 cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-[#333333]'>
                      <i className="ri-flag-line"></i>
                      <h1 className='text-xs md:text-sm lg:text-base'>Report</h1>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <hr className='mt-8 md:mt-10 lg:mt-12 xl:mt-16 border-t border-[#D5D5D5] mx-4 lg:mx-8' />

            <div className='mt-6 md:mt-8 lg:mt-12'>
              <div className='flex justify-between items-center'>
                <h1 className='text-[#333333] font-bold text-sm md:text-base lg:text-lg'>Total Amount</h1>
                <h1 className='text-[#333333] font-bold text-sm md:text-base lg:text-lg'>GH 300000</h1>
              </div>
            </div>
          </div>

          <div className='px-4 md:px-6 lg:px-12 xl:px-24 pb-8 md:pb-12'>
            <div className='flex justify-center items-center'>
              <h1 className='text-[#43A047] font-bold text-base md:text-lg lg:text-xl'>Confirm Your Reservation</h1>
            </div>

            <div className='mt-6 md:mt-8 lg:mt-8'>
              <div className='flex flex-col space-y-4 md:space-y-6 lg:space-y-8'>

                <div className='flex flex-col space-y-1 md:space-y-2'>
                  <h1 className='text-[#43A047] font-semibold text-sm md:text-base lg:text-lg'>Pickup</h1>
                  <h1 className='text-[#333333] font-regular text-xs md:text-sm lg:text-base'>1 November, 2025</h1>
                </div>

                <div className='flex flex-col space-y-1 md:space-y-2'>
                  <h1 className='text-[#43A047] font-semibold text-sm md:text-base lg:text-lg'>Return</h1>
                  <h1 className='text-[#333333] font-regular text-xs md:text-sm lg:text-base'>12 November, 2025</h1>
                </div>

              </div>
            </div>

            <hr className='mt-6 md:mt-8 lg:mt-12 border-t border-[#D5D5D5]' />

            <div className='mt-8 md:mt-10 lg:mt-12 xl:mt-16'>
              <div className='flex flex-col space-y-3 md:space-y-4'>
                <h1 className='text-[#333333] text-sm md:text-base lg:text-lg font-bold'>Title</h1>
                <p className='text-[#333333] text-xs md:text-sm lg:text-base font-regular leading-relaxed md:leading-loose'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, blanditiis doloremque iure excepturi nemo assumenda! Debitis consequatur obcaecati, nisi error dolore corrupti illo, maiores nihil, ut sit eum odio quibusdam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis fuga quae, mollitia aliquid eveniet impedit eum totam iusto quod quam libero animi quo ad vitae omnis, blanditiis iste laboriosam in.</p>
              </div>
            </div>

            <div className='mt-6 md:mt-8 lg:mt-12 flex'>
              <button className='text-[#43A047] border-b border-[#43A047] text-sm md:text-base lg:text-lg hover:opacity-80 transition-all cursor-pointer'>Terms & Conditions</button>
            </div>

            <div className='mt-8 md:mt-10 lg:mt-12 xl:mt-16'>
              <div className='flex justify-center items-center'>
                <button className='text-white text-xs md:text-sm lg:text-base bg-[#43A047] hover:bg-[#388E3C] active:scale-95 transition-all w-48 md:w-56 lg:w-64 xl:w-80 h-10 lg:h-12 rounded-full font-medium cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-[#43A047]' onClick={() => router.push('/payment')}>Proceed To Pay</button>
              </div>
            </div>

          </div>
        </section>

        <section className='mt-12 md:mt-16 xl:mt-20'>
          <Footer />
        </section>
      </main>
    </>
  )
}

export default Page
