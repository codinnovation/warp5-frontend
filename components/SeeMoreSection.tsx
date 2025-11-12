'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

function SeeMoreSection({ title }: { title?: string }) {
  const router = useRouter();

  const handleSeeMore = (route: string) => {
    router.push(route);
  }

  return (
    <>
      <div className='flex justify-center items-center w-56 h-16 bg-[#43A047] rounded-full cursor-pointer' onClick={() => handleSeeMore('/reservations')}>
        <h1 className='text-base font-medium text-[#FFFFFF]'>{title || 'See More'}</h1>
        <i className="ri-arrow-right-double-line text-[#FFFFFF]"></i>
      </div>
    </>
  )
}

export default SeeMoreSection
