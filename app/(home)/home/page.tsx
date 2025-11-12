'use client';

import React from 'react';
import PageHeader from '../../../components/PageHeader';
import EquipmentSearch from '../../../components/EquipmentSearch';
import CTASection from '../components/CTASection';
import WhyChooseUsSection from '../components/whyChooseUsSection';
import PartnerSection from '../components/PartnerSection';
import HowItWorksSection from '../components/HowItWorksSection';
import FAQSection from '../components/FAQSection';
import FooterSection from '../../../components/FooterSection';
import CarGrid from '../../../components/CarGrid';
import SeeMoreSection from '../../../components/SeeMoreSection';
import Car1Image from '../../../public/images/car1.png'
import Car2Image from '../../../public/images/car2.png'
import Car3Image from '../../../public/images/car3.png'
import Car4Image from '../../../public/images/car4.png'
import Car5Image from '../../../public/images/car5.png'
import Car6Image from '../../../public/images/car6.png'
import Car7Image from '../../../public/images/car7.png'
import Car8Image from '../../../public/images/car8.png'
import Car9Image from '../../../public/images/car9.png'
import Car10Image from '../../../public/images/car10.png'
import Car11Image from '../../../public/images/car11.png'
import Car12Image from '../../../public/images/car12.png'
import Car13Image from '../../../public/images/car13.png'
import Car14Image from '../../../public/images/car14.png'
import Car15Image from '../../../public/images/car15.png'

const cars = [
  { id: 1, image: Car1Image, name: 'Toyota Camry', location: 'Kumasi', rating: '4.8' },
  { id: 2, image: Car2Image, name: 'Honda Accord', location: 'Accra', rating: '4.9' },
  { id: 3, image: Car3Image, name: 'Mercedes Benz', location: 'Takoradi', rating: '5.0' },
  { id: 4, image: Car4Image, name: 'BMW X5', location: 'Accra', rating: '4.7' },
  { id: 5, image: Car5Image, name: 'Audi A6', location: 'Kumasi', rating: '4.9' },
];

const mostViewedCars = [
  { id: 6, image: Car6Image, name: 'Ford Mustang', location: 'Accra', rating: '4.6' },
  { id: 7, image: Car7Image, name: 'Chevrolet Malibu', location: 'Kumasi', rating: '4.5' },
  { id: 8, image: Car8Image, name: 'Nissan Altima', location: 'Takoradi', rating: '4.4' },
  { id: 9, image: Car9Image, name: 'Hyundai Sonata', location: 'Accra', rating: '4.3' },
  { id: 10, image: Car10Image, name: 'Kia Optima', location: 'Kumasi', rating: '4.2' },
];

const leastViewedCars = [
  { id: 11, image: Car11Image, name: 'Mazda 6', location: 'Accra', rating: '4.1' },
  { id: 12, image: Car12Image, name: 'Subaru Legacy', location: 'Kumasi', rating: '4.0' },
  { id: 13, image: Car13Image, name: 'Volkswagen Passat', location: 'Takoradi', rating: '3.9' },
  { id: 14, image: Car14Image, name: 'Chrysler 300', location: 'Accra', rating: '3.8' },
  { id: 15, image: Car15Image, name: 'Dodge Charger', location: 'Kumasi', rating: '3.7' },
];

function Page() {
  return (
    <>
      <div className='h-screen bg-white'>
        <div className='mx-auto'>
          <PageHeader />

          <EquipmentSearch />

          <div className='mt-20 pb-10'>
            <CarGrid title="Higly Rated By Customers" cars={cars} />
          </div>

          <div className='mt-20 pb-10'>
            <CarGrid title="Most Viewed Equipment" cars={mostViewedCars} />
          </div>

          <div className='mt-20 pb-10'>
            <CarGrid title="You Might Also Like" cars={leastViewedCars} />
          </div>

          <div className='mt-10 pb-10 flex justify-center'>
            <SeeMoreSection />
          </div>

          <CTASection />

          <WhyChooseUsSection />

          <PartnerSection />

          <HowItWorksSection />

          <FAQSection />

          <div className='mt-40 bg-[#43A047] py-16'>
            <FooterSection />
          </div>
        </div>
      </div >
    </>
  )
}

export default Page
