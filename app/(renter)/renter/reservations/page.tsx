'use client';

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import DashboardHeader from '@/components/renter/DashboardHeader';
import { useUser } from '@/context/userContext';
import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';

type ReservationStatus = 'Active' | 'Pending' | 'Completed' | 'Cancelled';

function Page() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'All' | ReservationStatus>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const { user } = useUser();

  const { data: reservationsData, error: reservationsError, isLoading: reservationsLoading } = useSWR(
    user?.id ? `/api/reservationRoutes?renterId=${user.id}` : null,
    fetcher
  );


  // Map API data to UI format
  const reservations = useMemo(() => {
    if (!reservationsData?.data || !Array.isArray(reservationsData.data)) return [];

    return reservationsData.data.map((item: any) => {
      const startDate = new Date(item.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      const endDate = new Date(item.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

      // Map backend status to frontend status
      let status: ReservationStatus = 'Pending';
      const backendStatus = (item.approvalStatus || item.status || '').toLowerCase();

      if (backendStatus === 'approved') status = 'Active';
      else if (backendStatus === 'completed') status = 'Completed';
      else if (backendStatus === 'rejected' || backendStatus === 'cancelled') status = 'Cancelled';
      else status = 'Pending';

      return {
        id: item.id?.toString() || `R-${Math.random().toString(36).substr(2, 5).toUpperCase()}`,
        equipment: item.equipmentName || 'Unknown Equipment',
        vendor: item.ownerId || 'Unknown Vendor',
        status: status,
        dates: `${startDate} - ${endDate}`,
        cost: `GHC ${parseFloat(item.rentalAmount || '0').toLocaleString()}`,
        originalData: item
      };
    });
  }, [reservationsData]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-700 border-green-200';
      case 'Pending': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'Completed': return 'bg-gray-100 text-gray-700 border-gray-200';
      case 'Cancelled': return 'bg-red-50 text-red-600 border-red-100';
      default: return 'bg-gray-50 text-gray-600 border-gray-200';
    }
  };

  if (reservationsLoading) {
    return (
      <div className='flex flex-col h-full space-y-8 pb-10 justify-center items-center'>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
        <p className="text-gray-500">Loading reservations...</p>
      </div>
    )
  }

  return (
    <div className='flex flex-col h-full space-y-8 pb-10'>
      <DashboardHeader title='My Reservations' />

      {/* Toolbar Section */}
      <section className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
        {/* Status Tabs */}
        <div className='flex bg-white p-1 rounded-xl shadow-sm border border-gray-100 w-fit overflow-x-auto'>
          {['All', 'Active', 'Pending', 'Completed', 'Cancelled'].map((tab) => (
            <button
              key={tab}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${activeTab === tab
                ? 'bg-green-600 text-white shadow-md'
                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
          <input
            type="text"
            placeholder="Search equipment, ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-11 pl-11 pr-4 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none text-sm transition-all"
          />
        </div>
      </section>

      {/* Mobile Reservations List (Visible on sm/md) */}
      <div className="lg:hidden space-y-4">
        {reservations?.map((res: any) => (
          <div key={res.id} onClick={() => router.push(`/renter/reservations/${res.id}`)} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm active:scale-[0.98] transition-all">
            <div className="flex justify-between items-start mb-3">
              <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${getStatusColor(res.status)}`}>{res.status}</span>
              <span className="text-gray-400 text-xs font-mono">{res.id}</span>
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-1">{res.equipment}</h3>
            <p className="text-sm text-gray-500 mb-4">{res.vendor}</p>
            <div className="flex justify-between items-end border-t border-gray-50 pt-3">
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Total Cost</p>
                <p className="font-bold text-gray-900">{res.cost}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-400 mb-0.5">Duration</p>
                <p className="text-xs font-medium text-gray-700">{res.dates}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table (Visible on lg+) */}
      <div className='hidden lg:block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden'>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50/50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Equipment</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Dates</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {reservations.length > 0 ? (
                reservations.map((res: any) => (
                  <tr
                    key={res.id}
                    onClick={() => router.push(`/renter/reservations/${res.id}`)}
                    className="hover:bg-gray-50/80 transition-colors cursor-pointer group"
                  >
                    <td className="px-6 py-5 text-sm font-mono text-gray-500 group-hover:text-green-600 transition-colors">{res.id}</td>
                    <td className="px-6 py-5">
                      <div>
                        <p className="text-sm font-bold text-gray-900">{res.equipment}</p>
                        <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                          <i className="ri-store-2-line"></i> {res.vendor}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(res.status)}`}>
                        {res.status}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-sm text-gray-600">{res.dates}</td>
                    <td className="px-6 py-5 text-sm font-bold text-gray-900">{res.cost}</td>
                    <td className="px-6 py-5 text-right">
                      <i className="ri-arrow-right-s-line text-xl text-gray-300 group-hover:text-green-600 transition-colors"></i>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <i className="ri-inbox-2-line text-4xl text-gray-300"></i>
                      <p>No reservations found matching your filters.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between bg-gray-50/30">
          <span className="text-sm text-gray-500">
            Showing <span className="font-bold text-gray-900">1</span> of <span className="font-bold text-gray-900">2</span> results
          </span>
          <div className="flex gap-2">
            <button
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <i className="ri-arrow-left-s-line"></i>
            </button>
            <div className="flex gap-1">
              <button
                className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-medium transition-all`}
              >
              </button>
            </div>
            <button
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <i className="ri-arrow-right-s-line"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
