'use client';

import React, { useState, Suspense } from 'react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import PageHeader from '@/components/public/PageHeader';
import Footer from '@/components/public/Footer';
import toast from 'react-hot-toast';
import { useUser } from '@/context/userContext';


function ReserveContent() {
  const router = useRouter();
  const { user } = useUser();

  const searchParams = useSearchParams();

  const name = searchParams.get('name') || 'Unknown Equipment';
  const equipmentId = searchParams.get('id') || '';
  const ownerId = searchParams.get('ownerId') || '';
  const price = parseFloat(searchParams.get('price') || '0');
  const image = searchParams.get('image') || '';
  const location = searchParams.get('location') || 'Unknown Location';
  const startDate = searchParams.get('startDate') || '';
  const endDate = searchParams.get('endDate') || '';

  console.log('user', user)

  // Calculate duration
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const duration = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1; // Default to 1 day if invalid

  const equipment = {
    name,
    image,
    location,
    pricePerDay: price,
    duration,
    serviceFee: 150,
    tax: 50,
  };

  const total = (equipment.pricePerDay * equipment.duration) + equipment.serviceFee + equipment.tax;

  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleCreateReservation = async () => {
    try {
      const apiRes = await fetch(`/api/reservationRoutes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          equipmentId,
          equipmentName: name,
          ownerId,
          renterId: user?.id,
          rentalAmount: total,
          startDate,
          endDate
        })
      })

      const apiData = await apiRes.json();

      if (!apiRes.ok) {
        throw new Error(apiData.message || 'Reservation creation failed');
      }

      toast.success('Reservation created successfully');
      return true;

    } catch (error) {
      console.error('Reservation Error:', error);
      toast.error('Reservation Error: ' + (error || 'An unexpected error occurred'));
      return false;
    }
  }

  const handleReserveAndPay = async () => {
    if (!userDetails.firstName || !userDetails.lastName || !userDetails.email || !userDetails.phone) {
      alert('Please fill in all contact information fields.');
      return;
    }

    setIsProcessing(true);

    try {
      // Step 1: Create Reservation
      const reservationSuccess = await handleCreateReservation();

      if (!reservationSuccess) {
        // If reservation failed, stop here
        return;
      }

      // Step 2: Initiate Payment
      const paymentRes = await fetch('/api/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          rentalRequestId: 1,
          equipmentId,
          renterId: user?.id,
          ownerId,
          email: userDetails.email,
          amount: total,
        })
      });

      const paymentData = await paymentRes.json();
      console.log(paymentData);

      if (!paymentRes.ok) {
        throw new Error(paymentData.message || 'Payment initiation failed');
      }

      // Check for authorizationUrl in the response
      const authUrl = paymentData.data?.authorizationUrl || paymentData.data?.data?.authorizationUrl;

      if (authUrl) {
        window.location.href = authUrl;
      } else {
        console.error('Payment Data:', paymentData);
        throw new Error('Authorization URL not found in response');
      }

    } catch (error: any) {
      console.error('Payment Error:', error);
      toast.error('Payment Error: ' + (error.message || 'An unexpected error occurred'));
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50/50 font-sans text-gray-900">
      <PageHeader />

      <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Title */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Secure Reservation</h1>
          <p className="text-gray-500 mt-2">Complete your booking securely in just a few steps.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* LEFT COLUMN: User Form (7 cols) */}
          <div className="lg:col-span-7 space-y-10">

            {/* Section 1: Contact Info */}
            <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 font-bold text-sm">1</span>
                <h2 className="text-xl font-bold text-gray-900">Contact Information</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={userDetails.firstName}
                    onChange={handleInputChange}
                    placeholder="John"
                    className="w-full h-12 px-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={userDetails.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe"
                    className="w-full h-12 px-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none transition-all"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-semibold text-gray-700">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={userDetails.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full h-12 px-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none transition-all"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={userDetails.phone}
                    onChange={handleInputChange}
                    placeholder="+233 20 000 0000"
                    className="w-full h-12 px-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Rental Details Review */}
            <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 font-bold text-sm">2</span>
                <h2 className="text-xl font-bold text-gray-900">Rental Details</h2>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">Pickup Date</label>
                  <div className="font-bold text-gray-900 text-lg">{startDate}</div>
                  <div className="text-sm text-gray-500">From 8:00 AM</div>
                </div>
                <div className="flex-1 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">Return Date</label>
                  <div className="font-bold text-gray-900 text-lg">{endDate}</div>
                  <div className="text-sm text-gray-500">By 5:00 PM</div>
                </div>
              </div>

              <div className="mt-6">
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Additional Notes (Optional)</label>
                <textarea
                  name="notes"
                  value={userDetails.notes}
                  onChange={handleInputChange}
                  placeholder="Any special requests or delivery instructions?"
                  className="w-full h-24 p-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none transition-all resize-none"
                ></textarea>
              </div>
            </div>
          </div>


          {/* RIGHT COLUMN: Order Summary (5 cols) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">

            <div className="bg-[#0f172a] rounded-[2rem] p-6 md:p-8 text-white shadow-2xl overflow-hidden relative">
              {/* Glossy overlay effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

              <h3 className="text-xl font-bold mb-6 relative z-10">Order Summary</h3>

              <div className="flex gap-4 mb-8 relative z-10">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden border border-white/10 shrink-0">
                  <Image src={equipment.image} alt={equipment.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-lg leading-snug mb-1">{equipment.name}</h4>
                  <p className="text-gray-400 text-sm flex items-center gap-1">
                    <i className="ri-map-pin-line text-green-400"></i> {equipment.location}
                  </p>
                </div>
              </div>

              <div className="space-y-4 border-t border-white/10 pt-6 mb-6 relative z-10">
                <div className="flex justify-between text-gray-300">
                  <span>Rate (Daily)</span>
                  <span>GH₵ {equipment.pricePerDay.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Duration</span>
                  <span>{equipment.duration} Days</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Service Fee</span>
                  <span>GH₵ {equipment.serviceFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Taxes</span>
                  <span>GH₵ {equipment.tax.toLocaleString()}</span>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 relative z-10">
                <div className="flex justify-between items-end mb-2">
                  <span className="font-medium text-gray-300">Total Amount</span>
                  <span className="text-3xl font-bold text-green-400">GH₵ {total.toLocaleString()}</span>
                </div>
                <p className="text-right text-xs text-gray-500">Includes all fees and taxes</p>
              </div>

            </div>

            <div className="text-xs text-gray-500 text-center px-4 leading-relaxed">
              By clicking the button below, you agree to our <a href="#" className="underline hover:text-green-600">Terms of Service</a> and <a href="#" className="underline hover:text-green-600">Privacy Policy</a>.
            </div>

            <button
              onClick={handleReserveAndPay}
              disabled={isProcessing}
              className="w-full h-16 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-2xl font-bold text-xl transition-all shadow-xl shadow-green-600/30 active:scale-95 flex items-center justify-center gap-3 relative overflow-hidden"
            >
              {isProcessing ? (
                <>
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span>Confirm & Pay</span>
                  <i className="ri-arrow-right-line"></i>
                </>
              )}
            </button>

          </div>

        </div>

      </div>

      <Footer />
    </main>
  );
}

function Page() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-gray-50/50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
      </main>
    }>
      <ReserveContent />
    </Suspense>
  );
}

export default Page;
