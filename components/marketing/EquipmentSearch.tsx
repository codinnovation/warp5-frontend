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
      <Image src={BannerImage} alt='Banner' fill className='object-cover' priority />
      <div className='absolute inset-0 bg-black/35'></div>

      <div className='relative z-10 flex flex-col justify-end items-center h-full pb-[50%] sm:pb-32 md:pb-36 lg:pb-40 xl:pb-48 px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8'>
        <div
          className='bg-white/20 backdrop-blur-sm rounded-4xl px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 py-2 sm:py-3 lg:py-4 xl:py-5 max-w-5xl lg:max-w-6xl xl:max-w-7xl w-full shadow-xl border border-white/60 cursor-pointer'
          onClick={closeAllDropdowns}
        >
          <div className='grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-0'>
            <div className='flex flex-col items-start justify-center space-y-2 lg:border-r-[1px] lg:border-[#DDDDDDB2]/70'>
              <h1 className='text-[#FFFFFF] text-xs sm:text-sm lg:text-base xl:text-lg font-medium tracking-wide'>Location</h1>
              <div className='flex space-x-2 items-center hover:scale-105 transition-transform duration-500 cursor-pointer relative' onClick={handleLocationClick}>
                <span className='text-[#DDDDDD] font-regular tracking-wide text-xs sm:text-xs lg:text-sm xl:text-base'>{city || 'Select Your City'}</span>
                <i className='ri-arrow-down-s-line text-[#DDDDDD] text-xs sm:text-xs lg:text-sm xl:text-base'></i>
              </div>

              {showLocationDropdown && (
                <div className='absolute top-full mt-2 bg-white rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 lg:p-6 xl:p-8 w-full sm:w-auto z-[100]' onClick={(e) => e.stopPropagation()}>
                  <div className='grid grid-cols-2 lg:grid-cols-3 gap-3'>
                    {ghanaCities.map((ghanaCity) => (
                      <button
                        key={ghanaCity}
                        type='button'
                        onClick={() => selectCity(ghanaCity)}
                        className='text-gray-700 hover:text-[#43A047] hover:bg-gray-50 px-3 py-2 rounded-md text-xs sm:text-xs lg:text-sm xl:text-base font-medium transition-colors duration-200 text-left'
                      >
                        {ghanaCity}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className='flex flex-col items-start justify-center space-y-2 lg:border-r-[1px] lg:border-[#DDDDDDB2]/70 sm:lg:pl-4 lg:pl-8'>
              <h1 className='text-[#FFFFFF] text-xs sm:text-sm lg:text-base xl:text-lg font-medium tracking-wide'>Equipment</h1>
              <div className='flex space-x-2 items-center hover:scale-105 transition-transform duration-500 cursor-pointer relative' onClick={handleEquipmentClick}>
                <span className='text-[#DDDDDD] font-regular tracking-wide text-xs sm:text-xs lg:text-sm xl:text-base'>{equipment || 'Choose Type'}</span>
                <i className='ri-arrow-down-s-line text-[#DDDDDD] text-xs sm:text-xs lg:text-sm xl:text-base'></i>
              </div>

              {showEquipmentDropdown && (
                <div className='absolute top-full mt-2 bg-white rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 lg:p-6 xl:p-8 w-full sm:w-auto z-[100]' onClick={(e) => e.stopPropagation()}>
                  <div className='grid grid-cols-2 gap-3'>
                    {equipmentTypes.map((type) => (
                      <button
                        key={type}
                        type='button'
                        onClick={() => selectEquipment(type)}
                        className='text-gray-700 hover:text-[#43A047] hover:bg-gray-50 px-3 py-2 rounded-md text-xs sm:text-xs lg:text-sm xl:text-base font-medium transition-colors duration-200 text-left'
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className='flex flex-col items-start justify-center space-y-2 lg:border-r-[1px] lg:border-[#DDDDDDB2]/70 sm:lg:pl-4 lg:pl-8'>
              <h1 className='text-[#FFFFFF] text-xs sm:text-sm lg:text-base xl:text-lg font-medium tracking-wide'>Price Range</h1>
              <div className='flex space-x-2 items-center hover:scale-105 transition-transform duration-500 cursor-pointer relative' onClick={handlePriceClick}>
                <span className='text-[#DDDDDD] font-regular tracking-wide text-xs sm:text-xs lg:text-sm xl:text-base'>{(minPrice || maxPrice) ? `${minPrice || '0'} - ${maxPrice || '∞'}` : 'Choose Range'}</span>
                <i className='ri-arrow-down-s-line text-[#DDDDDD] text-xs sm:text-xs lg:text-sm xl:text-base'></i>
              </div>

              {showPriceDropdown && (
                <div className='absolute top-full mt-2 bg-white rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4 lg:p-6 xl:p-8 w-full sm:w-auto z-[100]' onClick={(e) => e.stopPropagation()}>
                  <div className='mb-3'>
                    <h3 className='text-gray-700 font-medium text-xs sm:text-xs lg:text-sm xl:text-base'>Price GHC</h3>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <input
                      type='number'
                      placeholder='Min'
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                      className='w-16 sm:w-20 lg:w-24 xl:w-28 px-2 sm:px-3 py-1 sm:py-2 lg:py-3 xl:py-4 border border-[#E9E9E9] rounded-md text-xs sm:text-xs lg:text-sm xl:text-base focus:outline-none'
                    />
                    <span className='text-gray-500'>-</span>
                    <input
                      type='number'
                      placeholder='Max'
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                      className='w-16 sm:w-20 lg:w-24 xl:w-28 px-2 sm:px-3 py-1 sm:py-2 lg:py-3 xl:py-4 border border-[#E9E9E9] rounded-md text-xs sm:text-xs lg:text-sm xl:text-base focus:outline-none'
                    />
                  </div>
                </div>
              )}
            </div>

            <div className='flex flex-col items-start justify-center space-y-2 sm:lg:pl-4 lg:pl-8'>
              <h1 className='text-[#FFFFFF] text-xs sm:text-sm lg:text-base xl:text-lg font-medium tracking-wide'>Date</h1>
              <div className='flex space-x-2 items-center hover:scale-105 transition-transform duration-500 cursor-pointer relative' onClick={handleDateClick}>
                <i className='ri-calendar-2-line text-[#DDDDDD] text-xs sm:text-xs lg:text-sm xl:text-base'></i>
                <span className='text-[#DDDDDD] font-regular tracking-wide text-xs sm:text-xs lg:text-sm xl:text-base whitespace-nowrap'>
                  {startDate && endDate ? `${startDate} - ${endDate}` : '**/**/**** -**/**/****'}
                </span>
              </div>

              {showDateDropdown && (
                <div className='absolute top-full mt-2 bg-white rounded-2xl shadow-xl border border-gray-200 p-1 sm:p-2 lg:p-3 xl:p-4 w-full sm:w-auto z-[100]' onClick={(e) => e.stopPropagation()}>
                  <div className='space-y-4'>
                    <DateRange ranges={dateRange} onChange={handleDateRangeChange} months={isMobile ? 1 : 2} direction={isMobile ? 'vertical' : 'horizontal'} className='w-full' />
                    <div className='flex space-x-2 pt-2'>
                      <button
                        type='button'
                        onClick={handleDateCancel}
                        className='flex-1 px-1 sm:px-2 lg:px-3 xl:px-4 py-1 sm:py-2 border border-gray-300 rounded-md text-xs sm:text-xs lg:text-sm xl:text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200'
                      >
                        Cancel
                      </button>
                      <button
                        type='button'
                        onClick={handleDateDone}
                        className='flex-1 px-1 sm:px-2 lg:px-3 xl:px-4 py-1 sm:py-2 bg-[#43A047] text-white rounded-md text-xs sm:text-xs lg:text-sm xl:text-base font-medium hover:bg-[#3d8b3d] transition-colors duration-200'
                      >
                        Done
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className='flex items-center justify-center lg:justify-end sm:lg:pl-4 lg:pl-8'>
              <button type='button' className='flex justify-center items-center w-20 sm:w-24 lg:w-28 xl:w-32 h-8 sm:h-10 lg:h-12 xl:h-14 bg-[#000000] rounded-xl hover:scale-105 transition-transform duration-500 cursor-pointer'>
                <span className='text-white text-xs sm:text-xs lg:text-sm xl:text-base font-medium'>Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EquipmentSearch;
