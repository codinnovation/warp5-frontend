'use client';

import React, { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import DashboardHeader from '@/components/renter/DashboardHeader';
import { useUser } from '@/context/userContext';
import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';

// Same types as Reservations Page
type ReservationStatus = 'Active' | 'Pending' | 'Completed' | 'Cancelled';

interface ReservationData {
  id: number;
  startDate: string;
  endDate: string;
  approvalStatus?: string;
  status?: string;
  equipmentName?: string;
  ownerId?: string | number;
  rentalAmount?: string;
}

interface MappedReservation {
  id: string;
  equipment: string;
  vendor: string | number;
  status: ReservationStatus;
  dates: string;
  cost: string;
  originalData: ReservationData;
}

function Page() {
  const router = useRouter();
  const { user } = useUser();

  const { data: reservationsData, isLoading: reservationsLoading } = useSWR(
    user?.id ? `/api/reservationRoutes?renterId=${user.id}` : null,
    fetcher
  );

  // Map API data to UI format - consistent with Reservations Page
  const reservations: MappedReservation[] = useMemo(() => {
    if (!reservationsData?.data || !Array.isArray(reservationsData.data)) return [];

    return reservationsData.data.map((item: ReservationData, index: number) => {
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
        id: item.id?.toString() || `R-${index}`,
        equipment: item.equipmentName || 'Unknown Equipment',
        vendor: item.ownerId || 'Unknown Vendor',
        status: status,
        dates: `${startDate} - ${endDate}`,
        cost: `GHC ${parseFloat(item.rentalAmount || '0').toLocaleString()}`,
        originalData: item
      };
    });
  }, [reservationsData]);

  // Derived Stats based on real data
  const stats = useMemo(() => {
    const total = reservations.length;
    const active = reservations.filter((r) => r.status === 'Active').length;
    const pending = reservations.filter((r) => r.status === 'Pending').length;
    const spent = reservations.reduce((acc, curr) => {
      const val = parseFloat(curr.originalData.rentalAmount || '0');
      return acc + val;
    }, 0);

    return [
      { label: 'Total Rentals', value: total.toString(), icon: 'ri-stack-line', color: 'bg-blue-50 text-blue-600' },
      { label: 'Active Rentals', value: active.toString(), icon: 'ri-loader-4-line', color: 'bg-green-50 text-green-600' },
      { label: 'Pending Requests', value: pending.toString(), icon: 'ri-time-line', color: 'bg-orange-50 text-orange-600' },
      { label: 'Total Spent', value: `GHC ${spent > 1000 ? (spent / 1000).toFixed(1) + 'k' : spent}`, icon: 'ri-wallet-3-line', color: 'bg-purple-50 text-purple-600' },
    ];
  }, [reservations]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-emerald-100/60 text-emerald-700 border-emerald-200';
      case 'Pending': return 'bg-amber-100/60 text-amber-700 border-amber-200';
      case 'Completed': return 'bg-gray-100/60 text-gray-700 border-gray-200';
      case 'Cancelled': return 'bg-red-50 text-red-600 border-red-100';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="flex flex-col xl:flex-row gap-6 pb-10 pt-4 max-w-[1920px] mx-auto">

      {/* Left Column (Main Focus) */}
      <div className="w-full xl:w-[70%] flex flex-col gap-6">

        <div className="bg-white/50 backdrop-blur-xl border border-white/60 p-6 rounded-3xl shadow-sm">
          <DashboardHeader title="Dashboard Overview" className="mt-0 mb-0" />
        </div>

        <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden flex-1 min-h-[500px]">
          <div className="p-8 border-b border-gray-50 flex justify-between items-center bg-gray-50/30">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Recent Reservations</h3>
              <p className="text-sm text-gray-500 mt-1">Manage your equipment status and history</p>
            </div>
            <button
              onClick={() => router.push('/renter/reservations')}
              className="flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-700 bg-green-50 px-4 py-2 rounded-full transition-colors"
            >
              View All History
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50/50 text-xs text-gray-400 uppercase tracking-wider text-left font-semibold">
                <tr>
                  <th className="px-8 py-5">Equipment</th>
                  <th className="px-6 py-5">Status</th>
                  <th className="px-6 py-5">Duration</th>
                  <th className="px-6 py-5">Total</th>
                  <th className="px-6 py-5 text-right w-20"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {reservationsLoading ? (
                  [...Array(3)].map((_, i) => (
                    <tr key={i} className="animate-pulse">
                      <td className="px-8 py-6"><div className="h-4 bg-gray-100 rounded w-48"></div></td>
                      <td className="px-6 py-6"><div className="h-4 bg-gray-100 rounded w-20"></div></td>
                      <td className="px-6 py-6"><div className="h-4 bg-gray-100 rounded w-32"></div></td>
                      <td className="px-6 py-6"><div className="h-4 bg-gray-100 rounded w-24"></div></td>
                      <td className="px-6 py-6"></td>
                    </tr>
                  ))
                ) : reservations.length > 0 ? (
                  reservations.slice(0, 8).map((order: MappedReservation) => (
                    <tr key={order.id} onClick={() => router.push(`/renter/reservations/${order.id}`)} className="hover:bg-gray-50/50 transition-colors group cursor-pointer">
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400 text-lg group-hover:bg-green-50 group-hover:text-green-600 transition-colors">
                            <i className="ri-roadster-line"></i>
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-gray-900 group-hover:text-green-700 transition-colors">{order.equipment}</h4>
                            <span className="text-xs text-gray-400 font-medium">#{order.id}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(order.status)}`}>
                          <span className={`w-1.5 h-1.5 rounded-full mr-2 ${order.status === 'Active' ? 'bg-emerald-500 animate-pulse' : order.status === 'Pending' ? 'bg-amber-500' : 'bg-gray-400'}`}></span>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-sm text-gray-600 font-medium">
                        <div className="flex items-center gap-2">
                          <i className="ri-calendar-line text-gray-300"></i>
                          {order.dates}
                        </div>
                      </td>
                      <td className="px-6 py-5 text-sm font-bold text-gray-900">{order.cost}</td>
                      <td className="px-6 py-5 text-right">
                        <button className="w-9 h-9 rounded-xl hover:bg-white border border-transparent hover:border-gray-200 text-gray-400 hover:text-green-600 hover:shadow-sm flex items-center justify-center transition-all ml-auto">
                          <i className="ri-more-2-fill"></i>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="py-12 text-center text-gray-500">
                      No reservations found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Right Column (Stats Only) */}
      <div className="w-full xl:w-[30%] flex flex-col gap-6">

        {/* Stats List */}
        <div className="flex flex-col gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-5 hover:shadow-md hover:border-green-100 transition-all group">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${stat.color} group-hover:scale-110 transition-transform`}>
                <i className={stat.icon}></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">{stat.value}</h3>
                <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

export default Page;
