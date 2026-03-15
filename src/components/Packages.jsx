"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const TOUR_PACKAGES = [
  {
    id: 1,
    title: "Dhaka - Sajek - Dhaka Tour Package: Discover the Land of Clouds",
    price: "11,800",
    image:
      "https://otithee.sgp1.cdn.digitaloceanspaces.com/public/thumbnails/1735497377_677196a13bbd9.webp",
    duration: "3 Days, 2 Nights",
    rating: 4.8,
  },
  {
    id: 2,
    title:
      "Dhaka - Sylhet - Dhaka Tour Package: Experience the Heart of Sylhet",
    price: "11,630",
    image:
      "https://otithee.sgp1.cdn.digitaloceanspaces.com/public/thumbnails/1735497512_67719728b336d.webp",
    duration: "4 Days, 3 Nights",
    rating: 4.7,
  },
  {
    id: 3,
    title: "Dhaka - Cox's Bazar - Dhaka Tour Package: Beach Paradise",
    price: "15,000",
    image: "",
    duration: "5 Days, 4 Nights",
    rating: 4.9,
  },
  {
    id: 4,
    title: "Dhaka - Bandarban - Dhaka Tour Package: Hills and Adventures",
    price: "13,500",
    image: "",
    duration: "4 Days, 3 Nights",
    rating: 4.6,
  },
  {
    id: 5,
    title: "Dhaka - Rangamati - Dhaka Tour Package: Lake and Culture",
    price: "12,200",
    image: "",
    duration: "3 Days, 2 Nights",
    rating: 4.7,
  },
];

import { ImageIcon, MapPin } from "lucide-react";

