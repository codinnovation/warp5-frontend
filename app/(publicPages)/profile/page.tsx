'use client';

import React, { useState } from 'react';
import PublicPageHeader from '@/components/layout/PublicPageHeader';
import FooterSection from '@/components/layout/FooterSection';

function Page() {
  const [activeTab, setActiveTab] = useState('personalInfo');

  const [notifications, setNotifications] = useState({
    emailNotif: true,
    smsNotif: false,
    pushNotif: true,
    reservationReminders: true,
    promoOffers: false,
  });

  const personalInfo = [
    { label: 'First Name', name: 'firstName', value: 'Isaac' },
    { label: 'Last Name', name: 'lastName', value: 'Newton' },
    { label: 'Date of Birth', name: 'dob', value: '23/06/1990' },
    { label: 'Gender', name: 'gender', value: 'Male' },
  ]

  const handleNotificationChange = (name: string, checked: boolean) => {
    setNotifications(prev => ({ ...prev, [name]: checked }));
  };

  const notificationSettings = [
    { label: 'Email Alerts', name: 'emailNotif', checked: notifications.emailNotif, description: 'Get account updates, and important notice via email' },
    { label: 'SMS notifications', name: 'smsNotif', checked: notifications.smsNotif, description: 'Get updates via SMS.' },
    { label: 'Web alerts', name: 'pushNotif', checked: notifications.pushNotif, description: 'See alerts directly in your on site when you\'re logged in.' },
    { label: 'Reservation Reminders', name: 'reservationReminders', checked: notifications.reservationReminders, description: 'Receive reminders for your upcoming reservations.' },
    { label: 'Promotional Offers', name: 'promoOffers', checked: notifications.promoOffers, description: 'Get notified about special offers and promotions.' },
  ];

  const privacySettings = [
    { title: 'Privacy Policy', description: 'We respect your privacy. Your personal data is handled securely and used only to support your experience on Warp5. For full details, please review our Privacy Policy.', buttonText: 'View Policy', buttonColor: '#E4E4E4', textColor: '#333333' },
    { title: 'Privacy Policy', description: 'We respect your privacy. Your personal data is handled securely and used only to support your experience on Warp5. For full details, please review our Privacy Policy.', buttonText: 'View Policy', buttonColor: '#FF0000', textColor: '#FFFFFF' },
  ];

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
        <PublicPageHeader />

        <div className='mt-20'>
          <div className='flex justify-center items-center space-x-8 lg:space-x-12 xl:space-x-16'>

            <div className='flex justify-center items-center bg-[#D9D9D9] w-24 h-24 xl:w-28 xl:h-28 rounded-full'>
              <i className="ri-user-6-line text-[#333333] text-4xl xl:text-5xl"></i>
            </div>

            <div className='flex justify-center items-center bg-[#000000] w-auto h-14 xl:h-16 px-6 xl:px-8 rounded-full'>
              <h1 className='text-[#FFFFFF] text-base xl:text-lg font-medium'>Update New Profile</h1>
            </div>

            <div className='flex justify-center items-center border border-[#333333] w-auto h-14 xl:h-16 px-8 xl:px-10 rounded-full'>
              <h1 className='text-[#333333] text-base xl:text-lg font-medium'>Delete</h1>
            </div>
          </div>
        </div>

        <div className='mt-20'>
          <div className='w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 xl:gap-12'>
            <div className='flex flex-col space-y-8 lg:space-y-12 xl:space-y-16'>
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

              <div className='mt-8 space-y-8 lg:space-y-12 xl:space-y-16'>
                {activeTab === 'personalInfo' && (
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
                )}

                {activeTab === 'notification' && (
                  <>
                    <div>
                      <h1 className='text-base text-[#333333] font-medium'>Choose how you&apos;d like to receive updates from Warp5</h1>

                      <div className='mt-8 space-y-8 lg:space-y-12 xl:space-y-16'>
                        {notificationSettings.map((setting) => (
                          <div key={setting.name} className='flex justify-between'>
                            <div className='flex flex-col space-y-3'>
                              <h1 className='text-[#333333] text-base font-medium'>{setting.label}</h1>
                              <p className='text-[#333333] text-base font-regular'>{setting.description}</p>
                            </div>

                            <div className='flex cursor-pointer' onClick={() => handleNotificationChange(setting.name, !setting.checked)}>
                              <i className={`ri-toggle-${setting.checked ? 'fill' : 'line'} ${setting.checked ? 'text-[#43A047]' : 'text-[#787878]'} text-4xl lg:text-5xl xl:text-6xl`}></i>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className='mt-16 flex justify-center items-center bg-[#E4E4E4] h-16 rounded-full'>
                        <h1 className='text-base text-[#333333] font-medium'>Save Preferences</h1>
                      </div>
                    </div>
                  </>
                )}

                {activeTab === 'privacy' && (
                  <>
                    <div>
                      {privacySettings.map((setting, index) => (
                        <div key={index} className={`flex flex-col space-y-4 lg:space-y-6 xl:space-y-8 ${index > 0 ? 'border-t border-[#E4E4E4] mt-12 lg:mt-16 xl:mt-20 pt-12 lg:pt-16 xl:pt-20' : ''}`}>
                          <h1 className='text-[#333333] text-base font-medium'>{setting.title}</h1>
                          <p className='text-[#333333] text-base font-regular'>{setting.description}</p>
                          <button className={`flex justify-center items-center w-48 lg:w-56 xl:w-64 h-12 lg:h-14 xl:h-16 text-sm lg:text-base font-medium rounded-full`} style={{ backgroundColor: setting.buttonColor, color: setting.textColor }}>{setting.buttonText}</button>
                        </div>
                      ))}
                    </div>
                  </>
                )}


              </div>
            </div>

          </div>
        </div>


        <section className='mt-36 bg-[#43A047] py-16'>
          <FooterSection />
        </section>

      </div>
    </>
  )
}

export default Page
