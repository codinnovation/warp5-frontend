'use client'

import PublicPageHeader from '@/components/layout/PublicPageHeader';
import FooterSection from '@/components/layout/FooterSection';
import SeeMoreSection from '@/components/marketing/SeeMoreSection';
import ReservationSearch from '@/components/marketing/ReservationSearch';
import EquipmentGrid from '@/components/marketing/EquipmentGrid';
import Car1Image from '../../../public/cars/car1.jpg';
import Car2Image from '../../../public/cars/car2.jpg';
import Car3Image from '../../../public/cars/car3.jpg';
import Car4Image from '../../../public/cars/car4.jpg';
import Car5Image from '../../../public/cars/car5.jpg';


function Page() {

  const cars = [
    { id: 1, image: Car1Image, name: 'Toyota Camry', location: 'Kumasi', rating: '4.8' },
    { id: 3, image: Car3Image, name: 'Mercedes Benz', location: 'Takoradi', rating: '5.0' },
    { id: 2, image: Car2Image, name: 'Honda Accord', location: 'Accra', rating: '4.9' },
    { id: 3, image: Car3Image, name: 'Mercedes Benz', location: 'Takoradi', rating: '5.0' },
    { id: 4, image: Car4Image, name: 'BMW X5', location: 'Accra', rating: '4.7' },
    { id: 5, image: Car5Image, name: 'Audi A6', location: 'Kumasi', rating: '4.9' },
    { id: 1, image: Car1Image, name: 'Toyota Camry', location: 'Kumasi', rating: '4.8' },
    { id: 4, image: Car4Image, name: 'BMW X5', location: 'Accra', rating: '4.7' },
    { id: 3, image: Car3Image, name: 'Mercedes Benz', location: 'Takoradi', rating: '5.0' },
    { id: 1, image: Car1Image, name: 'Toyota Camry', location: 'Kumasi', rating: '4.8' },
  ];


  return (
    <>
      <main className='h-screen bg-white'>
        <PublicPageHeader />

        <section className='mt-8 sm:mt-12 lg:mt-16 xl:mt-20'>
          <ReservationSearch />
        </section>

        <section className='mt-8 sm:mt-12 lg:mt-16 xl:mt-20'>
          <EquipmentGrid title="" cars={cars} />
        </section>

        <section className='mt-8 sm:mt-12 lg:mt-16 xl:mt-20 flex justify-center items-center'>
          <SeeMoreSection title='Load More' />
        </section>

        <section className='mt-12 sm:mt-16 lg:mt-24 xl:mt-32 bg-[#43A047] py-6 sm:py-8 lg:py-12 xl:py-16'>
          <FooterSection />
        </section>
      </main>
    </>
  )
}

export default Page
