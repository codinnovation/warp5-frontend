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
    <aside className='flex h-full min-h-screen w-full flex-col bg-white px-8'>
      <nav className='mt-24 flex flex-col space-y-8'>
        {links.map(({ href, icon, label }) => (
          <button
            type='button'
            key={href}
            className={`flex space-x-4 items-center h-14 ${pathname === href ? 'bg-[#43A047] text-white' : 'bg-white text-[#1C1D21]'} px-12 rounded-lg cursor-pointer`}
            onClick={() => router.push(href)}
          >
            <i className={`${icon} text-xl`}></i>
            <span className='font-regular text-lg'>{label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default SidebarMenu;
