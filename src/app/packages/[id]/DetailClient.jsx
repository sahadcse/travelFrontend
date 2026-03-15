"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Star,
  Wifi,
  Utensils,
  Car,
  Tv,
  Wind,
  Coffee,
  Shield,
  Bath,
  Dumbbell,
  CalendarDays,
  Users,
  ChevronLeft,
  Map,
} from "lucide-react";
import PublicNav from "@/components/PublicNav";
import Footer from "@/components/Footer";

// ─── Icon Map ─────────────────────────────────────────────────────────────────
const ICON_MAP = {
  Wifi,
  Utensils,
  Car,
  Tv,
  Wind,
  Coffee,
  Shield,
  Bath,
  Dumbbell,
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function StarRating({ rating, reviewCount }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < fullStars
                ? "fill-amber-400 text-amber-400"
                : i === fullStars && hasHalf
                  ? "fill-amber-200 text-amber-400"
                  : "fill-gray-200 text-gray-300"
              }`}
          />
        ))}
      </div>
      <span className="text-sm font-semibold text-gray-800">{rating}</span>
      <span className="text-sm text-gray-500">({reviewCount} reviews)</span>
    </div>
  );
}

function AmenityCard({ label, icon }) {
  const Icon = ICON_MAP[icon] || Shield;
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50 hover:bg-blue-50 hover:border-blue-100 transition-colors group">
      <div className="w-9 h-9 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
        <Icon className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" />
      </div>
      <span className="text-sm font-medium text-gray-700">{label}</span>
    </div>
  );
}

// ─── DetailClient Component ───────────────────────────────────────────────────
export default function DetailClient({ pkg }) {
  const [guests, setGuests] = useState(1);

  const [heroImage, ...thumbImages] = pkg.images;

  return (

    <div className=" bg-white">

      <PublicNav />

      {/* ── Top Section ─────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto md:pt-32 pt-26 px-4 sm:px-6 lg:px-8">

        {/* Back Navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-600 transition-colors mb-4 group"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          All Packages
        </Link>

        {/* Title & Meta */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-gray-900 leading-tight">{pkg.title}</h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <StarRating rating={pkg.rating} reviewCount={pkg.reviewCount} />
            <span className="hidden sm:block text-gray-300">·</span>
            <div className="flex items-center gap-1.5 text-sm text-gray-600">
              <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0" />
              <span>{pkg.location}</span>
            </div>
            <span className="hidden sm:block text-gray-300">·</span>
            <div className="flex items-center gap-1.5 text-sm font-medium text-blue-600">
              <CalendarDays className="w-4 h-4" />
              {pkg.duration}
            </div>
          </div>
        </div>

        {/* ── Bento Grid Gallery ──────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 h-[40vh] md:h-[60vh] mt-4 rounded-2xl overflow-hidden">
          {/* Hero Image — 2 cols × 2 rows */}
          <div className="md:col-span-2 md:row-span-2 relative h-full w-full">
            <Image
              src={heroImage}
              alt={pkg.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Thumbnail Images — 1 col × 1 row each */}
          {thumbImages.slice(0, 4).map((src, idx) => (
            <div
              key={idx}
              className="relative hover:opacity-90 transition-opacity cursor-pointer"
            >
              <Image
                src={src}
                alt={`${pkg.title} view ${idx + 2}`}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover"
              />
              {/* "Show all photos" overlay on last thumbnail */}
              {idx === 3 && (
                <div className="absolute inset-0 bg-black/45 flex items-center justify-center">
                  <span className="text-white text-sm font-semibold bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                    Show all photos
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── Main Two-Column Layout ──────────────────────────────────────────── */}
      <div className="flex flex-col lg:flex-row gap-12 mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">

        {/* ── Left Column ─────────────────────────────────────────────────── */}
        <div className="lg:w-[65%] flex flex-col gap-8">

          <hr className="border-gray-100" />

          {/* About This Place */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">About this place</h2>
            <p className="text-gray-600 leading-relaxed">{pkg.description}</p>
          </section>

          <hr className="border-gray-100" />

          {/* Amenities */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">What this place offers</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {pkg.amenities.map((amenity, idx) => (
                <AmenityCard key={idx} label={amenity.label} icon={amenity.icon} />
              ))}
            </div>
          </section>

          <hr className="border-gray-100" />

          {/* Map Placeholder */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Where you&apos;ll be</h2>
            <div className="rounded-2xl bg-gradient-to-br from-gray-100 to-blue-50 border border-gray-200 flex flex-col items-center justify-center h-64 gap-3">
              <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center">
                <Map className="w-7 h-7 text-blue-500" />
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-gray-700">{pkg.location}</p>
                <p className="text-xs text-gray-400 mt-1">Interactive map coming soon</p>
              </div>
            </div>
          </section>
        </div>

        {/* ── Right Column — Sticky Booking Widget ────────────────────────── */}
        <div className="lg:w-[35%] relative">
          <div className="sticky top-32 z-10">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 flex flex-col gap-5">

              {/* Price */}
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-gray-900">৳{pkg.price}</span>
                <span className="text-sm text-gray-500">/ person</span>
              </div>

              <StarRating rating={pkg.rating} reviewCount={pkg.reviewCount} />

              {/* Date & Guest Inputs */}
              <div className="rounded-xl border border-gray-200 overflow-hidden divide-y divide-gray-200">
                <div className="grid grid-cols-2 divide-x divide-gray-200">
                  <div className="flex flex-col gap-0.5 px-4 py-3">
                    <label className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                      Check-in
                    </label>
                    <input
                      type="date"
                      className="text-sm text-gray-800 bg-transparent outline-none cursor-pointer w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-0.5 px-4 py-3">
                    <label className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                      Check-out
                    </label>
                    <input
                      type="date"
                      className="text-sm text-gray-800 bg-transparent outline-none cursor-pointer w-full"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between px-4 py-3">
                  <div className="flex flex-col gap-0.5">
                    <label className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                      Guests
                    </label>
                    <div className="flex items-center gap-2 mt-0.5">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-800">
                        {guests} guest{guests !== 1 ? "s" : ""}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setGuests((g) => Math.max(1, g - 1))}
                      className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-500 transition-colors text-lg font-light"
                      aria-label="Remove guest"
                    >
                      −
                    </button>
                    <span className="w-5 text-center text-sm font-semibold text-gray-800">
                      {guests}
                    </span>
                    <button
                      onClick={() => setGuests((g) => Math.min(12, g + 1))}
                      className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-500 transition-colors text-lg font-light"
                      aria-label="Add guest"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Primary CTA */}
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors w-full text-base">
                Book Now
              </button>

              <p className="text-center text-sm text-gray-400">
                You won&apos;t be charged yet
              </p>

              {/* Price Breakdown */}
              <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>
                    ৳{pkg.price} × {guests} person{guests !== 1 ? "s" : ""}
                  </span>
                  <span>
                    ৳{(parseInt(pkg.price.replace(/,/g, ""), 10) * guests).toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Service fee</span>
                  <span>৳500</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-gray-900 pt-2 border-t border-gray-100 mt-1">
                  <span>Total</span>
                  <span>
                    ৳{(parseInt(pkg.price.replace(/,/g, ""), 10) * guests + 500).toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
