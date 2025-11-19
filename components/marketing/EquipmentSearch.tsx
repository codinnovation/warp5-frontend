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
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const anyModalOpen = showLocationDropdown || showEquipmentDropdown || showPriceDropdown || showDateDropdown;

  useEffect(() => {
    // Only lock background scroll on mobile when modals are centered
    document.body.style.overflow = anyModalOpen && isMobile ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [anyModalOpen, isMobile]);

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
      <section className='relative h-155 w-full lg:h-155' onClick={closeAllDropdowns}>
        <Image src={BannerImage} alt='Banner' fill className='object-cover' priority />
        <div className='absolute inset-0 bg-black/35'></div>

        <div className='relative z-10 flex flex-col justify-end items-center h-full pb-50'>
          <div
            className='bg-white/20 backdrop-blur-sm w-[90vw] rounded-md px-8 py-6 shadow-xl lg:rounded-4xl border border-white/60 cursor-pointer lg:max-w-7xl'
            onClick={closeAllDropdowns}
          >
            <div className='grid grid-cols-2 gap-8 lg:grid-cols-5 lg:gap-0'>
              <div className='flex flex-col items-start justify-center space-y-2 lg:border-r-[1px] lg:border-[#DDDDDDB2]/70'>
                <h1 className='text-[#FFFFFF] text-sm font-medium lg:text-base'>Location</h1>
                <div className='flex space-x-1 items-center cursor-pointer relative' onClick={handleLocationClick}>
                  <span className='text-[#DDDDDD] font-regular text-xs lg:text-sm'>{city || 'Select Your City'}</span>
                  <i className='ri-arrow-down-s-line text-[#DDDDDD] text-sm lg:text-base'></i>
                </div>

                {showLocationDropdown && (
                  <div
                    className={
                      isMobile
                        ? 'fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl border border-gray-200 p-4 w-[90%] max-w-[700px] max-h-[80vh] overflow-auto z-[100]'
                        : 'absolute top-full mt-2 bg-white rounded-2xl shadow-xl border border-gray-200 p-4 w-auto z-[100]'
                    }
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className='grid grid-cols-2 gap-4'>
                      {ghanaCities.map((ghanaCity) => (
                        <button
                          key={ghanaCity}
                          type='button'
                          onClick={() => selectCity(ghanaCity)}
                          className='text-gray-700 hover:text-[#43A047] p-2 rounded-md text-xs lg:text-sm font-medium text-left w-full'
                        >
                          {ghanaCity}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className='flex flex-col items-start justify-center space-y-2 lg:border-r-[1px] lg:border-[#DDDDDDB2]/70 pl-0 lg:pl-8'>
                <h1 className='text-[#FFFFFF] text-xs lg:text-base font-medium'>Equipment</h1>
                <div className='flex space-x-2 items-center cursor-pointer relative' onClick={handleEquipmentClick}>
                  <span className='text-[#DDDDDD] font-regular text-xs lg:text-sm'>{equipment || 'Choose Type'}</span>
                  <i className='ri-arrow-down-s-line text-[#DDDDDD] text-xs lg:text-sm'></i>
                </div>

                {showEquipmentDropdown && (
                  <div
                    className={
                      isMobile
                        ? 'fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl border border-gray-200 p-4 w-[95%] max-w-[700px] max-h-[80vh] overflow-auto z-[100]'
                        : 'absolute top-full mt-2 bg-white rounded-2xl shadow-xl border border-gray-200 p-4 w-[320px] z-[100]'
                    }
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className={isMobile ? 'max-h-[60vh] overflow-auto' : ''}>
                      <div className='grid grid-cols-2 gap-4'>
                        {equipmentTypes.map((type) => (
                          <button
                            key={type}
                            type='button'
                            onClick={() => selectEquipment(type)}
                            className='text-gray-700 hover:text-[#43A047] px-3 py-2 rounded-md text-xs lg:text-sm font-medium text-left w-full'
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className='flex flex-col items-start justify-center space-y-2 lg:border-r-[1px] lg:border-[#DDDDDDB2]/70 pl-0 lg:pl-8'>
                <h1 className='text-[#FFFFFF] text-sm  font-medium lg:text-base'>Price Range</h1>
                <div className='flex space-x-2 items-center cursor-pointer relative' onClick={handlePriceClick}>
                  <span className='text-[#DDDDDD] font-regular text-xs lg:text-sm'>{(minPrice || maxPrice) ? `${minPrice || '0'} - ${maxPrice || '∞'}` : 'Choose Range'}</span>
                  <i className='ri-arrow-down-s-line text-[#DDDDDD] text-xs lg:text-sm'></i>
                </div>

                {showPriceDropdown && (
                  <div
                    className={
                      isMobile
                        ? 'fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl border border-gray-200 p-6 w-[90%] max-w-[700px] max-h-[80vh] overflow-auto z-[100]'
                        : 'absolute top-full mt-2 bg-white rounded-2xl shadow-xl border border-gray-200 p-6 w-auto z-[100]'
                    }
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className='mb-3'>
                      <h3 className='text-gray-700 font-medium text-sm lg:text-base'>Price GHC</h3>
                    </div>
                    <div className='grid grid-cols-2 gap-4 items-center space-x-2'>
                      <input
                        type='number'
                        placeholder='Min'
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        className='px-3 py-3 border border-[#E9E9E9] rounded-md text-xs lg:text-base focus:outline-none'
                      />
                      <input
                        type='number'
                        placeholder='Max'
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        className='px-3 py-3 border border-[#E9E9E9] rounded-md text-xs lg:text-base focus:outline-none'
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className='flex flex-col items-start justify-center space-y-2 pl-0 lg:pl-8'>
                <h1 className='text-[#FFFFFF] text-sm font-medium lg:text-base'>Date</h1>
                <div className='flex space-x-2 items-center cursor-pointer relative' onClick={handleDateClick}>
                  <i className='ri-calendar-2-line text-[#DDDDDD] text-xs lg:text-sm'></i>
                  <span className='text-[#DDDDDD] font-regular text-xs lg:text-sm'>
                    {startDate && endDate ? `${startDate} - ${endDate}` : '**/**/**** '}
                  </span>
                </div>

                {showDateDropdown && (
                  <div
                    className={
                      isMobile
                        ? 'fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl border border-gray-200 p-3 w-[95%] max-w-[900px] max-h-[90vh] overflow-auto z-[100]'
                        : 'absolute top-full mt-2 bg-white rounded-2xl shadow-xl border border-gray-200 p-3 z-[100]'
                    }
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className='space-y-4'>
                      <DateRange ranges={dateRange} onChange={handleDateRangeChange} months={isMobile ? 1 : 2} direction={isMobile ? 'vertical' : 'horizontal'} className='w-full' />
                      <div className='flex justify-between items-center gap-4 pt-2'>
                        <button
                          type='button'
                          onClick={handleDateCancel}
                          className='w-full px-3 py-2 border border-gray-300 rounded-md text-xs lg:text-base font-medium'
                        >
                          Cancel
                        </button>
                        <button
                          type='button'
                          onClick={handleDateDone}
                          className='w-full px-3 py-2 bg-[#43A047] text-white rounded-md text-xs lg:text-base font-medium'
                        >
                          Done
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className='flex items-center lg:justify-center justify-start pl-0 lg:pl-8'>
                <button type='button' className='flex px-8 py-3 justify-center items-center bg-[#000000] rounded-xl cursor-pointer'>
                  <span className='text-white text-xs font-light lg:text-base'>Search</span>
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