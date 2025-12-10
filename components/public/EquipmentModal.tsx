'use client';

import React from 'react';

interface EquipmentModalProps {
  show: boolean;
  selectedEquipment: string;
  onSelect: (equipment: string) => void;
  onClose: () => void;
}

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

export default function EquipmentModal({ show, selectedEquipment, onSelect, onClose }: EquipmentModalProps) {
  if (!show) return null;

  return (
    <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl p-4 w-auto max-h-60 overflow-y-auto scroll-smooth z-50 xl:w-72">
      {equipmentTypes.map((equipment) => (
        <div
          key={equipment}
          className="px-4 py-2 text-xs hover:bg-gray-100 cursor-pointer rounded text-gray-800 transition-colors xl:text-base"
          onClick={() => {
            onSelect(equipment);
            onClose();
          }}
        >
          {equipment}
        </div>
      ))}
    </div>
  );
}
