import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import WarpLogoWhite from '../public/logo/warp-logo-white.svg'

function FooterSection() {
  return (
    <>
      <div className='mt-40 bg-[#43A047] py-16'>

        <div className='w-[40vw] mx-auto'>
          <div className='grid grid-cols-[1fr_auto] gap-8'>

            <div className='flex flex-col items-start justify-center'>
              <Image src={WarpLogoWhite} alt='Warp Logo'
                width={100}
                height={100}
                className='w-36'
              />

              <div className='mt-10'>
                <div className='flex justify-center items-center'>
                  <h1 className='text-lg text-[#FFFFFF] font-semibold'>Quick Links</h1>
                </div>
                <div className='flex space-x-6 mt-3'>
                  <Link href='#' className='text-[#FFFFFF] text-sm font-light'>About</Link>
                  <Link href='#' className='text-[#FFFFFF] text-sm font-light'>Blog</Link>
                  <Link href='#' className='text-[#FFFFFF] text-sm font-light'>Careers</Link>
                </div>
              </div>
            </div>

            <div className='flex flex-col items-start justify-start'>
              <h1 className='text-lg text-[#FFFFFF] font-semibold'>Get In Touch</h1>

              <div className='flex flex-col mt-4 space-y-4'>
                <p className='text-[#FFFFFF] text-sm font-light'>123 Main Street, Accra, Ghana</p>
                <p className='text-[#FFFFFF] text-sm font-light'>info@warp5.com</p>
                <p className='text-[#FFFFFF] text-sm font-light'>+233 123 456 789 / +233 *** ****</p>
              </div>
            </div>


          </div>

          {/* Copyright */}
          <div className='mt-12 pt-8'>
            <div className='flex justify-center items-center'>
              <p className='text-[#FFFFFF] text-sm'>
                &copy; {new Date().getFullYear()} Warp5. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FooterSection
