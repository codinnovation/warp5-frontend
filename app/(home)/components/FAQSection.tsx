import React from 'react'

function FAQSection({ faqs, toggleFaq, openFaqs }: { faqs: Array<{ id: number; question: string; answer: string }>, toggleFaq: (id: number) => void, openFaqs: Set<number> }) {
  return (
    <>
      <div className='mt-40'>
        <div className='w-[70vw] mx-auto'>
          <div className='flex justify-center items-center'>
            <h1 className='text-[#333333] text-4xl font-semibold'>FAQ</h1>
          </div>

          <div className='mt-16 grid grid-cols-2 gap-12'>
            {faqs.map(faq => (
              <div key={faq.id} className='pb-4'>
                <div className='flex justify-between items-center cursor-pointer' onClick={() => toggleFaq(faq.id)}>
                  <h1 className='text-[#333333] text-lg font-semibold'>{faq.question}</h1>
                  <i className={`ri-arrow-down-s-line text-xl transition-transform ${openFaqs.has(faq.id) ? 'rotate-180' : ''}`}></i>
                </div>
                {openFaqs.has(faq.id) && (
                  <p className='text-[#333333] text-base mt-4'>{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default FAQSection
