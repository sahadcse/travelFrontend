"use client";
import React from "react";
import Image from "next/image";
import PublicNav from "@/components/PublicNav";
import Footer from "@/components/Footer";
import { MapPin, Info, CheckCircle } from "lucide-react";

export default function AccommodationDetail({ data }) {
  if (!data) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <PublicNav />
      <main className="max-w-7xl mx-auto pt-32 pb-20 px-4">
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
          {/* Header Image */}
          <div className="relative h-[400px] w-full">
            <Image 
              src={data.imageUrl} 
              alt={data.name} 
              fill 
              className="object-cover" 
            />
          </div>

          <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2">
              <h1 className="text-4xl font-black text-gray-900 mb-4">{data.name}</h1>
              <div className="flex items-center text-gray-500 mb-6">
                <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                {data.description}
              </div>
              
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <Info className="w-5 h-5 mr-2 text-blue-600" />
                About this Property
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Experience world-class service at {data.name}. Located in the heart of the city, 
                offering premium comfort and modern amenities for all guests.
              </p>
            </div>

            {/* Right Sidebar: Pricing Widget */}
            <div className="lg:col-span-1">
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 sticky top-32">
                <h3 className="font-bold text-gray-900 mb-4">Pricing & Availability</h3>
                
                {data.priceHall ? (
                  /* Convention Hall Pricing */
                  <div className="space-y-4">
                    <div className="flex justify-between items-center bg-white p-3 rounded-xl shadow-sm">
                      <span className="text-sm font-semibold text-gray-600">{data.priceHall.morning.shift}</span>
                      <span className="text-lg font-bold text-blue-600">{data.priceHall.morning.price}</span>
                    </div>
                    <div className="flex justify-between items-center bg-white p-3 rounded-xl shadow-sm">
                      <span className="text-sm font-semibold text-gray-600">{data.priceHall.evening.shift}</span>
                      <span className="text-lg font-bold text-blue-600">{data.priceHall.evening.price}</span>
                    </div>
                  </div>
                ) : (
                  /* Standard Pricing */
                  <div className="mb-4">
                    <span className="text-3xl font-black text-gray-900">{data.price}</span>
                    <span className="text-gray-500 text-sm ml-2">/ night</span>
                  </div>
                )}

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl mt-6 transition-all shadow-lg shadow-blue-200">
                  Check Availability
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}