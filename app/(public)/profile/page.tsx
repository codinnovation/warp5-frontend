'use client';

import { useState, useEffect } from 'react';
import PageHeader from '@/components/public/PageHeader';
import Footer from '@/components/public/Footer';
import { useUser } from '@/context/userContext';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

function Page() {
  const { user, mutate } = useUser();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('personalInfo');
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    dateOfBirth: '',
  });

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        phoneNumber: user.phoneNumber || '',
        addressLine1: user.addressLine1 || '',
        addressLine2: user.addressLine2 || '',
        city: user.city || '',
        dateOfBirth: user.dateOfBirth ? new Date(user.dateOfBirth).toISOString().split('T')[0] : '',
      });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const [notifications, setNotifications] = useState({
    emailNotif: true,
    smsNotif: false,
    pushNotif: true,
    reservationReminders: true,
    promoOffers: false,
  });

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
    { title: 'Data Deletion', description: 'Request to delete your account and all associated data permanently.', buttonText: 'Delete Account', buttonColor: '#FF0000', textColor: '#FFFFFF', isDestructive: true },
  ];

  const tabs = [
    { id: 'personalInfo', label: 'Personal Information', icon: 'ri-user-line' },
    { id: 'address', label: 'Address', icon: 'ri-map-pin-line' },
    { id: 'contact', label: 'Contact Details', icon: 'ri-contacts-line' },
    { id: 'notification', label: 'Notifications', icon: 'ri-notification-3-line' },
    { id: 'privacy', label: 'Privacy & Security', icon: 'ri-shield-keyhole-line' },
  ];

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-800">No user found. Please login to view your profile.</h1>
      </div>
    );
  }

  const handleLogout = async () => {
    if (!user) return;

    try {
      setIsLoggingOut(true);

      const apiRes = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!apiRes.ok) {
        toast.error('Failed to logout');
        throw new Error('Failed to logout');
      }

      toast.success('Logged out successfully');
      router.refresh();
      mutate(null);
      router.push('/');
    } catch {
      toast.error('Failed to logout');
    } finally {
      setIsLoggingOut(false);
    }
  }

  const handleUpdateProfile = async () => {
    if (!user) return;

    try {
      setIsUpdating(true);

      const apiRes = await fetch('/api/auth/updateprofile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user.id,
          ...formData
        })
      });

      const data = await apiRes.json();

      if (!apiRes.ok) {
        throw new Error(data.message || 'Failed to update profile');
      }

      toast.success('Profile updated successfully');
      setIsEditing(false);
      mutate();
      router.refresh();

    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Failed to update profile';
      toast.error(message);
    } finally {
      setIsUpdating(false);
    }
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50'>
      <PageHeader />

      <main className='pt-28 pb-16 px-4 md:px-8 max-w-7xl mx-auto'>
        {/* Profile Header Card */}
        <div className='bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl rounded-3xl p-8 mb-8 flex flex-col md:flex-row items-center justify-between gap-6'>
          <div className='flex flex-col md:flex-row items-center gap-6'>
            <div className='w-24 h-24 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center shadow-inner'>
              <span className='text-3xl font-bold text-green-600'>
                {user.firstName?.[0]}{user.lastName?.[0]}
              </span>
            </div>
            <div className='text-center md:text-left'>
              <h1 className='text-2xl font-bold text-gray-800'>{user.firstName} {user.lastName}</h1>
              <p className='text-gray-500 font-medium'>Member since {new Date(user.createdAt).getFullYear()}</p>
              <p className='text-gray-400 text-sm mt-1'>{user.email}</p>
            </div>
          </div>

          <div className='flex gap-4'>
            <button onClick={handleLogout} className='px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full font-medium transition-all text-sm'>
              {isLoggingOut ? 'Logging out...' : 'Sign Out'}
            </button>
            {isEditing ? (
              <div className="flex gap-2">
                <button
                  onClick={() => setIsEditing(false)}
                  className='px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full font-medium transition-all text-sm'
                  disabled={isUpdating}
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdateProfile}
                  className='px-6 py-2.5 bg-gradient-to-r from-green-600 to-emerald-600 hover:shadow-lg hover:shadow-green-500/30 text-white rounded-full font-medium transition-all text-sm'
                  disabled={isUpdating}
                >
                  {isUpdating ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className='px-6 py-2.5 bg-gradient-to-r from-green-600 to-emerald-600 hover:shadow-lg hover:shadow-green-500/30 text-white rounded-full font-medium transition-all text-sm'
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
          {/* Sidebar Navigation */}
          <div className='lg:col-span-4'>
            <div className='bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl rounded-3xl p-6 h-fit sticky top-32'>
              <nav className='space-y-2'>
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-left ${activeTab === tab.id
                      ? 'bg-green-50 text-green-700 font-semibold shadow-sm ring-1 ring-green-100'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                  >
                    <i className={`${tab.icon} text-lg ${activeTab === tab.id ? 'text-green-600' : 'text-gray-400'}`}></i>
                    {tab.label}
                    {activeTab === tab.id && (
                      <i className="ri-arrow-right-s-line ml-auto text-green-600"></i>
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className='lg:col-span-8'>
            <div className='bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl rounded-3xl p-8 min-h-[500px]'>
              <div className='mb-8 pb-4 border-b border-gray-100'>
                <h2 className='text-2xl font-bold text-gray-800'>
                  {tabs.find(t => t.id === activeTab)?.label}
                </h2>
                <p className='text-gray-500 text-sm mt-1'>Manage your personal information and settings</p>
              </div>

              {activeTab === 'personalInfo' && (
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div className='space-y-2'>
                    <label className='text-sm font-medium text-gray-700 ml-1'>First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className={`w-full h-12 px-5 bg-gray-50 border rounded-2xl flex items-center text-gray-800 text-sm transition-all outline-none ${isEditing ? 'border-green-500 ring-2 ring-green-500/10 bg-white' : 'border-transparent'}`}
                    />
                  </div>
                  <div className='space-y-2'>
                    <label className='text-sm font-medium text-gray-700 ml-1'>Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className={`w-full h-12 px-5 bg-gray-50 border rounded-2xl flex items-center text-gray-800 text-sm transition-all outline-none ${isEditing ? 'border-green-500 ring-2 ring-green-500/10 bg-white' : 'border-transparent'}`}
                    />
                  </div>
                  <div className='space-y-2'>
                    <label className='text-sm font-medium text-gray-700 ml-1'>Date of Birth</label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className={`w-full h-12 px-5 bg-gray-50 border rounded-2xl flex items-center text-gray-800 text-sm transition-all outline-none ${isEditing ? 'border-green-500 ring-2 ring-green-500/10 bg-white' : 'border-transparent'}`}
                    />
                  </div>
                  <div className='space-y-2'>
                    <label className='text-sm font-medium text-gray-700 ml-1'>User ID</label>
                    <div className='w-full h-12 px-5 bg-gray-50 border border-transparent rounded-2xl flex items-center text-gray-500 text-sm font-mono'>
                      #{user.id}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'address' && (
                <div className='space-y-6'>
                  <div className='space-y-2'>
                    <label className='text-sm font-medium text-gray-700 ml-1'>Address Line 1</label>
                    <input
                      type="text"
                      name="addressLine1"
                      value={formData.addressLine1}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className={`w-full h-12 px-5 bg-gray-50 border rounded-2xl flex items-center text-gray-800 text-sm transition-all outline-none ${isEditing ? 'border-green-500 ring-2 ring-green-500/10 bg-white' : 'border-transparent'}`}
                    />
                  </div>
                  <div className='space-y-2'>
                    <label className='text-sm font-medium text-gray-700 ml-1'>Address Line 2</label>
                    <input
                      type="text"
                      name="addressLine2"
                      value={formData.addressLine2}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className={`w-full h-12 px-5 bg-gray-50 border rounded-2xl flex items-center text-gray-800 text-sm transition-all outline-none ${isEditing ? 'border-green-500 ring-2 ring-green-500/10 bg-white' : 'border-transparent'}`}
                    />
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='space-y-2'>
                      <label className='text-sm font-medium text-gray-700 ml-1'>City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className={`w-full h-12 px-5 bg-gray-50 border rounded-2xl flex items-center text-gray-800 text-sm transition-all outline-none ${isEditing ? 'border-green-500 ring-2 ring-green-500/10 bg-white' : 'border-transparent'}`}
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'contact' && (
                <div className='space-y-6'>
                  <div className='space-y-2'>
                    <label className='text-sm font-medium text-gray-700 ml-1'>Email Address</label>
                    <div className={`w-full h-12 px-5 bg-gray-50 border border-transparent rounded-2xl flex items-center text-gray-800 text-sm gap-3 ${isEditing ? 'opacity-70 cursor-not-allowed' : ''}`}>
                      <i className="ri-mail-line text-gray-400"></i>
                      {user.email}
                      <span className='ml-auto text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium'>Verified</span>
                    </div>
                    {isEditing && <p className="text-xs text-gray-500 ml-1">Email cannot be changed directly.</p>}
                  </div>
                  <div className='space-y-2'>
                    <label className='text-sm font-medium text-gray-700 ml-1'>Phone Number</label>
                    <div className='relative'>
                      <i className="ri-phone-line text-gray-400 absolute left-5 top-1/2 -translate-y-1/2 z-10"></i>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className={`w-full h-12 pl-12 pr-5 bg-gray-50 border rounded-2xl flex items-center text-gray-800 text-sm transition-all outline-none ${isEditing ? 'border-green-500 ring-2 ring-green-500/10 bg-white' : 'border-transparent'}`}
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'notification' && (
                <div className='space-y-6'>
                  {notificationSettings.map((setting) => (
                    <div key={setting.name} className='flex items-center justify-between p-4 rounded-2xl hover:bg-gray-50 transition-colors border border-gray-100'>
                      <div className='flex-1 pr-8'>
                        <h3 className='font-medium text-gray-800 mb-1'>{setting.label}</h3>
                        <p className='text-sm text-gray-500'>{setting.description}</p>
                      </div>
                      <button
                        onClick={() => handleNotificationChange(setting.name, !setting.checked)}
                        className={`w-12 h-7 rounded-full transition-all duration-200 relative focus:outline-none ${setting.checked ? 'bg-green-500' : 'bg-gray-200'}`}
                      >
                        <div className={`w-5 h-5 bg-white rounded-full shadow-md absolute top-1 transition-all duration-200 ${setting.checked ? 'left-6' : 'left-1'}`}></div>
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'privacy' && (
                <div className='space-y-6'>
                  {privacySettings.map((setting, index) => (
                    <div key={index} className='p-6 rounded-2xl bg-gray-50/50 border border-gray-100'>
                      <h3 className='font-semibold text-gray-800 mb-2'>{setting.title}</h3>
                      <p className='text-sm text-gray-600 mb-6'>{setting.description}</p>
                      <button className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${setting.isDestructive
                        ? 'bg-red-50 text-red-600 hover:bg-red-100'
                        : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300'
                        }`}>
                        {setting.buttonText}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Page;
