'use client'

import React from 'react'
import PageHeader from '../../components/PageHeader';
import EquipmentSearch from '../../components/EquipmentSearch';
import CarGrid from '../../components/CarGrid';
import SeeMoreSection from '../../components/SeeMoreSection';
import CTASection from '../../components/CTASection';
import WhyChooseUsSection from '../../components/whyChooseUsSection';
import PartnerSection from '../../components/PartnerSection';
import HowItWorksSection from '../../components/HowItWorksSection';
import FAQSection from '../../components/FAQSection';
import FooterSection from '../../../../components/FooterSection';
import Car1Image from '../../../../public/cars/car1.jpg';
import Car3Image from '../../../../public/cars/car3.jpg';
import Car4Image from '../../../../public/cars/car4.jpg';
import Car5Image from '../../../../public/cars/car5.jpg';
import Care6Image from '../../../../public/images/car6.png'

function Page() {

  const highlyRatedCars = [
    { id: 1, image: Car1Image, name: 'Toyota Camry', location: 'Kumasi', rating: '4.8' },
    { id: 2, image: Care6Image, name: 'Honda Accord', location: 'Accra', rating: '4.9' },
    { id: 3, image: Car3Image, name: 'Mercedes Benz', location: 'Takoradi', rating: '5.0' },
    { id: 4, image: Car4Image, name: 'BMW X5', location: 'Accra', rating: '4.7' },
    { id: 5, image: Car5Image, name: 'Audi A6', location: 'Kumasi', rating: '4.9' },
  ];

  return (
    <>
      <main className='h-screen bg-white'>
        <PageHeader />

        <section className='relative h-160 w-full'>
          <EquipmentSearch />
        </section>

        <section className='mt-36'>
          <CarGrid title='Highly Rated By Customers' cars={highlyRatedCars} />
        </section>

        <section className='mt-20'>
          <CarGrid title='Most Viewed Equipment' cars={highlyRatedCars} />
        </section>

        <section className='mt-20'>
          <CarGrid title='You Might Also Like' cars={highlyRatedCars} />
        </section>

        <section className='mt-20 pb-10 flex justify-center'>
          <SeeMoreSection />
        </section>

        <section className='mt-36'>
          <CTASection />
        </section>

        <section className='pt-32 rounded-4xl backdrop-blur-xl p-10' style={{ background: 'linear-gradient(135deg, #dffbfe 1%, #fff0f1 100%)' }}>
          <WhyChooseUsSection />
        </section>

        <section className='bg-[#F6F6F6] py-32'>
          <PartnerSection />
        </section>

        <section className='mt-36'>
          <HowItWorksSection />
        </section>

        <section className='mt-36'>
          <FAQSection />
        </section>

        <section className='mt-36 bg-[#43A047] py-16'>
          <FooterSection />
        </section>
      </main>
    </>
  )
}

export default Page
