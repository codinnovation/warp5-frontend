import React from 'react';
import Image from 'next/image';
import CTAImage from '../../../public/images/cta.png';

function CTASection() {
  return (
    <>
      <div className='mt-20'>
        <div className='w-[90vw] mx-auto'>
          <div className='relative w-full h-[550px] overflow-hidden rounded-4xl'>
            <Image
              src={CTAImage}
              alt='Call to Action'
              fill
              className='object-cover'
              priority
            />
            <div className='absolute inset-0 bg-black/40'></div>

            <div className='relative z-10 flex items-center h-full'>
              <div className='w-1/2 pl-36 pr-8'>
                <div className='flex flex-col space-y-6'>
                  <h1 className='text-5xl tracking-wide font-semibold text-white leading-tight'>
                    Reserve Your Mining or<br />
                    Construction <span className='text-[#43A047]'>Equipment</span><br />
                    from us
                  </h1>

                  <p className='text-[#FFFFFF] font-light text-base'>Get the gear you need. Fast, reliable, and ready for your next project.</p>

                  <button className='w-36 h-16 rounded-xl border border-[#FFFFFF] text-white'>Sign Up Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CTASection
