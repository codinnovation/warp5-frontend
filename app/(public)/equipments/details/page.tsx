'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image, { StaticImageData } from 'next/image';
import Footer from '@/components/public/Footer';
import PageHeader from '@/components/public/PageHeader';
import EquipmentCard from '@/components/public/EquipmentCard';
import Car1Image from '../../../../public/cars/car1.jpg';
import Car2Image from '../../../../public/cars/car2.jpg';
import Car3Image from '../../../../public/cars/car3.jpg';

function Page() {
  const router = useRouter();

  const [selectedImage, setSelectedImage] = useState(0);
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [activeTab, setActiveTab] = useState<'description' | 'specs' | 'reivews'>('description');

  const images = [
    { src: Car2Image, alt: 'Side view of excavator' },
    { src: Car1Image, alt: 'Front view of excavator' },
    { src: Car3Image, alt: 'Cabin view' },
  ];

  // Mock Data
  const equipmentDetails = {
    name: 'CAT 320 GC Hydraulic Excavator',
    price: 1200,
    rating: 4.9,
    reviews: 124,
    location: 'Accra, Ghana',
    specs: [
      { label: 'Operating Weight', value: '21,300 kg' },
      { label: 'Net Power', value: '107 kW' },
      { label: 'Dig Depth', value: '6,720 mm' },
      { label: 'Bucket Capacity', value: '1.0 m³' },
    ],
    features: ['Air Conditioning', 'GPS Tracking', 'Safety Camera', 'Quick Coupler']
  };

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

  return (
    <main className="min-h-screen bg-gray-50/50 font-sans text-gray-900">
      <PageHeader />

      {/* Main Content Wrapper */}
      <div className="pt-28 pb-12 md:pb-20 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Breadcrumb / Back Button */}
        <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
          <button onClick={() => router.back()} className="hover:text-green-600 transition-colors flex items-center gap-1">
            <i className="ri-arrow-left-s-line text-lg"></i> Back to Inventory
          </button>
          <span>/</span>
          <span className="text-gray-900 font-medium">Excavators</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* LEFT COLUMN: Gallery & Info (8 cols) */}
          <div className="lg:col-span-8 space-y-8">

            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative w-full aspect-[16/10] bg-gray-200 rounded-3xl overflow-hidden shadow-sm">
                <Image
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-gray-900 uppercase tracking-wide">
                  Available Now
                </div>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative w-24 h-24 md:w-32 md:h-24 flex-shrink-0 rounded-2xl overflow-hidden border-2 transition-all ${selectedImage === idx ? 'border-green-500 ring-2 ring-green-500/20' : 'border-transparent opacity-70 hover:opacity-100'}`}
                  >
                    <Image src={img.src} alt={img.alt} fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Title Block (Visible only on small screens) */}
            <div className="lg:hidden">
              <h1 className="text-lg font-bold mb-2 leading-tight">{equipmentDetails.name}</h1>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1"><i className="ri-map-pin-line"></i> {equipmentDetails.location}</span>
                <span className="flex items-center gap-1 text-yellow-500"><i className="ri-star-fill"></i> {equipmentDetails.rating} ({equipmentDetails.reviews})</span>
              </div>
              <div className="text-lg font-bold text-green-600">GH₵{equipmentDetails.price}<span className="text-sm font-normal text-gray-500">/day</span></div>
            </div>

            {/* Tabs & Details */}
            <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-sm border border-gray-100">
              <div className="flex items-center gap-8 border-b border-gray-100 mb-8 overflow-x-auto">
                {['Description', 'Specs', 'Reviews'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab.toLowerCase() as any)}
                    className={`pb-4 text-sm md:text-base font-semibold capitalize relative transition-colors ${activeTab === tab.toLowerCase() ? 'text-green-600' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                    {tab}
                    {activeTab === tab.toLowerCase() && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-green-600 rounded-t-full"></div>}
                  </button>
                ))}
              </div>

              <div className="min-h-[200px]">
                {activeTab === 'description' && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <h3 className="text-lg font-bold text-gray-900">About this Equipment</h3>
                    <p className="text-gray-600 leading-relaxed">
                      The {equipmentDetails.name} sets a new standard for performance and fuel efficiency in this size class.
                      With the industry's highest level of standard factory technology, a new cab focused on operator comfort and productivity,
                      and lower fuel and maintenance costs, this machine will set the pace for your construction site.
                    </p>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Key Features</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {equipmentDetails.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-600">
                            <i className="ri-checkbox-circle-fill text-green-500"></i> {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'specs' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
                    {equipmentDetails.specs.map((spec, idx) => (
                      <div key={idx} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                        <span className="text-gray-500 font-medium">{spec.label}</span>
                        <span className="text-gray-900 font-bold">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

          </div>


          {/* RIGHT COLUMN: Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">

            {/* Desktop Title details */}
            <div className="hidden lg:block">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 leading-tight">{equipmentDetails.name}</h1>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <span><i className="ri-map-pin-line text-green-600"></i> {equipmentDetails.location}</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span className="flex items-center gap-1"><i className="ri-star-fill text-yellow-400"></i> {equipmentDetails.rating} ({equipmentDetails.reviews} reviews)</span>
              </div>
            </div>

            {/* Booking Card */}
            <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-xl shadow-gray-200/50 border border-gray-100">
              <div className="flex items-end justify-between mb-8">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Daily Rate</p>
                  <h2 className="text-lg md:text-2xl lg:text-4xl font-bold text-gray-900">GH₵{equipmentDetails.price}</h2>
                </div>
                <div className="text-right">
                  <p className="text-xs text-green-600 font-bold bg-green-50 px-2 py-1 rounded-lg">Best Value</p>
                </div>
              </div>

              <hr className="border-gray-100 mb-6" />

              <div className="space-y-4 mb-8">
                <label className="text-sm font-bold text-gray-900">Rental Period</label>
                <div className="relative">
                  <button
                    onClick={handleDateClick}
                    className="w-full flex items-center justify-between p-4 bg-gray-50 border border-transparent hover:border-green-500 hover:bg-white rounded-xl transition-all text-left group"
                  >
                    <span className={startDate ? 'text-gray-900 font-medium' : 'text-gray-400'}>
                      {startDate && endDate ? `${startDate} - ${endDate}` : 'Select Dates'}
                    </span>
                    <i className="ri-calendar-event-line text-gray-400 group-hover:text-green-500"></i>
                  </button>

                  {/* Simplified Date Dropdown for Demo */}
                  {showDateDropdown && (
                    <div className="absolute top-full mt-2 w-full bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-50 animate-in fade-in zoom-in-95 duration-200">
                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="text-xs font-bold text-gray-500 mb-1 block">Start</label>
                            <input type="date" className="w-full border rounded-lg p-2 text-sm" onChange={(e) => setStartDate(e.target.value)} />
                          </div>
                          <div>
                            <label className="text-xs font-bold text-gray-500 mb-1 block">End</label>
                            <input type="date" className="w-full border rounded-lg p-2 text-sm" onChange={(e) => setEndDate(e.target.value)} />
                          </div>
                        </div>
                        <button onClick={() => setShowDateDropdown(false)} className="w-full py-2 bg-green-600 text-white rounded-lg text-sm font-bold">Done</button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={() => router.push('/equipments/reserve')}
                className="w-full py-4 bg-black hover:bg-green-600 text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-green-500/30 active:scale-95"
              >
                Reserver Now
              </button>

              <p className="text-center text-xs text-gray-400 mt-4">No payment required until confirmation.</p>
            </div>

            {/* Share/Save Actions */}
            <div className="flex items-center justify-center gap-6">
              <button className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors font-medium text-sm">
                <i className="ri-share-forward-line text-lg"></i> Share
              </button>
              <button className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors font-medium text-sm">
                <i className="ri-heart-line text-lg"></i> Save
              </button>
            </div>

          </div>
        </div>

        {/* Related Items */}
        <div className="mt-20 md:mt-32">
          <h2 className="text-lg md:text-2xl lg:text-4xl font-bold text-gray-900 mb-8">Similar Equipment</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlyRatedCars.map((item, index) => (
              <EquipmentCard key={index} item={item} />
            ))}
          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}

export default Page;