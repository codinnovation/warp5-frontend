'use client';

import { usePathname, useRouter } from 'next/navigation';

const links = [
  { href: '/renter/dashboard', icon: 'ri-donut-chart-fill', label: 'Overview' },
  { href: '/renter/reservations', icon: 'ri-book-open-line', label: 'My Reservation' },
  { href: '/renter/payment', icon: 'ri-bank-card-line', label: 'Payment' },
  { href: '/renter/notification', icon: 'ri-notification-2-line', label: 'Notification' },
  { href: '/renter/profile', icon: 'ri-user-6-line', label: 'Manage Profile' },
];

const SidebarMenu: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <aside className='flex h-full min-h-screen w-full flex-col bg-white px-6 lg:px-8 xl:px-9'>
      <nav className='mt-16 lg:mt-20 xl:mt-22 flex flex-col space-y-6 lg:space-y-8 xl:space-y-9'>
        {links.map(({ href, icon, label }) => (
          <button
            type='button'
            key={href}
            className={`flex space-x-4 items-center h-12 lg:h-14 xl:h-15 ${pathname === href ? 'bg-[#43A047] text-white' : 'bg-white text-[#1C1D21]'} px-8 lg:px-10 xl:px-11 rounded-lg cursor-pointer`}
            onClick={() => router.push(href)}
          >
            <i className={`${icon} text-lg lg:text-xl xl:text-xl`}></i>
            <span className='font-regular text-base lg:text-lg xl:text-lg'>{label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default SidebarMenu;
