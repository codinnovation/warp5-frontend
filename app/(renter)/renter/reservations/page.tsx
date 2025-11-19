'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import DashboardHeader from '@/components/renter/DashboardHeader'

function Page() {
  const router = useRouter();

  const reservationHistory = [
    { id: 'R-EX45', equipment: 'Bulldozer', vendor: 'Mega Earth Movers', dates: 'Nov 01 - 06, 2025', cost: 'GHC 8,450' },
    { id: 'R-LD11', equipment: 'Loader', vendor: 'Prime Equip Leasing', dates: 'Oct 23 - 28, 2025', cost: 'GHC 6,880' },
    { id: 'R-CR09', equipment: 'Crane', vendor: 'SkyLift Rentals', dates: 'Oct 10 - 14, 2025', cost: 'GHC 12,300' },
    { id: 'R-DM54', equipment: 'Dump Truck', vendor: 'HaulPro Logistics', dates: 'Aug 05 - 12, 2025', cost: 'GHC 9,100' },
    { id: 'R-CP22', equipment: 'Compactor', vendor: 'GroundForce Rentals', dates: 'May 10 - 15, 2025', cost: 'GHC 5,050' },
    { id: 'R-RL72', equipment: 'Roller', vendor: 'SmoothRoad Co.', dates: 'Jul 25 - 30, 2025', cost: 'GHC 5,420' },
    { id: 'R-CP22', equipment: 'Compactor', vendor: 'GroundForce Rentals', dates: 'May 10 - 15, 2025', cost: 'GHC 5,050' },
    { id: 'R-LF08', equipment: 'Lift Boom', vendor: 'ElevateWorks', dates: 'Jun 28 - Jul 03, 2025', cost: 'GHC 7,675' },
    { id: 'R-CP22', equipment: 'Compactor', vendor: 'GroundForce Rentals', dates: 'May 10 - 15, 2025', cost: 'GHC 5,050' },
    { id: 'R-CP22', equipment: 'Compactor', vendor: 'GroundForce Rentals', dates: 'May 10 - 15, 2025', cost: 'GHC 5,050' },

    { id: 'R-CP22', equipment: 'Compactor', vendor: 'GroundForce Rentals', dates: 'May 10 - 15, 2025', cost: 'GHC 5,050' },
    { id: 'R-CP22', equipment: 'Compactor', vendor: 'GroundForce Rentals', dates: 'May 10 - 15, 2025', cost: 'GHC 5,050' },
    { id: 'R-CP22', equipment: 'Compactor', vendor: 'GroundForce Rentals', dates: 'May 10 - 15, 2025', cost: 'GHC 5,050' },
    { id: 'R-CP22', equipment: 'Compactor', vendor: 'GroundForce Rentals', dates: 'May 10 - 15, 2025', cost: 'GHC 5,050' },
    { id: 'R-CP22', equipment: 'Compactor', vendor: 'GroundForce Rentals', dates: 'May 10 - 15, 2025', cost: 'GHC 5,050' },
    { id: 'R-CP22', equipment: 'Compactor', vendor: 'GroundForce Rentals', dates: 'May 10 - 15, 2025', cost: 'GHC 5,050' },

  ];

  const pageSize = 11;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(reservationHistory.length / pageSize));
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedReservations = reservationHistory.slice(startIndex, startIndex + pageSize);

  const goToPage = (page: number) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
  };


  return (
    <>
      <main className='flex flex-col h-full'>
        <DashboardHeader title='My Reservations' />

        <section className='mt-6 flex flex-wrap space-x-3 lg:space-x-6 lg:mt-12'>
          <h1 className='text-[#000000] font-regular text-xs lg:text-base'>Completed</h1>
          <div className='border-r border-[#333333] h-5' />
          <h1 className='text-[#000000] font-regular text-xs lg:text-base'>Active Reservations</h1>
          <div className='border-r border-[#333333] h-5' />
          <h1 className='text-[#000000] font-regular text-xs lg:text-base'>Cancelled Reservations</h1>
        </section>

        <section className='mt-6 lg:mt-12 flex flex-col'>

          <div className='mt-6 bg-white p-4 rounded-lg lg:mt-12 lg:p-12'>
            <h1 className='text-[#000000] font-medium text-sm lg:text-xl'>Reservation History</h1>
            <div className='mt-8 lg:mt-12 overflow-x-auto'>
              <div className='grid grid-cols-[1fr_1fr_1fr_1fr_1fr_auto] items-center min-w-[600px]'>
                <h1 className='text-[#1C1D21] font-medium text-xs lg:text-base'>ID</h1>
                <h1 className='text-[#1C1D21] font-medium text-xs lg:text-base'>Equipment</h1>
                <h1 className='text-[#1C1D21] font-medium text-xs lg:text-base'>Vendor</h1>
                <h1 className='text-[#1C1D21] font-medium text-xs lg:text-base'>Dates</h1>
                <h1 className='text-[#1C1D21] font-medium text-xs lg:text-base'>Cost</h1>
                <span />
              </div>
            </div>

            <div className='mt-4 space-y-3 overflow-y-auto pb-9'>
              {paginatedReservations.map((reservation) => (
                <div key={reservation.id} className='overflow-x-auto'>
                  <div className='grid grid-cols-[1fr_1fr_1fr_1fr_1fr_auto] items-center h-10 lg:h-12 min-w-[600px]'>
                    <h1 className='text-[#1C1D21] font-regular text-xs lg:text-sm'>{reservation.id}</h1>
                    <h1 className='text-[#1C1D21] font-regular text-xs lg:text-sm'>{reservation.equipment}</h1>
                    <h1 className='text-[#1C1D21] font-regular text-xs lg:text-sm'>{reservation.vendor}</h1>
                    <h1 className='text-[#1C1D21] font-regular text-xs lg:text-sm'>{reservation.dates}</h1>
                    <h1 className='text-[#1C1D21] font-regular text-xs lg:text-sm'>{reservation.cost}</h1>
                    <i className="ri-arrow-right-up-long-line text-[#1C1D21] text-sm" onClick={() => router.push('/renter/reservations/id')}></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='flex items-center justify-end space-x-2 pr-3 mt-4 shrink-0'>
            <button
              className='flex items-center justify-center disabled:opacity-40'
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label='Previous page'
            >
              <i className='ri-arrow-drop-left-line text-lg lg:text-xl text-[#1C1D21]'></i>
            </button>
            <div className='flex items-center space-x-2'>
              {pages.map((pageNumber) => (
                <button
                  key={pageNumber}
                  className={`px-2 flex items-center justify-center text-xs transition-colors ${pageNumber === currentPage
                    ? 'bg-[#43A047] min-w-6 lg:min-w-8 h-5 lg:h-6 rounded-lg text-white'
                    : 'text-[#1C1D21] hover:bg-[#1C1D21]/10'
                    }`}
                  onClick={() => goToPage(pageNumber)}
                  aria-label={`Go to page ${pageNumber}`}
                >
                  {pageNumber}
                </button>
              ))}
            </div>
            <button
              className='flex items-center justify-center disabled:opacity-40'
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label='Next page'
            >
              <i className='ri-arrow-drop-right-line text-lg lg:text-xl text-[#1C1D21]'></i>
            </button>
          </div>
        </section>
      </main>
    </>
  )
}

export default Page
