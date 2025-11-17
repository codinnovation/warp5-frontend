'use client';

import React, { useState } from 'react';
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

      <div className='relative z-10 flex flex-col justify-end items-center h-full pb-40 lg:pb-50 xl:pb-55 px-6 lg:px-8 xl:px-10'>
        <div
          className='bg-white/20 backdrop-blur-sm rounded-4xl px-8 lg:px-12 xl:px-16 py-4 lg:py-5 xl:py-6 max-w-6xl lg:max-w-7xl xl:max-w-8xl w-full shadow-xl border border-white/60 cursor-pointer'
          onClick={closeAllDropdowns}
        >
          <div className='grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-0'>
            <div className='flex flex-col items-start justify-center space-y-2 lg:border-r-[1px] lg:border-[#DDDDDDB2]/70'>
              <h1 className='text-[#FFFFFF] text-base lg:text-lg xl:text-xl font-medium tracking-wide'>Location</h1>
              <div className='flex space-x-2 items-center hover:scale-105 transition-transform duration-500 cursor-pointer relative' onClick={handleLocationClick}>
                <span className='text-[#DDDDDD] font-regular tracking-wide text-sm lg:text-base xl:text-lg'>{city || 'Select Your City'}</span>
                <i className='ri-arrow-down-s-line text-[#DDDDDD] text-sm lg:text-base xl:text-lg'></i>
              </div>

              {showLocationDropdown && (
                <div className='absolute top-full mt-2 bg-white rounded-2xl shadow-xl border border-gray-200 p-6 lg:p-8 xl:p-10 w-auto z-[100]' onClick={(e) => e.stopPropagation()}>
                  <div className='grid grid-cols-2 lg:grid-cols-3 gap-3'>
                    {ghanaCities.map((ghanaCity) => (
                      <button
                        key={ghanaCity}
                        type='button'
                        onClick={() => selectCity(ghanaCity)}
                        className='text-gray-700 hover:text-[#43A047] hover:bg-gray-50 px-3 py-2 rounded-md text-xs lg:text-sm xl:text-base font-medium transition-colors duration-200 text-left'
                      >
                        {ghanaCity}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className='flex flex-col items-start justify-center space-y-2 lg:border-r-[1px] lg:border-[#DDDDDDB2]/70 lg:pl-8'>
              <h1 className='text-[#FFFFFF] text-base lg:text-lg xl:text-xl font-medium tracking-wide'>Equipment</h1>
              <div className='flex space-x-2 items-center hover:scale-105 transition-transform duration-500 cursor-pointer relative' onClick={handleEquipmentClick}>
                <span className='text-[#DDDDDD] font-regular tracking-wide text-sm lg:text-base xl:text-lg'>{equipment || 'Choose Type'}</span>
                <i className='ri-arrow-down-s-line text-[#DDDDDD] text-sm lg:text-base xl:text-lg'></i>
              </div>

              {showEquipmentDropdown && (
                <div className='absolute top-full mt-2 bg-white rounded-2xl shadow-xl border border-gray-200 p-6 lg:p-8 xl:p-10 w-auto z-[100]' onClick={(e) => e.stopPropagation()}>
                  <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                    {equipmentTypes.map((type) => (
                      <button
                        key={type}
                        type='button'
                        onClick={() => selectEquipment(type)}
                        className='text-gray-700 hover:text-[#43A047] hover:bg-gray-50 px-3 py-2 rounded-md text-xs lg:text-sm xl:text-base font-medium transition-colors duration-200 text-left'
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className='flex flex-col items-start justify-center space-y-2 lg:border-r-[1px] lg:border-[#DDDDDDB2]/70 lg:pl-8'>
              <h1 className='text-[#FFFFFF] text-base lg:text-lg xl:text-xl font-medium tracking-wide'>Price Range</h1>
              <div className='flex space-x-2 items-center hover:scale-105 transition-transform duration-500 cursor-pointer relative' onClick={handlePriceClick}>
                <span className='text-[#DDDDDD] font-regular tracking-wide text-sm lg:text-base xl:text-lg'>{(minPrice || maxPrice) ? `${minPrice || '0'} - ${maxPrice || '∞'}` : 'Choose Range'}</span>
                <i className='ri-arrow-down-s-line text-[#DDDDDD] text-sm lg:text-base xl:text-lg'></i>
              </div>

              {showPriceDropdown && (
                <div className='absolute top-full mt-2 bg-white rounded-2xl shadow-xl border border-gray-200 p-6 lg:p-8 xl:p-10 w-auto z-[100]' onClick={(e) => e.stopPropagation()}>
                  <div className='mb-3'>
                    <h3 className='text-gray-700 font-medium text-sm lg:text-base xl:text-lg'>Price GHC</h3>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <input
                      type='number'
                      placeholder='Min'
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                      className='w-24 lg:w-30 xl:w-36 px-3 py-3 lg:py-4 xl:py-5 border border-[#E9E9E9] rounded-md text-sm lg:text-base xl:text-lg focus:outline-none'
                    />
                    <span className='text-gray-500'>-</span>
                    <input
                      type='number'
                      placeholder='Max'
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                      className='w-24 lg:w-30 xl:w-36 px-3 py-3 lg:py-4 xl:py-5 border border-[#E9E9E9] rounded-md text-sm lg:text-base xl:text-lg focus:outline-none'
                    />
                  </div>
                </div>
              )}
            </div>

            <div className='flex flex-col items-start justify-center space-y-2 lg:pl-8'>
              <h1 className='text-[#FFFFFF] text-base lg:text-lg xl:text-xl font-medium tracking-wide'>Date</h1>
              <div className='flex space-x-2 items-center hover:scale-105 transition-transform duration-500 cursor-pointer relative' onClick={handleDateClick}>
                <i className='ri-calendar-2-line text-[#DDDDDD] text-sm lg:text-base xl:text-lg'></i>
                <span className='text-[#DDDDDD] font-regular tracking-wide text-sm lg:text-base xl:text-lg whitespace-nowrap'>
                  {startDate && endDate ? `${startDate} - ${endDate}` : '**/**/**** -**/**/****'}
                </span>
              </div>

              {showDateDropdown && (
                <div className='absolute top-full mt-2 bg-white rounded-2xl shadow-xl border border-gray-200 p-3 lg:p-4 xl:p-5 z-[100]' onClick={(e) => e.stopPropagation()}>
                  <div className='space-y-4'>
                    <DateRange ranges={dateRange} onChange={handleDateRangeChange} months={1} direction='horizontal' className='w-full' />
                    <div className='flex space-x-2 pt-2'>
                      <button
                        type='button'
                        onClick={handleDateCancel}
                        className='flex-1 px-3 lg:px-4 xl:px-5 py-2 border border-gray-300 rounded-md text-xs lg:text-sm xl:text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200'
                      >
                        Cancel
                      </button>
                      <button
                        type='button'
                        onClick={handleDateDone}
                        className='flex-1 px-3 lg:px-4 xl:px-5 py-2 bg-[#43A047] text-white rounded-md text-xs lg:text-sm xl:text-base font-medium hover:bg-[#3d8b3d] transition-colors duration-200'
                      >
                        Done
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className='flex items-center justify-center lg:justify-end lg:pl-8'>
              <button type='button' className='flex justify-center items-center w-28 lg:w-34 xl:w-40 h-10 lg:h-12 xl:h-14 bg-[#000000] rounded-xl hover:scale-105 transition-transform duration-500 cursor-pointer'>
                <span className='text-white text-sm lg:text-base xl:text-lg font-medium'>Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EquipmentSearch;
