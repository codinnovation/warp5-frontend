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
    <div className="absolute top-full left-0 mt-3 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 w-80 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
      <h3 className="text-gray-800 text-sm font-semibold mb-4">Price Range (GH₵)</h3>
      <div className="flex items-center gap-3 mb-6">
        <div className="relative flex-1">
          <span className="absolute left-3 top-2.5 text-gray-400 text-xs">Min</span>
          <input
            type="number"
            value={minPrice}
            onChange={(e) => onMinPriceChange(e.target.value)}
            className="w-full pl-3 pt-6 pb-2 pr-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-green-500/20 focus:border-green-500 focus:outline-none transition-all"
          />
        </div>
        <span className="text-gray-300">-</span>
        <div className="relative flex-1">
          <span className="absolute left-3 top-2.5 text-gray-400 text-xs">Max</span>
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => onMaxPriceChange(e.target.value)}
            className="w-full pl-3 pt-6 pb-2 pr-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-green-500/20 focus:border-green-500 focus:outline-none transition-all"
          />
        </div>
      </div>
      <button
        onClick={onClose}
        className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-xl font-medium text-sm transition-all shadow-lg shadow-black/10 active:scale-95"
      >
        Apply Filter
      </button>
    </div>
  );
}
