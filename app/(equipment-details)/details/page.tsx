'use client'

import React from 'react';
import Image from 'next/image';
import PageHeader from '../../../components/PageHeader';
import Car1Image from '../../../public/images/details1.png';

function Page() {
  return (
    <>
      <div className='h-screen bg-white'>
        <div className='mx-auto'>
          <PageHeader />

          <div className='w-[85vw] mx-auto grid grid-cols-2'>

            <div className='flex flex-col'>
              <div className='w-full bg-black'>
                <Image src={Car1Image} alt='Car Image' fill className='object-contain' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
