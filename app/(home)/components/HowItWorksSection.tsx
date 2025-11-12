import React from 'react'

function HowItWorksSection({ howItWorksSteps }: { howItWorksSteps: Array<{ id: number; title: string; description: string }> }) {
  return (
    <>
      <div className='mt-40'>
        <div className='w-[60vw] mx-auto'>
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
      </div>
    </>
  )
}

export default HowItWorksSection
