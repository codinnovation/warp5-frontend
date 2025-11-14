import React from 'react'

function HowItWorksSection() {

  const howItWorksSteps = [
    {
      id: 1,
      title: 'Make a Reservation Online',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
    },
    {
      id: 2,
      title: 'Pick Up Your Equipment',
      description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
    },
    {
      id: 3,
      title: 'Use the Equipment',
      description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    },
    {
      id: 4,
      title: 'Return the Equipment',
      description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.'
    }
  ];

  return (
    <>
        <div className='w-[65vw] mx-auto'>
          <div className='flex justify-center items-center'>
            <h1 className='text-[#333333] text-4xl font-semibold'>How It Works</h1>
          </div>

          <div className='mt-10 flex flex-col space-y-10'>
            {howItWorksSteps.map((step, index) => (
              <div key={step.id} className='flex items-start space-x-8'>
                <div className='flex flex-col items-center'>
                  <div className='flex justify-center items-center w-7 h-7 bg-[#333333] rounded-full'>
                    <h1 className='text-white text-sm'>{step.id}</h1>
                  </div>
                  {index < howItWorksSteps.length - 1 && <div className='w-0.5 h-20 bg-[#333333] mt-2'></div>}
                </div>
                <div className='flex flex-col space-y-4'>
                  <h1 className='text-[#333333] text-lg font-semibold'>{step.title}</h1>
                  <p className='text-[#333333] text-base'>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </>
  )
}

export default HowItWorksSection
