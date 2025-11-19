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
        <div className='grid grid-cols-2 gap-6 lg:grid-cols-6 lg:gap-10'>
          {cars.map((car) => (
            <div
              key={car.id}
              className={`flex flex-col`}
              onClick={() => router.push('/equipments/details')}
            >
              <div className='group relative mb-2 w-full overflow-hidden rounded-xl lg:mb-3 lg:rounded-3xl'>
                <div className='relative w-full pb-[100%]'>
                  <Image src={car.image} alt={car.name} fill className='object-cover transition-transform duration-300 group-hover:scale-[1.03]' />
                </div>

                <button className='absolute top-4 right-4 w-8 h-8 flex justify-center items-center rounded-full bg-white/50 hover:bg-[#FFF0F6]'>
                  <i className='ri-heart-line text-[#FF0063] text-base'></i>
                </button>
              </div>

              <div className='flex flex-col justify-center items-center'>
                <h1 className='text-xs text-[#333333] font-semibold lg:text-base'>{car.name}</h1>
                <div className='flex items-center space-x-1'>
                  <i className='ri-map-pin-2-line text-[#787878] text-xs lg:text-base'></i>
                  <span className='text-[#787878] text-xs lg:text-base font-regular'>{car.location}</span>
                </div>

                <div className='flex items-center space-x-1 mt-1'>
                  <i className='ri-star-fill text-[#FFB800] text-sm lg:text-base'></i>
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
