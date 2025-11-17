import React from 'react';

const PartnerSection: React.FC = () => {
  return (
    <div className='w-[85vw] mx-auto flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-center space-y-1 sm:space-y-2 lg:space-y-3 xl:space-y-4'>
        <h1 className='text-[#333333] font-semibold text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-center'>Our Partners</h1>
        <p className='text-[#333333] font-regular text-xs sm:text-xs lg:text-sm xl:text-base text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default PartnerSection;
