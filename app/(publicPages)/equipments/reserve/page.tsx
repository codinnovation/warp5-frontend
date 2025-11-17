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

        <section className='mt-8 lg:mt-12 w-[85vw] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>

          <div className='shadow-xl px-8 lg:px-16 xl:px-28 py-8 lg:py-12 rounded-4xl'>
            <div className='relative w-full aspect-[3/2] bg-gray-100 overflow-hidden'>
              <Image
                src={Car1Image}
                alt=''
                fill
                sizes="(max-width: 768px) 33vw, 20vw"
                className='object-cover'
              />
            </div>

            <div className='mt-8 lg:mt-12'>
              <div className='flex flex-col'>
                <div className='flex flex-col justify-center items-start'>
                  <h1 className='text-[#43A047] font-bold text-xl lg:text-2xl'>Excavators</h1>
                  <div className='mt-2 flex flex-col space-y-1'>
                    <div className='flex'>
                      <i className="ri-map-pin-2-line"></i>
                      <h1 className='text-[#333333] text-sm lg:text-base font-regular'>Takoradi</h1>
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

            <div className='mt-8 lg:mt-12'>
              <div className='flex flex-col space-y-6 lg:space-y-8'>
                <div className='flex items-center space-x-4 lg:space-x-8'>
                  <i className="ri-check-line text-[#43A047]"></i>
                  <h1 className='text-[#333333] text-sm lg:text-base font-medium'>Digging Depth: 15 - 25 Feet</h1>
                </div>

                <div className='flex items-center space-x-4 lg:space-x-8'>
                  <i className="ri-check-line text-[#43A047]"></i>
                  <h1 className='text-[#333333] text-sm lg:text-base font-medium'>Lifting Capacity: 12,000 Pounds</h1>
                </div>

                <div className='flex items-center space-x-4 lg:space-x-8'>
                  <i className="ri-check-line text-[#43A047]"></i>
                  <h1 className='text-[#333333] text-sm lg:text-base font-medium'>Fuel Type: Diesel</h1>
                </div>

                <div className='mt-12 lg:mt-16'>
                  <div className='flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-8'>

                    <div className='flex justify-center items-center bg-[#43A047] text-white w-full h-12 lg:h-14 rounded-full space-x-2'>
                      <i className="ri-chat-3-line"></i>
                      <h1 className='text-sm lg:text-base'>Chat Vendor</h1>
                    </div>

                    <div className='flex justify-center items-center bg-[#fff] border border-[#333333] text-[#333333] w-full h-12 lg:h-14 rounded-full space-x-2'>
                      <i className="ri-flag-line"></i>
                      <h1 className='text-sm lg:text-base'>Report</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-16 lg:mt-24 flex justify-center items-center border-b border-[#D5D5D5] mx-6 lg:mx-12' />

            <div className='mt-12 lg:mt-16'>
              <div className='flex justify-between items-center'>
                <h1 className='text-[#333333] font-bold text-base lg:text-lg'>Total Amount</h1>
                <h1 className='text-[#333333] font-bold text-base lg:text-lg'>GH 300000</h1>
              </div>
            </div>
          </div>

          <div className='px-8 lg:px-16 xl:px-32'>
            <div className='flex justify-center items-center'>
              <h1 className='text-[#43A047] font-bold text-xl lg:text-2xl'>Confirm Your Reservation</h1>
            </div>

            <div className='mt-8 lg:mt-12'>
              <div className='flex flex-col space-y-8 lg:space-y-12'>

                <div className='flex flex-col space-y-2'>
                  <h1 className='text-[#43A047] font-semibold text-sm lg:text-base'>Pickup</h1>
                  <h1 className='text-[#333333] font-regular text-sm lg:text-base'>1 November, 2025</h1>
                </div>

                <div className='flex flex-col space-y-2'>
                  <h1 className='text-[#43A047] font-semibold text-sm lg:text-base'>Return</h1>
                  <h1 className='text-[#333333] font-regular text-sm lg:text-base'>12 November, 2025</h1>
                </div>

              </div>
            </div>

            <div className='mt-12 lg:mt-16 flex justify-center items-center border-b border-[#D5D5D5]' />

            <div className='mt-16 lg:mt-24'>
              <div className='flex flex-col space-y-4'>
                <h1 className='text-[#333333] text-sm lg:text-base font-bold'>Title</h1>
                <p className='text-[#333333] text-sm lg:text-base font-regular leading-loose'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, blanditiis doloremque iure excepturi nemo assumenda! Debitis consequatur obcaecati, nisi error dolore corrupti illo, maiores nihil, ut sit eum odio quibusdam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis fuga quae, mollitia aliquid eveniet impedit eum totam iusto quod quam libero animi quo ad vitae omnis, blanditiis iste laboriosam in.</p>
              </div>
            </div>

            <div className='mt-12 lg:mt-16 flex'>
              <h1 className='text-[#43A047] border-b border-[#43A047] text-sm lg:text-base'>Terms & Conditions</h1>
            </div>

            <div className='mt-16 lg:mt-24'>
              <div className='flex justify-center items-center'>
                <button className='text-white text-base lg:text-lg bg-[#43A047] w-72 lg:w-80 xl:w-100 h-12 lg:h-14 rounded-full font-medium cursor-pointer' onClick={() => router.push('/payment')}>Proceed To Pay</button>
              </div>
            </div>

          </div>
        </section>

        <section className='mt-36 bg-[#43A047] py-16'>
          <FooterSection />
        </section>
      </main>
    </>
  )
}

export default Page
