'use client';

import React from 'react';

interface DateModalProps {
  show: boolean;
  fromDate: string;
  toDate: string;
  onFromDateChange: (value: string) => void;
  onToDateChange: (value: string) => void;
  onClose: () => void;
  onCancel: () => void;
}

export default function DateModal({
  show,
  fromDate,
  toDate,
  onFromDateChange,
  onToDateChange,
  onClose,
  onCancel
}: DateModalProps) {
  if (!show) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onCancel}></div>
      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-lg shadow-xl p-6 w-auto z-50 xl:left-1/2 xl:-translate-x-1/2 xl:w-80">
        <h3 className="text-gray-800 text-xs font-medium mb-4 xl:text-base">Select Date Range</h3>
        <div className="flex items-center gap-3">
          <div>
            <label className="block text-gray-700 text-xs font-medium mb-2 xl:text-sm">From</label>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => onFromDateChange(e.target.value)}
              className="w-[90px] text-sm px-3 py-2 border border-gray-300 rounded-lg text-sm xl:text-base xl:w-[120px]"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-xs font-medium mb-2 xl:text-sm">To</label>
            <input
              type="date"
              value={toDate}
              onChange={(e) => onToDateChange(e.target.value)}
              className="w-[90px] text-sm px-3 py-2 border border-gray-300 rounded-lg text-sm xl:text-base xl:w-[120px]"
            />
          </div>
        </div>
        <div className="flex gap-3 mt-6">
          <button
            onClick={onCancel}
            className="flex-1 text-sm py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-all xl:text-base"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-[#43A047] hover:bg-[#388E3C] text-white py-2 rounded-lg font-medium text-sm transition-all xl:text-base"
          >
            Done
          </button>
        </div>
      </div>
    </>
  );
}
