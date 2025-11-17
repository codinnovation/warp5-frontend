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
  ];

  return (
    <>
      <main className='h-screen bg-white'>
        <PublicPageHeader />

        <section className='relative h-155 w-full'>
          <EquipmentSearch />
        </section>

        <section className='mt-24 lg:mt-36 xl:mt-48'>
          <CarGrid title='Highly Rated By Customers' cars={highlyRatedCars} />
        </section>

        <section className='mt-16 lg:mt-20 xl:mt-24'>
          <CarGrid title='Most Viewed Equipment' cars={highlyRatedCars} />
        </section>

        <section className='mt-16 lg:mt-20 xl:mt-24'>
          <CarGrid title='You Might Also Like' cars={highlyRatedCars} />
        </section>

        <section className='mt-16 lg:mt-20 xl:mt-24 pb-8 lg:pb-10 xl:pb-12 flex justify-center'>
          <SeeMoreSection route='/products' />
        </section>

        <section className='mt-24 lg:mt-36 xl:mt-48'>
          <CTASection />
        </section>

        <section className='pt-24 lg:pt-32 xl:pt-40 rounded-4xl backdrop-blur-xl p-8 lg:p-10 xl:p-12' style={{ background: 'linear-gradient(135deg, #dffbfe 1%, #fff0f1 100%)' }}>
          <WhyChooseUsSection />
        </section>

        <section className='bg-[#F6F6F6] py-24 lg:py-32 xl:py-40'>
          <PartnerSection />
        </section>

        <section className='mt-24 lg:mt-36 xl:mt-48'>
          <HowItWorksSection />
        </section>

        <section className='mt-24 lg:mt-36 xl:mt-48'>
          <FAQSection />
        </section>

        <section className='mt-24 lg:mt-36 xl:mt-48 bg-[#43A047] py-12 lg:py-16 xl:py-20'>
          <FooterSection />
        </section>
      </main>
    </>
  )
}

export default Page
