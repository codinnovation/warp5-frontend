'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { DateRange } from 'react-date-range';
import type { Range, RangeKeyDict } from 'react-date-range';
import BannerImage from '@/public/images/banner.jpg';

const ghanaCities = ['Accra', 'Kumasi', 'Tamale', 'Takoradi', 'Cape Coast', 'Sunyani', 'Bolgatanga', 'Wa', 'Ho'];

const equipmentTypes = [
  'Dragline Excavator',
  'Continuous Miner',
  'Bucket Wheel Excavator',
  'Longwall Miner',
  'Hydraulic Mining Shovel',
  'Roadheader',
  'Electric Rope Shovel',
  'Load-Haul Dump (LHD) Loader',
  'Wheel Loader',
  'Underground Mining Truck',
  'Bulldozer',
  'Rotary Drill',
  'Grader',
  'Blasthole Drill',
  'Haul Truck',
  'Rock Bolter',
  'Crusher',
  'Shotcrete Machine',
];

const EquipmentSearch: React.FC = () => {
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showEquipmentDropdown, setShowEquipmentDropdown] = useState(false);
  const [showPriceDropdown, setShowPriceDropdown] = useState(false);
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [city, setCity] = useState('');
  const [equipment, setEquipment] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [dateRange, setDateRange] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeAllDropdowns = () => {
    setShowLocationDropdown(false);
    setShowEquipmentDropdown(false);
    setShowPriceDropdown(false);
    setShowDateDropdown(false);
  };

  const toggleDropdown = (setter: React.Dispatch<React.SetStateAction<boolean>>, currentValue: boolean) => {
    closeAllDropdowns();
    setter(!currentValue);
  };

  const handleLocationClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleDropdown(setShowLocationDropdown, showLocationDropdown);
  };

  const handleEquipmentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleDropdown(setShowEquipmentDropdown, showEquipmentDropdown);
  };

  const handlePriceClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleDropdown(setShowPriceDropdown, showPriceDropdown);
  };

  const handleDateClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleDropdown(setShowDateDropdown, showDateDropdown);
  };

  const selectCity = (selectedCity: string) => {
    setCity(selectedCity);
    setShowLocationDropdown(false);
  };

  const selectEquipment = (selectedEquipment: string) => {
    setEquipment(selectedEquipment);
    setShowEquipmentDropdown(false);
  };

  const handleDateDone = () => {
    const start = dateRange[0].startDate?.toLocaleDateString('en-GB') || '';
    const end = dateRange[0].endDate?.toLocaleDateString('en-GB') || '';
    setStartDate(start);
    setEndDate(end);
    setShowDateDropdown(false);
  };

  const handleDateCancel = () => {
    setDateRange([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
      },
    ]);
    setStartDate('');
    setEndDate('');
    setShowDateDropdown(false);
  };

  const handleDateRangeChange = (ranges: RangeKeyDict) => {
    setDateRange([ranges.selection]);
  };

  return (
    <>
      <section className='relative h-150 w-full'>

        <Image src={BannerImage} alt='Banner' fill className='object-cover' priority />
        <div className='absolute inset-0 bg-black/35'></div>

        <div className='relative z-10 flex flex-col justify-end items-center h-full pb-50'>
          <div
            className='bg-white/20 backdrop-blur-sm rounded-4xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 shadow-xl border border-white/60 cursor-pointer'
            onClick={closeAllDropdowns}
          >
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-center'>
              <div className='flex flex-col items-start justify-center space-y-2 border-r-[1px] border-[#DDDDDDB2]/70'>
                <h1 className='text-[#FFFFFF] text-base font-medium tracking-wide'>Location</h1>
                <div className='flex space-x-2 items-center hover:scale-105 transition-transform duration-500 cursor-pointer relative' onClick={handleLocationClick}>
                  <span className='text-[#DDDDDD] font-regular tracking-wide text-sm'>{city || 'Select Your City'}</span>
                  <i className='ri-arrow-down-s-line text-[#DDDDDD] text-base'></i>
                </div>

                {showLocationDropdown && (
                  <div className='fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl border border-gray-200 p-4 z-[100] w-[90%] max-w-[700px]' onClick={(e) => e.stopPropagation()}>
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
                      {ghanaCities.map((ghanaCity) => (
                        <button
                          key={ghanaCity}
                          type='button'
                          onClick={() => selectCity(ghanaCity)}
                          className='text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-left'
                        >
                          {ghanaCity}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className='flex flex-col items-start justify-center space-y-2 md:border-r md:border-[#DDDDDDB2]/70 pr-0 md:pr-4'>
                <h1 className='text-[#FFFFFF] text-base font-medium tracking-wide'>Equipment</h1>
                <div className='flex space-x-2 items-center hover:scale-105 transition-transform duration-500 cursor-pointer relative' onClick={handleEquipmentClick}>
                  <span className='text-[#DDDDDD] font-regular tracking-wide text-sm'>{equipment || 'Choose Type'}</span>
                  <i className='ri-arrow-down-s-line text-[#DDDDDD] text-base'></i>
                </div>

                {showEquipmentDropdown && (
                  <div className='fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl border border-gray-200 p-4 z-[100] w-[90%] max-w-[700px]' onClick={(e) => e.stopPropagation()}>
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
                      {equipmentTypes.map((type) => (
                        <button
                          key={type}
                          type='button'
                          onClick={() => selectEquipment(type)}
                          className='text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-left'
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className='flex flex-col items-start justify-center space-y-2 md:border-r md:border-[#DDDDDDB2]/70 pr-0 md:pr-4'>
                <h1 className='text-[#FFFFFF] text-base font-medium tracking-wide'>Price Range</h1>
                <div className='flex space-x-2 items-center hover:scale-105 transition-transform duration-500 cursor-pointer relative' onClick={handlePriceClick}>
                  <span className='text-[#DDDDDD] font-regular tracking-wide text-sm'>{(minPrice || maxPrice) ? `${minPrice || '0'} - ${maxPrice || '∞'}` : 'Choose Range'}</span>
                  <i className='ri-arrow-down-s-line text-[#DDDDDD] text-base'></i>
                </div>

                {showPriceDropdown && (
                  <div className='fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl border border-gray-200 p-4 z-[100] w-[90%] max-w-[700px]' onClick={(e) => e.stopPropagation()}>
                    <div className='mb-3'>
                      <h3 className='text-gray-700 font-medium text-sm'>Price GHC</h3>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <input
                        type='number'
                        placeholder='Min'
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        className='w-full md:w-auto py-2 md:py-4 px-4 border border-[#E9E9E9] rounded-md text-sm focus:outline-none'
                      />
                      <span className='text-gray-500'>-</span>
                      <input
                        type='number'
                        placeholder='Max'
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        className='w-full md:w-auto py-2 md:py-4 px-4 border border-[#E9E9E9] rounded-md text-sm focus:outline-none'
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className='flex flex-col items-start justify-center space-y-2 '>
                <h1 className='text-[#FFFFFF] text-base font-medium tracking-wide'>Date</h1>
                <div className='flex space-x-2 items-center hover:scale-105 transition-transform duration-500 cursor-pointer relative' onClick={handleDateClick}>
                  <i className='ri-calendar-2-line text-[#DDDDDD] text-base'></i>
                  <span className='text-[#DDDDDD] font-regular tracking-wide text-sm max-w-[160px] truncate'>
                    {startDate && endDate ? `${startDate} - ${endDate}` : '**/**/**** -**/**/****'}
                  </span>
                </div>

                {showDateDropdown && (
                  <div className='fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl border border-gray-200 p-4 z-[100] w-[95%] max-w-[900px]' onClick={(e) => e.stopPropagation()}>
                    <div className='space-y-4'>
                      <DateRange ranges={dateRange} onChange={handleDateRangeChange} months={isMobile ? 1 : 2} direction={isMobile ? 'vertical' : 'horizontal'} className='w-full' />
                      <div className='flex space-x-2 pt-2'>
                        <button
                          type='button'
                          onClick={handleDateCancel}
                          className='flex-1 px-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200'
                        >
                          Cancel
                        </button>
                        <button
                          type='button'
                          onClick={handleDateDone}
                          className='flex-1 px-1 py-4 border border-gray-300 rounded-md text-sm font-medium text-white bg-[#43A047] hover:bg-[#3d8b3d] transition-colors duration-200'
                        >
                          Done
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className='sm:col-span-2 md:col-span-1 flex items-center justify-end pl-0 md:pl-8'>
                <button type='button' className='w-full sm:w-auto flex justify-center items-center px-6 py-3 sm:px-8 sm:py-4 bg-[#000000] rounded-xl hover:scale-105 transition-transform duration-500 cursor-pointer'>
                  <span className='text-white text-sm font-medium'>Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EquipmentSearch;
