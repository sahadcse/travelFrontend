"use client";

import React, { useState } from "react";
import PublicNav from "@/components/PublicNav";
import Footer from "@/components/Footer";
import { AppProvider } from "@/context/AppContext";

const FAQ_ITEMS = [
  {
    q: "How do I make a booking?",
    a: "Browse our listings, select your preferred property, choose your dates and number of guests, and click 'Book Now'. You'll be guided through a simple checkout process to confirm your reservation.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept bKash, Nagad, credit/debit cards (Visa, Mastercard), and bank transfers. All payments are processed through secure, encrypted channels.",
  },
  {
    q: "Can I cancel or modify my booking?",
    a: "Yes, cancellation and modification policies vary by property. Check the specific property's cancellation policy on its details page. Most properties allow free cancellation up to 24–48 hours before check-in.",
  },
  {
    q: "Is my personal data safe?",
    a: "Absolutely. We use industry-standard SSL encryption and never share your personal data with third parties without your consent. Read our Privacy Policy for more details.",
  },
  {
    q: "How do I contact customer support?",
    a: "You can reach us via email at support@nexusstays.com, call our hotline at +880 9671-971853, or use the Contact form on our website. Our team is available 24/7.",
  },
  {
    q: "Do you offer group or corporate booking discounts?",
    a: "Yes! For group bookings (5+ rooms) or corporate travel, reach out to corporate@nexusstays.com and our team will create a customized package for you.",
  },
  {
    q: "How do I apply a promo code?",
    a: "During checkout, you'll see a 'Promo Code' field. Enter your code and the discount will be applied automatically to your total. Promo codes are case-sensitive and subject to terms.",
  },
];

function FaqItem({ q, a }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden transition-all duration-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="text-base font-semibold text-gray-900 pr-4">{q}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 text-blue-500 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
          {a}
        </div>
      </div>
    </div>
  );
}

export default function FaqPage() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-white">
        <PublicNav />

        {/* Hero */}
        <div className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-32 pb-20 px-4">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/20 rounded-full blur-[120px]"></div>
          </div>
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Frequently Asked Questions</h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Everything you need to know about NexusStays</p>
          </div>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto px-4 py-16">
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, idx) => (
              <FaqItem key={idx} q={item.q} a={item.a} />
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </AppProvider>
  );
}
