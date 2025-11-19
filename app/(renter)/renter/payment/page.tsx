'use client'

import React, { useState } from 'react'
import DashboardHeader from '@/components/renter/DashboardHeader'

function Page() {
  const tableHeaders = ['Payment ID', 'Equipment', 'Date', 'Amount', 'Status', ''];

  const paymentHistory = [
    {
      id: 'R-EX23',
      equipment: 'Electric Rope Shovel',
      date: 'Nov 1-15, 2025',
      amount: 'GHC 10,000',
      status: 'Paid'
    },
    {
      id: 'R-EX24',
      equipment: 'Bulldozer',
      date: 'Nov 16-30, 2025',
      amount: 'GHC 15,000',
      status: 'Failed'
    },
    {
      id: 'R-EX25',
      equipment: 'Excavator',
      date: 'Dec 1-15, 2025',
      amount: 'GHC 12,000',
      status: 'Pending'
    },
    {
      id: 'R-EX26',
      equipment: 'Crane',
      date: 'Dec 16-31, 2025',
      amount: 'GHC 20,000',
      status: 'Paid'
    },
    {
      id: 'R-EX27',
      equipment: 'Dump Truck',
      date: 'Jan 1-15, 2026',
      amount: 'GHC 8,000',
      status: 'Failed'
    },
    {
      id: 'R-EX28',
      equipment: 'Loader',
      date: 'Jan 16-31, 2026',
      amount: 'GHC 9,000',
      status: 'Pending'
    },
    {
      id: 'R-EX29',
      equipment: 'Grader',
      date: 'Feb 1-15, 2026',
      amount: 'GHC 11,000',
      status: 'Paid'
    },
    {
      id: 'R-EX30',
      equipment: 'Roller',
      date: 'Feb 16-28, 2026',
      amount: 'GHC 7,000',
      status: 'Failed'
    },
    {
      id: 'R-EX31',
      equipment: 'Backhoe',
      date: 'Mar 1-15, 2026',
      amount: 'GHC 13,000',
      status: 'Pending'
    },
    {
      id: 'R-EX32',
      equipment: 'Trencher',
      date: 'Mar 16-31, 2026',
      amount: 'GHC 6,000',
      status: 'Paid'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid': return 'text-[#43A047]';
      case 'Failed': return 'text-[#FF0000]';
      case 'Pending': return 'text-[#F2C101]';
      default: return 'text-[#1C1D21]';
    }
  };


  const pageSize = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(paymentHistory.length / pageSize));
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedPayments = paymentHistory.slice(startIndex, startIndex + pageSize);

  const goToPage = (page: number) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
  };


  return (
    <>
      <main className='flex flex-col h-full'>
        <DashboardHeader title='Payment' />

        <section className='mt-8 max-w-7xl w-full'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {/* Card 1 */}
            <div className='flex flex-col bg-white rounded-2xl shadow-sm border border-[#F0F0F0] p-4 sm:p-6'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-3'>
                  <div className='bg-[#EEF8F1] text-[#2F7A2B] w-10 h-10 flex items-center justify-center rounded-lg'>
                    <i className="ri-bar-chart-grouped-line text-xl"></i>
                  </div>
                  <div>
                    <h2 className='text-[#333333] font-medium text-sm sm:text-base'>Total Paid</h2>
                    <p className='text-[#333333] font-semibold text-xl sm:text-2xl'>GHC 100,000</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className='flex flex-col bg-white rounded-2xl shadow-sm border border-[#F0F0F0] p-4 sm:p-6'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-3'>
                  <div className='bg-[#FFF6ED] text-[#B65B00] w-10 h-10 flex items-center justify-center rounded-lg'>
                    <i className="ri-pass-pending-line text-xl"></i>
                  </div>
                  <div>
                    <h2 className='text-[#333333] font-medium text-sm sm:text-base'>Pending Refunds</h2>
                    <p className='text-[#333333] font-semibold text-xl sm:text-2xl'>GHC 2,400</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className='flex flex-col bg-white rounded-2xl shadow-sm border border-[#F0F0F0] p-4 sm:p-6'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-3'>
                  <div className='bg-[#F4F7FF] text-[#1E3A8A] w-10 h-10 flex items-center justify-center rounded-lg'>
                    <i className="ri-focus-line text-xl"></i>
                  </div>
                  <div>
                    <h2 className='text-[#333333] font-medium text-sm sm:text-base'>Active Subscriptions</h2>
                    <p className='text-[#333333] font-semibold text-xl sm:text-2xl'>3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='mt-16 flex-1'>
          <h1 className='text-[#333333] font-medium text-lg'>Payment History</h1>
          <div className='mt-8 grid grid-cols-6 gap-4'>
            {tableHeaders.map((e, i) => (
              <h1 className='text-base text-[#1C1D21] font-medium' key={i}>{e}</h1>
            ))}
          </div>

          <div className='mt-4 space-y-8'>
            {paginatedPayments.map((payment, index) => (
              <div key={index} className='grid grid-cols-6 gap-4'>
                <h1 className='text-[#1C1D21] font-regular text-base'>{payment.id}</h1>
                <h1 className='text-[#1C1D21] font-regular text-base'>{payment.equipment}</h1>
                <h1 className='text-[#1C1D21] font-regular text-base'>{payment.date}</h1>
                <h1 className='text-[#1C1D21] font-regular text-base'>{payment.amount}</h1>
                <h1 className={`font-regular text-base ${getStatusColor(payment.status)}`}>{payment.status}</h1>
                <h1 className='text-[#43A047] font-regular text-base'>View Invoice</h1>
              </div>
            ))}
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
                  className={`px-2 flex items-center justify-center text-xs lg:text-sm transition-colors ${pageNumber === currentPage
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
