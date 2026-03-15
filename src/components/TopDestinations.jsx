"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import destinationsData from "../data/destinations.js";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TopDestinations = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-3 text-slate-800">
            Top Destinations in 2025
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Discover stunning locations handpicked for unforgettable experiences
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            loop={true}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="!pb-14"
          >
            {destinationsData.map((destination, index) => (
              <SwiperSlide key={index}>
                <div className="group relative h-[320px] rounded-2xl md:rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out">
                  {/* Main image */}
                  <Image
                    alt={destination.alt}
                    src={destination.image}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    priority
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300"></div>

                  {/* Content at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transition-transform duration-500 ease-in-out transform translate-y-3 group-hover:translate-y-0">
                    <h4 className="text-xl font-black text-white mb-2 truncate drop-shadow-lg">
                      {destination.title}
                    </h4>
                    <div className="flex items-center text-white/95 text-sm mb-4 font-semibold drop-shadow-md">
                      <svg
                        className="w-4 h-4 mr-1.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <div className="flex items-center justify-between w-full">
                        <span>

                          {destination.location || "Explore now"}
                        </span>
                        <span><Link
                          href={'/search?location=' + encodeURIComponent(destination.title)}
                          className="bg-white/95 backdrop-blur-md text-blue-600 px-5 py-2.5 rounded-full text-sm font-bold shadow-lg transition-all duration-300 transform inline-flex items-center"
                        >
                          Discover
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-1.5 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </Link></span>
                      </div>
                    </div>



                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;

