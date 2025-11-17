import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import WarpLogoWhite from '@/public/logo/warp-logo-white.svg';

const FooterSection: React.FC = () => {
  return (
    <footer className='w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto'>
      <div className='grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-8 xl:gap-10'>
        <div className='flex flex-col items-start justify-center'>
          <Image src={WarpLogoWhite} alt='Warp Logo' width={100} height={100} className='w-32 lg:w-36 xl:w-40' />

          <div className='mt-8 lg:mt-10 xl:mt-12'>
            <div className='flex justify-center items-center'>
              <h1 className='text-base lg:text-lg xl:text-xl text-[#FFFFFF] font-semibold'>Quick Links</h1>
            </div>
            <div className='flex space-x-4 lg:space-x-6 xl:space-x-8 mt-3'>
              <Link href='#' className='text-[#FFFFFF] text-xs lg:text-sm xl:text-base font-light'>
                About
              </Link>
              <Link href='#' className='text-[#FFFFFF] text-xs lg:text-sm xl:text-base font-light'>
                Blog
              </Link>
              <Link href='#' className='text-[#FFFFFF] text-xs lg:text-sm xl:text-base font-light'>
                Careers
              </Link>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-start justify-start'>
          <h1 className='text-base lg:text-lg xl:text-xl text-[#FFFFFF] font-semibold'>Get In Touch</h1>

          <div className='flex flex-col mt-4 space-y-3 lg:space-y-4 xl:space-y-5'>
            <p className='text-[#FFFFFF] text-xs lg:text-sm xl:text-base font-light'>123 Main Street, Accra, Ghana</p>
            <p className='text-[#FFFFFF] text-xs lg:text-sm xl:text-base font-light'>info@warp5.com</p>
            <p className='text-[#FFFFFF] text-xs lg:text-sm xl:text-base font-light'>+233 123 456 789 / +233 *** ****</p>
          </div>
        </div>
      </div>

      <div className='mt-10 lg:mt-12 xl:mt-14 pt-6 lg:pt-8 xl:pt-10'>
        <div className='flex justify-center items-center'>
          <p className='text-[#FFFFFF] text-xs lg:text-sm xl:text-base'>&copy; {new Date().getFullYear()} Warp5. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
