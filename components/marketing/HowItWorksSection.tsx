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
    <div className='w-[65vw] mx-auto'>
      <div className='flex justify-center items-center'>
        <h1 className='text-[#333333] text-3xl lg:text-4xl xl:text-5xl font-semibold'>How It Works</h1>
      </div>

      <div className='mt-8 lg:mt-10 xl:mt-12 flex flex-col space-y-8 lg:space-y-10 xl:space-y-12'>
        {howItWorksSteps.map((step, index) => (
          <div key={step.id} className='flex items-start space-x-6 lg:space-x-8 xl:space-x-10'>
            <div className='flex flex-col items-center'>
              <div className='flex justify-center items-center w-6 lg:w-7 xl:w-8 h-6 lg:h-7 xl:h-8 bg-[#333333] rounded-full'>
                <span className='text-white text-xs lg:text-sm xl:text-base'>{step.id}</span>
              </div>
              {index < howItWorksSteps.length - 1 && <div className='w-0.5 h-16 lg:h-20 xl:h-24 bg-[#333333] mt-2'></div>}
            </div>
            <div className='flex flex-col space-y-3 lg:space-y-4 xl:space-y-5'>
              <h2 className='text-[#333333] text-base lg:text-lg xl:text-xl font-semibold'>{step.title}</h2>
              <p className='text-[#333333] text-sm lg:text-base xl:text-lg'>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorksSection;
