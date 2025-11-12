import React from 'react'
import Image from 'next/image'
import AboutUsImage from '../../../public/images/about-us.png';

function WhyChooseUsSection() {

  const whyChooseUsReasons: Array<{ id: number; title: string; description: string }> = [
    {
      id: 1,
      title: 'Reliable Equipment, Always Ready',
      description: 'Our fleet is professionally maintained and inspected before every rental to ensure peak performance and safety.'
    },
    {
      id: 2,
      title: 'Fast & Easy Reservation',
      description: 'Search, compare, and reserve in minutes, no paperwork, no hassle.'
    },
    {
      id: 3,
      title: 'Transparent Pricing',
      description: 'No hidden fees. What you see is what you pay, with clear daily, or weekly.'
    },
    {
      id: 4,
      title: 'Flexible Rental Terms',
      description: 'Whether you need equipment for a day or a month, we offer plans that fit your project timeline.'
    }
  ];


  return (
    <>
      <div className='pt-36 rounded-4xl backdrop-blur-xl p-10' style={{ background: 'linear-gradient(135deg, #dffbfe 1%, #fff0f1 100%)' }}>
        <div className='w-[70vw] mx-auto grid grid-cols-2'>
          <div className='flex flex-col'>
            <div className='flex justify-center items-center'>
              <h1 className='text-[#333333] font-semibold text-4xl tracking-wide'>Why Choose Us</h1>
            </div>

            <div className='mt-20'>
              {whyChooseUsReasons.map((reason) => (
                <div key={reason.id} className='mb-20 flex items-center space-x-8'>
                  <div className='flex justify-center items-center w-7 h-7 bg-[#333333] rounded-full'>
                    <h1 className='text-white text-sm'>{reason.id}</h1>
                  </div>

                  <div className='flex flex-col space-y-4'>
                    <h1 className='text-[#333333] text-lg font-semibold'>{reason.title}</h1>
                    <p className='text-[#333333] text-base'>{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <div className='relative w-full h-full'>
              <Image src={AboutUsImage} fill alt='about_us' className='object-contain' />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default WhyChooseUsSection
