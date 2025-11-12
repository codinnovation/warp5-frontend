'use client'

import React, { useState } from 'react'
import PageHeader from '../../../components/PageHeader'
import FooterSection from '@/components/FooterSection';

function Page() {
  const [activeTab, setActiveTab] = useState('personalInfo');

  const personalInfo = [
    { label: 'First Name', name: 'firstName', value: 'Isaac' },
    { label: 'Last Name', name: 'lastName', value: 'Newton' },
    { label: 'Date of Birth', name: 'dob', value: '23/06/1990' },
    { label: 'Gender', name: 'gender', value: 'Male' },
  ]

  const tabs = [
    { id: 'personalInfo', label: 'Personal Information' },
    { id: 'address', label: 'Address' },
    { id: 'contact', label: 'Contact Details' },
    { id: 'password', label: 'Password' },
    { id: 'terms', label: 'Terms & Conditions' },
    { id: 'notification', label: 'Notification' },
    { id: 'privacy', label: 'Privacy & Security' },
  ];

  return (
    <>
      <div className='h-screen bg-white'>
        <div className='mx-auto'>
          <PageHeader />

          <div className='mt-20'>
            <div className='flex justify-center items-center space-x-12'>

              <div className='flex justify-center items-center bg-[#D9D9D9] w-24 h-24 rounded-full'>
                <i className="ri-user-6-line text-[#333333] text-4xl"></i>
              </div>

              <div className='flex justify-center items-center bg-[#000000] w-auto h-14 px-6 rounded-full'>
                <h1 className='text-[#FFFFFF] text-base font-medium'>Update New Profile</h1>
              </div>

              <div className='flex justify-center items-center border border-[#333333] w-auto h-14 px-8 rounded-full'>
                <h1 className='text-[#333333] text-base font-medium'>Delete</h1>
              </div>
            </div>
          </div>

          <div className='mt-20'>
            <div className='w-[40vw] mx-auto grid grid-cols-2 gap-4'>
              <div className='flex flex-col space-y-16'>
                {tabs.map((tab) => (
                  <div
                    key={tab.id}
                    className='flex cursor-pointer items-center'
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <h1 className={`text-lg font-regular ${activeTab === tab.id ? 'text-[#43A047]' : 'text-[#333333]'}`}>
                      {tab.label}
                    </h1>
                  </div>
                ))}
              </div>

              <div className='flex flex-col'>
                <div className='flex justify-start items-center'>
                  <h1 className='text-[#333333] font-medium text-xl'>
                    {tabs.find(tab => tab.id === activeTab)?.label}
                  </h1>
                </div>

                <div className='mt-8 space-y-12'>
                  <>
                    {personalInfo.map((info) => (
                      <div key={info.name}>
                        <label htmlFor={info.name} className='mb-2 block text-base font-regular text-[#333333]'>
                          {info.label}
                        </label>
                        <input
                          type='text'
                          value={info.value}
                          id={info.name}
                          name={info.name}
                          className='w-full h-16 px-8 border border-[#787878] text-base text-[#333333] rounded-full transition-all focus:outline-none'
                        />
                      </div>
                    ))}
                    <div className='flex justify-center items-center bg-[#E4E4E4] h-16 rounded-full'>
                      <h1 className='text-base text-[#333333] font-medium'>Save Changes</h1>
                    </div>
                  </>


                </div>
              </div>

            </div>
          </div>

          <div className='mt-40 bg-[#43A047] py-16'>
            <FooterSection />
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
