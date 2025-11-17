'use client';

import React from 'react';

interface DashboardHeaderProps {
  title: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ title }) => {
  return (
    <section className='flex justify-between items-center shrink-0'>
      <h1 className='text-[#000000] font-medium text-base lg:text-xl xl:text-2xl'>{title}</h1>
      <h2 className='text-[#000000] font-medium text-base lg:text-lg xl:text-xl'>Welcome, Kwame</h2>
    </section>
  );
};

export default DashboardHeader;
