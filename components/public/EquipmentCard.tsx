import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';

interface EquipmentCardProps {
  item: {
    id: number | string;
    image?: StaticImageData | string;
    imageOne?: string; // Fallback for API data if needed
    name: string;
    location: string;
    rating: string;
    price: string;
  };
}

export default function EquipmentCard({ item }: EquipmentCardProps) {
  const router = useRouter();

  const imageSource = item.image || item.imageOne || '';

  return (
    <div
      className="group relative flex flex-col h-full bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 cursor-pointer"
      onClick={() => router.push(`/equipments/details`)}
    >
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        {imageSource ? (
          <Image
            src={imageSource}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-300">
            <i className="ri-image-line text-4xl"></i>
          </div>
        )}

        {/* Rating badge */}
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm border border-white/20 z-10">
          <i className="ri-star-fill text-yellow-400 text-xs"></i>
          <span className="text-xs font-bold text-gray-700">{item.rating}</span>
        </div>
      </div>

      {/* Details Section */}
      <div className="p-4 md:p-5 flex flex-col flex-1">
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 text-sm md:text-lg line-clamp-1 mb-1 group-hover:text-green-600 transition-colors">
            {item.name}
          </h3>
          <div className="flex items-center text-gray-500 text-xs md:text-sm mb-4">
            <i className="ri-map-pin-line mr-1 text-green-500"></i>
            <span className="truncate">{item.location}</span>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Daily Rate</span>
            <div className="flex items-baseline gap-0.5">
              <span className="text-green-600 font-bold text-base md:text-lg">{item.price}</span>
            </div>
          </div>

          <button
            className="h-10 w-10 md:h-11 md:w-11 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-green-600 transition-all duration-300 shadow-lg shadow-black/10 group-hover:shadow-green-600/20 active:scale-95"
            onClick={(e) => {
              e.stopPropagation();
              router.push(`/equipments/details`);
            }}
          >
            <i className="ri-arrow-right-line text-lg md:text-xl transform group-hover:-rotate-45 transition-transform duration-300"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
