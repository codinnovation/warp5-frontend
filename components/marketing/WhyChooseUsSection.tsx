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
    <div className='w-[80vw] lg:w-[65vw] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8'>
      <div className='flex flex-col'>
        <div className='flex justify-center items-center'>
          <h1 className='text-[#333333] font-semibold text-base lg:text-xl'>Why Choose Us</h1>
        </div>

        <div className='mt-8 sm:mt-12 lg:mt-16 xl:mt-20'>
          {reasons.map((reason) => (
            <div key={reason.id} className='mb-4 sm:mb-6 lg:mb-8 xl:mb-10 grid grid-cols-[auto_1fr] justify-start space-x-3 sm:space-x-4 lg:space-x-6 xl:space-x-8'>
              <div className='flex justify-center items-center w-4 sm:w-6 lg:w-8 xl:w-10 h-4 sm:h-6 lg:h-8 xl:h-10 bg-[#333333] rounded-full'>
                <span className='text-white text-xs lg:text-base'>{reason.id}</span>
              </div>

              <div className='flex flex-col space-y-1 sm:space-y-2 lg:space-y-3 xl:space-y-4'>
                <h2 className='text-[#333333] text-sm lg:text-lg font-semibold'>{reason.title}</h2>
                <p className='text-[#333333] text-xs lg:text-base'>{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='flex items-center justify-center'>
        <div className='relative w-full h-full min-h-[200px] sm:min-h-[250px] lg:min-h-[300px] xl:min-h-[400px]'>
          <Image src={AboutUsImage} fill alt='Why choose us' className='object-contain' />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
