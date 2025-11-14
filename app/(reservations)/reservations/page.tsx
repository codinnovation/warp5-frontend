'use client'

import React from 'react'
import PageHeader from '../../../components/PageHeader'
import ReservationSearch from '../components/ReservationSearch'
import SeeMoreSection from '@/components/SeeMoreSection'
import FooterSection from '@/components/FooterSection'
import CarGrid from '../../(renter)/components/CarGrid';
import Car1Image from '../../../public/images/car1.png';
import Car2Image from '../../../public/images/car2.png';
import Car3Image from '../../../public/images/car3.png';
import Car4Image from '../../../public/images/car4.png';
import Car5Image from '../../../public/images/car5.png';

function Page() {

  const cars = [
    { id: 1, image: Car1Image, name: 'Toyota Camry', location: 'Kumasi', rating: '4.8' },
    { id: 2, image: Car2Image, name: 'Honda Accord', location: 'Accra', rating: '4.9' },
    { id: 3, image: Car3Image, name: 'Mercedes Benz', location: 'Takoradi', rating: '5.0' },
    { id: 4, image: Car4Image, name: 'BMW X5', location: 'Accra', rating: '4.7' },
    { id: 5, image: Car5Image, name: 'Audi A6', location: 'Kumasi', rating: '4.9' },
  ];

  return (
    <>
      <div className='h-screen bg-white'>
        <div className='mx-auto'>
          <PageHeader />

          <div className='mt-20'>
            <ReservationSearch />
          </div>

          <div className='mt-20 pb-10'>
            <CarGrid title="" cars={cars} />
          </div>

          <div className='mt-10 pb-10 flex justify-center'>
            <SeeMoreSection />
          </div>

          <div className='mt-20 bg-[#43A047] py-16'>
            <FooterSection />
          </div>

        </div>
      </div>
    </>
  )
}

export default Page
