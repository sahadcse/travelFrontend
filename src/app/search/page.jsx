"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import PublicNav from "@/components/PublicNav";
import Footer from "@/components/Footer";
import { AppProvider } from "@/context/AppContext";

// ─── Mock Search Results ──────────────────────────────────────────────────────
const MOCK_RESULTS = [
  {
    id: 1,
    name: "Grand Azure Hotel",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    price: "8,500",
    rating: 4.8,
    type: "Hotel",
  },
  {
    id: 2,
    name: "Serenity Resort & Spa",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80",
    price: "12,000",
    rating: 4.9,
    type: "Resort",
  },
  {
    id: 3,
    name: "Lakeside Apartment Suite",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
    price: "5,200",
    rating: 4.5,
    type: "Apartment",
  },
  {
    id: 4,
    name: "Mountain View Lodge",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80",
    price: "9,800",
    rating: 4.7,
    type: "Hotel",
  },
  {
    id: 5,
    name: "Palm Beach Villa",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
    price: "15,500",
    rating: 4.6,
    type: "Resort",
  },
  {
    id: 6,
    name: "City Center Studio",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80",
    price: "3,800",
    rating: 4.3,
    type: "Apartment",
  },
];

// ─── Result Card ──────────────────────────────────────────────────────────────
function ResultCard({ item }) {
  return (
    <Link href={`/packages/${item.id}`} className="block group">
      <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
        <div className="relative h-52 w-full overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-blue-600 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
            {item.type}
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-bold text-gray-900 truncate mb-2">{item.name}</h3>
          <div className="flex items-center gap-1.5 mb-3">
            <svg className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <span className="text-sm font-semibold text-gray-700">{item.rating}</span>
          </div>
          <div className="flex items-baseline justify-between pt-3 border-t border-gray-100">
            <div>
              <span className="text-xl font-black text-gray-900">{item.price} ৳</span>
              <span className="text-xs text-gray-400 ml-1">/ night</span>
            </div>
            <span className="text-sm font-bold text-blue-600 group-hover:text-blue-700 flex items-center transition-colors">
              View Details
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

// ─── Search Content (uses useSearchParams) ────────────────────────────────────
function SearchContent() {
  const searchParams = useSearchParams();
  const location = searchParams.get("location") || "All Locations";

  return (
    <>
      {/* Hero Header */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-32 pb-16 px-4">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-[100px]"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-blue-300 hover:text-white transition-colors mb-6 group">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight">
            Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{location}</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Discover the best hotels, resorts, and stays in {location}. Your perfect getaway awaits.
          </p>
          <div className="mt-6 flex items-center gap-3 text-sm text-slate-400">
            <span className="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10 font-medium">
              {MOCK_RESULTS.length} properties found
            </span>
          </div>
        </div>
      </div>

      {/* Results Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_RESULTS.map((item) => (
            <ResultCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

// ─── Page Component ───────────────────────────────────────────────────────────
export default function SearchPage() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-gray-50">
        <PublicNav />
        <Suspense fallback={
          <div className="pt-32 pb-16 px-4 text-center">
            <div className="animate-pulse text-gray-400">Loading results...</div>
          </div>
        }>
          <SearchContent />
        </Suspense>
        <Footer />
      </div>
    </AppProvider>
  );
}
