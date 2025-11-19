'use client';

import React from 'react';

interface DashboardHeaderProps {
  title: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ title }) => {
  return (
    <section className='flex justify-between items-center shrink-0'>
      <h1 className='text-[#000000] font-bold text-sm lg:text-xl'>{title}</h1>
      <h2 className='text-[#000000] font-medium text-xs lg:text-base'>Welcome, Kwame</h2>
    </section>
  );
};

export default DashboardHeader;
