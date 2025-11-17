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
      className='flex justify-center items-center w-40 lg:w-56 xl:w-64 h-12 lg:h-16 xl:h-18 bg-[#43A047] rounded-full cursor-pointer space-x-1 lg:space-x-2 xl:space-x-3'
      onClick={() => router.push(route)}
    >
      <span className='text-sm lg:text-base xl:text-lg font-medium text-[#FFFFFF]'>{title}</span>
      <i className='ri-arrow-right-double-line text-[#FFFFFF] text-sm lg:text-base xl:text-lg'></i>
    </button>
  );
};

export default SeeMoreSection;
