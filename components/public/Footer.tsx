'use client';

import Image from 'next/image';
import Link from 'next/link';
import WarpLogoWhite from '@/public/logo/warp-logo-white.svg';


function Footer() {
  return (
    <>
      <footer className='mt-12 md:mt-16 xl:mt-20 bg-[#43A047]'>
        <div className="max-w-5xl mx-auto py-12 md:py-16 xl:py-20">
          <div className='grid grid-cols-1 gap-12 md:gap-16 md:grid-cols-2 xl:grid-cols-[1fr_auto] xl:gap-20'>
            <div className='flex flex-col items-center justify-center xl:items-start'>
              <Image src={WarpLogoWhite} alt='Warp Logo' width={100} height={100} className='w-28 xl:w-48' />

              <div className='mt-8 xl:mt-12'>
                <div className='flex justify-center items-center xl:justify-start'>
                  <h1 className='text-base md:text-lg text-[#FFFFFF] font-semibold xl:text-xl'>Quick Links</h1>
                </div>
                <div className='flex space-x-6 md:space-x-8 mt-4 justify-center xl:justify-start'>
                  <Link href='#' className='text-[#FFFFFF] text-xs md:text-sm lg:text-base font-light hover:underline transition-all'>
                    About
                  </Link>
                  <Link href='#' className='text-[#FFFFFF] text-xs md:text-sm lg:text-base font-light hover:underline transition-all'>
                    Blog
                  </Link>
                  <Link href='#' className='text-[#FFFFFF] text-xs md:text-sm lg:text-base font-light hover:underline transition-all'>
                    Careers
                  </Link>
                </div>
              </div>
            </div>

            <div className='flex flex-col items-center justify-start text-start md:items-start'>
              <h1 className='text-base md:text-lg text-[#FFFFFF] font-semibold xl:text-xl'>Get In Touch</h1>

              <div className='flex flex-col mt-4 space-y-3 md:space-y-4'>
                <p className='text-[#FFFFFF] text-xs md:text-sm xl:text-base font-light'>123 Main Street, Accra, Ghana</p>
                <p className='text-[#FFFFFF] text-xs md:text-sm xl:text-base font-light'>info@warp5.com</p>
                <p className='text-[#FFFFFF] text-xs md:text-sm xl:text-base font-light'>+233 123 456 789 / +233 *** ****</p>
              </div>
            </div>
          </div>

          <div className='mt-12 md:mt-16 xl:mt-20'>
            <div className='flex justify-center items-center'>
              <p className='text-[#FFFFFF] text-xs md:text-sm xl:text-base'>&copy; {new Date().getFullYear()} Warp5. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
