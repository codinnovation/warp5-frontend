'use client';

import { useRef } from 'react';
import EquipmentCard from './EquipmentCard';
import EquipmentCardSkeleton from './EquipmentCardSkeleton';

interface Equipment {
    id: number;
    name: string;
    imageOne: string;
    location: string;
    rating?: number | string;
    price?: number | string;
}

interface EquipmentRowProps {
    title: string;
    data: Equipment[] | undefined;
    isLoading: boolean;
}

export default function EquipmentRow({ title, data, isLoading }: EquipmentRowProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollAmount = container.clientWidth / (window.innerWidth >= 1280 ? 2 : 1); // Scroll amount dynamic
            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className="mt-12 md:mt-16 xl:mt-20">
            <div className="max-w-[95vw] xl:max-w-[85vw] mx-auto">
                <div className="flex items-center justify-between mb-6 px-1">
                    <h1 className="text-[#333333] font-medium text-base md:text-lg">{title}</h1>

                    <div className="flex gap-2">
                        <button
                            onClick={() => scroll('left')}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all active:scale-95"
                            aria-label="Previous"
                        >
                            <i className="ri-arrow-left-s-line text-lg"></i>
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all active:scale-95"
                            aria-label="Next"
                        >
                            <i className="ri-arrow-right-s-line text-lg"></i>
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory scroll-smooth"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {isLoading ? (
                        Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="min-w-[85%] md:min-w-[calc(33.333%-1rem)] lg:min-w-[calc(25%-1.125rem)] xl:min-w-[calc(20%-1.2rem)] snap-start shrink-0">
                                <EquipmentCardSkeleton />
                            </div>
                        ))
                    ) : (
                        data?.map((item: Equipment, index: number) => (
                            <div key={index} className="min-w-[85%] md:min-w-[calc(33.333%-1rem)] lg:min-w-[calc(25%-1.125rem)] xl:min-w-[calc(20%-1.2rem)] snap-start shrink-0">
                                <EquipmentCard
                                    item={{
                                        id: item.id,
                                        imageOne: item.imageOne,
                                        name: item.name,
                                        location: item.location,
                                        rating: item.rating ? item.rating.toString() : '0',
                                        price: item.price ? item.price.toString() : '0',
                                    }}
                                />
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}
