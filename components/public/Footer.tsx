'use client';

import Image from 'next/image';
import Link from 'next/link';
import WarpLogoWhite from '@/public/logo/warp-logo-white.svg';

function Footer() {
  return (
    <footer className='border-t border-gray-100 bg-[#0f172a] text-white pt-20 pb-10'>
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-16">

          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block relative w-32 h-10">
              <Image src={WarpLogoWhite} alt='Warp Logo' fill className='object-contain object-left' />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Premium heavy equipment rental for the construction and mining industries. Building the future of Ghana, together.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-green-600 flex items-center justify-center transition-colors text-gray-300 hover:text-white">
                <i className="ri-facebook-fill text-lg"></i>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-green-600 flex items-center justify-center transition-colors text-gray-300 hover:text-white">
                <i className="ri-twitter-x-line text-lg"></i>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-green-600 flex items-center justify-center transition-colors text-gray-300 hover:text-white">
                <i className="ri-linkedin-fill text-lg"></i>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-green-600 flex items-center justify-center transition-colors text-gray-300 hover:text-white">
                <i className="ri-instagram-line text-lg"></i>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Explore</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Home</Link></li>
              <li><Link href="/equipments" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Equipment Inventory</Link></li>
              <li><Link href="/signup" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Create Account</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Support</h3>
            <ul className="space-y-4">
              <li><Link href="/help" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Help Center & FAQs</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Warp5. All rights reserved.
          </p>
          <div className="flex gap-6">
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
