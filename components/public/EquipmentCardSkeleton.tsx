
export default function EquipmentCardSkeleton() {
    return (
        <div className="flex flex-col h-full bg-white border border-gray-100 rounded-3xl overflow-hidden">
            {/* Image Skeleton */}
            <div className="relative aspect-[4/3] bg-gray-200 animate-pulse">
                {/* Rating Badge Skeleton */}
                <div className="absolute top-3 right-3 w-12 h-6 bg-gray-300 rounded-full animate-pulse z-10" />
            </div>

            {/* Details Skeleton */}
            <div className="p-4 md:p-5 flex flex-col flex-1">
                <div className="flex-1">
                    {/* Title Line */}
                    <div className="h-5 md:h-6 w-3/4 bg-gray-200 rounded-md animate-pulse mb-2" />

                    {/* Location Line */}
                    <div className="flex items-center gap-1 mb-4">
                        <div className="w-4 h-4 rounded-full bg-gray-200 animate-pulse" />
                        <div className="h-3 md:h-4 w-1/2 bg-gray-200 rounded-md animate-pulse" />
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
                    <div className="flex flex-col gap-1">
                        <div className="h-3 w-16 bg-gray-200 rounded animate-pulse" />
                        <div className="h-5 md:h-6 w-24 bg-gray-200 rounded-md animate-pulse" />
                    </div>

                    <div className="h-10 w-10 md:h-11 md:w-11 rounded-full bg-gray-200 animate-pulse" />
                </div>
            </div>
        </div>
    );
}
