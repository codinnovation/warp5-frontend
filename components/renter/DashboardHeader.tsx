'use client';

import React from 'react';

interface DashboardHeaderProps {
  title: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ title }) => {
  // Get current date
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);

  return (
    <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 shrink-0 mt-8 mb-2">
      <div>
        <h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">{title}</h1>
        <p className="text-sm text-gray-500 mt-1 font-medium">{formattedDate}</p>
      </div>

      {/* Optional: Add a subtle user greeting or contextual action here if needed in future */}
      <div className="hidden md:block text-right">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Welcome Back</p>
        <p className="text-sm font-bold text-gray-900">Kwame Mensah</p>
      </div>
    </header>
  );
};

export default DashboardHeader;
