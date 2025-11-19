import React from 'react';

const HowItWorksSection: React.FC = () => {
  const howItWorksSteps = [
    {
      id: 1,
      title: 'Make a Reservation Online',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
    },
    {
      id: 2,
      title: 'Pick Up Your Equipment',
      description:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.',
    },
    {
      id: 3,
      title: 'Use the Equipment',
      description:
        'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.',
    },
    {
      id: 4,
      title: 'Return the Equipment',
      description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.',
    },
  ];

  return (
    <div className='w-[80vw] sm:w-[65vw] mx-auto'>
      <div className='flex justify-center items-center'>
        <h1 className='text-[#333333] text-base lg:text-xl font-semibold'>How It Works</h1>
      </div>

      <div className='mt-4 sm:mt-6 lg:mt-8 xl:mt-10 flex flex-col space-y-4 sm:space-y-6 lg:space-y-8 xl:space-y-10'>
        {howItWorksSteps.map((step, index) => (
          <div key={step.id} className='flex items-start space-x-3 sm:space-x-4 lg:space-x-6 xl:space-x-8'>
            <div className='flex flex-col items-center'>
              <div className='flex justify-center items-center w-4 sm:w-5 lg:w-6 xl:w-7 h-4 sm:h-5 lg:h-6 xl:h-7 bg-[#333333] rounded-full'>
                <span className='text-white text-xs sm:text-xs lg:text-sm xl:text-base'>{step.id}</span>
              </div>
              {index < howItWorksSteps.length - 1 && <div className='w-0.5 h-8 sm:h-12 lg:h-16 xl:h-20 bg-[#333333] mt-2'></div>}
            </div>
            <div className='flex flex-col space-y-1 sm:space-y-2 lg:space-y-3 xl:space-y-4'>
              <h2 className='text-[#333333] text-sm lg:text-lg font-semibold'>{step.title}</h2>
              <p className='text-[#333333] text-xs lg:text-base'>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorksSection;
