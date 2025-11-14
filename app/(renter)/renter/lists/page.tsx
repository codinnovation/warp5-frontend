'use client'

import React from 'react';
import SeeMoreSection from '@/components/SeeMoreSection';
import PageHeader from '../../components/PageHeader';
import ReservationSearch from '../../components/ReservationSearch';
import CarGrid from '../../components/CarGrid';
import FooterSection from '@/components/FooterSection';
import Car1Image from '../../../../public/cars/car1.jpg';
import Car3Image from '../../../../public/cars/car3.jpg';
import Car4Image from '../../../../public/cars/car4.jpg';
import Car5Image from '../../../../public/cars/car5.jpg';

function Page() {

  const cars = [
    { id: 1, image: Car1Image, name: 'Toyota Camry', location: 'Kumasi', rating: '4.8' },
    { id: 2, image: Car5Image, name: 'Honda Accord', location: 'Accra', rating: '4.9' },
    { id: 3, image: Car3Image, name: 'Mercedes Benz', location: 'Takoradi', rating: '5.0' },
    { id: 4, image: Car4Image, name: 'BMW X5', location: 'Accra', rating: '4.7' },
    { id: 5, image: Car5Image, name: 'Audi A6', location: 'Kumasi', rating: '4.9' },
  ];


  return (
    <>
      <main className='h-screen bg-white'>
        <PageHeader />

        <section className='mt-20'>
          <ReservationSearch />
        </section>

        <section className='mt-20'>
          <CarGrid title="" cars={cars} />
        </section>

        <section className='mt-20 flex justify-center items-center'>
          <SeeMoreSection />
        </section>

        <section className='mt-36 bg-[#43A047] py-16'>
          <FooterSection />
        </section>
      </main>
    </>
  )
}

export default Page
