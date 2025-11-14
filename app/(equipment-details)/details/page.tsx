// 'use client'

// import React from 'react';
// import Image from 'next/image';
// import PageHeader from '../../../components/PageHeader';
// import FooterSection from '../../../components/FooterSection';
// import Car1Image from '../../../public/images/details1.png';
// import Car2Image from '../../../public/images/car2.png';

// function Page() {

//   const leastViewedCars = [
//     { id: 11, image: Car2Image, name: 'Mazda 6', location: 'Accra', rating: '4.1' },
//     { id: 12, image: Car2Image, name: 'Subaru Legacy', location: 'Kumasi', rating: '4.0' },
//     { id: 13, image: Car2Image, name: 'Volkswagen Passat', location: 'Takoradi', rating: '3.9' },
//     { id: 14, image: Car2Image, name: 'Chrysler 300', location: 'Accra', rating: '3.8' },
//     { id: 15, image: Car2Image, name: 'Dodge Charger', location: 'Kumasi', rating: '3.7' },
//   ];

//   return (
//     <>
//       <div className='min-h-screen bg-white'>
//         <div className='mx-auto'>
//           <PageHeader />

//           <div className='w-[85vw] mx-auto grid grid-cols-[2.5fr_1fr] gap-12'>
//             <div className='flex flex-col space-y-4 pb-5'>
//               <div className='relative w-full h-96 lg:h-[60vh] rounded-lg overflow-hidden'>
//                 <Image src={Car1Image} alt='Equipment Image' fill className='object-cover' />
//               </div>

//               <div className='grid grid-cols-2 gap-4'>
//                 <div className='relative w-full h-48 lg:h-[30vh] rounded-lg overflow-hidden cursor-pointer'>
//                   <Image src={Car1Image} alt='Thumbnail 1' fill className='object-cover' />
//                 </div>
//                 <div className='relative w-full h-48 lg:h-[30vh] rounded-lg overflow-hidden cursor-pointer'>
//                   <Image src={Car1Image} alt='Thumbnail 2' fill className='object-cover' />
//                 </div>
//               </div>

//               <div className='mt-12'>
//                 <div className='flex flex-col'>
//                   <h1 className='text-[#43A047] text-xl font-bold'>Excavators</h1>
//                   <div className='mt-4 flex space-x-8'>
//                     <div className='flex'>
//                       <i className="ri-map-pin-2-line"></i>
//                       <h1 className='text-[#333333] text-base font-regular'>Takoradi</h1>
//                     </div>

//                     <div className='flex space-x-1 items-center'>
//                       <i className="ri-star-s-line"></i>
//                       <i className="ri-star-s-line"></i>
//                       <i className="ri-star-s-line"></i>
//                       <i className="ri-star-s-line"></i>
//                       <h1 className='text-[#333333]'>4.9</h1>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className='mt-12'>
//                 <div className='flex flex-col'>
//                   <div className='flex items-center space-x-1'>
//                     <h1 className='flex justify-center items-center bg-[#F4F4F4] text-[#333333] text-lg font-medium w-40 h-16'>Decription</h1>
//                     <h1 className='flex justify-center items-center bg-[#333333] text-white text-lg font-medium w-40 h-16'>Rate</h1>
//                     <h1 className='flex justify-center items-center bg-[#333333] text-white text-lg font-medium w-40 h-16'>Availability</h1>
//                   </div>

//                   <div className='bg-[#F4F4F4] min-h-[10vh] max-h-96 rounded-b-3xl p-16 overflow-y-auto'>
//                     <h1 className='text-[#333333] text-base tracking-wider font-regular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat dolor lobortis, interdum turpis et, interdum leo. Nunc hendrerit
//                       volutpat risus sit amet ornare. Vestibulum sollicitudin lectus eu purus varius molestie vel at velit. Pellentesque habitant morbi tristique
//                       senectus et netus et malesuada fames ac turpis egestas. enean tellus lacus, sagittis quis sollicitudin nec, placerat at sem. Curabitur
//                       pellentesque ligula id dolor cursus imperdiet. Mauris magna diam, scelerisque lobortis molestie a, viverra a arcu. Sed ut purus arcu.
//                       sque habitant morbi tristique
//                       senectus et netus et malesuada fames ac turpis egestas. enean tellus lacus, sagittis quis sollicitudin nec, placerat at sem. Curabitur
//                       pellentesque ligula id dolor cursus imperdiet. Mauris magna diam, scelerisque lobortis molestie a, viverra a arcu. Sed ut purus arcu.
//                     </h1>
//                   </div>

