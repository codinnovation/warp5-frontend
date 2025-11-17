import React from 'react';

const PartnerSection: React.FC = () => {
  return (
    <div className='w-[85vw] mx-auto flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-center space-y-3 lg:space-y-4 xl:space-y-5'>
        <h1 className='text-[#333333] font-semibold text-3xl lg:text-4xl xl:text-5xl text-center'>Our Partners</h1>
        <p className='text-[#333333] font-regular text-sm lg:text-base xl:text-lg text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default PartnerSection;
