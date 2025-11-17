'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function Page() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [activeTab, setActiveTab] = useState('personalInfo');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    accountType: '',
  });

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  const tabs = [
    { id: 'personalInfo', label: 'Personal Information' },
    { id: 'address', label: 'Address' },
    { id: 'contact', label: 'Contact Details' },
    { id: 'confirmNumber', label: 'Confirm Number' },
    { id: 'password', label: 'Password' },
  ];

  const handleNextTab = () => {
    const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1].id);
    }
  };

  const personalInfo = [
    { label: 'First Name', name: 'firstName' },
    { label: 'Last Name', name: 'lastName' },
    { label: 'Date of Birth', name: 'dob' },
    { label: 'Gender', name: 'gender' },
  ];

  const addressInfo = [
    { label: 'Address Line 1*', name: 'addressLine1' },
    { label: 'Address Line 2', name: 'addressLine2' },
    { label: 'City', name: 'city' }
  ]

  const contactInfo = [
    { label: 'Phone Number', name: 'phone' },
    { label: 'Email Address', name: 'email' },
  ];

  const passwordInfo = [
    { label: 'Password', name: 'password' },
    { label: 'Confirm Password', name: 'confirmPassword' },
  ];

  return (
    <>
      <div className='h-screen bg-white flex items-center justify-center'>
        {step === 1 ? (
          <>
            <div className='bg-white h-auto w-full max-w-xs lg:max-w-sm xl:max-w-md shadow-md py-4 sm:py-6 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 rounded-2xl'>

              <div className='flex justify-end items-center '>
                <i className="ri-close-line text-[#333333] text-2xl sm:text-3xl cursor-pointer" onClick={() => router.back()}></i>
              </div>

              <div className='flex justify-center items-center mt-6 sm:mt-8'>
                <h1 className='text-[#333333] text-sm sm:text-base font-bold'>Account Type</h1>
              </div>

              <div className='mt-6 sm:mt-8'>
                <div className='flex flex-col space-y-6 sm:space-y-8'>

                  <div className={`flex justify-between items-center h-16 sm:h-20 p-4 sm:p-6 border ${formData.accountType === 'hirer' ? 'border-[#43A047]' : 'border-[#787878]'} rounded-2xl cursor-pointer`} onClick={() => setFormData({ ...formData, accountType: 'hirer' })}>
                    <div className='flex flex-col space-y-2'>
                      <h1 className='text-[#333333] font-medium text-xs sm:text-sm'>Hirer</h1>
                      <p className='text-[#333333] font-regular text-xs'>You&apos;re looking to rent equipment</p>
                    </div>
                    <div className='flex justify-end items-center'>
                      <i className={formData.accountType === 'hirer' ? "ri-checkbox-circle-fill text-[#43A047]" : "ri-checkbox-blank-circle-line"}></i>
                    </div>
                  </div>

                  <div className={`flex justify-between items-center h-16 sm:h-20 p-4 sm:p-6 border ${formData.accountType === 'owner' ? 'border-[#43A047]' : 'border-[#787878]'} rounded-2xl cursor-pointer`} onClick={() => setFormData({ ...formData, accountType: 'owner' })}>
                    <div className='flex flex-col space-y-2'>
                      <h1 className='text-[#333333] font-medium text-xs sm:text-sm'>Owner</h1>
                      <p className='text-[#333333] font-regular text-xs'>You&apos;re looking to list equipment</p>
                    </div>
                    <div className='flex justify-end items-center'>
                      <i className={formData.accountType === 'owner' ? "ri-checkbox-circle-fill text-[#43A047]" : "ri-checkbox-blank-circle-line"}></i>
                    </div>
                  </div>

                </div>
              </div>

              <div className='flex flex-col items-center mt-8 sm:mt-12 space-y-6 sm:space-y-8'>
                <button
                  onClick={() => setStep(2)}
                  className='w-full bg-[#43A047] text-[#FFFFFF] h-10 sm:h-12 rounded-full font-medium cursor-pointer'
                >
                  Continue
                </button>

                <p className='text-gray-600'>
                  Have an account?{' '}
                  <a href='#' className='text-[#43A047] hover:text-[#2E7D32] border-b border-[#43A047]font-medium'>
                    Sign In
                  </a>
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className='bg-white min-h-[60vh] w-full max-w-xl lg:max-w-3xl xl:max-w-4xl shadow-md py-6 sm:py-8 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 rounded-2xl grid grid-cols-1 lg:grid-cols-2'>
              <div className='flex flex-col mt-4 sm:mt-6 lg:mt-12 space-y-4 sm:space-y-6 lg:space-y-12'>
                {tabs.map((tab) => (
                  <div
                    key={tab.id}
                    className='flex cursor-pointer items-center'
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <h1 className={`text-sm sm:text-base font-regular ${activeTab === tab.id ? 'text-[#43A047]' : 'text-[#333333]'}`}>
                      {tab.label}
                    </h1>
                  </div>
                ))}
              </div>

              <div className='flex flex-col justify-start'>
                <div className='flex justify-center items-center'>
                  <h1 className='text-[#333333] font-medium text-base sm:text-lg'>
                    {tabs.find(tab => tab.id === activeTab)?.label}
                  </h1>
                </div>

                <div className='mt-4 sm:mt-6 space-y-6 sm:space-y-8'>
                  {activeTab === 'personalInfo' && (
                    <>
                      {personalInfo.map((info) => (
                        <div key={info.name}>
                          <label htmlFor={info.name} className='mb-2 block text-xs sm:text-sm font-regular text-[#333333]'>
                            {info.label}
                          </label>
                          <input
                            type='text'
                            value={formData[info.name as keyof typeof formData]}
                            onChange={(e) => setFormData({ ...formData, [info.name]: e.target.value })}
                            id={info.name}
                            name={info.name}
                            className='w-full h-10 sm:h-12 px-4 sm:px-6 border border-[#787878] text-xs sm:text-sm text-[#333333] rounded-full transition-all focus:outline-none'
                          />
                        </div>
                      ))}
                      <div className='flex justify-center items-center bg-[#E4E4E4] h-10 sm:h-12 rounded-full cursor-pointer' onClick={handleNextTab}>
                        <h1 className='text-xs sm:text-sm text-[#333333] font-medium'>Continue</h1>
                      </div>
                    </>
                  )}

                  {activeTab === 'address' && (
                    <>
                      {addressInfo.map((info) => (
                        <div key={info.name}>
                          <label htmlFor={info.name} className='mb-2 block text-xs sm:text-sm font-regular text-[#333333]'>
                            {info.label}
                          </label>
                          <input
                            type='text'
                            value={formData[info.name as keyof typeof formData]}
                            onChange={(e) => setFormData({ ...formData, [info.name]: e.target.value })}
                            id={info.name}
                            name={info.name}
                            className='w-full h-10 sm:h-12 px-4 sm:px-6 border border-[#787878] text-xs sm:text-sm text-[#333333] rounded-full transition-all focus:outline-none'
                          />
                        </div>
                      ))}
                      <div className='flex justify-center items-center bg-[#E4E4E4] h-10 sm:h-12 rounded-full cursor-pointer' onClick={handleNextTab}>
                        <h1 className='text-xs sm:text-sm text-[#333333] font-medium'>Continue</h1>
                      </div>
                    </>
                  )}

                  {activeTab === 'contact' && (
                    <>
                      {contactInfo.map((info) => (
                        <div key={info.name}>
                          <label htmlFor={info.name} className='mb-2 block text-xs sm:text-sm font-regular text-[#333333]'>
                            {info.label}
                          </label>
                          <input
                            type='text'
                            value={formData[info.name as keyof typeof formData]}
                            onChange={(e) => setFormData({ ...formData, [info.name]: e.target.value })}
                            id={info.name}
                            name={info.name}
                            className='w-full h-10 sm:h-12 px-4 sm:px-6 border border-[#787878] text-xs sm:text-sm text-[#333333] rounded-full transition-all focus:outline-none'
                          />
                        </div>
                      ))}
                      <div className='flex justify-center items-center bg-[#E4E4E4] h-10 sm:h-12 rounded-full cursor-pointer' onClick={handleNextTab}>
                        <h1 className='text-xs sm:text-sm text-[#333333] font-medium'>Continue</h1>
                      </div>
                    </>
                  )}

                  {activeTab === 'confirmNumber' && (
                    <>
                      <div className='mt-2 sm:mt-3 flex justify-center items-center'>
                        <p className='text-[#333333] text-xs font-regular'>Enter the code sent to +233 *******45</p>
                      </div>

                      <div className='mt-4 sm:mt-6 flex justify-center space-x-2 sm:space-x-3 lg:space-x-5 xl:space-x-7'>
                        {otp.map((digit, index) => (
                          <input
                            key={index}
                            type='text'
                            value={digit}
                            onChange={(e) => handleOtpChange(index, e.target.value)}
                            className='w-8 h-8 sm:w-10 sm:h-10 text-center border border-[#787878] text-xs sm:text-sm text-[#333333] rounded-lg focus:outline-none focus:border-[#43A047]'
                            maxLength={1}
                          />
                        ))}
                      </div>

                      <div className='mt-4 sm:mt-6 flex flex-col justify-between items-center space-y-1 sm:space-y-2'>
                        <h1 className='text-[#333333] text-xs font-regular'>Didn&apos;t receive OTP?</h1>
                        <p className='text-[#43A047] text-xs font-medium'>Resend Code</p>
                      </div>

                      <div className='flex justify-center items-center bg-[#E4E4E4] h-10 sm:h-12 rounded-full cursor-pointer' onClick={handleNextTab}>
                        <h1 className='text-xs sm:text-sm text-[#333333] font-medium'>Continue</h1>
                      </div>
                    </>
                  )}

                  {activeTab === 'password' && (
                    <>
                      {passwordInfo.map((info) => (
                        <div key={info.name}>
                          <label htmlFor={info.name} className='mb-2 block text-xs sm:text-sm font-regular text-[#333333]'>
                            {info.label}
                          </label>
                          <input
                            type={info.name === 'password' || info.name === 'confirmPassword' ? 'password' : 'text'}
                            value={formData[info.name as keyof typeof formData]}
                            onChange={(e) => setFormData({ ...formData, [info.name]: e.target.value })}
                            id={info.name}
                            name={info.name}
                            className='w-full h-10 sm:h-12 px-4 sm:px-6 border border-[#787878] text-xs sm:text-sm text-[#333333] rounded-full transition-all focus:outline-none'
                          />
                        </div>
                      ))}

                      <div className='mt-2 sm:mt-3'>
                        <p className='text-[#787878] text-xs font-regular'>Must be at least 8 characters</p>
                      </div>
                      <div className='flex justify-center items-center bg-[#E4E4E4] h-10 sm:h-12 rounded-full'>
                        <h1 className='text-xs sm:text-sm text-[#333333] font-medium'>Continue</h1>
                      </div>
                    </>
                  )}

                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Page
