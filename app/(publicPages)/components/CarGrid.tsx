'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface Car {
  id: number;
  image: any;
  name: string;
  location: string;
  rating: string;
}

interface CarGridProps {
  title: string;
  cars: Car[];
}

const CarGrid: React.FC<CarGridProps> = ({ title, cars }) => {
  const router = useRouter();

  return (
    <div className='w-[85vw] mx-auto'>
      <div className='flex justify-start items-center'>
        <h1 className='text-[#333333] text-2xl font-medium'>{title}</h1>
      </div>

      <div className='relative mt-12'>
        <button className='absolute left-[-12] top-1/3 -translate-y-0/2 z-10 flex justify-center items-center w-10 h-10 rounded-full bg-[#000000]/60 transition-colors shadow-lg cursor-pointer'>
          <i className="ri-arrow-left-s-line text-[#fff] text-2xl"></i>
        </button>

        <div className='grid grid-cols-5 gap-4'>
          {cars.map((car) => (
            <div key={car.id} className='flex flex-col cursor-pointer' onClick={() => router.push('/details')}>
              <div className='group relative mb-4 w-full overflow-hidden rounded-4xl bg-gray-50 shadow-sm'>
                <div className='relative w-full pb-[100%]'>
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className='object-cover transition-transform duration-300 group-hover:scale-[1.03]'
                  />
                </div>

                <button className='absolute top-3 right-3 flex justify-center items-center w-10 h-10 rounded-full bg-white/50 hover:bg-[#FFF0F6] transition-colors shadow-md'>
                  <i className="ri-heart-line text-[#FF0063] text-xl"></i>
                </button>
              </div>

              <div className='flex flex-col justify-center items-center'>
                <h1 className='text-lg text-[#333333] font-semibold'>{car.name}</h1>
                <div className='flex items-center space-x-1'>
                  <i className="ri-map-pin-2-line text-[#787878]"></i>
                  <h1 className='text-[#787878] text-sm font-regular'>{car.location}</h1>
                </div>

                <div className='flex items-center space-x-1 mt-1'>
                  <i className="ri-star-fill text-[#FFB800]"></i>
                  <h1 className='text-[#787878] text-sm font-medium'>{car.rating}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className='absolute right-[-12] top-1/3 -translate-y-0/2 z-10 flex justify-center items-center w-10 h-10 rounded-full bg-[#000000]/60 transition-colors shadow-lg cursor-pointer'>
          <i className="ri-arrow-right-s-line text-white text-xl"></i>
        </button>
      </div>
    </div>
  );
};

export default CarGrid;