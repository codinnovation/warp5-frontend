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

const CarGrid: React.FC<CarGridProps> = ({ title, cars, cardRoute, onCardClick }) => {
  const router = useRouter();

  const isSelectable = Boolean(cardRoute || onCardClick);

  return (
    <div className='w-[85vw] mx-auto'>
      <div className='flex justify-start items-center'>
        <h1 className='text-[#333333] text-xl lg:text-2xl xl:text-3xl font-medium'>{title}</h1>
      </div>

      <div className='relative mt-10 lg:mt-12 xl:mt-14'>
        <button className='absolute left-[-8] lg:left-[-12] xl:left-[-16] top-1/3 -translate-y-0/2 z-10 flex justify-center items-center w-8 lg:w-10 xl:w-12 h-8 lg:h-10 xl:h-12 rounded-full bg-[#000000]/60 transition-colors shadow-lg cursor-pointer'>
          <i className='ri-arrow-left-s-line text-[#fff] text-xl lg:text-2xl xl:text-3xl'></i>
        </button>

        <div className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-6 xl:gap-8'>
          {cars.map((car) => (
            <div
              key={car.id}
              className={`flex flex-col`}
              onClick={() => router.push('/equipments')}
            >
              <div className='group relative mb-3 lg:mb-4 xl:mb-5 w-full overflow-hidden rounded-4xl bg-gray-50 shadow-sm'>
                <div className='relative w-full pb-[100%]'>
                  <Image src={car.image} alt={car.name} fill className='object-cover transition-transform duration-300 group-hover:scale-[1.03]' />
                </div>

                <button className='absolute top-4 lg:top-5 xl:top-6 right-4 lg:right-5 xl:right-6 flex justify-center items-center w-8 lg:w-10 xl:w-12 h-8 lg:h-10 xl:h-12 rounded-full bg-white/50 hover:bg-[#FFF0F6] transition-colors shadow-md'>
                  <i className='ri-heart-line text-[#FF0063] text-lg lg:text-xl xl:text-2xl'></i>
                </button>
              </div>

              <div className='flex flex-col justify-center items-center'>
                <h1 className='text-base lg:text-lg xl:text-xl text-[#333333] font-semibold'>{car.name}</h1>
                <div className='flex items-center space-x-1'>
                  <i className='ri-map-pin-2-line text-[#787878] text-sm lg:text-base xl:text-lg'></i>
                  <span className='text-[#787878] text-xs lg:text-sm xl:text-base font-regular'>{car.location}</span>
                </div>

                <div className='flex items-center space-x-1 mt-1'>
                  <i className='ri-star-fill text-[#FFB800] text-sm lg:text-base xl:text-lg'></i>
                  <span className='text-[#787878] text-xs lg:text-sm xl:text-base font-medium'>{car.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className='absolute right-[-8] lg:right-[-12] xl:right-[-16] top-1/3 -translate-y-0/2 z-10 flex justify-center items-center w-8 lg:w-10 xl:w-12 h-8 lg:h-10 xl:h-12 rounded-full bg-[#000000]/60 transition-colors shadow-lg cursor-pointer'>
          <i className='ri-arrow-right-s-line text-white text-xl lg:text-2xl xl:text-3xl'></i>
        </button>
      </div>
    </div>
  );
};

export default CarGrid;
