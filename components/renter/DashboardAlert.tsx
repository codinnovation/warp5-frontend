'use client';

import React, { useState } from 'react';

function DashboardAlert({ className }: { className?: string }) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className={`animate-in fade-in slide-in-from-top-4 duration-500 ${className || 'mt-8'}`}>
      <div className='relative bg-orange-50 border border-orange-100 rounded-2xl p-4 md:p-5 flex items-start gap-4 shadow-sm'>

        {/* Icon Container */}
        <div className='shrink-0 w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl shadow-sm text-orange-500 flex items-center justify-center text-xl md:text-2xl border border-orange-100'>
          <i className="ri-alarm-warning-fill"></i>
        </div>

        {/* Content */}
        <div className='flex-1 py-1'>
          <h4 className='text-gray-900 font-bold text-sm md:text-base mb-1'>Action Required: Rental Ending Soon</h4>
          <p className='text-gray-600 text-xs md:text-sm leading-relaxed'>
            Your rental for <span className="font-semibold text-gray-800">CAT 320 Excavator</span> ends tomorrow, Nov 15th. Please ensure the equipment is ready for pickup or extend your rental.
          </p>
          <div className="mt-3 flex gap-3">
            <button className="text-xs font-bold text-orange-600 bg-white px-4 py-2 rounded-lg border border-orange-200 hover:bg-orange-50 transition-colors shadow-sm">
              Extend Rental
            </button>
            <button className="text-xs font-bold text-gray-500 hover:text-gray-900 px-2 py-2 transition-colors">
              View Details
            </button>
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={() => setIsVisible(false)}
          className='text-gray-400 hover:text-gray-600 p-2 rounded-lg hover:bg-orange-100/50 transition-colors absolute top-2 right-2'
        >
          <i className="ri-close-line text-lg"></i>
        </button>

      </div>
    </div>
  );
}

export default DashboardAlert;
