'use client';

import { useState } from 'react';
import { DateRange } from 'react-date-range';
import type { Range, RangeKeyDict } from 'react-date-range';
import DashboardHeader from '@/components/renter/DashboardHeader';

function Page() {
  const [dateRange, setDateRange] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ])

  const handleDateRangeChange = (ranges: RangeKeyDict) => {
    setDateRange([ranges.selection]);
  };

  const reservationHistory = [
    { id: 'R-EX45', equipment: 'Bulldozer', vendor: 'Mega Earth Movers', dates: 'Nov 01 - 06, 2025', cost: 'GHC 8,450' },
    { id: 'R-LD11', equipment: 'Loader', vendor: 'Prime Equip Leasing', dates: 'Oct 23 - 28, 2025', cost: 'GHC 6,880' },
    { id: 'R-CR09', equipment: 'Crane', vendor: 'SkyLift Rentals', dates: 'Oct 10 - 14, 2025', cost: 'GHC 12,300' },
    { id: 'R-DM54', equipment: 'Dump Truck', vendor: 'HaulPro Logistics', dates: 'Aug 05 - 12, 2025', cost: 'GHC 9,100' },
    { id: 'R-RL72', equipment: 'Roller', vendor: 'SmoothRoad Co.', dates: 'Jul 25 - 30, 2025', cost: 'GHC 5,420' },
    { id: 'R-LF08', equipment: 'Lift Boom', vendor: 'ElevateWorks', dates: 'Jun 28 - Jul 03, 2025', cost: 'GHC 7,675' },
  ];

  return (
    <>
      <main className='flex flex-col h-full '>
        <DashboardHeader title='Overview' />
        <section className='mt-6 lg:mt-12 flex justify-start items-center bg-[#F7E6E6] h-12 lg:h-16 rounded-lg space-x-3 lg:space-x-6 pl-3 lg:pl-6 xl:pl-10 shrink-0'>
          <i className="ri-information-line text-[#333333] text-lg lg:text-xl"></i>
          <h1 className='text-[#333333] font-regular text-xs lg:text-sm'>Your rental for Excavator ends tomorrow 15 November, 2025</h1>
        </section>

        <section className='mt-4 lg:mt-6 flex-1 overflow-hidden'>
          <div className='grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 lg:gap-10 xl:gap-16 h-full'>
            <div className='flex flex-col h-full overflow-hidden'>
              <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center bg-white shadow-xs rounded-lg px-3 lg:px-6 xl:px-10 py-4 lg:py-6 xl:py-8 space-y-3 lg:space-y-0'>

                <div className='flex flex-col space-y-3 lg:space-y-5'>
                  <h1 className='text-[#333333] font-medium text-sm lg:text-base'>Upcoming Reservation</h1>
                  <p className='text-[#333333] font-regular text-xs lg:text-sm'>Equipment Name: Excavator | Nov 15 - 20, 2025</p>

                  <button className='flex justify-center items-center border border-[#333333] rounded-full w-28 lg:w-36 py-1.5 text-[#333333] font-regular text-xs lg:text-sm'>View Details</button>
                </div>

                <div className='hidden lg:block border-l border-[#E8E8E8] h-16 lg:h-full' />

                <div className='flex flex-col space-y-3 lg:space-y-5'>
                  <h1 className='text-[#333333] font-medium text-sm lg:text-base'>Upcoming Reservation</h1>
                  <p className='text-[#333333] font-regular text-xs lg:text-sm'>Equipment Name: Excavator | Nov 15 - 20, 2025</p>

                  <button className='flex justify-center items-center border border-[#333333] rounded-full w-28 lg:w-36 py-1.5 text-[#333333] font-regular text-xs lg:text-sm'>View Details</button>
                </div>

              </div>

              <div className='mt-4 lg:mt-6 bg-white rounded-lg flex-1 overflow-hidden'>
                <h1 className='mt-3 pl-3 lg:pl-6 xl:pl-10 text-[#333333] font-medium text-sm lg:text-base'>Reservation History</h1>
                <div className='mt-4 px-3 lg:px-6 xl:px-10 h-full overflow-hidden'>
                  <div className='overflow-x-auto'>
                    <div className='grid grid-cols-[1fr_1fr_1fr_1fr_1fr_auto] items-center min-w-[600px]'>
                      <h1 className='text-[#1C1D21] font-medium text-xs lg:text-sm'>ID</h1>
                      <h1 className='text-[#1C1D21] font-medium text-xs lg:text-sm'>Equipment</h1>
                      <h1 className='text-[#1C1D21] font-medium text-xs lg:text-sm'>Vendor</h1>
                      <h1 className='text-[#1C1D21] font-medium text-xs lg:text-sm'>Dates</h1>
                      <h1 className='text-[#1C1D21] font-medium text-xs lg:text-sm'>Cost</h1>
                      <span />
                    </div>
                  </div>

                  <div className='mt-4 space-y-3 h-full overflow-y-auto pr-3 pb-9'>
                    {reservationHistory.map((reservation) => (
                      <div key={reservation.id} className='overflow-x-auto'>
                        <div className='grid grid-cols-[1fr_1fr_1fr_1fr_1fr_auto] items-center h-10 lg:h-12 min-w-[600px]'>
                          <h1 className='text-[#1C1D21] font-regular text-xs lg:text-sm'>{reservation.id}</h1>
                          <h1 className='text-[#1C1D21] font-regular text-xs lg:text-sm'>{reservation.equipment}</h1>
                          <h1 className='text-[#1C1D21] font-regular text-xs lg:text-sm'>{reservation.vendor}</h1>
                          <h1 className='text-[#1C1D21] font-regular text-xs lg:text-sm'>{reservation.dates}</h1>
                          <h1 className='text-[#1C1D21] font-regular text-xs lg:text-sm'>{reservation.cost}</h1>
                          <i className="ri-arrow-right-up-long-line text-[#1C1D21] text-sm lg:text-base"></i>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className='flex flex-col h-full overflow-hidden'>
              <div className='w-full flex justify-center items-center shrink-0'>
                <DateRange
                  ranges={dateRange}
                  onChange={handleDateRangeChange}
                  months={1}
                  direction="vertical"
                  className="w-full"
                  moveRangeOnFirstSelection={false}
                />
              </div>

              <div className='mt-4 lg:mt-6 flex-1 overflow-y-auto pr-2'>
                <h1 className='text-[#333333] font-medium text-sm lg:text-base'>Updates</h1>
                <div className='mt-4 flex justify-start items-center bg-[#F7E6E6] p-4 lg:p-6 xl:p-8 rounded-lg'>
                  <h1 className='text-xs lg:text-sm'>Rent of excavator will end this
                    thursday Nov 20</h1>
                </div>

                <div className='mt-4 flex justify-start items-center bg-[#F7E6E6] p-4 lg:p-6 xl:p-8 rounded-lg'>
                  <h1 className='text-xs lg:text-sm'>Other relevant booking info here</h1>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
      <style jsx global>{`
        .rdrDateDisplayWrapper {
          display: none;
        }
      `}</style>
    </>
  )
}

export default Page
