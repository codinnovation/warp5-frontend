'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Car1Image from '../../../public/cars/car1.jpg';
import Car2Image from '../../../public/cars/car2.jpg';
import PageHeader from '@/components/public/PageHeader';
import Footer from '@/components/public/Footer';
import LocationModal from '@/components/public/LocationModal';
import EquipmentModal from '@/components/public/EquipmentModal';
import PriceModal from '@/components/public/PriceModal';
import DateModal from '@/components/public/DateModal';
import EquipmentCard from '@/components/public/EquipmentCard';


function Page() {
  const router = useRouter();

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

  const highlyRatedCars = [
    { id: 1, image: Car1Image, name: 'Bucket Wheel Excavator', location: 'Kumasi, Ghana', rating: '4.8', price: 'GHC1,123' },
    { id: 2, image: Car2Image, name: 'Honda Accord', location: 'Accra', rating: '4.9', price: 'GHC1,123' },
    { id: 3, image: Car1Image, name: 'Mercedes Benz', location: 'Takoradi', rating: '5.0', price: 'GHC1,123' },
    { id: 4, image: Car2Image, name: 'BMW X5', location: 'Accra', rating: '4.7', price: 'GHC1,123' },
    { id: 5, image: Car2Image, name: 'Audi A6', location: 'Kumasi', rating: '4.9', price: 'GHC1,123' },
  ];

  return (
    <>
      <main className='min-h-screen bg-white'>
        <PageHeader />

        <section className="mt-20 md:mt-24 px-2 pb-4">
          <div className="relative h-full">
            <div className="relative z-10 h-full pt-10 md:pt-12 flex flex-col items-center justify-center xl:pt-20">
              <div className="grid grid-cols-2 md:grid-cols-3 border border-[#DDDDDDB2]/70 rounded-2xl p-6 md:p-8 w-full max-w-7xl gap-6 xl:grid-cols-5">

                <div className="relative flex flex-col border-r border-[#DDDDDDB2] pr-6">
                  <h1 className="font-medium text-[#333333] text-sm md:text-base mb-2 xl:text-lg">Location</h1>
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={() => {
                      setShowLocationModal(!showLocationModal);
                      setShowEquipmentModal(false);
                      setShowPriceRangeModal(false);
                      setShowDateRangeModal(false);
                    }}
                  >
                    <h1 className="text-[#333333] text-xs xl:text-base">{selectedLocation}</h1>
                    <i className="ri-arrow-down-s-line text-[#333333] hidden text-2xl ml-2 xl:flex"></i>
                  </div>

                  <LocationModal
                    show={showLocationModal}
                    selectedLocation={selectedLocation}
                    onSelect={setSelectedLocation}
                    onClose={() => setShowLocationModal(false)}
                  />
                </div>

                <div className="relative flex flex-col border-r border-[#DDDDDDB2] pr-6">
                  <h1 className="font-medium text-[#333333] text-sm md:text-base mb-2 xl:text-lg">Equipment</h1>
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={() => {
                      setShowEquipmentModal(!showEquipmentModal);
                      setShowLocationModal(false);
                      setShowPriceRangeModal(false);
                      setShowDateRangeModal(false);
                    }}
                  >
                    <h1 className="text-[#333333] text-xs xl:text-base">{selectedEquipment}</h1>
                    <i className="ri-arrow-down-s-line text-[#333333] hidden text-2xl ml-2 xl:flex"></i>
                  </div>

                  <EquipmentModal
                    show={showEquipmentModal}
                    selectedEquipment={selectedEquipment}
                    onSelect={setSelectedEquipment}
                    onClose={() => setShowEquipmentModal(false)}
                  />
                </div>

                <div className="relative flex flex-col border-r border-[#DDDDDDB2] pr-6">
                  <h1 className="font-medium text-[#333333] text-sm md:text-base mb-2 xl:text-lg">Price Range</h1>
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={() => {
                      setShowPriceRangeModal(!showPriceRangeModal);
                      setShowLocationModal(false);
                      setShowEquipmentModal(false);
                      setShowDateRangeModal(false);
                    }}
                  >
                    <h1 className="text-[#333333] text-xs xl:text-base">
                      {minPrice && maxPrice ? `$${minPrice} - $${maxPrice}` : 'Select Range'}
                    </h1>
                    <i className="ri-arrow-down-s-line text-[#333333] hidden text-2xl ml-2 xl:flex"></i>
                  </div>

                  <PriceModal
                    show={showPriceRangeModal}
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    onMinPriceChange={setMinPrice}
                    onMaxPriceChange={setMaxPrice}
                    onClose={() => setShowPriceRangeModal(false)}
                  />
                </div>

                <div className="relative flex flex-col border-r border-[#DDDDDDB2] pr-6">
                  <h1 className="font-medium text-[#333333] text-sm md:text-base mb-2 xl:text-lg">Date Range</h1>
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={() => {
                      setShowDateRangeModal(!showDateRangeModal);
                      setShowLocationModal(false);
                      setShowEquipmentModal(false);
                      setShowPriceRangeModal(false);
                    }}
                  >
                    <h1 className="text-[#333333] text-xs xl:text-base">
                      {fromDate && toDate ? `${fromDate} - ${toDate}` : 'Select Dates'}
                    </h1>
                  </div>

                  <DateModal
                    show={showDateRangeModal}
                    fromDate={fromDate}
                    toDate={toDate}
                    onFromDateChange={setFromDate}
                    onToDateChange={setToDate}
                    onClose={() => setShowDateRangeModal(false)}
                    onCancel={() => {
                      setFromDate('');
                      setToDate('');
                      setShowDateRangeModal(false);
                    }}
                  />
                </div>

                <div className="flex items-start justify-start xl:justify-center">
                  <button className="bg-[#000000] hover:bg-[#333333] active:scale-95 transition-all text-xs md:text-sm text-white px-8 py-3 rounded-lg font-semibold flex items-center cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-black xl:text-base">
                    Search
                  </button>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 md:mt-16 xl:mt-20">
          <div className="max-w-[85vw] mx-auto">
            <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:grid-cols-4 xl:grid-cols-5 xl:gap-10">
              {highlyRatedCars.map((item, index) => (
                <EquipmentCard key={index} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section className='mt-12 md:mt-16 xl:mt-20 pb-8 flex justify-center items-center gap-4 md:gap-6'>
          <button className='flex items-center justify-center gap-2 border border-[#333333] hover:bg-[#333333] hover:text-white active:scale-95 transition-all px-6 md:px-8 py-2 md:py-3 rounded-full cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-[#333333]'>
            <i className="ri-arrow-left-line text-base"></i>
            <span className='text-xs md:text-sm font-medium xl:text-base'>Previous</span>
          </button>
          <button className='flex items-center justify-center gap-2 border border-[#333333] hover:bg-[#333333] hover:text-white active:scale-95 transition-all px-6 md:px-8 py-2 md:py-3 rounded-full cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-[#333333]'>
            <span className='text-xs md:text-sm font-medium xl:text-base'>Next</span>
            <i className="ri-arrow-right-line text-base"></i>
          </button>
        </section>

        <Footer />
      </main>
    </>
  )
}

export default Page
