import React from 'react';
import Image from 'next/image';
import AboutUsImage from '@/public/images/about-us.png';

const reasons = [
  {
    id: 1,
    title: 'Reliable Equipment, Always Ready',
    description: 'Our fleet is professionally maintained and inspected before every rental to ensure peak performance and safety.',
  },
  {
    id: 2,
    title: 'Fast & Easy Reservation',
    description: 'Search, compare, and reserve in minutes—no paperwork, no hassle.',
  },
  {
    id: 3,
    title: 'Transparent Pricing',
    description: 'No hidden fees. What you see is what you pay, with clear daily or weekly rates.',
  },
  {
    id: 4,
    title: 'Flexible Rental Terms',
    description: 'Whether you need equipment for a day or a month, we offer plans that fit your project timeline.',
  },
];

const WhyChooseUsSection: React.FC = () => {
  return (
    <div className='w-[65vw] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16'>
      <div className='flex flex-col'>
        <div className='flex justify-center items-center'>
          <h1 className='text-[#333333] font-semibold text-3xl lg:text-4xl xl:text-5xl tracking-wide'>Why Choose Us</h1>
        </div>

        <div className='mt-16 lg:mt-20 xl:mt-24'>
          {reasons.map((reason) => (
            <div key={reason.id} className='mb-8 lg:mb-12 xl:mb-16 grid grid-cols-[auto_1fr] justify-start space-x-6 lg:space-x-8 xl:space-x-10'>
              <div className='flex justify-center items-center w-8 lg:w-10 xl:w-12 h-8 lg:h-10 xl:h-12 bg-[#333333] rounded-full'>
                <span className='text-white text-xs lg:text-sm xl:text-base'>{reason.id}</span>
              </div>

              <div className='flex flex-col space-y-3 lg:space-y-4 xl:space-y-5'>
                <h2 className='text-[#333333] text-base lg:text-lg xl:text-xl font-semibold'>{reason.title}</h2>
                <p className='text-[#333333] text-sm lg:text-base xl:text-lg'>{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='flex items-center justify-center'>
        <div className='relative w-full h-full min-h-[300px] lg:min-h-[400px] xl:min-h-[500px]'>
          <Image src={AboutUsImage} fill alt='Why choose us' className='object-contain' />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
