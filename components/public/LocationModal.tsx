'use client';

import React from 'react';

interface LocationModalProps {
  show: boolean;
  selectedLocation: string;
  onSelect: (location: string) => void;
  onClose: () => void;
}

const cities = [
  'Tarkwa, Ghana',
  'Obuasi, Ghana',
  'Kumasi, Ghana',
  'Accra, Ghana',
  'Ahafo, Ghana',
  'Tema, Ghana',
  'Nsuta, Ghana'
];

export default function LocationModal({ show, selectedLocation, onSelect, onClose }: LocationModalProps) {
  if (!show) return null;

  return (
    <div className="absolute top-full left-0 mt-3 bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 w-64 max-h-72 overflow-y-auto scroll-smooth z-50 animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Select City</div>
      {cities.map((city) => (
        <div
          key={city}
          className="px-4 py-3 text-sm font-medium hover:bg-green-50 hover:text-green-700 cursor-pointer rounded-xl text-gray-700 transition-all duration-200 flex items-center justify-between group"
          onClick={() => {
            onSelect(city);
            onClose();
          }}
        >
          {city}
          <i className="ri-check-line opacity-0 group-hover:opacity-100 text-green-600 transition-opacity"></i>
        </div>
      ))}
    </div>
  );
}
