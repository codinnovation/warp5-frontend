import React from 'react';
import EquipmentCard from './EquipmentCard';
import EquipmentCardSkeleton from './EquipmentCardSkeleton';

interface SearchResultItem {
    id: number | string;
    imageOne?: string;
    image?: any;
    name: string;
    location: string;
    rating: string | number;
    price: string | number;
}

interface SearchResultsListProps {
    isLoading: boolean;
    results: SearchResultItem[];
    emptyMessage?: string;
}

export default function SearchResultsList({
    isLoading,
    results,
    emptyMessage = "No equipment found matching your criteria."
}: SearchResultsListProps) {

    if (isLoading) {
        return (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 lg:gap-12">
                {Array.from({ length: 10 }).map((_, index) => (
                    <EquipmentCardSkeleton key={index} />
                ))}
            </div>
        );
    }

    if (!results || results.length === 0) {
        return (
            <div className="w-full text-center py-20 text-gray-500">
                <p className="text-xl">{emptyMessage}</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 lg:gap-12">
            {results.map((item, index) => (
                <EquipmentCard
                    key={index}
                    item={{
                        id: item.id,
                        imageOne: item.imageOne,
                        image: item.image,
                        name: item.name,
                        location: item.location,
                        rating: item.rating.toString(),
                        price: item.price.toString(),
                    }}
                />
            ))}
        </div>
    );
}
