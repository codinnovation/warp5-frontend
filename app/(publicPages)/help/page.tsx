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

        <section className='relative h-155 w-full'>
          <Image
            src={BannerImage}
            alt='Banner'
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-black/35'></div>
          <div className='absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6 lg:px-12 xl:px-24'>
            <h1 className='text-[#FFFFFF] font-semibold text-4xl lg:text-5xl xl:text-6xl'>Warp5 Help Center</h1>
            <h1 className='text-[#FFFFFF] font-semibold text-base lg:text-lg xl:text-xl mt-4'>We are Here To Answer All Your Questions</h1>
          </div>
        </section>

        <section className='mt-32'>
          <div className='w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto'>
            <div className='flex justify-center items-center'>
              <h1 className='text-[#333333] text-3xl lg:text-4xl xl:text-5xl font-semibold'>FAQ</h1>
            </div>

            <div className='mt-16 lg:mt-20 xl:mt-24 space-y-4 lg:space-y-6 xl:space-y-8'>
              {faqs.map(faq => {
                const isOpen = openFaqs.has(faq.id);
                return (
                  <div key={faq.id} className='bg-[#F6F6F6] rounded-2xl transition-colors'>
                    <button
                      type='button'
                      className='w-full flex justify-between items-center gap-4 lg:gap-6 xl:gap-8 px-8 lg:px-10 xl:px-12 py-6 lg:py-8 xl:py-10 text-left'
                      onClick={() => toggleFaq(faq.id)}
                    >
                      <span className='text-[#333333] text-base lg:text-lg xl:text-xl font-medium'>{faq.question}</span>
                      <i className={`ri-arrow-down-s-fill text-xl lg:text-2xl xl:text-3xl text-[#333333] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}></i>
                    </button>
                    {isOpen && (
                      <div className='px-8 lg:px-10 xl:px-12 pb-6 lg:pb-8 xl:pb-10 pt-2'>
                        <p className='text-[#4F4F4F] text-sm lg:text-base xl:text-lg leading-relaxed'>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className='mt-32 pb-4'>
          <div className='w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto'>
            <div className='flex justify-center items-center'>
              <h1 className='text-[#333333] text-3xl lg:text-4xl xl:text-5xl font-semibold'>Get In Touch</h1>
            </div>

            <div className='mt-20 lg:mt-24 xl:mt-28 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-24'>
              <div
                className='rounded-4xl flex flex-col justify-center items-start h-72 lg:h-80 xl:h-88 p-10 lg:p-14 xl:p-16 text-white shadow-xl space-y-6 lg:space-y-8 xl:space-y-10'
                style={{ background: 'linear-gradient(90deg, #3E9A42 0%, #43A047 45%, #48CC4E 100%)' }}
              >
                <div className='space-y-3'>
                  <h1 className='text-2xl lg:text-3xl xl:text-4xl font-semibold'>Need Help?</h1>
                  <p className='text-sm lg:text-base xl:text-lg text-[#FFFFFF] opacity-90'>Reach out by email or phone and we will be glad to assist you.</p>
                </div>

                <div className='space-y-3 lg:space-y-4 xl:space-y-5'>
                  <div className='flex items-center space-x-2'>
                    <p className='text-sm lg:text-base xl:text-lg font-semibold opacity-80'>Email</p>
                    <p className='text-sm lg:text-base xl:text-lg font-regular'>example@gmail.com</p>
                  </div>

                  <div className='flex items-center space-x-2'>
                    <p className='text-sm lg:text-base xl:text-lg font-semibold opacity-80'>Phone</p>
                    <p className='text-sm lg:text-base xl:text-lg font-regular'>+233 20 000 0000</p>
                  </div>
                </div>
              </div>

              <div className='flex flex-col'>
                <div className='space-y-8 lg:space-y-12 xl:space-y-16'>
                  <div className='flex flex-col space-y-2'>
                    <h1 className='text-[#333333] font-regular text-sm lg:text-base xl:text-lg'>Your email address*</h1>

                    <input className='border border-[#787878] h-14 lg:h-16 xl:h-18 mt-4 rounded-full px-4' />
                  </div>

                  <div className='flex flex-col space-y-2'>
                    <h1 className='text-[#333333] font-regular text-sm lg:text-base xl:text-lg'>Subject*</h1>

                    <input className='border border-[#787878] h-14 lg:h-16 xl:h-18 mt-4 rounded-full px-4' />
                  </div>


                  <div className='flex flex-col space-y-2'>
                    <h1 className='text-[#333333] font-regular text-sm lg:text-base xl:text-lg'>What best describes the reason you are contacting us today?*</h1>

                    <input className='border border-[#787878] h-14 lg:h-16 xl:h-18 mt-4 rounded-full px-4' />
                  </div>

                  <div className='flex flex-col space-y-2'>
                    <h1 className='text-[#333333] font-regular text-sm lg:text-base xl:text-lg'>Message*</h1>

                    <textarea className='border border-[#787878] h-40 lg:h-48 xl:h-56 mt-4 rounded-xl p-4' />
                  </div>
                </div>

                <div className='mt-10 lg:mt-12 xl:mt-14 bg-[#43A047] h-14 lg:h-16 xl:h-18 flex justify-center items-center rounded-full'>
                  <h1 className='text-[#FFFFFF] font-medium text-sm lg:text-base xl:text-lg'>Send Message</h1>
                </div>


              </div>
            </div>
          </div>
        </section>
        <section className='mt-36 bg-[#43A047] py-16'>
          <FooterSection />
        </section>
      </main>
    </>
  )
}

export default Page
