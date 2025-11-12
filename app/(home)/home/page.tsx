'use client';

import React, { useState } from 'react';
import PageHeader from '../../../components/PageHeader';
import EquipmentSearch from '../../../components/EquipmentSearch';
import CTASection from '../components/CTASection';
import WhyChooseUsSection from '../components/whyChooseUsSection';
import PartnerSection from '../components/PartnerSection';
import HowItWorksSection from '../components/HowItWorksSection';
import FAQSection from '../components/FAQSection';
import FooterSection from '../../../components/FooterSection';
import SeeMoreSection from '../components/SeeMoreSection';
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
import CarGrid from '../components/CarGrid';

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
]

const leastViewedCars = [
  { id: 11, image: Car11Image, name: 'Mazda 6', location: 'Accra', rating: '4.1' },
  { id: 12, image: Car12Image, name: 'Subaru Legacy', location: 'Kumasi', rating: '4.0' },
  { id: 13, image: Car13Image, name: 'Volkswagen Passat', location: 'Takoradi', rating: '3.9' },
  { id: 14, image: Car14Image, name: 'Chrysler 300', location: 'Accra', rating: '3.8' },
  { id: 15, image: Car15Image, name: 'Dodge Charger', location: 'Kumasi', rating: '3.7' },
];

const whyChooseUsReasons: Array<{ id: number; title: string; description: string }> = [
  {
    id: 1,
    title: 'Reliable Equipment, Always Ready',
    description: 'Our fleet is professionally maintained and inspected before every rental to ensure peak performance and safety.'
  },
  {
    id: 2,
    title: 'Fast & Easy Reservation',
    description: 'Search, compare, and reserve in minutes, no paperwork, no hassle.'
  },
  {
    id: 3,
    title: 'Transparent Pricing',
    description: 'No hidden fees. What you see is what you pay, with clear daily, or weekly.'
  },
  {
    id: 4,
    title: 'Flexible Rental Terms',
    description: 'Whether you need equipment for a day or a month, we offer plans that fit your project timeline.'
  }
];

const howItWorksSteps = [
  {
    id: 1,
    title: 'Make a Reservation Online',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
  {
    id: 2,
    title: 'Pick Up Your Equipment',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
  },
  {
    id: 3,
    title: 'Use the Equipment',
    description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
  },
  {
    id: 4,
    title: 'Return the Equipment',
    description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.'
  }
];

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
  {
    id: 5,
    question: 'What is your cancellation policy?',
    answer: 'Cancellations made 24 hours in advance are eligible for a full refund. Late cancellations may incur fees.'
  },
  {
    id: 6,
    question: 'Do you require a deposit?',
    answer: 'Yes, a security deposit is required for all rentals, which is refundable upon return of the equipment in good condition.'
  }
];

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
  return (
    <>
      <div className='h-screen bg-white'>
        <div className='mx-auto'>

          <PageHeader />

          <EquipmentSearch />

          <CarGrid title="Higly Rated By Customers" cars={cars} />

          <CarGrid title="Most Viewed Equipment" cars={mostViewedCars} />

          <CarGrid title="You Might Also Like" cars={leastViewedCars} />

          <SeeMoreSection />

          <CTASection />

          <WhyChooseUsSection whyChooseUsReasons={whyChooseUsReasons} />

          <PartnerSection />

          <HowItWorksSection howItWorksSteps={howItWorksSteps} />

          <FAQSection faqs={faqs} toggleFaq={toggleFaq} openFaqs={openFaqs} />

          <FooterSection />
        </div>
      </div >
    </>
  )
}

export default Page
