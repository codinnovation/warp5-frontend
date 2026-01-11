'use client';

import React from 'react';

interface EquipmentModalProps {
  show: boolean;
  selectedEquipment: string;
  onSelect: (equipment: string) => void;
  onClose: () => void;
}

const equipmentTypes = [
  'Mobile Crane GMK6400',
  'Excavator Model X',
  'Dump Truck 797F',
  'Crawler Excavator HX500',
  'Tower Crane TC700',
  'Mini Excavator E50',
  'Excavator Model Z300'
];

export default function EquipmentModal({ show, selectedEquipment, onSelect, onClose }: EquipmentModalProps) {
  if (!show) return null;

  return (
    <div className="absolute top-full left-0 mt-3 bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 w-72 max-h-72 overflow-y-auto scroll-smooth z-50 animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Select Equipment</div>
      {equipmentTypes.map((equipment) => (
        <div
          key={equipment}
          className="px-4 py-3 text-sm font-medium hover:bg-green-50 hover:text-green-700 cursor-pointer rounded-xl text-gray-700 transition-all duration-200 flex items-center justify-between group"
          onClick={() => {
            onSelect(equipment);
            onClose();
          }}
        >
          {equipment}
          <i className="ri-check-line opacity-0 group-hover:opacity-100 text-green-600 transition-opacity"></i>
        </div>
      ))}
    </div>
  );
}
