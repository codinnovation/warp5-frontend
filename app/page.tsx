'use client'

import Image from "next/image";
import { useState } from 'react';
import { useRouter } from "next/navigation";
import BannerImage from '../public/images/banner.jpg';
import Car1Image from '../public/cars/car1.jpg';
import Car2Image from '../public/cars/car3.jpg';
import CTAImage from '../public/images/cta.png';
import AboutUsImage from '@/public/images/about-us.png';
import LocationModal from "@/components/public/LocationModal";
import EquipmentModal from "@/components/public/EquipmentModal";
import PriceModal from "@/components/public/PriceModal";
import DateModal from "@/components/public/DateModal";
import Footer from "@/components/public/Footer";
import PageHeader from "@/components/public/PageHeader";
import EquipmentCard from "@/components/public/EquipmentCard";


export default function Page() {
  const router = useRouter();
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [showEquipmentModal, setShowEquipmentModal] = useState(false);
  const [showPriceRangeModal, setShowPriceRangeModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Select Your City');
  const [selectedEquipment, setSelectedEquipment] = useState('Choose Type');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [showDateRangeModal, setShowDateRangeModal] = useState(false);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [openFaqs, setOpenFaqs] = useState<Set<number>>(new Set());

  const toggleFaq = (id: number) => {
    setOpenFaqs((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const highlyRatedCars = [
    { id: 1, image: Car1Image, name: 'Bucket Wheel Excavator', location: 'Kumasi, Ghana', rating: '4.8', price: 'GHC1,123' },
    { id: 2, image: Car2Image, name: 'Honda Accord', location: 'Accra', rating: '4.9', price: 'GHC1,123' },
    { id: 3, image: Car1Image, name: 'Mercedes Benz', location: 'Takoradi', rating: '5.0', price: 'GHC1,123' },
    { id: 4, image: Car2Image, name: 'BMW X5', location: 'Accra', rating: '4.7', price: 'GHC1,123' },
    { id: 5, image: Car2Image, name: 'Audi A6', location: 'Kumasi', rating: '4.9', price: 'GHC1,123' },
  ];

  const reasons = [
    {
      id: 1,
      title: 'Reliable Equipment, Always Ready',
      description: 'Our fleet is professionally maintained and inspected before every rental to ensure peak performance and safety.',
    },
    {
      id: 2,
      title: 'Fast & Easy Reservation',
      description: 'Search, compare, and reserve in minutes—no paperwork, no hassle.',
    },
    {
      id: 3,
      title: 'Transparent Pricing',
      description: 'No hidden fees. What you see is what you pay, with clear daily or weekly rates.',
    },
    {
      id: 4,
      title: 'Flexible Rental Terms',
      description: 'Whether you need equipment for a day or a month, we offer plans that fit your project timeline.',
    },
  ];

  const howItWorksSteps = [
    {
      id: 1,
      title: 'Make a Reservation Online',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    },
    {
      id: 2,
      title: 'Pick Up Your Equipment',
      description:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.',
    },
    {
      id: 3,
      title: 'Use the Equipment',
      description:
        'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.',
    },
    {
      id: 4,
      title: 'Return the Equipment',
      description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.',
    },
  ];

  const faqs = [
    {
      id: 1,
      question: 'What types of equipment do you rent?',
      answer: 'We offer a wide range of mining and construction equipment including excavators, bulldozers, loaders, and more.',
    },
    {
      id: 2,
      question: 'How do I make a reservation?',
      answer: 'You can make a reservation online through our website or by contacting our customer service team.',
    },
    {
      id: 3,
      question: 'What are your rental rates?',
      answer: 'Our rates vary depending on the equipment and duration. Please check our pricing page for detailed information.',
    },
    {
      id: 4,
      question: 'Do you provide delivery and pickup services?',
      answer: 'Yes, we offer delivery and pickup services within our service areas for an additional fee.',
    },
    {
      id: 5,
      question: 'What is your cancellation policy?',
      answer: 'Cancellations made 24 hours in advance are eligible for a full refund. Late cancellations may incur fees.',
    },
    {
      id: 6,
      question: 'Do you require a deposit?',
      answer: 'Yes, a security deposit is required for all rentals, which is refundable upon return of the equipment in good condition.',
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-white">
        <PageHeader />

        <section className="mt-20 h-[500px] md:h-[500px] xl:h-[600px]">
          <div className="px-2 relative h-full">
            <Image src={BannerImage} alt='Banner' fill className='object-cover' priority />
            <div className='absolute inset-0 bg-black/30'></div>

            <div className="relative z-10 h-full pt-8 flex flex-col items-center justify-center xl:pt-20">
              <div className="grid grid-cols-2 md:grid-cols-3 bg-white/40 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-full max-w-7xl border border-[#DDDDDDB2]/70 gap-6 xl:grid-cols-5">

                <div className="relative flex flex-col border-r border-[#DDDDDDB2] pr-6">
                  <h1 className="font-medium text-white text-sm md:text-base mb-2 xl:text-lg">Location</h1>
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={() => {
                      setShowLocationModal(!showLocationModal);
                      setShowEquipmentModal(false);
                      setShowPriceRangeModal(false);
                      setShowDateRangeModal(false);
                    }}
                  >
                    <h1 className="text-[#DDDDDD] text-xs md:text-sm xl:text-base">{selectedLocation}</h1>
                    <i className="ri-arrow-down-s-line text-[#DDDDDD] hidden text-2xl ml-2 xl:flex"></i>
                  </div>

                  <LocationModal
                    show={showLocationModal}
                    selectedLocation={selectedLocation}
                    onSelect={setSelectedLocation}
                    onClose={() => setShowLocationModal(false)}
                  />
                </div>

                <div className="relative flex flex-col border-r border-[#DDDDDDB2] pr-6">
                  <h1 className="font-medium text-white text-sm md:text-base mb-2 xl:text-lg">Equipment</h1>
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={() => {
                      setShowEquipmentModal(!showEquipmentModal);
                      setShowLocationModal(false);
                      setShowPriceRangeModal(false);
                      setShowDateRangeModal(false);
                    }}
                  >
                    <h1 className="text-[#DDDDDD] text-xs md:text-sm xl:text-base">{selectedEquipment}</h1>
                    <i className="ri-arrow-down-s-line text-[#DDDDDD] hidden text-2xl ml-2 xl:flex"></i>
                  </div>

                  <EquipmentModal
                    show={showEquipmentModal}
                    selectedEquipment={selectedEquipment}
                    onSelect={setSelectedEquipment}
                    onClose={() => setShowEquipmentModal(false)}
                  />
                </div>

                <div className="relative flex flex-col border-r border-[#DDDDDDB2] pr-6">
                  <h1 className="font-medium text-white text-sm md:text-base mb-2 xl:text-lg">Price Range</h1>
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={() => {
                      setShowPriceRangeModal(!showPriceRangeModal);
                      setShowLocationModal(false);
                      setShowEquipmentModal(false);
                      setShowDateRangeModal(false);
                    }}
                  >
                    <h1 className="text-[#DDDDDD] text-xs md:text-sm xl:text-base">
                      {minPrice && maxPrice ? `$${minPrice} - $${maxPrice}` : 'Select Range'}
                    </h1>
                    <i className="ri-arrow-down-s-line text-[#DDDDDD] hidden text-2xl ml-2 xl:flex"></i>
                  </div>

                  <PriceModal
                    show={showPriceRangeModal}
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    onMinPriceChange={setMinPrice}
                    onMaxPriceChange={setMaxPrice}
                    onClose={() => setShowPriceRangeModal(false)}
                  />
                </div>

                <div className="relative flex flex-col border-r border-[#DDDDDDB2] pr-6">
                  <h1 className="font-medium text-white text-sm md:text-base mb-2 xl:text-lg">Date Range</h1>
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={() => {
                      setShowDateRangeModal(!showDateRangeModal);
                      setShowLocationModal(false);
                      setShowEquipmentModal(false);
                      setShowPriceRangeModal(false);
                    }}
                  >
                    <h1 className="text-[#DDDDDD] text-xs md:text-sm xl:text-base">
                      {fromDate && toDate ? `${fromDate} - ${toDate}` : 'Select Dates'}
                    </h1>
                  </div>

                  <DateModal
                    show={showDateRangeModal}
                    fromDate={fromDate}
                    toDate={toDate}
                    onFromDateChange={setFromDate}
                    onToDateChange={setToDate}
                    onClose={() => setShowDateRangeModal(false)}
                    onCancel={() => {
                      setFromDate('');
                      setToDate('');
                      setShowDateRangeModal(false);
                    }}
                  />
                </div>

                <div className="flex items-start justify-start xl:justify-center">
                  <button className="bg-[#000] text-xs md:text-sm text-white px-8 py-3 rounded-lg font-semibold flex items-center cursor-pointer xl:text-base">
                    Search
                  </button>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 md:mt-16 xl:mt-20">
          <div className="max-w-[85vw] mx-auto">
            <h1 className="text-[#333333] font-medium text-lg md:text-xl xl:text-2xl">Highly Rated By Customers</h1>

            <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:grid-cols-4 xl:grid-cols-5 xl:gap-10">
              {highlyRatedCars.map((item, index) => (
                <EquipmentCard key={index} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 md:mt-16 xl:mt-20">
          <div className="max-w-[85vw] mx-auto">
            <h1 className="text-[#333333] font-medium text-lg md:text-xl xl:text-2xl">Most View Equipment</h1>

            <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:grid-cols-4 xl:grid-cols-5 xl:gap-10">
              {highlyRatedCars.map((item, index) => (
                <EquipmentCard key={index} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 md:mt-16 xl:mt-20">
          <div className="max-w-[85vw] mx-auto">
            <h1 className="text-[#333333] font-medium text-lg md:text-xl xl:text-2xl">You may Also Like</h1>

            <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:grid-cols-4 xl:grid-cols-5 xl:gap-10">
              {highlyRatedCars.map((item, index) => (
                <EquipmentCard key={index} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 md:mt-16 xl:mt-20 pb-4">
          <button className="flex justify-center items-center space-x-1 border border-[#333333] hover:bg-[#333333] hover:text-white active:scale-95 transition-all w-32 h-10 md:w-36 md:h-11 mx-auto rounded-full cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-[#333333] xl:w-40 xl:h-12" onClick={() => router.push('/equipments')}>
            <h1 className="text-xs md:text-sm xl:text-base">See More</h1>
            <i className="ri-arrow-right-double-line text-base"></i>
          </button>
        </section>

        <section className="mt-12 md:mt-16 xl:mt-20">
          <div className="relative max-w-[90vw] mx-auto h-[350px] md:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden xl:max-w-[85vw] xl:h-[550px]">
            <Image src={CTAImage} alt='Call to Action' fill className='object-cover' priority />
            <div className='absolute inset-0 bg-black/40'></div>

            <div className='relative z-10 flex items-center h-full'>
              <div className='w-full pl-5 md:pl-10 xl:pl-20'>
                <div className='flex flex-col items-start space-y-2 md:space-y-3'>
                  <h1 className='text-lg md:text-2xl lg:text-3xl font-semibold text-white leading-tight xl:text-5xl'>
                    Reserve Your Mining or Construction
                    <br /><span className='text-[#43A047]'>Equipment </span>
                    from us
                  </h1>
                  <p className='text-[#FFFFFF] font-light text-xs md:text-sm xl:text-base'>Get the gear you need. Fast, reliable, and ready for your next project</p>
                  <button
                    type='button'
                    onClick={() => router.push('/signup')}
                    className='mt-4 md:mt-6 xl:mt-8 w-auto text-xs md:text-sm px-8 md:px-10 xl:px-12 py-3 md:py-4 xl:py-5 rounded-xl bg-[#43A047] hover:bg-[#388E3C] active:scale-95 transition-all border border-[#43A047] text-white font-medium cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-[#43A047] xl:text-base'
                  >
                    Sign Up Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='pt-12 md:pt-16 xl:pt-20 pb-4 backdrop-blur-xl' style={{ background: 'linear-gradient(135deg, #dffbfe 1%, #fff0f1 100%)' }}>
          <div className='w-[90vw] mx-auto grid grid-cols-1 gap-8 md:gap-10 xl:grid-cols-2 xl:w-[70vw]'>
            <div className='flex flex-col'>
              <div className='flex justify-center items-center'>
                <h1 className='text-[#333333] font-semibold text-lg md:text-xl xl:text-2xl'>Why Choose Us</h1>
              </div>

              <div className='mt-10 md:mt-14 xl:mt-20'>
                {reasons.map((reason) => (
                  <div key={reason.id} className='mb-10 md:mb-14 xl:mb-20 grid grid-cols-[auto_1fr] justify-start space-x-4 md:space-x-6 xl:space-x-8'>
                    <div className='flex justify-center items-center w-8 h-8 bg-[#333333] rounded-full xl:w-12 xl:h-12'>
                      <span className='text-white text-xs xl:text-base'>{reason.id}</span>
                    </div>

                    <div className='flex flex-col space-y-2 md:space-y-3 xl:space-y-4'>
                      <h2 className='text-[#333333] text-sm md:text-base font-semibold xl:text-lg'>{reason.title}</h2>
                      <p className='text-[#333333] text-xs md:text-sm xl:text-base'>{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className='flex items-center justify-center'>
              <div className='relative w-full h-full'>
                <Image src={AboutUsImage} fill alt='Why choose us' className='object-contain' />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 md:mt-16 xl:mt-20 pb-4">
          <div className='w-[90vw] mx-auto flex flex-col justify-center items-center xl:w-[85vw]'>
            <div className='flex flex-col justify-center items-center space-y-3 md:space-y-4'>
              <h1 className='text-[#333333] font-semibold text-lg md:text-xl text-center xl:text-2xl'>Our Partners</h1>
              <p className='text-[#333333] font-regular text-xs md:text-sm text-center xl:text-base'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 md:mt-16 xl:mt-20 pb-4">
          <div className='w-[90vw] mx-auto xl:w-[85vw]'>
            <div className='flex justify-center items-center'>
              <h1 className='text-[#333333] text-lg md:text-xl font-semibold xl:text-2xl'>How It Works</h1>
            </div>

            <div className='w-[90vw] mx-auto mt-6 md:mt-8 space-y-6 md:space-y-8 xl:space-y-10 xl:w-[50vw]'>
              {howItWorksSteps.map((step, index) => (
                <div key={step.id} className='flex items-start space-x-8'>
                  <div className='flex flex-col items-center'>
                    <div className='flex justify-center items-center w-8 h-8 bg-[#333333] rounded-full xl:w-12 xl:h-12'>
                      <span className='text-white text-sm xl:text-base'>{step.id}</span>
                    </div>
                    {index < howItWorksSteps.length - 1 && <div className='w-0.5 h-20 bg-[#333333] mt-2'></div>}
                  </div>
                  <div className='flex flex-col space-y-4'>
                    <h2 className='text-[#333333] text-sm lg:text-lg font-semibold'>{step.title}</h2>
                    <p className='text-[#333333] text-xs lg:text-base'>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 md:mt-16 xl:mt-20 pb-4">
          <div className='w-[90vw] mx-auto xl:w-[70vw]'>
            <div className='flex justify-center items-center'>
              <h1 className='text-[#333333] text-lg md:text-xl font-semibold xl:text-2xl'>FAQ</h1>
            </div>

            <div className='mt-8 md:mt-10 xl:mt-12 grid grid-cols-1 gap-8 md:gap-10 xl:gap-12 xl:grid-cols-2'>
              {faqs.map((faq) => (
                <div key={faq.id} className='pb-4'>
                  <button
                    type='button'
                    className='flex justify-between items-center w-full cursor-pointer'
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <span className='text-[#333333] text-sm md:text-base font-semibold text-left xl:text-lg'>{faq.question}</span>
                    <i className={`ri-arrow-down-s-line text-xs transition-transform xl:text-base ${openFaqs.has(faq.id) ? 'rotate-180' : ''}`}></i>
                  </button>
                  {openFaqs.has(faq.id) && <p className='text-[#333333] text-xs lg:text-base mt-1 sm:mt-2 lg:mt-3 xl:mt-4'>{faq.answer}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main >
    </>
  )
}