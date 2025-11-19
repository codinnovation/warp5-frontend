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

export interface EquipmentGridProps {
  title: string;
  cars: CarCardData[];
  cardRoute?: string | ((car: CarCardData) => string);
  onCardClick?: (car: CarCardData) => void;
}

const EquipmentGrid: React.FC<EquipmentGridProps> = ({ cars }) => {
  const router = useRouter();


  return (
    <div className='w-[90vw] lg:w-[85vw] mx-auto'>
      <div className='relative mt-6 lg:mt-12'>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12'>
          {cars.map((car) => (
            <div
              key={car.id}
              className={`flex flex-col`}
              onClick={() => router.push('/equipments/details')}
            >
              <div className='group relative mb-1 sm:mb-2 lg:mb-3 xl:mb-4 w-full overflow-hidden rounded-2xl xl:rounded-4xl bg-gray-50 shadow-sm'>
                <div className='relative w-full pb-[100%]'>
                  <Image src={car.image} alt={car.name} fill className='object-cover transition-transform duration-300 group-hover:scale-[1.03]' />
                </div>

                <button className='absolute top-6 right-6 sm:top-4 lg:top-4 xl:top-5 right-2 sm:right-3 lg:right-4 xl:right-5 flex justify-center items-center w-8 sm:w-6 lg:w-8 xl:w-10 h-8 sm:h-6 lg:h-8 xl:h-10 rounded-full bg-white/50 hover:bg-[#FFF0F6] transition-colors shadow-md'>
                  <i className='ri-heart-line text-[#FF0063] text-xs lg:text-base'></i>
                </button>
              </div>

              <div className='flex flex-col justify-center items-center'>
                <h1 className='text-sm lg:text-lg text-[#333333] font-semibold'>{car.name}</h1>
                <div className='flex items-center space-x-1'>
                  <i className='ri-map-pin-2-line text-[#787878] text-xs lg:text-base'></i>
                  <span className='text-[#787878] text-xs lg:text-base font-regular'>{car.location}</span>
                </div>

                <div className='flex items-center space-x-1 mt-0.5 sm:mt-1'>
                  <i className='ri-star-fill text-[#FFB800] text-xs lg:text-base'></i>
                  <span className='text-[#787878] text-xs lg:text-base font-medium'>{car.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EquipmentGrid;
