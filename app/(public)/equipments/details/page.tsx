'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Footer from '@/components/public/Footer'
import PageHeader from '@/components/public/PageHeader';
import EquipmentCard from '@/components/public/EquipmentCard';
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

  const images = [
    { src: Car1Image, alt: 'Main product view' },
    { src: Car2Image, alt: 'Alternate view 1' },
    { src: Car3Image, alt: 'Alternate view 2' },
  ];


  const highlyRatedCars = [
    { id: 1, image: Car1Image, name: 'Bucket Wheel Excavator', location: 'Kumasi, Ghana', rating: '4.8', price: 'GHC1,123' },
    { id: 2, image: Car2Image, name: 'Honda Accord', location: 'Accra', rating: '4.9', price: 'GHC1,123' },
    { id: 3, image: Car1Image, name: 'Mercedes Benz', location: 'Takoradi', rating: '5.0', price: 'GHC1,123' },
    { id: 5, image: Car2Image, name: 'Audi A6', location: 'Kumasi', rating: '4.9', price: 'GHC1,123' },
  ];


  const handleDateClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowDateDropdown(!showDateDropdown);
  };

  const handleDateDone = () => {
    setShowDateDropdown(false);
  };

  const handleDateCancel = () => {
    setStartDate('');
    setEndDate('');
    setShowDateDropdown(false);
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
      <main className='min-h-screen bg-white'>
        <PageHeader />

        <section className='mt-20 md:mt-24 xl:mt-28 w-[90vw] mx-auto grid grid-cols-1 gap-8 xl:w-[85vw] xl:grid-cols-[2.5fr_1fr] xl:gap-10'>
          <div className='flex flex-col gap-4'>
            <div className='relative w-full aspect-[6/4] bg-gray-100 overflow-hidden'>
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 60vw"
                className='object-cover'
                priority
              />
            </div>

            <div className='grid grid-cols-3 gap-2 lg:gap-3'>
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

            <div className='mt-6 lg:mt-8'>
              <div className='flex flex-col'>
                <div className='flex flex-col justify-center items-start'>
                  <h1 className='text-[#43A047] font-bold text-sm xl:text-lg'>Excavators</h1>
                  <div className='mt-2 flex space-x-4'>
                    <div className='flex items-center'>
                      <i className="ri-map-pin-2-line"></i>
                      <h1 className='text-[#333333] text-xs lg:text-base font-regular'>Takoradi</h1>
                    </div>

                    <div className='flex space-x-1 items-center'>
                      <i className="ri-star-s-line"></i>
                      <i className="ri-star-s-line"></i>
                      <i className="ri-star-s-line"></i>
                      <i className="ri-star-s-line"></i>
                      <h1 className='text-[#333333] text-xs lg:text-base'>4.9</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-4 lg:mt-6'>
              <div className='flex flex-col'>
                <div className='flex items-center space-x-1'>
                  <button className={`flex justify-center items-center ${activeTab === 'description' ? 'bg-[#F4F4F4] text-[#333333]' : 'bg-[#333333] text-white'} text-xs md:text-sm lg:text-base font-medium w-24 md:w-28 lg:w-32 h-10 lg:h-12 transition-all hover:opacity-90 cursor-pointer`} onClick={() => setActiveTab('description')}>Description</button>
                  <button className={`flex justify-center items-center ${activeTab === 'rate' ? 'bg-[#F4F4F4] text-[#333333]' : 'bg-[#333333] text-white'} text-xs md:text-sm lg:text-base font-medium w-20 md:w-24 lg:w-28 h-10 lg:h-12 transition-all hover:opacity-90 cursor-pointer`} onClick={() => setActiveTab('rate')}>Rate</button>
                  <button className={`flex justify-center items-center ${activeTab === 'availability' ? 'bg-[#F4F4F4] text-[#333333]' : 'bg-[#333333] text-white'} text-xs md:text-sm lg:text-base font-medium w-24 md:w-28 lg:w-32 h-10 lg:h-12 transition-all hover:opacity-90 cursor-pointer`} onClick={() => setActiveTab('availability')}>Availability</button>
                </div>

                {activeTab === 'description' && (
                  <div className='bg-[#F4F4F4] min-h-[10vh] max-h-96 rounded-b-3xl p-6 lg:p-8 xl:p-10 overflow-y-auto'>
                    <h1 className='text-[#333333] text-xs lg:text-base tracking-wider font-regular'>Lorem ipsum dolor sit amet, {description}
                    </h1>
                  </div>
                )}

                {activeTab === 'rate' && (
                  <div className='bg-[#fff] min-h-[10vh] max-h-96 shadow-md rounded-b-3xl p-8 lg:p-12 xl:p-16 overflow-y-auto'>
                    <div className='flex flex-col lg:flex-row justify-around items-center space-y-4 lg:space-y-0'>
                      <div className='flex flex-col'>
                        <h1 className='text-[#333333] text-sm lg:text-lg font-medium'>Daily</h1>
                        <h1 className='text-[#333333] text-lg lg:text-xl font-bold'>GH 1000.00</h1>
                      </div>

                      <div className='border-l border-[#333333] h-8 lg:h-10 hidden lg:block' />

                      <div className='flex flex-col'>
                        <h1 className='text-[#333333] text-sm lg:text-lg font-medium'>3 Days</h1>
                        <h1 className='text-[#333333] text-lg lg:text-xl font-bold'>GH 2500.00</h1>
                      </div>

                      <div className='border-l border-[#333333] h-8 lg:h-10 hidden lg:block' />

                      <div className='flex flex-col'>
                        <h1 className='text-[#333333] text-sm lg:text-lg font-medium'>Weekly</h1
                        >
                        <h1 className='text-[#333333] text-lg lg:text-xl font-bold'>GH 7020.00</h1>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'availability' && (
                  <div className='bg-[#F4F4F4] min-h-[10vh] max-h-96 rounded-b-3xl p-6 lg:p-8 xl:p-10 overflow-y-auto'>
                    <h1 className='text-[#333333] text-xs lg:text-base tracking-wider font-regular'>Availability content goes here.</h1>
                  </div>
                )}

              </div>
            </div>

            <div className='mt-8 lg:mt-12'>
              <div className='flex flex-col space-y-4'>
                <div className='flex justify-start items-center'>
                  <h1 className='text-[#333333] font-medium text-sm lg:text-lg'>Equipment Location On Map</h1>
                </div>

                <div className='flex justify-center items-center bg-[#F4F4F4] min-h-24 lg:min-h-32 xl:min-h-40'>
                  <h1>Map Here</h1>
                </div>
              </div>
            </div>

            <div className="mt-12 md:mt-16 xl:mt-20">
              <div className="max-w-[85vw] mx-auto">
                <h1 className="text-[#333333] font-medium text-base md:text-lg xl:text-xl">Highly Rated By Customers</h1>

                <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:grid-cols-4 xl:grid-cols-4 xl:gap-10">
                  {highlyRatedCars.map((item, index) => (
                    <EquipmentCard key={index} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col'>
            <div className='pt-8 lg:pt-12 xl:pt-16 flex justify-center items-center space-x-3'>
              <div className='flex items-center space-x-2 cursor-pointer'>
                <i className="ri-share-2-line text-[#333333] text-base lg:text-lg"></i>
                <h1 className='text-[#333333] text-xs lg:text-base font-medium'>Share</h1>
              </div>

              <div className='h-6 border-l border-[#333333]'></div>

              <div className='flex items-center space-x-2 cursor-pointer'>
                <i className="ri-heart-line text-[#333333] text-base lg:text-lg"></i>
                <h1 className='text-[#333333] text-xs lg:text-base font-medium'>Save</h1>
              </div>
            </div>

            <div className='mt-8 lg:mt-12 xl:mt-16 py-6 lg:py-8 xl:py-10 flex flex-col justify-center shadow-xl rounded-b-4xl'>
              <div className='flex justify-center items-center'>
                <h1 className='text-[#000000] text-sm lg:text-lg font-medium'>Rental Period</h1>
              </div>

              <div className='relative mt-6 lg:mt-8 xl:mt-10 flex justify-center'>
                <div
                  className='flex justify-center items-center border border-[#787878] w-40 lg:w-48 xl:w-56 mx-auto h-10 lg:h-12 rounded-full space-x-2 cursor-pointer bg-white'
                  onClick={handleDateClick}
                >
                  <i className="ri-calendar-2-line text-[#787878] text-xs lg:text-base"></i>
                  <h1 className='text-[#787878] text-xs lg:text-base font-regular'>
                    {startDate && endDate ? `${startDate} - ${endDate}` : 'Select Rental Dates'}
                  </h1>
                </div>

                {showDateDropdown && (
                  <div
                    className='absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl border border-gray-200 p-4 lg:p-6 z-[100] min-w-[280px]'
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className='space-y-4'>
                      <div className='flex flex-col space-y-3'>
                        <div className='flex flex-col'>
                          <label className='text-xs lg:text-sm font-medium text-[#333333] mb-1'>Start Date</label>
                          <input
                            type='date'
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className='px-3 py-2 border border-gray-300 rounded-lg text-xs lg:text-base focus:outline-none focus:ring-2 focus:ring-[#43A047] focus:border-transparent'
                          />
                        </div>
                        <div className='flex flex-col'>
                          <label className='text-xs lg:text-sm font-medium text-[#333333] mb-1'>End Date</label>
                          <input
                            type='date'
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            min={startDate}
                            className='px-3 py-2 border border-gray-300 rounded-lg text-xs lg:text-base focus:outline-none focus:ring-2 focus:ring-[#43A047] focus:border-transparent'
                          />
                        </div>
                      </div>
                      <div className='flex space-x-2 pt-2'>
                        <button
                          onClick={handleDateCancel}
                          className='flex-1 px-3 py-2 border border-gray-300 rounded-lg text-xs lg:text-base font-medium text-gray-700 hover:bg-gray-50 active:scale-95 transition-all focus:ring-2 focus:ring-offset-2 focus:ring-gray-300'
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleDateDone}
                          className='flex-1 px-3 py-2 bg-[#43A047] text-white rounded-lg text-xs lg:text-base font-medium hover:bg-[#388E3C] active:scale-95 transition-all focus:ring-2 focus:ring-offset-2 focus:ring-[#43A047]'
                        >
                          Done
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className='mt-6 lg:mt-8 xl:mt-10 flex justify-center items-center'>
                <button className='flex justify-center items-center w-40 lg:w-48 xl:w-56 h-10 lg:h-12 bg-[#43A047] hover:bg-[#388E3C] active:scale-95 transition-all rounded-full cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-[#43A047]' onClick={() => router.push('/equipments/reserve')}>
                  <h1 className='text-white font-medium text-xs lg:text-base'>Reserve</h1>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className='mt-12 md:mt-16 xl:mt-20'>
          <Footer />
        </section>
      </main>
    </>
  );
}

export default Page;