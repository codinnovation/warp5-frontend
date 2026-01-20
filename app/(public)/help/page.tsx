'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Footer from '@/components/public/Footer';
import PageHeader from '@/components/public/PageHeader';
import BannerImage from '../../../public/images/help.png';

function Page() {
  const [openFaqs, setOpenFaqs] = useState<Set<number>>(new Set([1])); // Open first one by default

  const toggleFaq = (id: number) => {
    setOpenFaqs((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        // Optional: Close others if you want only one open at a time
        // newSet.clear(); 
        newSet.add(id);
      }
      return newSet;
    });
  };

  const faqs = [
    {
      id: 1,
      category: 'General',
      question: 'What types of equipment do you rent?',
      answer: 'We offer a wide range of heavy machinery including excavators, bulldozers, backhoe loaders, cranes, and dump trucks suitable for both mining and construction projects.'
    },
    {
      id: 2,
      category: 'Booking',
      question: 'How do I make a reservation?',
      answer: 'You can easily book online by browsing our inventory, selecting your dates, and clicking "Book Now". Alternatively, you can call our sales team for assisted booking.'
    },
    {
      id: 3,
      category: 'Pricing',
      question: 'Are there any hidden fees?',
      answer: 'Transparent pricing is our policy. The quote you receive includes rental, standard insurance, and maintenance. Delivery specifications and custom fuel arrangements will be clearly itemized.'
    },
    {
      id: 4,
      category: 'Logistics',
      question: 'Do you provide operators?',
      answer: 'Yes, we can provide certified and experienced operators for all our equipment at an additional daily rate to ensure capability and safety on your site.'
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-white font-sans text-gray-900">
        <PageHeader />

        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
          <Image
            src={BannerImage}
            alt="Help Center Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

          <div className="relative z-10 text-center px-4 animate-in fade-in slide-in-from-bottom-6 duration-700">
            <h1 className="text-lg md:text-2xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
              How can we <span className="text-green-400">help?</span>
            </h1>
            <p className="text-gray-200 text-sm md:text-base font-light max-w-2xl mx-auto">
              Find answers to common questions or get in touch with our support team.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-green-600 font-bold tracking-wider uppercase text-xs md:text-sm mb-2 block">Support</span>
              <h2 className="text-lg md:text-2xl lg:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => {
                const isOpen = openFaqs.has(faq.id);
                return (
                  <div key={faq.id} className={`bg-white rounded-2xl transition-all duration-300 overflow-hidden ${isOpen ? 'shadow-lg border-green-500/30' : 'shadow-sm border border-gray-100 hover:border-gray-200'}`}>
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                        <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md w-fit uppercase tracking-wide">{faq.category}</span>
                        <span className={`font-semibold text-lg transition-colors ${isOpen ? 'text-gray-900' : 'text-gray-700'}`}>
                          {faq.question}
                        </span>
                      </div>
                      <span className={`flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 flex-shrink-0 ${isOpen ? 'bg-green-600 border-green-600 text-white rotate-180' : 'bg-transparent border-gray-200 text-gray-400'}`}>
                        <i className="ri-arrow-down-s-line"></i>
                      </span>
                    </button>
                    <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="p-6 pt-0 text-gray-500 leading-relaxed border-t border-gray-50 mt-2">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              {/* Contact Info Card */}
              <div className="bg-[#0f172a] rounded-[2rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
                  <p className="text-gray-400 mb-12 text-lg">
                    We're here to help you find the right equipment for your job. Reach out to us anytime.
                  </p>

                  <div className="space-y-8">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-green-400 text-xl flex-shrink-0">
                        <i className="ri-mail-send-line"></i>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                        <p className="text-gray-400 mb-1">Our friendly team is here to help.</p>
                        <a href="mailto:support@warp5.com" className="text-white hover:text-green-400 transition-colors font-medium">support@warp5.com</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-green-400 text-xl flex-shrink-0">
                        <i className="ri-phone-line"></i>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                        <p className="text-gray-400 mb-1">Mon-Fri from 8am to 5pm.</p>
                        <a href="tel:+233200000000" className="text-white hover:text-green-400 transition-colors font-medium">+233 20 000 0000</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-green-400 text-xl flex-shrink-0">
                        <i className="ri-map-pin-line"></i>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                        <p className="text-gray-400 mb-1">Come say hello at our HQ.</p>
                        <span className="text-white font-medium">123 Main Street, Accra, Ghana</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:py-8">
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Send us a Message</h2>
                  <p className="text-gray-500">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                <form className="space-y-6" onSubmit={(e) => {
                  e.preventDefault();
                  // Simulate submission logic
                  const form = e.target as HTMLFormElement;
                  const button = form.querySelector('button[type="submit"]');
                  if (button) {
                    const originalText = button.textContent;
                    button.textContent = 'Sending...';
                    (button as HTMLButtonElement).disabled = true;
                    setTimeout(() => {
                      button.textContent = 'Message Sent!';
                      (button as HTMLButtonElement).disabled = false;
                      setTimeout(() => {
                        if (originalText) button.textContent = originalText;
                        form.reset();
                      }, 2000);
                    }, 1500);
                  }
                }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">First Name</label>
                      <input required type="text" placeholder="John" className="w-full h-12 px-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Last Name</label>
                      <input required type="text" placeholder="Doe" className="w-full h-12 px-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none transition-all" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Email Address</label>
                    <input required type="email" placeholder="john@example.com" className="w-full h-12 px-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none transition-all" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Subject</label>
                    <select className="w-full h-12 px-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none transition-all text-gray-500">
                      <option>General Inquiry</option>
                      <option>Booking Assistance</option>
                      <option>Technical Support</option>
                      <option>Partnership</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Message</label>
                    <textarea required placeholder="How can we help you?" className="w-full h-32 p-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none transition-all resize-none"></textarea>
                  </div>

                  <button type="submit" className="w-full h-14 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-green-600/20 active:scale-95 text-lg disabled:opacity-70 disabled:cursor-not-allowed">
                    Send Message
                  </button>
                </form>
              </div>

            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

export default Page;
