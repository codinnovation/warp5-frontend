'use client';

import React from 'react';

interface PriceModalProps {
  show: boolean;
  minPrice: string;
  maxPrice: string;
  onMinPriceChange: (value: string) => void;
  onMaxPriceChange: (value: string) => void;
  onClose: () => void;
}

export default function PriceModal({
  show,
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange,
  onClose
}: PriceModalProps) {
  if (!show) return null;

  return (
    <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl p-6 w-auto z-50 xl:w-80">
      <h3 className="text-gray-800 text-xs font-medium mb-4 xl:text-base">Select Price Range</h3>
      <div className="flex items-center gap-3">
        <input
          type="number"
          placeholder="Min"
          value={minPrice}
          onChange={(e) => onMinPriceChange(e.target.value)}
          className="w-[90px] text-sm px-3 py-2 border border-gray-300 rounded-lg text-sm xl:text-base xl:w-[120px]"
        />
        <span className="text-gray-500">-</span>
        <input
          type="number"
          placeholder="Max"
          value={maxPrice}
          onChange={(e) => onMaxPriceChange(e.target.value)}
          className="w-[90px] text-sm px-3 py-2 border border-gray-300 rounded-lg text-sm xl:text-base xl:w-[120px]"
        />
      </div>
      <button
        onClick={onClose}
        className="w-full mt-4 bg-[#43A047] hover:bg-[#388E3C] text-white py-2 text-sm rounded-lg transition-all xl:text-base"
      >
        Apply
      </button>
    </div>
  );
}
