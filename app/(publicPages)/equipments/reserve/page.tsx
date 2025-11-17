'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import PublicPageHeader from '@/components/layout/PublicPageHeader';
import FooterSection from '@/components/layout/FooterSection';
import Car1Image from '../../../../public/cars/car1.jpg';

function Page() {
  const router = useRouter();
  return (
    <>
      <main className='h-screen bg-white'>
        <PublicPageHeader />

        <section className='mt-6 lg:mt-8 w-[85vw] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8'>

          <div className='shadow-xl px-6 lg:px-12 xl:px-20 py-6 lg:py-8 rounded-4xl'>
            <div className='relative w-full aspect-[5/3] bg-gray-100 overflow-hidden'>
              <Image
                src={Car1Image}
                alt=''
                fill
                sizes="(max-width: 768px) 33vw, 20vw"
                className='object-cover'
              />
            </div>

            <div className='mt-6 lg:mt-8'>
              <div className='flex flex-col'>
                <div className='flex flex-col justify-center items-start'>
                  <h1 className='text-[#43A047] font-bold text-lg lg:text-xl'>Excavators</h1>
                  <div className='mt-1 flex flex-col space-y-1'>
                    <div className='flex'>
                      <i className="ri-map-pin-2-line"></i>
                      <h1 className='text-[#333333] text-xs lg:text-sm font-regular'>Takoradi</h1>
                    </div>

                    <div className='flex space-x-1 items-center'>
                      <i className="ri-star-s-line"></i>
                      <i className="ri-star-s-line"></i>
                      <i className="ri-star-s-line"></i>
                      <i className="ri-star-s-line"></i>
                      <h1 className='text-[#333333]'>4.9</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-6 lg:mt-8'>
              <div className='flex flex-col space-y-4 lg:space-y-6'>
                <div className='flex items-center space-x-3 lg:space-x-6'>
                  <i className="ri-check-line text-[#43A047]"></i>
                  <h1 className='text-[#333333] text-xs lg:text-sm font-medium'>Digging Depth: 15 - 25 Feet</h1>
                </div>

                <div className='flex items-center space-x-3 lg:space-x-6'>
                  <i className="ri-check-line text-[#43A047]"></i>
                  <h1 className='text-[#333333] text-xs lg:text-sm font-medium'>Lifting Capacity: 12,000 Pounds</h1>
                </div>

                <div className='flex items-center space-x-3 lg:space-x-6'>
                  <i className="ri-check-line text-[#43A047]"></i>
                  <h1 className='text-[#333333] text-xs lg:text-sm font-medium'>Fuel Type: Diesel</h1>
                </div>

                <div className='mt-8 lg:mt-12'>
                  <div className='flex flex-col lg:flex-row justify-between items-center gap-3 lg:gap-6'>

                    <div className='flex justify-center items-center bg-[#43A047] text-white w-full h-10 lg:h-12 rounded-full space-x-2'>
                      <i className="ri-chat-3-line"></i>
                      <h1 className='text-xs lg:text-sm'>Chat Vendor</h1>
                    </div>

                    <div className='flex justify-center items-center bg-[#fff] border border-[#333333] text-[#333333] w-full h-10 lg:h-12 rounded-full space-x-2'>
                      <i className="ri-flag-line"></i>
                      <h1 className='text-xs lg:text-sm'>Report</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-12 lg:mt-16 flex justify-center items-center border-b border-[#D5D5D5] mx-4 lg:mx-8' />

            <div className='mt-8 lg:mt-12'>
              <div className='flex justify-between items-center'>
                <h1 className='text-[#333333] font-bold text-sm lg:text-base'>Total Amount</h1>
                <h1 className='text-[#333333] font-bold text-sm lg:text-base'>GH 300000</h1>
              </div>
            </div>
          </div>

          <div className='px-6 lg:px-12 xl:px-24'>
            <div className='flex justify-center items-center'>
              <h1 className='text-[#43A047] font-bold text-lg lg:text-xl'>Confirm Your Reservation</h1>
            </div>

            <div className='mt-6 lg:mt-8'>
              <div className='flex flex-col space-y-6 lg:space-y-8'>

                <div className='flex flex-col space-y-2'>
                  <h1 className='text-[#43A047] font-semibold text-xs lg:text-sm'>Pickup</h1>
                  <h1 className='text-[#333333] font-regular text-xs lg:text-sm'>1 November, 2025</h1>
                </div>

                <div className='flex flex-col space-y-2'>
                  <h1 className='text-[#43A047] font-semibold text-xs lg:text-sm'>Return</h1>
                  <h1 className='text-[#333333] font-regular text-xs lg:text-sm'>12 November, 2025</h1>
                </div>

              </div>
            </div>

            <div className='mt-8 lg:mt-12 flex justify-center items-center border-b border-[#D5D5D5]' />

            <div className='mt-12 lg:mt-16'>
              <div className='flex flex-col space-y-4'>
                <h1 className='text-[#333333] text-xs lg:text-sm font-bold'>Title</h1>
                <p className='text-[#333333] text-xs lg:text-sm font-regular leading-loose'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, blanditiis doloremque iure excepturi nemo assumenda! Debitis consequatur obcaecati, nisi error dolore corrupti illo, maiores nihil, ut sit eum odio quibusdam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis fuga quae, mollitia aliquid eveniet impedit eum totam iusto quod quam libero animi quo ad vitae omnis, blanditiis iste laboriosam in.</p>
              </div>
            </div>

            <div className='mt-8 lg:mt-12 flex'>
              <h1 className='text-[#43A047] border-b border-[#43A047] text-xs lg:text-sm'>Terms & Conditions</h1>
            </div>

            <div className='mt-12 lg:mt-16'>
              <div className='flex justify-center items-center'>
                <button className='text-white text-sm lg:text-base bg-[#43A047] w-56 lg:w-64 xl:w-80 h-10 lg:h-12 rounded-full font-medium cursor-pointer' onClick={() => router.push('/payment')}>Proceed To Pay</button>
              </div>
            </div>

          </div>
        </section>

        <section className='mt-24 bg-[#43A047] py-12'>
          <FooterSection />
        </section>
      </main>
    </>
  )
}

export default Page
