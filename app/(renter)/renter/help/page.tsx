'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import PageHeader from '../../components/PageHeader';
import FooterSection from '@/components/FooterSection';
import BannerImage from '../../../../public/images/help.png'

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
        <PageHeader />

        <section className='relative h-160 w-full'>
          <Image
            src={BannerImage}
            alt='Banner'
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-black/35'></div>
          <div className='absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6'>
            <h1 className='text-[#FFFFFF] font-semibold text-5xl'>Warp5 Help Center</h1>
            <h1 className='text-[#FFFFFF] font-semibold text-lg mt-4'>We are Here To Answer All Your Questions</h1>
          </div>
        </section>

        <section className='mt-32'>
          <div className='w-[50vw] mx-auto'>
            <div className='flex justify-center items-center'>
              <h1 className='text-[#333333] text-4xl font-semibold'>FAQ</h1>
            </div>

            <div className='mt-20 space-y-6'>
              {faqs.map(faq => {
                const isOpen = openFaqs.has(faq.id);
                return (
                  <div key={faq.id} className='bg-[#F6F6F6] rounded-2xl transition-colors'>
                    <button
                      type='button'
                      className='w-full flex justify-between items-center gap-6 px-10 py-8 text-left'
                      onClick={() => toggleFaq(faq.id)}
                    >
                      <span className='text-[#333333] text-lg font-medium'>{faq.question}</span>
                      <i className={`ri-arrow-down-s-fill text-2xl text-[#333333] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}></i>
                    </button>
                    {isOpen && (
                      <div className='px-10 pb-8 pt-2'>
                        <p className='text-[#4F4F4F] text-base leading-relaxed'>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className='mt-32 pb-4'>
          <div className='w-[60vw] mx-auto'>
            <div className='flex justify-center items-center'>
              <h1 className='text-[#333333] text-4xl font-semibold'>Get In Touch</h1>
            </div>

            <div className='mt-24 grid grid-cols-2 gap-40'>
              <div
                className='rounded-4xl flex flex-col justify-center items-start h-78 p-14 text-white shadow-xl space-y-8'
                style={{ background: 'linear-gradient(90deg, #3E9A42 0%, #43A047 45%, #48CC4E 100%)' }}
              >
                <div className='space-y-3'>
                  <h1 className='text-3xl font-semibold'>Need Help?</h1>
                  <p className='text-base text-[#FFFFFF] opacity-90'>Reach out by email or phone and we will be glad to assist you.</p>
                </div>

                <div className='space-y-4'>
                  <div className='flex items-center space-x-2'>
                    <p className='text-base font-semibold opacity-80'>Email</p>
                    <p className='text-base font-regular'>example@gmail.com</p>
                  </div>

                  <div className='flex items-center space-x-2'>
                    <p className='text-base font-semibold opacity-80'>Phone</p>
                    <p className='text-base font-regular'>+233 20 000 0000</p>
                  </div>
                </div>
              </div>

              <div className='flex flex-col'>
                <div className='space-y-12'>
                  <div className='flex flex-col space-y-2'>
                    <h1 className='text-[#333333] font-regular text-base'>Your email address*</h1>

                    <input className='border border-[#787878] h-16 mt-4 rounded-full px-4' />
                  </div>

                  <div className='flex flex-col space-y-2'>
                    <h1 className='text-[#333333] font-regular text-base'>Subject*</h1>

                    <input className='border border-[#787878] h-16 mt-4 rounded-full px-4' />
                  </div>


                  <div className='flex flex-col space-y-2'>
                    <h1 className='text-[#333333] font-regular text-base'>What best describes the reason you are contacting us today?*</h1>

                    <input className='border border-[#787878] h-16 mt-4 rounded-full px-4' />
                  </div>

                  <div className='flex flex-col space-y-2'>
                    <h1 className='text-[#333333] font-regular text-base'>Message*</h1>

                    <textarea className='border border-[#787878] h-50 mt-4 rounded-xl p-4' />
                  </div>
                </div>

                <div className='mt-12 bg-[#43A047] h-16 flex justify-center items-center rounded-full'>
                  <h1 className='text-[#FFFFFF] font-medium'>Send Message</h1>
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
