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


  const pageSize = 12;
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

        <section className='mt-8 max-w-7xl w-full shadow-md rounded-xl py-4 lg:py-8'>
          <div className='bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
            {/* Card 1 */}
            <div className='flex flex-col bg-white border-r border-[#E8E8E8] p-4 lg:p-6'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-3'>
                  <div>
                    <h2 className='text-[#333333] font-medium text-xs lg:text-base'>Total Paid</h2>
                    <p className='text-[#333333] font-semibold text-xsml lg:text-2xl'>GHC 100,000</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className='flex flex-col bg-white border-r border-[#E8E8E8] p-4 lg:p-6'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-3'>
                  <div>
                    <h2 className='text-[#333333] font-medium text-xs lg:text-base'>Outstanding</h2>
                    <p className='text-[#333333] font-semibold text-sm lg:text-2xl'>GHC 200,400</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className='flex flex-col bg-white  p-4 lg:p-6'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-3'>
                  <div>
                    <h2 className='text-[#333333] font-medium text-xs lg:text-base'>Refunded</h2>
                    <p className='text-[#333333] font-semibold text-sm lg:text-2xl'>GHC 100,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='mt-16 flex-1'>
          <h1 className='text-[#333333] font-medium text-lg'>Payment History</h1>
          <div className='mt-8 lg:mt-12 overflow-x-auto'>
            <div className='grid grid-cols-[1fr_1fr_1fr_1fr_1fr_auto] items-center min-w-[600px]'>
              <h1 className='text-[#1C1D21] font-medium text-xs lg:text-base'>Payment ID</h1>
              <h1 className='text-[#1C1D21] font-medium text-xs lg:text-base'>Equipment</h1>
              <h1 className='text-[#1C1D21] font-medium text-xs lg:text-base'>Date</h1>
              <h1 className='text-[#1C1D21] font-medium text-xs lg:text-base'>Amount</h1>
              <h1 className='text-[#1C1D21] font-medium text-xs lg:text-base'>Status</h1>
              <span />
            </div>
          </div>

          <div className='mt-4 space-y-3 overflow-y-auto pb-9'>
            {paginatedPayments.map((payment) => (
              <div key={payment.id} className='overflow-x-auto'>
                <div className='grid grid-cols-[1fr_1fr_1fr_1fr_1fr_auto] items-center h-10 lg:h-12 min-w-[600px]'>
                  <h1 className='text-[#1C1D21] font-regular text-xs lg:text-sm'>{payment.id}</h1>
                  <h1 className='text-[#1C1D21] font-regular text-xs lg:text-sm'>{payment.equipment}</h1>
                  <h1 className='text-[#1C1D21] font-regular text-xs lg:text-sm'>{payment.date}</h1>
                  <h1 className='text-[#1C1D21] font-regular text-xs lg:text-sm'>{payment.amount}</h1 >
                  <h1 className={`font-regular text-xs lg:text-sm ${getStatusColor(payment.status)}`}>{payment.status}</h1>
                  <h1 className='text-[#43A047] text-xs lg:text-base'>View Invoice</h1>
                </div>
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
