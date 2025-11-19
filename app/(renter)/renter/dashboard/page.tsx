'use client';

import { useState } from 'react';
import { DateRange } from 'react-date-range';
import type { Range, RangeKeyDict } from 'react-date-range';
import DashboardHeader from '@/components/renter/DashboardHeader';
import DashboardAlert from '@/components/renter/DashboardAlert';

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
        <DashboardAlert />


        <section className='mt-8 lg:mt-12'>
          <div className='grid grid-cols-1 gap-6 lg:grid-cols-[1.5fr_1fr] lg:gap-20'>
            <div className='flex flex-col'>
              <div className='bg-white flex flex-col py-8 px-4 gap-12 lg:flex-row lg:justify-around lg:py-12 lg:px-4 lg:gap-0'>

                <div className='flex flex-col space-y-3 lg:space-y-4'>
                  <h1 className='text-[#333333] font-semibold text-sm lg:text-base'>Upcoming Reservation</h1>
                  <p className='text-[#333333] font-regular text-xs lg:text-base'>Equipment Name: Excavator | Nov 15 - 20, 2025</p>

                  <button className='flex w-34 h-10 justify-center items-center border border-[#333333]/90 rounded-full text-[#333333] font-regular text-xs lg:text-base lg:w-44 lg:h-13'>View Details</button>
                </div>

                <div className='hidden lg:block border-l border-[#E8E8E8] h-16 lg:h-full' />

                <div className='flex flex-col space-y-3 lg:space-y-4'>
                  <h1 className='text-[#333333] font-semibold text-sm lg:text-base'>Upcoming Reservation</h1>
                  <p className='text-[#333333] font-regular text-xs lg:text-base'>Equipment Name: Excavator | Nov 15 - 20, 2025</p>

                  <button className='flex w-34 h-10 justify-center items-center border border-[#333333]/90 rounded-full text-[#333333] font-regular text-xs lg:text-base lg:w-44 lg:h-13'>View Details</button>
                </div>
              </div>

              <div className='mt-6 bg-white p-4 rounded-lg lg:mt-12 lg:p-12'>
                <h1 className='text-[#000000] font-medium text-sm lg:text-xl'>Reservation History</h1>
                <div className='mt-4'>
                  <div className='overflow-x-auto'>
                    <div className='grid grid-cols-[1fr_1fr_1fr_1fr_1fr_auto] items-center min-w-[600px]'>
                      <h1 className='text-[#1C1D21] font-medium text-xs'>ID</h1>
                      <h1 className='text-[#1C1D21] font-medium text-xs'>Equipment</h1>
                      <h1 className='text-[#1C1D21] font-medium text-xs'>Vendor</h1>
                      <h1 className='text-[#1C1D21] font-medium text-xs'>Dates</h1>
                      <h1 className='text-[#1C1D21] font-medium text-xs'>Cost</h1>
                      <span />
                    </div>
                  </div>

                  <div className='mt-4 space-y-3 flex-1 overflow-y-auto pb-9'>
                    {reservationHistory.map((reservation) => (
                      <div key={reservation.id} className='overflow-x-auto'>
                        <div className='grid grid-cols-[1fr_1fr_1fr_1fr_1fr_auto] items-center h-10 lg:h-12 min-w-[600px]'>
                          <h1 className='text-[#1C1D21] font-regular text-xs'>{reservation.id}</h1>
                          <h1 className='text-[#1C1D21] font-regular text-xs'>{reservation.equipment}</h1>
                          <h1 className='text-[#1C1D21] font-regular text-xs'>{reservation.vendor}</h1>
                          <h1 className='text-[#1C1D21] font-regular text-xs'>{reservation.dates}</h1>
                          <h1 className='text-[#1C1D21] font-regular text-xs'>{reservation.cost}</h1>
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
                <h1 className='text-[#333333] font-medium text-sm'>Updates</h1>
                <div className='mt-4 flex justify-start items-center bg-[#F7E6E6] p-4 lg:p-6 xl:p-8 rounded-lg'>
                  <h1 className='text-xs'>Rent of excavator will end this
                    thursday Nov 20</h1>
                </div>

                <div className='mt-4 flex justify-start items-center bg-[#F7E6E6] p-4 lg:p-6 xl:p-8 rounded-lg'>
                  <h1 className='text-xs'>Other relevant booking info here</h1>
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
