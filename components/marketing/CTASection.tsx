'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import CTAImage from '@/public/images/cta.png';

interface CTASectionProps {
  description?: string;
  ctaLabel?: string;
  ctaRoute?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  description = 'Get the gear you need. Fast, reliable, and ready for your next project.',
  ctaLabel = 'Sign Up Now',
  ctaRoute = '/signup',
}) => {
  const router = useRouter();

  return (
    <div className='w-[85vw] mx-auto'>
      <div className='relative w-full h-[400px] lg:h-[550px] xl:h-[650px] overflow-hidden rounded-4xl'>
        <Image src={CTAImage} alt='Call to Action' fill className='object-cover' priority />
        <div className='absolute inset-0 bg-black/40'></div>

        <div className='relative z-10 flex items-center h-full'>
          <div className='w-full lg:w-1/2 pl-16 lg:pl-36 xl:pl-48 pr-6 lg:pr-8 xl:pr-10'>
            <div className='flex flex-col space-y-6 lg:space-y-8 xl:space-y-10'>
              <h1 className='text-3xl lg:text-5xl xl:text-6xl tracking-wide font-semibold text-white leading-tight'>
                Reserve Your Mining or
                <br />
                Construction <span className='text-[#43A047]'>Equipment</span>
                <br />
                from us
              </h1>
              <p className='text-[#FFFFFF] font-light text-sm lg:text-base xl:text-lg'>{description}</p>
              <button
                type='button'
                className='w-36 lg:w-46 xl:w-52 h-12 lg:h-14 xl:h-16 rounded-xl border border-[#FFFFFF] text-white font-medium cursor-pointer'
                onClick={() => router.push(ctaRoute)}
              >
                {ctaLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
