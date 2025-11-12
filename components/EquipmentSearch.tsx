import React, { useState } from 'react'
import Image from 'next/image'
import { DateRange } from "react-date-range"
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
import BannerImage from '../public/images/banner.jpg'

function EquipmentSearch() {
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showEquipmentDropdown, setShowEquipmentDropdown] = useState(false);
  const [showPriceDropdown, setShowPriceDropdown] = useState(false);
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [city, setCity] = useState('')
  const [equipment, setEquipment] = useState('')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ])

  const ghanaCities = [
    'Accra', 'Kumasi', 'Tamale', 'Takoradi', 'Cape Coast',
    'Sunyani', 'Bolgatanga', 'Wa', 'Ho'
  ];

  const equipmentTypes = [
    'Dragline Excavator', 'Continuous Miner', 'Bucket Wheel Excavator', 'Longwall Miner', 'Hydraulic Mining Shovel', 'Roadheader', 'Electric Rope Shovel', 'Load-Haul Dump (LHD) Loader', 'Wheel Loader', 'Underground Mining Truck', 'Bulldozer', 'Rotary Drill', 'Grader', 'Blasthole Drill', 'Haul Truck', 'Rock Bolter', 'Crusher', 'Shotcrete Machine'
  ];

  const handleLocationClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowLocationDropdown(!showLocationDropdown);
    setShowEquipmentDropdown(false);
    setShowPriceDropdown(false);
    setShowDateDropdown(false);
  };

  const handleEquipmentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowEquipmentDropdown(!showEquipmentDropdown);
    setShowLocationDropdown(false);
    setShowPriceDropdown(false);
    setShowDateDropdown(false);
  };

  const handlePriceClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowPriceDropdown(!showPriceDropdown);
    setShowLocationDropdown(false);
    setShowEquipmentDropdown(false);
    setShowDateDropdown(false);
  };

  const handleDateClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowDateDropdown(!showDateDropdown);
    setShowLocationDropdown(false);
    setShowEquipmentDropdown(false);
    setShowPriceDropdown(false);
  };

  const selectCity = (city: string) => {
    setCity(city);
    setShowLocationDropdown(false);
  };

  const selectEquipment = (eq: string) => {
    setEquipment(eq);
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
        key: 'selection'
      }
    ]);
    setStartDate('');
    setEndDate('');
    setShowDateDropdown(false);
  };

  const handleDateRangeChange = (ranges: any) => {
    setDateRange([ranges.selection]);
  };

  return (
    <>
      <div className='relative h-160 w-full'>
        <Image
          src={BannerImage}
          alt='Banner'
          fill
          className='object-cover'
          priority
        />

        <div className='absolute inset-0 bg-black/35'></div>

        <div className='relative z-10 flex flex-col justify-end items-center h-full pb-52 px-8'>
          <div className='bg-white/30 backdrop-blur-sm rounded-4xl px-12 py-5 max-w-7xl w-full shadow-xl border border-white/60 cursor-pointer' onClick={() => {
            setShowLocationDropdown(false);
            setShowEquipmentDropdown(false);
            setShowPriceDropdown(false);
            setShowDateDropdown(false);
          }}>

            <div className='grid grid-cols-5'>

              <div className='flex flex-col items-start justify-center space-y-2 border-r-[1px] border-[#DDDDDDB2]/70'>
                <h1 className='text-[#FFFFFF] text-lg font-medium tracking-wide'>Location</h1>
                <div className='flex space-x-2 items-center hover:scale-105 transition-transform duration-500 cursor-pointer relative' onClick={handleLocationClick}>
                  <h1 className='text-[#DDDDDD] font-regular tracking-wide text-sm'>{city || 'Select Your City'}</h1>
                  <i className="ri-arrow-down-s-line text-[#DDDDDD] text-lg"></i>
                </div>

                {showLocationDropdown && (
                  <div className='absolute top-full mt-2 bg-white rounded-2xl shadow-xl border border-gray-200 p-8 w-auto z-[100]' onClick={(e) => e.stopPropagation()}>
                    <div className='grid grid-cols-3 gap-3'>
                      {ghanaCities.map((city, index) => (
                        <button
                          key={index}
                          onClick={() => selectCity(city)}
                          className='text-gray-700 hover:text-[#43A047] hover:bg-gray-50 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-left'
                        >
                          {city}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className='flex flex-col items-start justify-center space-y-2 border-r-[1px] border-[#DDDDDDB2]/70 pl-8'>
                <h1 className='text-[#FFFFFF] text-lg font-medium tracking-wide'>Equipment</h1>
                <div className='flex space-x-2 items-center hover:scale-105 transition-transform duration-500 cursor-pointer relative' onClick={handleEquipmentClick}>
                  <h1 className='text-[#DDDDDD] font-regular tracking-wide text-sm'>{equipment || 'Choose Type'}</h1>
                  <i className="ri-arrow-down-s-line text-[#DDDDDD] text-lg"></i>
                </div>

                {showEquipmentDropdown && (
                  <div className='absolute top-full mt-2 bg-white rounded-2xl shadow-xl border border-gray-200 p-8 w-auto z-[100]' onClick={(e) => e.stopPropagation()}>
                    <div className='grid grid-cols-2 gap-3'>
                      {equipmentTypes.map((eq, index) => (
                        <button
                          key={index}
                          onClick={() => selectEquipment(eq)}
                          className='text-gray-700 hover:text-[#43A047] hover:bg-gray-50 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-left'
                        >
                          {eq}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className='flex flex-col items-start justify-center space-y-2 border-r-[1px] border-[#DDDDDDB2]/70 pl-8'>
                <h1 className='text-[#FFFFFF] text-lg font-medium tracking-wide'>Price Range</h1>
                <div className='flex space-x-2 items-center hover:scale-105 transition-transform duration-500 cursor-pointer relative' onClick={handlePriceClick}>
                  <h1 className='text-[#DDDDDD] font-regular tracking-wide text-sm'>{(minPrice || maxPrice) ? `${minPrice || '0'} - ${maxPrice || '∞'}` : 'Choose Range'}</h1>
                  <i className="ri-arrow-down-s-line text-[#DDDDDD] text-lg"></i>
                </div>

                {showPriceDropdown && (
                  <div className='absolute top-full mt-2 bg-white rounded-2xl shadow-xl border border-gray-200 p-8 w-auto z-[100]' onClick={(e) => e.stopPropagation()}>
                    <div className='mb-3'>
                      <h3 className='text-gray-700 font-medium text-sm'>Price GHC</h3>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <input
                        type='number'
                        placeholder='Min'
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        className='w-30 px-3 py-4 border border-[#E9E9E9] rounded-md text-sm focus:outline-none'
                      />
                      <span className='text-gray-500'>-</span>
                      <input
                        type='number'
                        placeholder='Max'
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        className='w-30 px-3 py-4 border border-[#E9E9E9] rounded-md text-sm focus:outline-none'
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className='flex flex-col items-start justify-center space-y-2 pl-8'>
                <h1 className='text-[#FFFFFF] text-lg font-medium tracking-wide'>Date</h1>
                <div className='flex space-x-2 items-center hover:scale-105 transition-transform duration-500 cursor-pointer relative' onClick={handleDateClick}>
                  <i className="ri-calendar-2-line text-[#DDDDDD] text-lg"></i>
                  <h1 className='text-[#DDDDDD] font-regular tracking-wide text-sm whitespace-nowrap'>{(startDate && endDate) ? `${startDate} - ${endDate}` : '**/**/**** -**/**/****'}</h1>
                </div>

                {showDateDropdown && (
                  <div className='absolute top-full mt-2 bg-white rounded-2xl shadow-xl border border-gray-200 p-4 z-[100]' onClick={(e) => e.stopPropagation()}>
                    <div className='space-y-4'>
                      <DateRange
                        ranges={dateRange}
                        onChange={handleDateRangeChange}
                        months={1}
                        direction="horizontal"
                        className="w-full"
                      />
                      <div className='flex space-x-2 pt-2'>
                        <button
                          onClick={handleDateCancel}
                          className='flex-1 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200'
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleDateDone}
                          className='flex-1 px-4 py-2 bg-[#43A047] text-white rounded-md text-sm font-medium hover:bg-[#3d8b3d] transition-colors duration-200'
                        >
                          Done
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className='flex items-center justify-end pl-8'>
                <div className='flex justify-center items-center w-34 h-12 bg-[#000000] rounded-xl hover:scale-105 transition-transform duration-500 cursor-pointer'>
                  <h1 className='text-white text-base font-medium'>Search</h1>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EquipmentSearch
