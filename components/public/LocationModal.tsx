'use client';

import React from 'react';

interface LocationModalProps {
  show: boolean;
  selectedLocation: string;
  onSelect: (location: string) => void;
  onClose: () => void;
}

const cities = [
  'Kumasi',
  'Accra',
  'Takoradi',
  'Cape Coast',
  'Tamale',
  'Bolga',
  'Sunyani',
  'Obuasi',
  'Techiman',
  'Ho',
];

export default function LocationModal({ show, selectedLocation, onSelect, onClose }: LocationModalProps) {
  if (!show) return null;

  return (
    <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl p-4 w-auto max-h-60 overflow-y-auto scroll-smooth z-50 xl:w-64">
      {cities.map((city) => (
        <div
          key={city}
          className="px-4 py-2 text-xs hover:bg-gray-100 cursor-pointer rounded text-gray-800 transition-colors xl:text-base"
          onClick={() => {
            onSelect(city);
            onClose();
          }}
        >
          {city}
        </div>
      ))}
    </div>
  );
}
