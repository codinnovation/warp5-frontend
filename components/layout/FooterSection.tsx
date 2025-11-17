import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import WarpLogoWhite from '@/public/logo/warp-logo-white.svg';

const FooterSection: React.FC = () => {
  return (
    <footer className='w-full max-w-xl sm:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto py-6 sm:py-8 lg:py-10 xl:py-12'>
      <div className='grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 sm:gap-8 lg:gap-6 xl:gap-8'>
        <div className='flex flex-col items-center justify-center text-center lg:items-start lg:text-left'>
          <Image src={WarpLogoWhite} alt='Warp Logo' width={100} height={100} className='w-20 sm:w-24 lg:w-28 xl:w-32' />

          <div className='mt-6 sm:mt-8 lg:mt-8 xl:mt-10'>
            <div className='flex justify-center items-center lg:justify-start'>
              <h1 className='text-xs sm:text-sm lg:text-base xl:text-lg text-[#FFFFFF] font-semibold'>Quick Links</h1>
            </div>
            <div className='flex flex-col space-y-2 lg:flex-row lg:space-y-0 lg:space-x-4 xl:space-x-5 mt-4 sm:mt-6 justify-center items-center lg:justify-start lg:items-start'>
              <Link href='#' className='text-[#FFFFFF] text-xs sm:text-xs lg:text-sm xl:text-base font-light'>
                About
              </Link>
              <Link href='#' className='text-[#FFFFFF] text-xs sm:text-xs lg:text-sm xl:text-base font-light'>
                Blog
              </Link>
              <Link href='#' className='text-[#FFFFFF] text-xs sm:text-xs lg:text-sm xl:text-base font-light'>
                Careers
              </Link>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center justify-start text-center lg:items-start lg:text-left'>
          <h1 className='text-xs sm:text-sm lg:text-base xl:text-lg text-[#FFFFFF] font-semibold'>Get In Touch</h1>

          <div className='flex flex-col mt-4 sm:mt-6 space-y-2 sm:space-y-3 lg:space-y-3 xl:space-y-4'>
            <p className='text-[#FFFFFF] text-xs sm:text-xs lg:text-sm xl:text-base font-light'>123 Main Street, Accra, Ghana</p>
            <p className='text-[#FFFFFF] text-xs sm:text-xs lg:text-sm xl:text-base font-light'>info@warp5.com</p>
            <p className='text-[#FFFFFF] text-xs sm:text-xs lg:text-sm xl:text-base font-light'>+233 123 456 789 / +233 *** ****</p>
          </div>
        </div>
      </div>

      <div className='mt-8 sm:mt-10 lg:mt-10 xl:mt-12 pt-4 sm:pt-6 lg:pt-6 xl:pt-8'>
        <div className='flex justify-center items-center'>
          <p className='text-[#FFFFFF] text-xs sm:text-xs lg:text-sm xl:text-base'>&copy; {new Date().getFullYear()} Warp5. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
