'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

interface SeeMoreSectionProps {
  title?: string;
  route?: string;
}

const SeeMoreSection: React.FC<SeeMoreSectionProps> = ({ title = 'See More', route = '/' }) => {
  const router = useRouter();

  return (
    <button
      type='button'
      className='flex justify-center items-center w-24 sm:w-32 lg:w-40 xl:w-48 h-8 sm:h-10 lg:h-12 xl:h-14 bg-[#43A047] rounded-full cursor-pointer space-x-0.5 sm:space-x-1 lg:space-x-1 xl:space-x-2'
      onClick={() => router.push(route)}
    >
      <span className='text-xs sm:text-xs lg:text-sm xl:text-base font-medium text-[#FFFFFF]'>{title}</span>
      <i className='ri-arrow-right-double-line text-[#FFFFFF] text-xs sm:text-xs lg:text-sm xl:text-base'></i>
    </button>
  );
};

export default SeeMoreSection;
