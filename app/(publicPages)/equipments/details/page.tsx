'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { DateRange } from 'react-date-range';
import type { RangeKeyDict, Range } from 'react-date-range';
import FooterSection from '@/components/layout/FooterSection';
import PublicPageHeader from '@/components/layout/PublicPageHeader';
import Car1Image from '../../../../public/cars/car1.jpg';
import Car2Image from '../../../../public/cars/car2.jpg';
import Car3Image from '../../../../public/cars/car3.jpg';

function Page() {
  const router = useRouter();

  const [selectedImage, setSelectedImage] = useState(0);
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [activeTab, setActiveTab] = useState('description');
  const [dateRange, setDateRange] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ])

  const images = [
    { src: Car1Image, alt: 'Main product view' },
    { src: Car2Image, alt: 'Alternate view 1' },
    { src: Car3Image, alt: 'Alternate view 2' },
  ];

  const cars = [
    { id: 1, image: Car1Image, name: 'Toyota Camry', location: 'Kumasi', rating: '4.8' },
    { id: 2, image: Car3Image, name: 'Honda Accord', location: 'Accra', rating: '4.9' },
    { id: 3, image: Car3Image, name: 'Mercedes Benz', location: 'Takoradi', rating: '5.0' },
    { id: 4, image: Car1Image, name: 'BMW X5', location: 'Accra', rating: '4.7' },
    { id: 5, image: Car3Image, name: 'Audi A6', location: 'Kumasi', rating: '4.9' },
  ];


  const handleDateClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowDateDropdown(!showDateDropdown);
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

  const handleDateRangeChange = (ranges: RangeKeyDict) => {
    setDateRange([ranges.selection]);
  };

  const description = `consectetur adipiscing elit. Nullam volutpat dolor lobortis, interdum turpis et, interdum leo. Nunc hendrerit
                      volutpat risus sit amet ornare. Vestibulum sollicitudin lectus eu purus varius molestie vel at velit. Pellentesque habitant morbi tristique
                      senectus et netus et malesuada fames ac turpis egestas. enean tellus lacus, sagittis quis sollicitudin nec, placerat at sem. Curabitur
                      pellentesque ligula id dolor cursus imperdiet. Mauris magna diam, scelerisque lobortis molestie a, viverra a arcu. Sed ut purus arcu.
                      sque habitant morbi tristique
                      senectus et netus et malesuada fames ac turpis egestas. enean tellus lacus, sagittis quis sollicitudin nec, placerat at sem. Curabitur
                      pellentesque ligula id dolor cursus imperdiet. Mauris magna diam, scelerisque lobortis molestie a, viverra a arcu. Sed ut purus arcu.`;


  return (
    <>
      <main className='bg-white'>
        <PublicPageHeader />

        <section className='w-[85vw] mx-auto grid grid-cols-1 lg:grid-cols-[2.5fr_1fr] gap-8 lg:gap-12 xl:gap-20'>
          <div className='flex flex-col gap-6 lg:gap-8'>
            <div className='relative w-full aspect-[4/3] bg-gray-100 overflow-hidden'>
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 60vw"
                className='object-cover'
                priority
              />
            </div>

            <div className='grid grid-cols-3 gap-3 lg:gap-4'>
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-full aspect-[4/3] bg-gray-100 overflow-hidden transition-all ${selectedImage === index
                    ? 'ring-2 ring-blue-500 opacity-100'
                    : 'opacity-70 hover:opacity-100'
                    }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 33vw, 20vw"
                    className='object-cover'
                  />
                </button>
              ))}
            </div>

            <div className='mt-8 lg:mt-12'>
              <div className='flex flex-col'>
                <div className='flex flex-col justify-center items-start'>
                  <h1 className='text-[#43A047] font-bold text-xl lg:text-2xl xl:text-3xl'>Excavators</h1>
                  <div className='mt-2 flex space-x-6 lg:space-x-8'>
                    <div className='flex'>
                      <i className="ri-map-pin-2-line"></i>
                      <h1 className='text-[#333333] text-sm lg:text-base font-regular'>Takoradi</h1>
                    </div>

                    <div className='flex space-x-1 items-center'>
                      <i className="ri-star-s-line"></i>
                      <i className="ri-star-s-line"></i>
                      <i className="ri-star-s-line"></i>
                      <i className="ri-star-s-line"></i>
                      <h1 className='text-[#333333]'>4.9</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-4'>
              <div className='flex flex-col'>
                <div className='flex items-center space-x-1'>
                  <h1 className={`flex justify-center items-center ${activeTab === 'description' ? 'bg-[#F4F4F4] text-[#333333]' : 'bg-[#333333] text-white'} text-base lg:text-lg font-medium w-32 lg:w-40 h-12 lg:h-16`} onClick={() => setActiveTab('description')}>Description</h1>
                  <h1 className={`flex justify-center items-center ${activeTab === 'rate' ? 'bg-[#F4F4F4] text-[#333333]' : 'bg-[#333333] text-white'} text-base lg:text-lg font-medium w-32 lg:w-40 h-12 lg:h-16`} onClick={() => setActiveTab('rate')}>Rate</h1>
                  <h1 className={`flex justify-center items-center ${activeTab === 'availability' ? 'bg-[#F4F4F4] text-[#333333]' : 'bg-[#333333] text-white'} text-base lg:text-lg font-medium w-32 lg:w-40 h-12 lg:h-16`} onClick={() => setActiveTab('availability')}>Availability</h1>
                </div>

                {activeTab === 'description' && (
                  <div className='bg-[#F4F4F4] min-h-[10vh] max-h-96 rounded-b-3xl p-8 lg:p-12 xl:p-16 overflow-y-auto'>
                    <h1 className='text-[#333333] text-sm lg:text-base tracking-wider font-regular'>Lorem ipsum dolor sit amet, {description}
                    </h1>
                  </div>
                )}

                {activeTab === 'rate' && (
                  <div className='bg-[#fff] min-h-[10vh] max-h-96 shadow-md rounded-b-3xl p-12 lg:p-16 xl:p-20 overflow-y-auto'>
                    <div className='flex flex-col lg:flex-row justify-around items-center space-y-4 lg:space-y-0'>
                      <div className='flex flex-col'>
                        <h1 className='text-[#333333] text-sm lg:text-base font-medium'>Daily</h1>
                        <h1 className='text-[#333333] text-xl lg:text-2xl font-bold'>GH 1000.00</h1>
                      </div>

                      <div className='border-l border-[#333333] h-10 lg:h-14 hidden lg:block' />

                      <div className='flex flex-col'>
                        <h1 className='text-[#333333] text-sm lg:text-base font-medium'>3 Days</h1>
                        <h1 className='text-[#333333] text-xl lg:text-2xl font-bold'>GH 2500.00</h1>
                      </div>

                      <div className='border-l border-[#333333] h-10 lg:h-14 hidden lg:block' />

                      <div className='flex flex-col'>
                        <h1 className='text-[#333333] text-sm lg:text-base font-medium'>Weekly</h1>
                        <h1 className='text-[#333333] text-xl lg:text-2xl font-bold'>GH 7020.00</h1>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'availability' && (
                  <div className='bg-[#F4F4F4] min-h-[10vh] max-h-96 rounded-b-3xl p-8 lg:p-12 xl:p-16 overflow-y-auto'>
                    <h1 className='text-[#333333] text-sm lg:text-base tracking-wider font-regular'>Availability content goes here.</h1>
                  </div>
                )}

              </div>
            </div>

            <div className='mt-12 lg:mt-16'>
              <div className='flex flex-col space-y-4'>
                <div className='flex justify-start items-center'>
                  <h1 className='text-[#333333] font-medium text-xl lg:text-2xl'>Equipment Location On Map</h1>
                </div>

                <div className='flex justify-center items-center bg-[#F4F4F4] min-h-32 lg:min-h-40 xl:min-h-48'>
                  <h1>Map Here</h1>
                </div>
              </div>
            </div>

            <div className='mt-12 lg:mt-16'>
              <div className='flex justify-start items-center'>
                <h1 className='text-[#333333] text-xl lg:text-2xl font-medium'>related equipment</h1>
              </div>

              <div className='relative mt-8 lg:mt-12'>
                <button className='absolute left-[-12] top-1/3 -translate-y-0/2 z-10 flex justify-center items-center w-8 lg:w-10 h-8 lg:h-10 rounded-full bg-[#000000]/60 transition-colors shadow-lg cursor-pointer'>
                  <i className="ri-arrow-left-s-line text-[#fff] text-xl lg:text-2xl"></i>
                </button>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-8'>
                  {cars.map((car) => (
                    <div key={car.id} className='flex flex-col'>
                      <div className='group relative mb-4 w-full overflow-hidden rounded-4xl bg-gray-50 shadow-sm'>
                        <div className='relative w-full pb-[100%]'>
                          <Image
                            src={car.image}
                            alt={car.name}
                            fill
                            className='object-cover transition-transform duration-300 group-hover:scale-[1.03]'
                          />
                        </div>

                        <button className='absolute top-3 right-3 flex justify-center items-center w-8 lg:w-10 h-8 lg:h-10 rounded-full bg-white/50 hover:bg-[#FFF0F6] transition-colors shadow-md'>
                          <i className="ri-heart-line text-[#FF0063] text-lg lg:text-xl"></i>
                        </button>
                      </div>

                      <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-base lg:text-lg text-[#333333] font-semibold'>{car.name}</h1>
                        <div className='flex items-center space-x-1'>
                          <i className="ri-map-pin-2-line text-[#787878]"></i>
                          <h1 className='text-[#787878] text-xs lg:text-sm font-regular'>{car.location}</h1>
                        </div>

                        <div className='flex items-center space-x-1 mt-1'>
                          <i className="ri-star-fill text-[#FFB800]"></i>
                          <h1 className='text-[#787878] text-xs lg:text-sm font-medium'>{car.rating}</h1>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button className='absolute right-[-12] top-1/3 -translate-y-0/2 z-10 flex justify-center items-center w-8 lg:w-10 h-8 lg:h-10 rounded-full bg-[#000000]/60 transition-colors shadow-lg cursor-pointer'>
                  <i className="ri-arrow-right-s-line text-white text-lg lg:text-xl"></i>
                </button>
              </div>
            </div>
          </div>

          <div className='flex flex-col'>
            <div className='pt-12 lg:pt-16 xl:pt-20 flex justify-center items-center space-x-4'>
              <div className='flex items-center space-x-2 cursor-pointer'>
                <i className="ri-share-2-line text-[#333333] text-lg lg:text-xl"></i>
                <h1 className='text-[#333333] text-sm lg:text-base font-medium'>Share</h1>
              </div>

              <div className='h-6 border-l border-[#333333]'></div>

              <div className='flex items-center space-x-2 cursor-pointer'>
                <i className="ri-heart-line text-[#333333] text-lg lg:text-xl"></i>
                <h1 className='text-[#333333] text-sm lg:text-base font-medium'>Save</h1>
              </div>
            </div>

            <div className='mt-12 lg:mt-16 xl:mt-20 py-8 lg:py-10 xl:py-12 flex flex-col justify-center shadow-xl rounded-b-4xl'>
              <div className='flex justify-center items-center'>
                <h1 className='text-[#000000] text-base lg:text-lg font-medium'>Rental Period</h1>
              </div>

              <div className='relative mt-8 lg:mt-12 xl:mt-16 flex justify-center'>
                <div
                  className='flex justify-center items-center border border-[#787878] w-56 lg:w-64 xl:w-68 mx-auto h-12 lg:h-14 rounded-full space-x-2 cursor-pointer bg-white'
                  onClick={handleDateClick}
                >
                  <i className="ri-calendar-2-line text-[#787878] text-sm lg:text-base"></i>
                  <h1 className='text-[#787878] text-sm lg:text-base font-regular'>
                    {startDate && endDate ? `${startDate} - ${endDate}` : 'Select Rental Dates'}
                  </h1>
                </div>

                {showDateDropdown && (
                  <div
                    className='absolute top-full mt-3 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl border border-gray-200 p-4 z-[100] w-max'
                    onClick={(e) => e.stopPropagation()}
                  >
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

              <div className='mt-8 lg:mt-12 xl:mt-16 flex justify-center items-center'>
                <button className='flex justify-center items-center w-56 lg:w-64 xl:w-68 h-12 lg:h-14 bg-[#43A047] rounded-full cursor-pointer' onClick={() => router.push('/equipments/reserve')}>
                  <h1 className='text-white font-medium text-sm lg:text-base'>Reserve</h1>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className='mt-36 bg-[#43A047] py-16'>
          <FooterSection />
        </section>
      </main>
    </>
  );
}

export default Page;