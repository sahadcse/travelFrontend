import React from "react";
import Link from "next/link";
import PublicNav from "@/components/PublicNav";
import Footer from "@/components/Footer";
import { AppProvider } from "@/context/AppContext";

export const metadata = {
  title: "About Us — NexusStays",
  description: "Learn about NexusStays — redefining travel and comfort across Bangladesh.",
};

export default function AboutPage() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-white">
        <PublicNav />

        {/* Hero */}
        <div className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-32 pb-20 px-4">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px]"></div>
          </div>
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">About NexusStays</h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Redefining Travel & Comfort since 2023</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-slate prose-lg max-w-none">
            <h2>Our Story</h2>
            <p>
              NexusStays was born out of a simple idea — that every traveler deserves a seamless booking experience without compromising on quality or affordability. Founded in 2023, we set out to bridge the gap between luxury accommodations and budget-friendly stays across Bangladesh.
            </p>

            <h2>Our Mission</h2>
            <p>
              We believe travel should be transformative, not transactional. Our platform connects you with handpicked hotels, resorts, apartments, and unique stays that reflect the character of each destination. Every listing is vetted for quality, and every booking is backed by our customer-first promise.
            </p>

            <h2>What Sets Us Apart</h2>
            <ul>
              <li><strong>Curated Selection</strong> — Every property is personally reviewed and approved by our team.</li>
              <li><strong>Best Price Guarantee</strong> — We ensure you're getting the most competitive rates available.</li>
              <li><strong>24/7 Support</strong> — Our dedicated support team is always just a call or message away.</li>
              <li><strong>Local Expertise</strong> — Deep knowledge of Bangladesh's hidden gems and popular destinations.</li>
              <li><strong>Secure Payments</strong> — Industry-standard encryption and multiple payment options.</li>
            </ul>

            <h2>Our Vision</h2>
            <p>
              By 2030, we aim to be South Asia's most trusted hospitality platform — expanding our reach while maintaining the personal touch that makes NexusStays special. We're building more than a booking engine; we're building a community of travelers and hosts.
            </p>

            <div className="mt-12 p-8 bg-blue-50 rounded-2xl border border-blue-100 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Have questions?</h3>
              <p className="text-gray-600 mb-4">We'd love to hear from you.</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors no-underline"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </AppProvider>
  );
}
