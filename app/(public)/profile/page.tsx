'use client';

import { useState } from 'react';
import PageHeader from '@/components/public/PageHeader';
import Footer from '@/components/public/Footer';

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
      <div className='min-h-screen bg-white'>
        <PageHeader />

        <div className='mt-20 md:mt-24 sm:mt-16'>
          <div className='flex justify-center items-center space-x-3 md:space-x-4 sm:space-x-6 lg:space-x-8 xl:space-x-10'>

            <div className='flex justify-center items-center bg-[#D9D9D9] w-16 h-16 md:w-18 md:h-18 sm:w-20 sm:h-20 xl:w-24 xl:h-24 rounded-full'>
              <i className="ri-user-6-line text-[#333333] text-2xl md:text-3xl sm:text-3xl xl:text-4xl"></i>
            </div>

            <button className='flex justify-center items-center bg-[#000000] hover:bg-[#333333] active:scale-95 transition-all w-auto h-10 md:h-12 sm:h-12 xl:h-14 px-3 md:px-4 sm:px-4 xl:px-6 rounded-full cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-black'>
              <h1 className='text-[#FFFFFF] text-xs md:text-sm sm:text-sm xl:text-base font-medium'>Update New Profile</h1>
            </button>

            <button className='flex justify-center items-center border border-[#333333] hover:bg-[#333333] hover:text-white active:scale-95 transition-all w-auto h-10 md:h-12 sm:h-12 xl:h-14 px-4 md:px-6 sm:px-6 xl:px-8 rounded-full cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-[#333333]'>
              <h1 className='text-xs md:text-sm sm:text-sm xl:text-base font-medium'>Delete</h1>
            </button>
          </div>
        </div>

        <div className='mt-12 md:mt-16 sm:mt-16 pb-12 md:pb-16'>
          <div className='w-[90vw] md:max-w-4xl lg:max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 sm:gap-3 lg:gap-9'>
            <div className='flex flex-col space-y-3 md:space-y-4 sm:space-y-6 lg:space-y-6 xl:space-y-8'>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className='flex cursor-pointer items-center text-left hover:opacity-80 transition-all focus:outline-none focus:ring-2 focus:ring-[#43A047] focus:ring-opacity-50 rounded-md py-1'
                  onClick={() => setActiveTab(tab.id)}
                >
                  <h1 className={`text-sm md:text-base sm:text-base font-regular ${activeTab === tab.id ? 'text-[#43A047] font-medium' : 'text-[#333333]'}`}>
                    {tab.label}
                  </h1>
                </button>
              ))}
            </div>

            <div className='flex flex-col'>
              <div className='flex justify-start items-center'>
                <h1 className='text-[#333333] font-medium text-base md:text-lg sm:text-lg'>
                  {tabs.find(tab => tab.id === activeTab)?.label}
                </h1>
              </div>

              <div className='mt-4 md:mt-6 sm:mt-6 space-y-4 md:space-y-6 sm:space-y-6 lg:space-y-8'>
                {activeTab === 'personalInfo' && (
                  <>
                    {personalInfo.map((info) => (
                      <div key={info.name}>
                        <label htmlFor={info.name} className='mb-2 block text-xs md:text-sm sm:text-sm font-regular text-[#333333]'>
                          {info.label}
                        </label>
                        <input
                          type='text'
                          value={info.value}
                          id={info.name}
                          name={info.name}
                          className='w-full h-10 md:h-12 sm:h-12 px-4 md:px-6 sm:px-6 border border-[#787878] focus:border-[#43A047] focus:outline-none focus:ring-2 focus:ring-[#43A047] focus:ring-opacity-50 text-xs md:text-sm sm:text-sm text-[#333333] rounded-full transition-all'
                        />
                      </div>
                    ))}
                    <button className='flex justify-center items-center bg-[#E4E4E4] hover:bg-[#D4D4D4] active:scale-95 transition-all h-10 md:h-12 sm:h-12 rounded-full cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 w-full'>
                      <h1 className='text-xs md:text-sm sm:text-sm text-[#333333] font-medium'>Save Changes</h1>
                    </button>
                  </>
                )}

                {activeTab === 'notification' && (
                  <>
                    <div>
                      <h1 className='text-xs md:text-sm sm:text-sm text-[#333333] font-medium'>Choose how you&apos;d like to receive updates from Warp5</h1>

                      <div className='mt-4 md:mt-6 sm:mt-6 space-y-4 md:space-y-6 sm:space-y-6 lg:space-y-8'>
                        {notificationSettings.map((setting) => (
                          <div key={setting.name} className='flex justify-between gap-4'>
                            <div className='flex flex-col space-y-1 md:space-y-2 sm:space-y-3 flex-1'>
                              <h1 className='text-[#333333] text-xs md:text-sm sm:text-sm font-medium'>{setting.label}</h1>
                              <p className='text-[#333333] text-xs md:text-sm sm:text-sm font-regular'>{setting.description}</p>
                            </div>

                            <button className='flex cursor-pointer hover:opacity-80 transition-all focus:outline-none' onClick={() => handleNotificationChange(setting.name, !setting.checked)}>
                              <i className={`ri-toggle-${setting.checked ? 'fill' : 'line'} ${setting.checked ? 'text-[#43A047]' : 'text-[#787878]'} text-2xl md:text-3xl sm:text-3xl lg:text-4xl`}></i>
                            </button>
                          </div>
                        ))}
                      </div>

                      <button className='mt-6 md:mt-8 sm:mt-12 flex justify-center items-center bg-[#E4E4E4] hover:bg-[#D4D4D4] active:scale-95 transition-all h-10 md:h-12 sm:h-12 rounded-full cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 w-full'>
                        <h1 className='text-xs md:text-sm sm:text-sm text-[#333333] font-medium'>Save Preferences</h1>
                      </button>
                    </div>
                  </>
                )}

                {activeTab === 'privacy' && (
                  <>
                    <div>
                      {privacySettings.map((setting, index) => (
                        <div key={index} className={`flex flex-col space-y-2 md:space-y-3 sm:space-y-3 lg:space-y-4 ${index > 0 ? 'border-t border-[#E4E4E4] mt-6 md:mt-8 sm:mt-8 lg:mt-10 pt-6 md:pt-8 sm:pt-8 lg:pt-10' : ''}`}>
                          <h1 className='text-[#333333] text-xs md:text-sm sm:text-sm font-medium'>{setting.title}</h1>
                          <p className='text-[#333333] text-xs md:text-sm sm:text-sm font-regular'>{setting.description}</p>
                          <button className={`flex justify-center items-center w-32 md:w-36 sm:w-40 lg:w-44 xl:w-48 h-8 md:h-10 sm:h-10 lg:h-12 text-xs md:text-sm sm:text-xs lg:text-sm font-medium rounded-full hover:opacity-90 active:scale-95 transition-all focus:ring-2 focus:ring-offset-2`} style={{ backgroundColor: setting.buttonColor, color: setting.textColor }}>{setting.buttonText}</button>
                        </div>
                      ))}
                    </div>
                  </>
                )}


              </div>
            </div>

          </div>
        </div>

          <Footer />
      </div>
    </>
  )
}

export default Page
