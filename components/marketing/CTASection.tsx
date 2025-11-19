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
      <div className='relative w-full h-[250px] sm:h-[350px] lg:h-[450px] xl:h-[550px] overflow-hidden rounded-2xl xl:rounded-4xl'>
        <Image src={CTAImage} alt='Call to Action' fill className='object-cover' priority />
        <div className='absolute inset-0 bg-black/40'></div>

        <div className='relative z-10 flex items-center justify-start h-full'>
          <div className='w-full lg:w-1/2 px-4 sm:px-6 lg:px-0 lg:pl-24 xl:pl-32 lg:pr-6 xl:pr-8'>
            <div className='flex flex-col items-start space-y-3 '>
              <h1 className='text-base lg:text-4xl font-semibold text-white leading-tight'>
                Reserve Your Mining or
                <br />
                Construction <span className='text-[#43A047]'>Equipment</span>
                <br />
                from us
              </h1>
              <p className='text-[#FFFFFF] font-light text-xs lg:text-base'>{description}</p>
              <button
                type='button'
                className='w-auto text-xs py-2 px-5 rounded-lg lg:text-base lg:w-36 xl:w-44 h-8 lg:h-12 xl:h-14 xl:rounded-xl lg:rounded-xl border border-[#FFFFFF] text-white font-medium cursor-pointer'
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