const PackageCard = ({ id, title, price, image, duration, rating, isActive, onActivate }) => {
  const [isImageError, setIsImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!image) {
      setIsImageError(true);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setIsImageError(false);

    const checkImage = new window.Image();
    checkImage.src = image;
    checkImage.onload = () => setIsLoading(false);
    checkImage.onerror = () => {
      setIsImageError(true);
      setIsLoading(false);
    };
  }, [image]);

  return (
    <div 
      onClick={onActivate}
      onMouseEnter={onActivate}
      className={`relative cursor-pointer overflow-hidden rounded-2xl md:rounded-[2rem] transition-all duration-700 ease-in-out ${isActive ? 'flex-[3] lg:flex-[4]' : 'flex-1'} min-h-[80px] md:min-h-0 bg-slate-900 border border-gray-800 shadow-md`}
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full">
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-800 animate-pulse">
            <ImageIcon className="w-8 h-8 md:w-12 md:h-12 text-slate-600 opacity-50" />
          </div>
        ) : isImageError || !image ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-800">
            <ImageIcon className="w-8 h-8 md:w-12 md:h-12 text-slate-600 mb-2" />
            <span className="text-slate-500 text-[10px] md:text-xs font-semibold tracking-wide uppercase hidden md:inline-block">No Image</span>
          </div>
        ) : (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-cover transition-all duration-700 ${isActive ? 'scale-105 opacity-100' : 'scale-100 opacity-60'}`}
            onError={() => setIsImageError(true)}
          />
        )}
      </div>

      {/* Gradient Overlay for Text Readability */}
      <div className={`absolute inset-0 bg-gradient-to-t z-10 transition-all duration-500 delay-100 ${isActive ? 'from-black/95 via-black/40 to-transparent' : 'from-black/90 via-black/50 to-black/30'}`}></div>

      {/* Top badges / Info */}
      <div className={`absolute top-3 left-3 lg:top-5 lg:left-5 z-20 flex-col gap-2 transition-all duration-500 delay-100 hidden md:flex ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <span className="rounded-full px-2.5 py-0.5 text-[10px] md:text-xs font-bold tracking-wide bg-emerald-500 text-white shadow-sm w-fit">
          Affiliate
        </span>
        <div className="bg-black/40 backdrop-blur-md px-2 py-1 rounded-full flex items-center shadow-sm w-fit border border-white/10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
          <span className="text-[10px] md:text-xs font-bold text-white ml-1">{rating}</span>
        </div>
      </div>

      {/* Collapsed State Wrapper */}
      <div className={`absolute inset-0 z-20 flex flex-row md:flex-col items-center justify-start md:justify-center px-4 md:px-0 gap-3 md:gap-6 transition-opacity duration-500 pointer-events-none ${isActive ? 'opacity-0' : 'opacity-100'}`}>
        <MapPin className="text-white/90 w-5 h-5 md:w-7 md:h-7 drop-shadow-md flex-shrink-0" />
        <h3 className="text-white/90 font-black uppercase tracking-widest text-xs sm:text-sm md:text-base drop-shadow-lg line-clamp-1 md:line-clamp-3 max-h-[80%] flex-shrink-1 whitespace-normal text-left md:text-center">
          {title}
        </h3>
      </div>

      {/* Content Area at Bottom (Expanded State UI) */}
      <div className={`absolute bottom-0 left-0 right-0 p-3 md:p-5 lg:p-6 z-20 flex flex-col justify-end h-full transition-all duration-500 ease-out ${isActive ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
        <div className="flex flex-col w-full">
          {/* Expanded State title */}
          <h3 className="text-white font-bold text-lg md:text-xl lg:text-2xl drop-shadow-lg line-clamp-2 md:line-clamp-3 transition-all duration-500 max-w-full whitespace-normal">
            {title}
          </h3>

          {/* Details & Action Button */}
          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-3 mt-2 md:mt-3 pt-3 border-t border-white/20">
            <div className="flex flex-col">
              <div className="flex items-center text-xs lg:text-sm font-semibold text-blue-300 mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 lg:h-4 lg:w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {duration}
              </div>
              <div className="flex items-baseline">
                <span className="text-xl md:text-2xl lg:text-3xl font-black text-white tracking-tight">{price} ৳</span>
                <span className="ml-1.5 text-[10px] lg:text-xs font-medium text-gray-400">*inc. VAT</span>
              </div>
            </div>

            <div className="flex mt-2 xl:mt-0 pb-1 xl:pb-0">
              <Link href={'/packages/' + id} className="px-5 py-2 lg:px-6 lg:py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-transform active:scale-95 shadow-lg shadow-blue-500/30 text-xs lg:text-sm flex items-center justify-center whitespace-nowrap">
                Book Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 lg:h-4 lg:w-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Package() {
  const [activeId, setActiveId] = useState(1); // Set the default active card ID

  return (
    <section className="bg-gradient-to-b from-white to-blue-50/30 py-10 md:py-16 px-4 md:px-6 overflow-hidden">
      <div className="container mx-auto relative">
        <div className="flex flex-col md:flex-row justify-between items-end mb-6 md:mb-8">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-2 md:mb-3 tracking-tight">
              Featured Packages
            </h2>
            <p className="text-gray-600 text-sm md:text-base">Explore our handpicked premium tours and experiences tailored just for you.</p>
          </div>
          <a
            href="#"
            className="mt-4 md:mt-0 text-blue-600 hover:text-blue-800 font-bold transition-colors text-sm md:text-base inline-flex items-center group"
          >
            Explore All Packages
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Interactive Expanding Cards Container */}
        <div className="flex flex-col md:flex-row h-[600px] sm:h-[650px] md:h-[400px] lg:h-[450px] w-full gap-2 md:gap-3 overflow-hidden rounded-2xl md:rounded-3xl p-1 lg:p-1.5 bg-gray-100/50 border border-gray-200/60 backdrop-blur-sm shadow-inner">
          {TOUR_PACKAGES.map((pkg) => (
            <PackageCard 
              key={pkg.id} 
              {...pkg} 
              isActive={activeId === pkg.id}
              onActivate={() => setActiveId(pkg.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
