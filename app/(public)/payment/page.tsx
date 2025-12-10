'use client'

import { useState } from 'react'
import Footer from '@/components/public/Footer';
import PageHeader from '@/components/public/PageHeader';

function Page() {
  const [activeTab, setActiveTab] = useState<'momo' | 'debit' | 'other'>('momo');
  const [selectedNetwork, setSelectedNetwork] = useState('');
  const [isNetworkModalOpen, setIsNetworkModalOpen] = useState(false);

  const paymentMethods: Array<{ key: 'momo' | 'debit' | 'other'; label: string; icon: string }> = [
    { key: 'momo', label: 'Mobile Money', icon: 'ri-smartphone-line' },
    { key: 'debit', label: 'Debit / Credit Card', icon: 'ri-bank-card-line' },
    { key: 'other', label: 'Other Method', icon: 'ri-more-line' },
  ];

  const networks = ['MTN', 'Vodafone', 'Airtel'];

  const handlePaymentSelect = (method: 'momo' | 'debit' | 'other') => {
    setActiveTab(method);
  };

  const handleNetworkSelect = (network: string) => {
    setSelectedNetwork(network);
    setIsNetworkModalOpen(false);
  };

  return (
    <>
      <main className='min-h-screen bg-white'>
        <PageHeader />

        <section className='mt-20 md:mt-24 xl:mt-28 w-[90vw] md:max-w-5xl lg:max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 pb-12 md:pb-16'>

          <div className='flex flex-col'>
            <div className='flex justify-center items-center'>
              <h1 className='text-[#43A047] text-base md:text-lg lg:text-xl font-bold'>Your Reservation</h1>
            </div>

            <div className='mt-6 md:mt-8'>
              <div className='flex flex-col space-y-3 md:space-y-4 lg:space-y-6'>

                <div className='flex space-x-2 tracking-wide'>
                  <h1 className='text-[#333333] font-bold text-sm md:text-base lg:text-lg'>Equipment:</h1>
                  <h1 className='text-[#333333] font-regular text-xs md:text-sm lg:text-base'>Excavator</h1>
                </div>

                <div className='flex space-x-2 tracking-wide'>
                  <h1 className='text-[#333333] font-bold text-sm md:text-base lg:text-lg'>Date:</h1>
                  <h1 className='text-[#333333] font-regular text-xs md:text-sm lg:text-base'>1 November, 2025 - 21 November, 2025</h1>
                </div>

                <div className='flex space-x-2 tracking-wide'>
                  <h1 className='text-[#333333] font-bold text-sm md:text-base lg:text-lg'>Amount:</h1>
                  <h1 className='text-[#333333] font-regular text-xs md:text-sm lg:text-base'>GHC 10,000</h1>
                </div>

              </div>

              <hr className='mt-6 md:mt-8 sm:mt-12 border-t border-[#D5D5D5]' />

              <div className='mt-6 md:mt-8 sm:mt-12'>
                <div className='flex items-center'>
                  <h1 className='text-[#333333] text-sm md:text-base lg:text-lg font-medium'>Select Payment Method</h1>
                </div>

                <div className='mt-6 md:mt-8 sm:mt-8 flex flex-col space-y-4 md:space-y-5 sm:space-y-6 lg:space-y-6'>
                  {paymentMethods.map((method) => (
                    <button
                      key={method.key}
                      type='button'
                      className={`flex justify-between items-center h-12 md:h-14 sm:h-16 lg:h-18 xl:h-20 px-4 md:px-6 sm:px-6 lg:px-8 xl:px-10 rounded-xl shadow-md border transition-all hover:shadow-lg focus:ring-2 focus:ring-[#43A047] focus:ring-opacity-50 ${activeTab === method.key ? 'border-[#43A047] shadow-lg' : 'border-transparent hover:border-gray-200'}`}
                      onClick={() => handlePaymentSelect(method.key)}
                    >
                      <div className='flex space-x-2 items-center'>
                        <h1 className='text-[#333333] font-medium text-sm md:text-base lg:text-lg'>{method.label}</h1>
                        <i className={`${method.icon} text-base md:text-lg ${activeTab === method.key ? 'text-[#43A047]' : 'text-[#787878]'}`}></i>
                      </div>

                      <i className={`${activeTab === method.key ? 'ri-checkbox-circle-fill text-[#43A047]' : 'ri-checkbox-blank-circle-line text-[#BDBDBD]'} text-base md:text-lg`}></i>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {activeTab === 'debit' && (
            <div className='flex flex-col'>
              <div className='flex justify-center items-center'>
                <h1 className='text-[#333333] text-sm md:text-base lg:text-lg font-bold'>Debit / Credit Card</h1>
              </div>

              <div className='mt-6 md:mt-8 sm:mt-8'>
                <div className='flex flex-col space-y-6 md:space-y-8 sm:space-y-8 lg:space-y-10'>

                  <div className='flex flex-col space-y-2'>
                    <h1 className='text-[#333333] font-regular text-sm md:text-base lg:text-lg'>Card Number</h1>
                    <p className='text-[#787878] font-regular text-xs md:text-sm lg:text-base'>Enter the 16 digit number on the card</p>

                    <input type='text' maxLength={16} placeholder='1234 5678 9012 3456' className='border border-[#787878] focus:border-[#43A047] focus:outline-none focus:ring-2 focus:ring-[#43A047] focus:ring-opacity-50 h-10 md:h-12 sm:h-12 mt-3 sm:mt-4 rounded-full px-4 transition-all' />
                  </div>

                  <div className='grid grid-cols-2 gap-4 md:gap-6 sm:gap-6 lg:gap-8'>
                    <div className='flex flex-col space-y-2'>
                      <h1 className='text-[#333333] font-regular text-sm md:text-base lg:text-lg'>Expire Date</h1>

                      <input type='text' placeholder='MM/YY' maxLength={5} className='border border-[#787878] focus:border-[#43A047] focus:outline-none focus:ring-2 focus:ring-[#43A047] focus:ring-opacity-50 h-10 md:h-12 sm:h-12 mt-3 sm:mt-4 rounded-full px-4 transition-all' />
                    </div>

                    <div className='flex flex-col space-y-2'>
                      <h1 className='text-[#333333] font-regular text-sm md:text-base lg:text-lg'>CVV Number</h1>

                      <input type='text' placeholder='123' maxLength={3} className='border border-[#787878] focus:border-[#43A047] focus:outline-none focus:ring-2 focus:ring-[#43A047] focus:ring-opacity-50 h-10 md:h-12 sm:h-12 mt-3 sm:mt-4 rounded-full px-4 transition-all' />
                    </div>
                  </div>

                  <div className='flex flex-col space-y-2'>
                    <h1 className='text-[#333333] font-regular text-sm md:text-base lg:text-lg'>Cardholder Name</h1>

                    <input type='text' placeholder='John Doe' className='border border-[#787878] focus:border-[#43A047] focus:outline-none focus:ring-2 focus:ring-[#43A047] focus:ring-opacity-50 h-10 md:h-12 sm:h-12 mt-3 sm:mt-4 rounded-full px-4 transition-all' />
                  </div>

                  <button className='bg-[#43A047] hover:bg-[#388E3C] active:scale-95 transition-all h-10 md:h-12 sm:h-12 rounded-full flex justify-center items-center cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-[#43A047]'>
                    <h1 className='text-white font-medium text-xs md:text-sm lg:text-base'>Pay Now</h1>
                  </button>

                </div>
              </div>
            </div>
          )}

          {activeTab === 'momo' && (
            <div className='flex flex-col'>
              <div className='flex justify-center items-center'>
                <h1 className='text-[#333333] text-sm md:text-base lg:text-lg font-bold'>Mobile Money</h1>
              </div>

              <div className='mt-6 md:mt-8 sm:mt-8'>
                <div className='flex flex-col space-y-6 md:space-y-8 sm:space-y-8 lg:space-y-10'>

                  <div className='flex flex-col space-y-2'>
                    <h1 className='text-[#333333] font-regular text-sm md:text-base lg:text-lg'>Mobile Number</h1>
                    <p className='text-[#787878] font-regular text-xs md:text-sm lg:text-base'>Enter the mobile money number you want to pay with</p>

                    <input type='tel' placeholder='0XX XXX XXXX' className='border border-[#787878] focus:border-[#43A047] focus:outline-none focus:ring-2 focus:ring-[#43A047] focus:ring-opacity-50 h-10 md:h-12 sm:h-12 mt-3 sm:mt-4 rounded-full px-4 transition-all' />
                  </div>

                  <div className='flex flex-col space-y-2'>
                    <h1 className='text-[#333333] font-regular text-sm md:text-base lg:text-lg'>Select Network</h1>
                    <button
                      type='button'
                      className='border border-[#787878] hover:border-[#43A047] focus:border-[#43A047] focus:outline-none focus:ring-2 focus:ring-[#43A047] focus:ring-opacity-50 h-10 md:h-12 sm:h-12 mt-3 sm:mt-4 rounded-full px-4 flex items-center justify-between text-left transition-all'
                      onClick={() => setIsNetworkModalOpen(true)}
                    >
                      <span className={`${selectedNetwork ? 'text-[#333333]' : 'text-[#787878]'} text-xs md:text-sm lg:text-base`}>
                        {selectedNetwork || 'Tap to choose a network'}
                      </span>
                      <i className='ri-arrow-down-s-line text-base md:text-lg text-[#787878]'></i>
                    </button>
                  </div>

                  <button className='bg-[#43A047] hover:bg-[#388E3C] active:scale-95 transition-all h-10 md:h-12 sm:h-12 rounded-full flex justify-center items-center cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-[#43A047]'>
                    <h1 className='text-white font-medium text-xs md:text-sm lg:text-base'>Pay Now</h1>
                  </button>

                </div>
              </div>

            </div>
          )}

          {activeTab === 'other' && (
            <div className='flex flex-col items-center justify-center text-center px-4 md:px-6 sm:px-6 lg:px-12 xl:px-16'>
              <h1 className='text-[#333333] text-base md:text-lg lg:text-xl font-semibold'>Need a different payment option?</h1>
              <p className='mt-3 md:mt-4 sm:mt-4 text-[#787878] text-xs md:text-sm lg:text-base'>Share your preferred method and our support team will help you complete the reservation.</p>
              <button className='mt-6 md:mt-8 sm:mt-8 border border-[#43A047] text-[#43A047] px-4 md:px-6 sm:px-4 lg:px-6 xl:px-8 h-8 md:h-10 sm:h-10 lg:h-12 xl:h-14 rounded-full font-medium hover:bg-[#43A047] hover:text-white active:scale-95 transition-all text-xs md:text-sm lg:text-base focus:ring-2 focus:ring-offset-2 focus:ring-[#43A047]'>Contact Support</button>
            </div>
          )}
        </section>

        {isNetworkModalOpen && (
          <div className='fixed inset-0 bg-black/30 z-[60] flex items-center justify-center px-4' onClick={() => setIsNetworkModalOpen(false)}>
            <div className='bg-white rounded-3xl w-full max-w-xs md:max-w-sm p-4 md:p-5 sm:p-4 space-y-3 md:space-y-4 sm:space-y-4 shadow-2xl' onClick={(e) => e.stopPropagation()}>
              <div>
                <h2 className='text-[#333333] text-base md:text-lg lg:text-xl font-semibold'>Choose Network</h2>
                <p className='text-[#787878] text-xs md:text-sm lg:text-base mt-1'>Select the mobile money provider you want to use.</p>
              </div>
              <div className='space-y-2'>
                {networks.map((network) => (
                  <button
                    key={network}
                    className={`w-full h-10 md:h-12 sm:h-12 rounded-2xl border px-4 flex items-center justify-between text-left font-medium text-sm md:text-base transition-all hover:shadow-md ${selectedNetwork === network ? 'border-[#43A047] bg-[#F1FBF3] text-[#184E24]' : 'border-[#D5D5D5] text-[#333333] hover:border-[#43A047]'}`}
                    onClick={() => handleNetworkSelect(network)}
                  >
                    {network}
                    {selectedNetwork === network && <i className='ri-check-line text-[#43A047] text-base md:text-lg'></i>}
                  </button>
                ))}
              </div>
              <button
                className='w-full h-8 md:h-10 sm:h-10 rounded-full border border-[#D5D5D5] text-[#333333] font-medium hover:bg-[#F9F9F9] active:scale-95 transition-all text-xs md:text-sm lg:text-base'
                onClick={() => setIsNetworkModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

          <Footer />
      </main>
    </>
  )
}

export default Page