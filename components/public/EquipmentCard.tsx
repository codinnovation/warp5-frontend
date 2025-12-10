import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';

interface EquipmentCardProps {
  item: {
    id: number;
    image: StaticImageData;
    name: string;
    location: string;
    rating: string;
    price: string;
  };
}

export default function EquipmentCard({ item }: EquipmentCardProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col">
      <div className="relative w-full h-[250px] md:h-[300px] xl:h-[300px] overflow-hidden rounded-3xl">
        <Image src={item.image} alt='Car' fill className='object-cover' />
      </div>

      <div className="flex flex-col items-center mt-4">
        <h1 className="text-[#333333] font-medium text-sm mt-2 xl:text-base truncate max-w-full px-2">{item.name}</h1>
        <h1 className="text-[#787878] text-xs xl:text-sm">
          <i className="ri-map-pin-2-line text-base mr-1"></i>
          {item.location}
        </h1>
        <h1 className="text-[#787878] text-xs xl:text-sm mt-1">
          <i className="ri-star-fill text-base mr-1"></i>
          {item.rating}
        </h1>

        <div className="w-full flex justify-between items-center">
          <div className="flex space-x-1 items-center">
            <h1 className="text-[#333333] font-semibold text-sm xl:text-base">{item.price}/</h1>
            <h1 className="text-[#787878] text-xs xl:text-base">day</h1>
          </div>

          <button
            className="flex justify-center items-center bg-[#43A047] hover:bg-[#388E3C] active:scale-95 transition-all px-4 py-2 md:py-3 rounded-2xl cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-[#43A047]"
            onClick={() => router.push('/equipments/details')}
          >
            <h1 className="text-white text-xs md:text-sm">View Details</h1>
          </button>
        </div>
      </div>
    </div>
  );
}
