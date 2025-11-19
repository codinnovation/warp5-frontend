'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import PublicPageHeader from '@/components/layout/PublicPageHeader';
import FooterSection from '@/components/layout/FooterSection';
import BannerImage from '../../../public/images/help.png'

function Page() {
  const [openFaqs, setOpenFaqs] = useState<Set<number>>(new Set());

  const toggleFaq = (id: number) => {
    setOpenFaqs(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const faqs = [
    {
      id: 1,
      question: 'What types of equipment do you rent?',
      answer: 'We offer a wide range of mining and construction equipment including excavators, bulldozers, loaders, and more.'
    },
    {
      id: 2,
      question: 'How do I make a reservation?',
      answer: 'You can make a reservation online through our website or by contacting our customer service team.'
    },
    {
      id: 3,
      question: 'What are your rental rates?',
      answer: 'Our rates vary depending on the equipment and duration. Please check our pricing page for detailed information.'
    },
    {
      id: 4,
      question: 'Do you provide delivery and pickup services?',
      answer: 'Yes, we offer delivery and pickup services within our service areas for an additional fee.'
    },
  ];

  return (
    <>
      <main className='h-screen bg-white'>
        <PublicPageHeader />

        <section className='relative h-130 w-full xl:h-155'>
          <Image
            src={BannerImage}
            alt='Banner'
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-black/35'></div>
          <div className='absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6 lg:px-12 xl:px-24'>
            <h1 className='text-[#FFFFFF] font-semibold text-lg lg:text-4xl'>Warp5 Help Center</h1>
            <h1 className='text-[#FFFFFF] font-semibold text-xs lg:text-lg mt-4'>We are Here To Answer All Your Questions</h1>
          </div>
        </section>

        <section className='mt-16 sm:mt-24'>
          <div className='ww-[90vw] lg:max-w-4xl mx-auto'>
            <div className='flex justify-center items-center'>
              <h1 className='text-[#333333] text-base lg:text-xl font-semibold'>FAQ</h1>
            </div>

            <div className='mt-8 sm:mt-12 lg:mt-16 xl:mt-20 space-y-2 sm:space-y-3 lg:space-y-5 xl:space-y-7'>
              {faqs.map(faq => {
                const isOpen = openFaqs.has(faq.id);
                return (
                  <div key={faq.id} className='bg-[#F6F6F6] rounded-2xl transition-colors'>
                    <button
                      type='button'
                      className='w-full flex justify-between items-center gap-4 lg:gap-6 xl:gap-8 px-4 sm:px-6 lg:px-8 xl:px-10 py-3 sm:py-4 lg:py-6 xl:py-8 text-left'
                      onClick={() => toggleFaq(faq.id)}
                    >
                      <span className='text-[#333333] text-sm lg:text-lg font-medium'>{faq.question}</span>
                      <i className={`ri-arrow-down-s-fill text-base lg:text-xl text-[#333333] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}></i>
                    </button>
                    {isOpen && (
                      <div className='px-4 sm:px-6 lg:px-8 xl:px-10 pb-3 sm:pb-4 lg:pb-6 xl:pb-8 pt-2'>
                        <p className='text-[#4F4F4F] text-xs lg:text-base leading-relaxed'>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </section>

        <section className='mt-16 sm:mt-24 pb-4'>
          <div className='w-[90vw] xl:max-w-6xl mx-auto'>
            <div className='flex justify-center items-center'>
              <h1 className='text-[#333333] text-base lg:text-xl font-semibold'>Get In Touch</h1>
            </div>

            <div className='mt-12 sm:mt-16 lg:mt-20 xl:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20'>
              <div
                className='rounded-4xl flex flex-col justify-center items-start h-56 sm:h-64 lg:h-72 xl:h-80 p-6 sm:p-8 lg:p-12 xl:p-14 text-white shadow-xl space-y-3 sm:space-y-4 lg:space-y-6 xl:space-y-8'
                style={{ background: 'linear-gradient(90deg, #3E9A42 0%, #43A047 45%, #48CC4E 100%)' }}
              >
                <div className='space-y-2 sm:space-y-3'>
                  <h1 className='text-base lg:text-xl font-semibold'>Need Help?</h1>
                  <p className='text-xs lg:text-base text-[#FFFFFF] opacity-90'>Reach out by email or phone and we will be glad to assist you.</p>
                </div>

                <div className='space-y-2 lg:space-y-3 xl:space-y-4'>
                  <div className='flex items-center space-x-2'>
                    <p className='text-xs lg:text-base font-semibold opacity-80'>Email</p>
                    <p className='text-xs lg:text-base font-regular'>example@gmail.com</p>
                  </div>

                  <div className='flex items-center space-x-2'>
                    <p className='text-xs lg:text-base font-semibold opacity-80'>Phone</p>
                    <p className='text-xs lg:text-base font-regular'>+233 20 000 0000</p>
                  </div>
                </div>
              </div>

              <div className='flex flex-col'>
                <div className='space-y-4 sm:space-y-6 lg:space-y-10 xl:space-y-14'>
                  <div className='flex flex-col space-y-2'>
                    <h1 className='text-[#333333] font-regular text-xs lg:text-base'>Your email address*</h1>

                    <input className='border border-[#787878] h-10 sm:h-12 lg:h-14 xl:h-16 mt-2 sm:mt-3 rounded-full px-4' />
                  </div>

                  <div className='flex flex-col space-y-2'>
                    <h1 className='text-[#333333] font-regular text-xs lg:text-base'>Subject*</h1>

                    <input className='border border-[#787878] h-10 sm:h-12 lg:h-14 xl:h-16 mt-2 sm:mt-3 rounded-full px-4' />
                  </div>


                  <div className='flex flex-col space-y-2'>
                    <h1 className='text-[#333333] font-regular text-xs lg:text-base'>What best describes the reason you are contacting us today?*</h1>

                    <input className='border border-[#787878] h-10 sm:h-12 lg:h-14 xl:h-16 mt-2 sm:mt-3 rounded-full px-4' />
                  </div>

                  <div className='flex flex-col space-y-2'>
                    <h1 className='text-[#333333] font-regular text-xs lg:text-base'>Message*</h1>

                    <textarea className='border border-[#787878] h-24 sm:h-32 lg:h-40 xl:h-48 mt-2 sm:mt-3 rounded-xl p-4' />
                  </div>
                </div>

                <div className='mt-6 sm:mt-8 lg:mt-10 xl:mt-12 bg-[#43A047] h-10 sm:h-12 lg:h-14 xl:h-16 flex justify-center items-center rounded-full'>
                  <h1 className='text-[#FFFFFF] font-medium text-xs lg:text-base'>Send Message</h1>
                </div>

              </div>
            </div>
          </div>
        </section>
        <section className='mt-16 bg-[#43A047] py-8 sm:py-12'>
          <FooterSection />
        </section>
      </main>
    </>
  )
}

export default Page
