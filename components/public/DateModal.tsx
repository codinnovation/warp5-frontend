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
      <div className="fixed inset-0 z-40 bg-transparent" onClick={onCancel}></div>
      <div className="absolute top-full left-0 mt-3 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 w-[340px] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
        <h3 className="text-gray-800 text-sm font-semibold mb-4">Select Rental Dates</h3>
        <div className="flex gap-3 mb-6">
          <div className="flex-1">
            <label className="block text-gray-500 text-xs font-medium mb-1.5 ml-1">From</label>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => onFromDateChange(e.target.value)}
              className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-green-500/20 focus:border-green-500 focus:outline-none transition-all"
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-500 text-xs font-medium mb-1.5 ml-1">To</label>
            <input
              type="date"
              value={toDate}
              onChange={(e) => onToDateChange(e.target.value)}
              className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-green-500/20 focus:border-green-500 focus:outline-none transition-all"
            />
          </div>
        </div>
        <div className="flex gap-3 pt-2 border-t border-gray-100">
          <button
            onClick={onCancel}
            className="flex-1 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors"
          >
            Clear
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-black hover:bg-gray-800 text-white px-4 py-2.5 rounded-xl font-medium text-sm transition-all shadow-lg shadow-black/10 active:scale-95"
          >
            Apply Dates
          </button>
        </div>
      </div>
    </>
  );
}
