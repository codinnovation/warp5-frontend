'use client';

import React, { useState } from 'react';

const FAQSection: React.FC = () => {
  const [openFaqs, setOpenFaqs] = useState<Set<number>>(new Set());

  const toggleFaq = (id: number) => {
    setOpenFaqs((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const faqs = [
    {
      id: 1,
      question: 'What types of equipment do you rent?',
      answer: 'We offer a wide range of mining and construction equipment including excavators, bulldozers, loaders, and more.',
    },
    {
      id: 2,
      question: 'How do I make a reservation?',
      answer: 'You can make a reservation online through our website or by contacting our customer service team.',
    },
    {
      id: 3,
      question: 'What are your rental rates?',
      answer: 'Our rates vary depending on the equipment and duration. Please check our pricing page for detailed information.',
    },
    {
      id: 4,
      question: 'Do you provide delivery and pickup services?',
      answer: 'Yes, we offer delivery and pickup services within our service areas for an additional fee.',
    },
    {
      id: 5,
      question: 'What is your cancellation policy?',
      answer: 'Cancellations made 24 hours in advance are eligible for a full refund. Late cancellations may incur fees.',
    },
    {
      id: 6,
      question: 'Do you require a deposit?',
      answer: 'Yes, a security deposit is required for all rentals, which is refundable upon return of the equipment in good condition.',
    },
  ];

  return (
    <div className='w-[80vw] sm:w-[65vw] mx-auto'>
      <div className='flex justify-center items-center'>
        <h1 className='text-[#333333] text-base lg:text-xl font-semibold'>FAQ</h1>
      </div>

      <div className='mt-6 sm:mt-8 lg:mt-12 xl:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-10'>
        {faqs.map((faq) => (
          <div key={faq.id} className='pb-4'>
            <button
              type='button'
              className='flex justify-between items-center w-full cursor-pointer'
              onClick={() => toggleFaq(faq.id)}
            >
              <span className='text-[#333333] text-sm lg:text-lg font-semibold text-left'>{faq.question}</span>
              <i className={`ri-arrow-down-s-line text-xs lg:text-base transition-transform ${openFaqs.has(faq.id) ? 'rotate-180' : ''}`}></i>
            </button>
            {openFaqs.has(faq.id) && <p className='text-[#333333] text-xs lg:text-base mt-1 sm:mt-2 lg:mt-3 xl:mt-4'>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
