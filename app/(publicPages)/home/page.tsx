'use client'

import PublicPageHeader from '@/components/layout/PublicPageHeader';
import FooterSection from '@/components/layout/FooterSection';
import EquipmentSearch from '@/components/marketing/EquipmentSearch';
import CarGrid from '@/components/marketing/CarGrid';
import SeeMoreSection from '@/components/marketing/SeeMoreSection';
import CTASection from '@/components/marketing/CTASection';
import WhyChooseUsSection from '@/components/marketing/WhyChooseUsSection';
import PartnerSection from '@/components/marketing/PartnerSection';
import HowItWorksSection from '@/components/marketing/HowItWorksSection';
import FAQSection from '@/components/marketing/FAQSection';
import Car1Image from '../../../public/cars/car1.jpg';
import Car3Image from '../../../public/cars/car3.jpg';
import Car4Image from '../../../public/cars/car4.jpg';
import Car5Image from '../../../public/cars/car5.jpg';
import Care6Image from '../../../public/images/car6.png'

function Page() {

  const highlyRatedCars = [
    { id: 1, image: Car1Image, name: 'Toyota Camry', location: 'Kumasi', rating: '4.8' },
    { id: 2, image: Care6Image, name: 'Honda Accord', location: 'Accra', rating: '4.9' },
    { id: 3, image: Car3Image, name: 'Mercedes Benz', location: 'Takoradi', rating: '5.0' },
    { id: 4, image: Car4Image, name: 'BMW X5', location: 'Accra', rating: '4.7' },
    { id: 5, image: Car5Image, name: 'Audi A6', location: 'Kumasi', rating: '4.9' },
    { id: 5, image: Car5Image, name: 'Audi A6', location: 'Kumasi', rating: '4.9' },
  ];

  return (
    <>
      <main className='h-screen bg-white'>
        <PublicPageHeader />

        <EquipmentSearch />

        <section className='mt-16 lg:mt-28'>
          <CarGrid title='Highly Rated By Customers' cars={highlyRatedCars} />
        </section>

        <section className='mt-8 lg:mt-16'>
          <CarGrid title='Most Viewed Equipment' cars={highlyRatedCars} />
        </section>

        <section className='mt-8 lg:mt-16'>
          <CarGrid title='You Might Also Like' cars={highlyRatedCars} />
        </section>

        <section className='mt-8 lg:mt-16 pb-4 lg:pb-8 flex justify-center'>
          <SeeMoreSection route='/equipments' />
        </section>

        <section className='mt-16 lg:mt-28'>
          <CTASection />
        </section>

        <section className='pt-16 lg:pt-24 rounded-4xl backdrop-blur-xl p-6 lg:p-8 xl:p-10' style={{ background: 'linear-gradient(135deg, #dffbfe 1%, #fff0f1 100%)' }}>
          <WhyChooseUsSection />
        </section>

        <section className='bg-[#F6F6F6] py-16 lg:py-24'>
          <PartnerSection />
        </section>

        <section className='mt-16 lg:mt-28'>
          <HowItWorksSection />
        </section>

        <section className='mt-16 lg:mt-28'>
          <FAQSection />
        </section>

        <section className='mt-16 lg:mt-28 bg-[#43A047] py-8 lg:py-12'>
          <FooterSection />
        </section>
      </main>
    </>
  )
}

export default Page
