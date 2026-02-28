'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import DashboardHeader from '@/components/renter/DashboardHeader';
import Car1Image from '../../../../../public/cars/car1.jpg';

function Page() {
  const router = useRouter();

  // Mock Timeline Data
  const steps = [
    { label: 'Booked', date: 'Oct 25, 10:30 AM', completed: true },
    { label: 'Confirmed', date: 'Oct 25, 02:00 PM', completed: true },
    { label: 'Active', date: 'Nov 01, 8:00 AM', completed: true },
    { label: 'Completed', date: 'Expected Nov 30', completed: false },
  ];

  return (
    <div className='flex flex-col gap-8 pb-12'>
      <DashboardHeader title='Reservation Details' />

      {/* Top Action Bar */}
      <section className='flex flex-wrap gap-4 justify-between items-center'>
        <button
          onClick={() => router.back()}
          className='flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors font-medium text-sm'
        >
          <div className='w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center'>
            <i className="ri-arrow-left-line"></i>
          </div>
          Back to Reservations
        </button>

        <div className="flex gap-3">
          <button className='px-4 py-2 rounded-xl border border-gray-200 bg-white text-gray-600 font-medium text-sm hover:bg-gray-50 transition-colors'>
            <i className="ri-customer-service-2-line mr-2"></i> Support
          </button>
          <button className='px-4 py-2 rounded-xl bg-red-50 text-red-600 font-medium text-sm hover:bg-red-100 transition-colors border border-red-100'>
            Cancel Reservation
          </button>
        </div>
      </section>

      {/* Status Timeline */}
      <section className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative">
          {/* Visual Line (Desktop) */}
          <div className="hidden md:block absolute top-[14px] left-0 w-full h-0.5 bg-gray-100 z-0 mx-12" style={{ width: 'calc(100% - 6rem)' }}></div>

          {steps.map((step, index) => (
            <div key={index} className="flex md:flex-col items-center gap-4 md:gap-2 relative z-10 w-full md:w-auto">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border-2 ${step.completed ? 'bg-green-600 border-green-600 text-white' : 'bg-white border-gray-200 text-gray-300'}`}>
                {step.completed ? <i className="ri-check-line"></i> : <div className="w-2 h-2 rounded-full bg-gray-200"></div>}
              </div>
              <div className="text-left md:text-center">
                <p className={`text-sm font-bold ${step.completed ? 'text-gray-900' : 'text-gray-400'}`}>{step.label}</p>
                <p className="text-xs text-gray-400">{step.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8'>

        {/* Left Column: Equipment & Details */}
        <div className="space-y-6">
          <div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100 overflow-hidden'>
            <div className="aspect-video relative rounded-xl overflow-hidden bg-gray-50 mb-6">
              <Image src={Car1Image} alt='Equipment Image' fill className='object-cover' />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900 border border-white/20 shadow-sm">
                <i className="ri-hashtag text-green-500 mr-1"></i> ID: R-EX23
              </div>
            </div>

            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">CAT 320 GC Hydraulic Excavator</h1>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <i className="ri-map-pin-line text-green-600"></i>
                <span>Kumasi, Ashanti Region</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Start Date</p>
                <p className="text-gray-900 font-semibold">Nov 01, 2025</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">End Date</p>
                <p className="text-gray-900 font-semibold">Nov 30, 2025</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-2">Instructions / Notes</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Please ensure the operator has a valid license upon arrival. The site is located 5km off the main Kumasi-Accra highway. Contact site manager roughly 1 hour before delivery.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Vendor & Payment */}
        <div className='space-y-6'>

          {/* Vendor Card */}
          <div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100'>
            <h3 className='text-sm font-bold text-gray-900 uppercase tracking-wide mb-4 flex items-center gap-2'>
              <i className="ri-store-2-line text-green-600"></i> Vendor Details
            </h3>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl text-gray-400">
                <i className="ri-building-4-line"></i>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Mega Earth Movers</h4>
                <div className="flex text-xs text-yellow-500 gap-1">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-half-fill"></i>
                  <span className="text-gray-400 ml-1">(4.8)</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 py-2.5 rounded-xl bg-green-50 text-green-700 font-semibold text-sm hover:bg-green-100 transition-colors">
                Chat Vendor
              </button>
              <button className="py-2.5 px-4 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
                <i className="ri-phone-line"></i>
              </button>
            </div>
          </div>

          {/* Payment Summary */}
          <div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100'>
            <h3 className='text-sm font-bold text-gray-900 uppercase tracking-wide mb-4 flex items-center gap-2'>
              <i className="ri-wallet-3-line text-green-600"></i> Payment Summary
            </h3>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Rate (30 Days)</span>
                <span>GHC 28,000</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Service Fee</span>
                <span>GHC 1,000</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Taxes</span>
                <span>GHC 1,000</span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                <span className="font-bold text-gray-900">Total Paid</span>
                <span className="font-bold text-xl text-green-600">GHC 30,000</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-green-50 border border-green-100 rounded-xl mb-4">
              <div className="flex items-center gap-2">
                <i className="ri-checkbox-circle-fill text-green-600 text-lg"></i>
                <span className="text-sm font-medium text-green-800">Paid via Card</span>
              </div>
              <span className="text-xs text-green-600 font-mono">**** 4242</span>
            </div>

            <button className='w-full py-3 border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2'>
              <i className='ri-download-2-line'></i>
              Download Invoice
            </button>
          </div>

        </div>

      </section>
    </div>
  );
}

export default Page;