//                   <div className='mt-12'>
//                     <div className='flex flex-col space-y-4'>
//                       <div className='flex justify-start items-center'>
//                         <h1 className='text-[#333333] font-medium text-xl'>Equipment Location On Map</h1>
//                       </div>

//                       <div className='flex justify-center items-center bg-[#F4F4F4] min-h-140'>
//                         <h1>Map Here</h1>
//                       </div>
//                     </div>
//                   </div>

//                   <div className='mt-12'>
//                     <div className='flex justify-start items-center'>
//                       <h1 className='text-[#333333] text-2xl font-medium'>Related Equipment</h1>
//                     </div>
//                     <div className='relative mt-7'>
//                       <button className='absolute left-[-12] top-1/3 -translate-y-0/2 z-10 flex justify-center items-center w-10 h-10 rounded-full bg-[#000000]/60 transition-colors shadow-lg'>
//                         <i className="ri-arrow-left-s-line text-[#fff] text-2xl"></i>
//                       </button>

//                       <div className='grid grid-cols-5 gap-4'>
//                         {leastViewedCars.map((car) => (
//                           <div key={car.id} className='flex flex-col'>
//                             <div className='relative w-full h-100 flex justify-center items-center mb-4 rounded-4xl overflow-hidden bg-gray-50'>
//                               <Image src={car.image} alt={car.name} fill className='object-contain' />
//                               <button className='absolute top-3 right-3 flex justify-center items-center w-10 h-10 rounded-full bg-white/90 hover:bg-[#FFF0F6] transition-colors shadow-md'>
//                                 <i className="ri-heart-line text-[#FF0063] text-xl"></i>
//                               </button>
//                             </div>

//                             <div className='flex flex-col justify-center items-center'>
//                               <h1 className='text-lg text-[#333333] font-medium'>{car.name}</h1>
//                               <div className='flex items-center space-x-1'>
//                                 <i className="ri-map-pin-2-line text-[#787878]"></i>
//                                 <h1 className='text-[#787878] text-sm'>{car.location}</h1>
//                               </div>

//                               <div className='flex items-center space-x-1 mt-1'>
//                                 <i className="ri-star-fill text-[#FFB800]"></i>
//                                 <h1 className='text-[#787878] text-sm font-medium'>{car.rating}</h1>
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>

//                       <button className='absolute right-[-12] top-1/3 -translate-y-0/2 z-10 flex justify-center items-center w-10 h-10 rounded-full bg-[#000000]/60 transition-colors shadow-lg'>
//                         <i className="ri-arrow-right-s-line text-white text-xl"></i>
//                       </button>
//                     </div>
//                   </div>


//                 </div>
//               </div>
//             </div>

//             <div className='pt-16 flex flex-col space-y-6'>
//               <div className='flex justify-center items-center space-x-4'>
//                 <div className='flex items-center space-x-2 cursor-pointer'>
//                   <i className="ri-share-2-line text-[#333333] text-xl"></i>
//                   <h1 className='text-[#333333] text-base font-medium'>Share</h1>
//                 </div>

//                 <div className='h-6 border-l border-[#333333]'></div>

//                 <div className='flex items-center space-x-2 cursor-pointer'>
//                   <i className="ri-heart-line text-[#333333] text-xl"></i>
//                   <h1 className='text-[#333333] text-base font-medium'>Save</h1>
//                 </div>
//               </div>

//               <div className='flex flex-col justify-center items-center shadow-lg p-24 rounded-4xl space-y-12'>
//                 <h1 className='text-[#000000] text-lg font-medium'>Rental Period</h1>

//                 <div className='w-full'>
//                   <div className='flex justify-center items-center border border-[#787878] w-full px-4 h-14 rounded-full space-x-2 cursor-pointer'>
//                     <i className="ri-calendar-2-line text-[#787878] text-base"></i>
//                     <h1 className='text-[#787878] text-base font-regular'>Select Rental Dates</h1>
//                   </div>
//                 </div>

//                 <div className='w-full'>
//                   <button className='flex justify-center items-center w-full px-8 h-14 bg-[#43A047] rounded-full'>
//                     <h1 className='text-white font-medium text-base'>Reserve</h1>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className='mt-40 bg-[#43A047] py-16'>
//             <FooterSection />
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Page
