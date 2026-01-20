'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';
import PageHeader from '@/components/public/PageHeader';
import Footer from '@/components/public/Footer';
import LocationModal from '@/components/public/LocationModal';
import EquipmentModal from '@/components/public/EquipmentModal';
import PriceModal from '@/components/public/PriceModal';
import DateModal from '@/components/public/DateModal';
import SearchResultsList from '@/components/public/SearchResultsList';
import { useEquipment, Equipment } from '@/context/equipmentContext';
import { useUser } from '@/context/userContext';

function EquipmentsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { equipment, isLoading } = useEquipment();
  const { user } = useUser();

  const [showLocationModal, setShowLocationModal] = useState(false);
  const [showEquipmentModal, setShowEquipmentModal] = useState(false);
  const [showPriceRangeModal, setShowPriceRangeModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Select Your City');
  const [selectedEquipment, setSelectedEquipment] = useState('Choose Type');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [showDateRangeModal, setShowDateRangeModal] = useState(false);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  console.log('user', user)

  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<Equipment[] | null>(null);

  const performSearch = async (params: URLSearchParams) => {
    setIsSearching(true);
    setSearchResults(null);

    try {
      const res = await fetch(`/api/searchRoutes/filtering?${params.toString()}`);
      const data = await res.json();

      if (res.ok) {
        setSearchResults(data.data);
        // Only show toast if it was a manual search or explicit URL navigation, 
        // maybe suppress on initial load if desired, but "Equipment found" is fine.
        toast.success(data.message);
      } else {
        toast.error(data.message || "Search failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while searching.");
    } finally {
      setIsSearching(false);
    }
  };

  const handleManualSearch = () => {
    const params = new URLSearchParams();

    if (selectedLocation && selectedLocation !== 'Select Your City') {
      params.append('location', selectedLocation);
    }
    if (selectedEquipment && selectedEquipment !== 'Choose Type') {
      params.append('name', selectedEquipment);
    }
    if (minPrice) params.append('minPrice', minPrice);
    if (maxPrice) params.append('maxPrice', maxPrice);
    if (fromDate) params.append('fromDate', fromDate);
    if (toDate) params.append('toDate', toDate);

    performSearch(params);
  };

  // Effect to handle URL params
  useEffect(() => {
    // Only run if there are search params
    if (searchParams.toString()) {
      const location = searchParams.get('location');
      const name = searchParams.get('name');
      const minP = searchParams.get('minPrice');
      const maxP = searchParams.get('maxPrice');
      const fromD = searchParams.get('fromDate');
      const toD = searchParams.get('toDate');

      // Update local state to reflect URL
      if (location) setSelectedLocation(location);
      if (name) setSelectedEquipment(name);
      if (minP) setMinPrice(minP);
      if (maxP) setMaxPrice(maxP);
      if (fromD) setFromDate(fromD);
      if (toD) setToDate(toD);

      // Perform search
      performSearch(new URLSearchParams(searchParams.toString()));
    }
  }, [searchParams]);


  const displayData = searchResults || equipment?.data || [];
  const isDataLoading = isSearching || (!searchResults && isLoading);

  return (
    <>
      <main className="min-h-screen bg-gray-50/50">
        <PageHeader />

        <section className="pt-28 pb-10 bg-white border-b border-gray-100">
          <div className="max-w-[95vw] xl:max-w-[90vw] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <h1 className="text-lg md:text-2xl lg:text-4xl font-bold text-gray-900 mb-2">Explore Inventory</h1>
                <p className="text-gray-500 text-sm md:text-base">Find the perfect machinery for your next project.</p>
              </div>
              <div className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-500">
                <span>
                  {isDataLoading ? 'Loading equipment...' : `Showing ${displayData.length} results`}
                </span>
                {searchResults && (
                  <button
                    onClick={() => {
                      setSearchResults(null);
                      setSelectedLocation('Select Your City');
                      setSelectedEquipment('Choose Type');
                      setMinPrice('');
                      setMaxPrice('');
                      setFromDate('');
                      setToDate('');
                      router.push('/equipments'); // Clear URL params
                    }}
                    className="ml-2 text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-md text-gray-600 transition-colors"
                  >
                    Clear Search
                  </button>
                )}
              </div>
            </div>

            {/* Sticky-ish Filter Bar */}
            <div className="bg-white rounded-3xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-gray-100 p-2 md:p-2 max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-center">

                {/* Location */}
                <div className="relative md:col-span-3 group border-b md:border-b-0 border-gray-100">
                  <div className="px-4 md:px-6 py-4 md:py-3 cursor-pointer hover:bg-gray-50 md:rounded-full transition-colors relative"
                    onClick={() => {
                      setShowLocationModal(!showLocationModal);
                      setShowEquipmentModal(false);
                      setShowPriceRangeModal(false);
                      setShowDateRangeModal(false);
                    }}>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 group-hover:text-green-600 transition-colors">Location</label>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm truncate font-medium ${selectedLocation !== 'Select Your City' ? 'text-gray-900' : 'text-gray-400'}`}>
                        {selectedLocation}
                      </span>
                      <i className="ri-map-pin-line text-lg text-gray-400 group-hover:text-green-600 transition-colors"></i>
                    </div>
                  </div>
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-8 bg-gray-200"></div>
                  <LocationModal show={showLocationModal} selectedLocation={selectedLocation} onSelect={setSelectedLocation} onClose={() => setShowLocationModal(false)} />
                </div>

                {/* Equipment Type */}
                <div className="relative md:col-span-3 group border-b md:border-b-0 border-gray-100">
                  <div className="px-4 md:px-6 py-4 md:py-3 cursor-pointer hover:bg-gray-50 md:rounded-full transition-colors relative"
                    onClick={() => {
                      setShowEquipmentModal(!showEquipmentModal);
                      setShowLocationModal(false);
                      setShowPriceRangeModal(false);
                      setShowDateRangeModal(false);
                    }}>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 group-hover:text-green-600 transition-colors">Equipment</label>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm truncate font-medium ${selectedEquipment !== 'Choose Type' ? 'text-gray-900' : 'text-gray-400'}`}>
                        {selectedEquipment}
                      </span>
                      <i className="ri-tools-line text-lg text-gray-400 group-hover:text-green-600 transition-colors"></i>
                    </div>
                  </div>
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-8 bg-gray-200"></div>
                  <EquipmentModal show={showEquipmentModal} selectedEquipment={selectedEquipment} onSelect={setSelectedEquipment} onClose={() => setShowEquipmentModal(false)} />
                </div>

                {/* Price Range */}
                <div className="relative md:col-span-2 group border-b md:border-b-0 border-gray-100">
                  <div className="px-4 md:px-6 py-4 md:py-3 cursor-pointer hover:bg-gray-50 md:rounded-full transition-colors relative"
                    onClick={() => {
                      setShowPriceRangeModal(!showPriceRangeModal);
                      setShowLocationModal(false);
                      setShowEquipmentModal(false);
                      setShowDateRangeModal(false);
                    }}>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 group-hover:text-green-600 transition-colors">Price</label>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm truncate font-medium ${minPrice && maxPrice ? 'text-gray-900' : 'text-gray-400'}`}>
                        {minPrice && maxPrice ? `GH₵${minPrice}+` : 'Range'}
                      </span>
                      <i className="ri-money-dollar-circle-line text-lg text-gray-400 group-hover:text-green-600 transition-colors"></i>
                    </div>
                  </div>
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-8 bg-gray-200"></div>
                  <PriceModal show={showPriceRangeModal} minPrice={minPrice} maxPrice={maxPrice} onMinPriceChange={setMinPrice} onMaxPriceChange={setMaxPrice} onClose={() => setShowPriceRangeModal(false)} />
                </div>

                {/* Date Range */}
                <div className="relative md:col-span-3 group">
                  <div className="px-4 md:px-6 py-4 md:py-3 cursor-pointer hover:bg-gray-50 md:rounded-full transition-colors relative"
                    onClick={() => {
                      setShowDateRangeModal(!showDateRangeModal);
                      setShowLocationModal(false);
                      setShowEquipmentModal(false);
                      setShowPriceRangeModal(false);
                    }}>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 group-hover:text-green-600 transition-colors">Dates</label>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm truncate font-medium ${fromDate && toDate ? 'text-gray-900' : 'text-gray-400'}`}>
                        {fromDate && toDate ? `${fromDate}..` : 'Add Dates'}
                      </span>
                      <i className="ri-calendar-line text-lg text-gray-400 group-hover:text-green-600 transition-colors"></i>
                    </div>
                  </div>
                  <DateModal show={showDateRangeModal} fromDate={fromDate} toDate={toDate} onFromDateChange={setFromDate} onToDateChange={setToDate} onClose={() => setShowDateRangeModal(false)} onCancel={() => { setFromDate(''); setToDate(''); setShowDateRangeModal(false); }} />
                </div>

                {/* Search Button */}
                <div className="md:col-span-1 p-1 mt-2 md:mt-0">
                  <button
                    onClick={handleManualSearch}
                    disabled={isSearching}
                    className="w-full h-12 md:h-14 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white rounded-xl md:rounded-full flex items-center justify-center gap-2 md:gap-0 transition-all shadow-lg shadow-green-600/30 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed">
                    {isSearching ? (
                      <i className="ri-loader-4-line text-xl animate-spin"></i>
                    ) : (
                      <>
                        <span className="md:hidden font-bold">Search</span>
                        <i className="ri-search-line text-xl"></i>
                      </>
                    )}
                  </button>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Listings Grid */}
        <section className="py-12 md:py-16">
          <div className="max-w-[95vw] xl:max-w-[90vw] mx-auto">
            <div className="mt-6 md:mt-8">
              <SearchResultsList isLoading={isDataLoading} results={displayData} />
            </div>
          </div>
        </section>

        {/* Pagination */}
        <section className="pb-20">
          <div className="flex justify-center items-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-gray-900 hover:text-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              <i className="ri-arrow-left-s-line text-xl"></i>
            </button>

            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white font-medium shadow-lg shadow-black/20">1</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 font-medium transition-colors">2</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 font-medium transition-colors">3</button>
            <span className="text-gray-400">...</span>
            <button className="w-10 h-10 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 font-medium transition-colors">8</button>

            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-gray-900 hover:text-gray-900 transition-colors">
              <i className="ri-arrow-right-s-line text-xl"></i>
            </button>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

function Page() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-gray-50/50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
      </main>
    }>
      <EquipmentsContent />
    </Suspense>
  );
}

export default Page;
