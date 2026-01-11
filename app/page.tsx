'use client'

import Image from "next/image";
import { useState } from 'react';
import { useRouter } from "next/navigation";
import BannerImage from '../public/images/banner.jpg';
import CTAImage from '../public/images/cta.png';
import AboutUsImage from '@/public/images/about-us.png';
import LocationModal from "@/components/public/LocationModal";
import EquipmentModal from "@/components/public/EquipmentModal";
import PriceModal from "@/components/public/PriceModal";
import DateModal from "@/components/public/DateModal";
import Footer from "@/components/public/Footer";
import PageHeader from "@/components/public/PageHeader";
import EquipmentCard from "@/components/public/EquipmentCard";
import EquipmentCardSkeleton from "@/components/public/EquipmentCardSkeleton";
import { useMostViewedEquipment } from "@/context/mostViewContext";
import { useHighlyRatedEquipment } from "@/context/highlyRatedContext";
import { useRecommendationsEquipment } from "@/context/recommendationsContext";


export default function Page() {
  const router = useRouter();

  const { mostViewedData, isLoading: isMostViewedLoading } = useMostViewedEquipment();
  const { higlyRatedData, isLoading: isHighlyRatedLoading } = useHighlyRatedEquipment();
  const { recommendedData, isLoading: isRecommendedLoading } = useRecommendationsEquipment();

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

        <section className="mt-20 md:mt-0 h-[auto] min-h-[500px] md:h-[600px] xl:h-[700px] relative pb-10 md:pb-0 flex items-center">
          <div className="absolute inset-0">
            <Image src={BannerImage} alt='Banner' fill className='object-cover' priority />
            <div className='absolute inset-0 bg-black/40 backdrop-blur-[1px]'></div>
          </div>

          <div className="relative z-10 w-full flex flex-col items-center justify-center px-4">

            <div className="pt-8 text-center mb-8 md:mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <h1 className="text-lg md:text-2xl lg:text-4xl font-bold text-white mb-2 tracking-tight px-2 leading-tight">
                Build Better, <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">Faster.</span>
              </h1>
              <p className="text-gray-100/90 text-sm md:text-lg max-w-xl mx-auto font-light px-4 leading-relaxed">
                Premium heavy equipment rental for construction and mining projects across Ghana.
              </p>
            </div>

            <div className="bg-white rounded-3xl md:rounded-full shadow-2xl p-4 md:p-2 w-full max-w-sm md:max-w-5xl mx-auto border border-white/20 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-center">

                {/* Location Filter */}
                <div className="relative md:col-span-3 group border-b md:border-b-0 border-gray-100">
                  <div
                    className="px-4 md:px-6 py-3 md:py-3 cursor-pointer hover:bg-gray-50 md:rounded-full transition-colors relative"
                    onClick={() => {
                      setShowLocationModal(!showLocationModal);
                      setShowEquipmentModal(false);
                      setShowPriceRangeModal(false);
                      setShowDateRangeModal(false);
                    }}
                  >
                    <label className="block text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">Location</label>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm truncate font-medium ${selectedLocation !== 'Select Your City' ? 'text-gray-900' : 'text-gray-400'}`}>
                        {selectedLocation}
                      </span>
                      <i className={`ri-map-pin-line text-base text-gray-400 group-hover:text-green-600 transition-colors`}></i>
                    </div>
                  </div>
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-8 bg-gray-200"></div>

                  <LocationModal
                    show={showLocationModal}
                    selectedLocation={selectedLocation}
                    onSelect={setSelectedLocation}
                    onClose={() => setShowLocationModal(false)}
                  />
                </div>

                {/* Equipment Filter */}
                <div className="relative md:col-span-3 group border-b md:border-b-0 border-gray-100">
                  <div
                    className="px-4 md:px-6 py-3 md:py-3 cursor-pointer hover:bg-gray-50 md:rounded-full transition-colors relative"
                    onClick={() => {
                      setShowEquipmentModal(!showEquipmentModal);
                      setShowLocationModal(false);
                      setShowPriceRangeModal(false);
                      setShowDateRangeModal(false);
                    }}
                  >
                    <label className="block text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">Equipment</label>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm truncate font-medium ${selectedEquipment !== 'Choose Type' ? 'text-gray-900' : 'text-gray-400'}`}>
                        {selectedEquipment}
                      </span>
                      <i className={`ri-tools-line text-base text-gray-400 group-hover:text-green-600 transition-colors`}></i>
                    </div>
                  </div>
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-8 bg-gray-200"></div>

                  <EquipmentModal
                    show={showEquipmentModal}
                    selectedEquipment={selectedEquipment}
                    onSelect={setSelectedEquipment}
                    onClose={() => setShowEquipmentModal(false)}
                  />
                </div>

                {/* Price Filter */}
                <div className="relative md:col-span-2 group border-b md:border-b-0 border-gray-100">
                  <div
                    className="px-4 md:px-6 py-3 md:py-3 cursor-pointer hover:bg-gray-50 md:rounded-full transition-colors relative"
                    onClick={() => {
                      setShowPriceRangeModal(!showPriceRangeModal);
                      setShowLocationModal(false);
                      setShowEquipmentModal(false);
                      setShowDateRangeModal(false);
                    }}
                  >
                    <label className="block text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">Price</label>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm truncate font-medium ${minPrice && maxPrice ? 'text-gray-900' : 'text-gray-400'}`}>
                        {minPrice && maxPrice ? `GH₵${minPrice}+` : 'Range'}
                      </span>
                      <i className={`ri-money-dollar-circle-line text-base text-gray-400 group-hover:text-green-600 transition-colors`}></i>
                    </div>
                  </div>
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-8 bg-gray-200"></div>

                  <PriceModal
                    show={showPriceRangeModal}
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    onMinPriceChange={setMinPrice}
                    onMaxPriceChange={setMaxPrice}
                    onClose={() => setShowPriceRangeModal(false)}
                  />
                </div>

                {/* Date Filter */}
                <div className="relative md:col-span-3 group">
                  <div
                    className="px-4 md:px-6 py-3 md:py-3 cursor-pointer hover:bg-gray-50 md:rounded-full transition-colors relative"
                    onClick={() => {
                      setShowDateRangeModal(!showDateRangeModal);
                      setShowLocationModal(false);
                      setShowEquipmentModal(false);
                      setShowPriceRangeModal(false);
                    }}
                  >
                    <label className="block text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">Dates</label>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm truncate font-medium ${fromDate && toDate ? 'text-gray-900' : 'text-gray-400'}`}>
                        {fromDate && toDate ? `${fromDate}..` : 'Add Dates'}
                      </span>
                      <i className={`ri-calendar-line text-base text-gray-400 group-hover:text-green-600 transition-colors`}></i>
                    </div>
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

                {/* Search Button */}
                <div className="md:col-span-1 p-1 mt-2 md:mt-0">
                  <button
                    onClick={() => {
                      const params = new URLSearchParams();
                      if (selectedLocation && selectedLocation !== 'Select Your City') params.append('location', selectedLocation);
                      if (selectedEquipment && selectedEquipment !== 'Choose Type') params.append('name', selectedEquipment);
                      if (minPrice) params.append('minPrice', minPrice);
                      if (maxPrice) params.append('maxPrice', maxPrice);
                      if (fromDate) params.append('fromDate', fromDate);
                      if (toDate) params.append('toDate', toDate);

                      router.push(`/equipments?${params.toString()}`);
                    }}
                    className="w-full h-11 md:h-12 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white rounded-xl md:rounded-full flex items-center justify-center gap-2 md:gap-0 transition-all shadow-lg shadow-green-600/30 active:scale-95">
                    <span className="md:hidden font-bold text-sm">Search</span>
                    <i className="ri-search-line text-lg md:text-xl"></i>
                  </button>
                </div>

              </div>
            </div>

          </div>
        </section>

        <section className="mt-12 md:mt-16 xl:mt-20">
          <div className="max-w-[85vw] mx-auto">
            <h1 className="text-[#333333] font-medium text-base md:text-lg">Highly Rated By Customers</h1>

            <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 xl:gap-12">
              {isHighlyRatedLoading ? (
                Array.from({ length: 5 }).map((_, index) => (
                  <EquipmentCardSkeleton key={index} />
                ))
              ) : (
                higlyRatedData?.data?.map((item, index) => (
                  <EquipmentCard
                    key={index}
                    item={{
                      id: item.id,
                      imageOne: item.imageOne,
                      name: item.name,
                      location: item.location,
                      rating: item.rating.toString(),
                      price: item.price.toString(),
                    }} />
                ))
              )}
            </div>
          </div>
        </section>

        <section className="mt-12 md:mt-16 xl:mt-20">
          <div className="max-w-[85vw] mx-auto">
            <h1 className="text-[#333333] font-medium text-base md:text-lg">Most Viewed Equipment</h1>

            <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 xl:gap-12">
              {isMostViewedLoading ? (
                Array.from({ length: 5 }).map((_, index) => (
                  <EquipmentCardSkeleton key={index} />
                ))
              ) : (
                mostViewedData?.data?.map((item, index) => (
                  <EquipmentCard
                    key={index}
                    item={{
                      id: item.id,
                      imageOne: item.imageOne,
                      name: item.name,
                      location: item.location,
                      rating: item.rating.toString(),
                      price: item.price.toString(),
                    }}
                  />
                ))
              )}
            </div>
          </div>
        </section>

        <section className="mt-12 md:mt-16 xl:mt-20">
          <div className="max-w-[85vw] mx-auto">
            <h1 className="text-[#333333] font-medium text-base md:text-lg">You may Also Like</h1>

            <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 xl:gap-12">
              {isRecommendedLoading ? (
                Array.from({ length: 5 }).map((_, index) => (
                  <EquipmentCardSkeleton key={index} />
                ))
              ) : (
                recommendedData?.data?.map((item, index) => (
                  <EquipmentCard
                    key={index}
                    item={{
                      id: item.id,
                      imageOne: item.imageOne,
                      name: item.name,
                      location: item.location,
                      rating: item.rating.toString(),
                      price: item.price.toString(),
                    }}
                  />
                ))
              )}
            </div>
          </div>
        </section>

        <section className="mt-12 md:mt-16 xl:mt-20 pb-4">
          <button className="flex justify-center items-center space-x-1 border border-[#333333] hover:bg-[#333333] hover:text-white active:scale-95 transition-all w-32 h-9 md:w-36 md:h-10 mx-auto rounded-full cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-[#333333]" onClick={() => router.push('/equipments')}>
            <h1 className="text-xs md:text-sm font-medium">See More</h1>
            <i className="ri-arrow-right-double-line text-base"></i>
          </button>
        </section>

        {/* CTA Section */}
        <section className="mt-24 md:mt-32 relative h-[450px] md:h-[550px] flex items-center justify-center overflow-hidden">
          <Image src={CTAImage} alt='Call to Action' fill className='object-cover fixed-parallax' />
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-10 rounded-3xl animate-in fade-in slide-in-from-bottom-8 duration-700">
              <h2 className="text-lg md:text-2xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                Power Your Next Project with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">Premium Equipment</span>
              </h2>
              <p className="text-gray-200 text-sm md:text-base font-light mb-8 max-w-xl mx-auto">
                From excavation to construction, we provide reliable machinery to keep your operations moving.
              </p>
              <button
                onClick={() => router.push('/signup')}
                className="bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-full font-bold text-sm transition-all transform hover:scale-105 shadow-xl shadow-white/10 active:scale-95 flex items-center justify-center gap-2 mx-auto"
              >
                Sign Up Now
                <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 md:py-24 bg-gray-50">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-lg md:text-2xl lg:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                  Why Industry Leaders <br />
                  <span className="text-green-600">Trust Us</span>
                </h2>
                <div className="space-y-6">
                  {reasons.map((reason) => (
                    <div key={reason.id} className="flex gap-5 group">
                      <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                        <span className="font-bold text-sm md:text-base">{reason.id}</span>
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-green-700 transition-colors">{reason.title}</h3>
                        <p className="text-gray-500 leading-relaxed text-xs md:text-sm">{reason.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2 relative h-[350px] md:h-[500px] w-full bg-gray-200 rounded-3xl overflow-hidden shadow-xl skew-y-2 group hover:skew-y-0 transition-all duration-700 ease-out">
                <Image src={AboutUsImage} fill alt='Why choose us' className='object-cover scale-105 group-hover:scale-100 transition-transform duration-700' />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section (Marquee) */}
        <section className="py-12 border-y border-gray-100 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 text-center mb-8">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">Trusted By Top Companies</span>
          </div>

          {/* Mobile/Tablet Grid View */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6 lg:hidden opacity-50 grayscale">
            <div className="flex justify-center"><h1 className="text-base md:text-xl font-black text-gray-800">CAT</h1></div>
            <div className="flex justify-center"><h1 className="text-base md:text-xl font-black text-gray-800">KOMATSU</h1></div>
            <div className="flex justify-center"><h1 className="text-base md:text-xl font-black text-gray-800">HITACHI</h1></div>
            <div className="flex justify-center"><h1 className="text-base md:text-xl font-black text-gray-800">VOLVO</h1></div>
            <div className="flex justify-center"><h1 className="text-base md:text-xl font-black text-gray-800">JCB</h1></div>
            <div className="flex justify-center"><h1 className="text-base md:text-xl font-black text-gray-800">LIEBHERR</h1></div>
            <div className="flex justify-center"><h1 className="text-base md:text-xl font-black text-gray-800">SANY</h1></div>
            <div className="flex justify-center"><h1 className="text-base md:text-xl font-black text-gray-800">DEERE</h1></div>
          </div>

          {/* Desktop Marquee View */}
          <div className="hidden lg:flex w-[200%] animate-marquee">
            {/* Set 1 */}
            <div className="flex w-1/2 justify-around items-center px-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              <h1 className="text-3xl font-black text-gray-800">CAT</h1>
              <h1 className="text-3xl font-black text-gray-800">KOMATSU</h1>
              <h1 className="text-3xl font-black text-gray-800">HITACHI</h1>
              <h1 className="text-3xl font-black text-gray-800">VOLVO</h1>
              <h1 className="text-3xl font-black text-gray-800">JCB</h1>
              <h1 className="text-3xl font-black text-gray-800">LIEBHERR</h1>
              <h1 className="text-3xl font-black text-gray-800">SANY</h1>
              <h1 className="text-3xl font-black text-gray-800">DEERE</h1>
            </div>
            {/* Set 2 (Duplicate) */}
            <div className="flex w-1/2 justify-around items-center px-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              <h1 className="text-3xl font-black text-gray-800">CAT</h1>
              <h1 className="text-3xl font-black text-gray-800">KOMATSU</h1>
              <h1 className="text-3xl font-black text-gray-800">HITACHI</h1>
              <h1 className="text-3xl font-black text-gray-800">VOLVO</h1>
              <h1 className="text-3xl font-black text-gray-800">JCB</h1>
              <h1 className="text-3xl font-black text-gray-800">LIEBHERR</h1>
              <h1 className="text-3xl font-black text-gray-800">SANY</h1>
              <h1 className="text-3xl font-black text-gray-800">DEERE</h1>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-lg md:text-2xl lg:text-4xl font-bold text-gray-900 mb-3">How It Works</h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">Simple, transparent, and efficient rental process designed for your convenience.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {/* Connecting line for desktop */}
              <div className="hidden lg:block absolute top-10 left-1/2 -translate-x-1/2 w-[85%] h-0.5 bg-gray-100 -z-10"></div>

              {howItWorksSteps.map((step, index) => (
                <div key={step.id} className="relative group p-6 rounded-3xl bg-white border border-gray-100 hover:border-green-100 hover:shadow-xl hover:shadow-green-500/5 transition-all duration-300">
                  <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center font-bold text-lg mb-5 group-hover:bg-green-600 transition-colors shadow-lg group-hover:scale-110 duration-300">
                    {step.id}
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-lg md:text-2xl lg:text-4xl font-bold text-gray-900 mb-3">Common Questions</h2>
              <p className="text-gray-500 text-xs md:text-base">Everything you need to know about our rental service.</p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq) => (
                <div key={faq.id} className={`bg-white rounded-xl transition-all duration-300 overflow-hidden ${openFaqs.has(faq.id) ? 'shadow-md border-green-500/20' : 'shadow-sm border-transparent'}`}>
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className={`font-bold text-sm md:text-base transition-colors ${openFaqs.has(faq.id) ? 'text-green-700' : 'text-gray-800'}`}>
                      {faq.question}
                    </span>
                    <span className={`flex items-center justify-center w-6 h-6 rounded-full border transition-all duration-300 ${openFaqs.has(faq.id) ? 'bg-green-600 border-green-600 text-white rotate-180' : 'bg-transparent border-gray-200 text-gray-400'}`}>
                      <i className="ri-arrow-down-s-line text-sm"></i>
                    </span>
                  </button>
                  <div className={`transition-all duration-300 ease-in-out ${openFaqs.has(faq.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-5 pt-0 text-xs md:text-sm text-gray-500 leading-relaxed border-t border-gray-50 mt-1">
                      {faq.answer}
                    </div>
                  </div>
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