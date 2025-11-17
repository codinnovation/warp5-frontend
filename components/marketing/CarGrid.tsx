'use client';

import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';

export interface CarCardData {
  id: number;
  image: StaticImageData | string;
  name: string;
  location: string;
  rating: string;
}

export interface CarGridProps {
  title: string;
  cars: CarCardData[];
  cardRoute?: string | ((car: CarCardData) => string);
  onCardClick?: (car: CarCardData) => void;
}

const CarGrid: React.FC<CarGridProps> = ({ title, cars }) => {
  const router = useRouter();


  return (
    <div className='w-[85vw] mx-auto'>
      <div className='flex justify-start items-center'>
        <h1 className='text-[#333333] text-base sm:text-lg lg:text-xl xl:text-2xl font-medium'>{title}</h1>
      </div>

      <div className='relative mt-6 sm:mt-8 lg:mt-10 xl:mt-12'>
        <button className='absolute left-[-4] sm:left-[-6] lg:left-[-8] xl:left-[-10] top-1/3 -translate-y-0/2 z-10 flex justify-center items-center w-4 sm:w-6 lg:w-8 xl:w-10 h-4 sm:h-6 lg:h-8 xl:h-10 rounded-full bg-[#000000]/60 transition-colors shadow-lg cursor-pointer'>
          <i className='ri-arrow-left-s-line text-[#fff] text-base sm:text-lg lg:text-xl xl:text-2xl'></i>
        </button>

        <div className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 gap-2 sm:gap-3 lg:gap-8 xl:gap-12'>
          {cars.map((car) => (
            <div
              key={car.id}
              className={`flex flex-col`}
              onClick={() => router.push('/equipments')}
            >
              <div className='group relative mb-1 sm:mb-2 lg:mb-3 xl:mb-4 w-full overflow-hidden rounded-4xl bg-gray-50 shadow-sm'>
                <div className='relative w-full pb-[100%]'>
                  <Image src={car.image} alt={car.name} fill className='object-cover transition-transform duration-300 group-hover:scale-[1.03]' />
                </div>

                <button className='absolute top-2 sm:top-3 lg:top-4 xl:top-5 right-2 sm:right-3 lg:right-4 xl:right-5 flex justify-center items-center w-4 sm:w-6 lg:w-8 xl:w-10 h-4 sm:h-6 lg:h-8 xl:h-10 rounded-full bg-white/50 hover:bg-[#FFF0F6] transition-colors shadow-md'>
                  <i className='ri-heart-line text-[#FF0063] text-sm sm:text-base lg:text-lg xl:text-xl'></i>
                </button>
              </div>

              <div className='flex flex-col justify-center items-center'>
                <h1 className='text-xs sm:text-sm lg:text-base xl:text-lg text-[#333333] font-semibold'>{car.name}</h1>
                <div className='flex items-center space-x-1'>
                  <i className='ri-map-pin-2-line text-[#787878] text-xs sm:text-xs lg:text-sm xl:text-base'></i>
                  <span className='text-[#787878] text-xs sm:text-xs lg:text-sm xl:text-base font-regular'>{car.location}</span>
                </div>

                <div className='flex items-center space-x-1 mt-0.5 sm:mt-1'>
                  <i className='ri-star-fill text-[#FFB800] text-xs sm:text-xs lg:text-sm xl:text-base'></i>
                  <span className='text-[#787878] text-xs sm:text-xs lg:text-sm xl:text-base font-medium'>{car.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className='absolute right-[-4] sm:right-[-6] lg:right-[-8] xl:right-[-10] top-1/3 -translate-y-0/2 z-10 flex justify-center items-center w-4 sm:w-6 lg:w-8 xl:w-10 h-4 sm:h-6 lg:h-8 xl:h-10 rounded-full bg-[#000000]/60 transition-colors shadow-lg cursor-pointer'>
          <i className='ri-arrow-right-s-line text-white text-base sm:text-lg lg:text-xl xl:text-2xl'></i>
        </button>
      </div>
    </div>
  );
};

export default CarGrid;
