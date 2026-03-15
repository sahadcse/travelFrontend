import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PlaceCard = ({ place }) => {
  return (
    <Link href={place.link || "#"} className="block h-full">
      <div className="group bg-white rounded-2xl md:rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out h-full flex flex-col">
          {/* Image container with zoom effect */}
          <div className="relative h-52 w-full overflow-hidden flex-shrink-0">
            {/* Single image with group-hover transform effect */}
            <Image
              src={place.imageUrl}
              alt={place.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />

            {/* Dark overlay that appears on hover */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

            {place.priceHall ? (
              <div className="absolute top-4 right-4 bg-blue-50/90 backdrop-blur-md text-blue-600 px-3 py-1 rounded-full text-sm font-semibold shadow-sm z-10 transition-transform group-hover:scale-105">
                {place.priceHall.morning.price.split(" ")[0]} /{" "}
                {place.priceHall.evening.price.split(" ")[0]}
              </div>
            ) : (
              <div className="absolute top-4 right-4 bg-blue-50/90 backdrop-blur-md text-blue-600 px-3 py-1 rounded-full text-sm font-semibold shadow-sm z-10 transition-transform group-hover:scale-105">
                {place.price.split(" ")[0]}
              </div>
            )}

            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          <div className="p-5 flex flex-col flex-grow">
            <h3 className="text-lg font-bold text-gray-900 truncate mb-2">
              {place.name}
            </h3>
            <div className="mb-3">
              <div className="flex items-center font-semibold">
                {place.priceHall ? (
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                      {place.priceHall.morning.shift}:{" "}
                      <span className="text-blue-600 text-sm">{place.priceHall.morning.price.split(" ")[0]}</span>
                    </span>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      {place.priceHall.evening.shift}:{" "}
                      <span className="text-blue-600 text-sm">{place.priceHall.evening.price.split(" ")[0]}</span>
                    </span>
                  </div>
                ) : (
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Starting from: </span>
                    <span className="text-lg font-black text-gray-900">
                      {place.price.split(" ")[0]}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <p className="text-gray-500 text-sm line-clamp-2 flex-grow min-h-[2.5rem]">
              {place.description}
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100/80">
              <span className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center transition-colors">
                View Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
    </Link>
  );
};

const PopularPlaces = ({
  hotels = [],
  resorts = [],
  apartments = [],
  sharedRooms = [],
  conventionHalls = [],
}) => {
  const tabs = [
    { id: "hotels", label: "Hotels", data: hotels, subtitle: "Discover top-rated hotels with exceptional amenities and services" },
    { id: "resorts", label: "Resorts", data: resorts, subtitle: "Explore luxurious resorts for a perfect getaway experience" },
    { id: "apartments", label: "Apartments", data: apartments, subtitle: "Find comfortable apartments for a home-like stay experience" },
    { id: "sharedRooms", label: "Shared Rooms", data: sharedRooms, subtitle: "Affordable shared accommodations for budget travelers" },
    { id: "conventionHalls", label: "Convention Halls", data: conventionHalls, subtitle: "Perfect venues for your events and celebrations" },
  ].filter(tab => tab.data && tab.data.length > 0);

  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "hotels");
  const activeTabData = tabs.find((t) => t.id === activeTab) || tabs[0];
  
  
  const handleTabClick = (e, tabId) => {
    setActiveTab(tabId);
    
    e.target.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const swiperOptions = {
    modules: [Navigation, Pagination, Autoplay],
    spaceBetween: 20,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: ".custom-swiper-button-next",
      prevEl: ".custom-swiper-button-prev",
    },
    pagination: {
      clickable: true,
      dynamicBullets: true,
      el: ".custom-swiper-pagination",
    },
    breakpoints: {
      540: { slidesPerView: 2 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
      1280: { slidesPerView: 4 },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50/50 to-white overflow-hidden">
      <div className="container mx-auto px-4 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 tracking-tight">Explore Our Accommodations</h2>
          
          <div className="flex w-full overflow-hidden justify-start md:justify-center px-2 md:px-0">
            
            <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide items-center justify-start p-1.5 md:p-2 bg-gray-100/80 backdrop-blur-md rounded-full shadow-inner border border-gray-200/50 max-w-full">
              
              <style jsx>{`
                div::-webkit-scrollbar { display: none; }
                div { -ms-overflow-style: none; scrollbar-width: none; }
              `}</style>

              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={(e) => handleTabClick(e, tab.id)}
                  className={`relative whitespace-nowrap px-5 md:px-6 py-2 md:py-2.5 rounded-full text-sm font-bold transition-all duration-300 ease-in-out shrink-0 mr-1 last:mr-0 ${
                    activeTab === tab.id
                      ? "bg-white text-blue-600 shadow-sm ring-1 ring-gray-900/5"
                      : "text-gray-500 hover:text-gray-800 hover:bg-gray-200/50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Content Rendering */}
        <div className="w-full relative min-h-[400px]">
          {activeTabData && (
            <div key={activeTab} className="animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both">
              <Section
                subtitle={activeTabData.subtitle}
                places={activeTabData.data}
                swiperOptions={swiperOptions}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const Section = ({
  subtitle,
  places,
  swiperOptions,
}) => {
  if (!places || places.length === 0) {
    return null;
  }

  return (
    <div className="w-full">
      {subtitle && (
        <div className="text-center mb-8">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">{subtitle}</p>
        </div>
      )}
      <div className="relative px-4 sm:px-6">
        <Swiper {...swiperOptions} className="pb-20">
          {places.map((place) => (
            <SwiperSlide key={place.id} className="h-auto">
              <div className="h-full pb-2">
                <PlaceCard place={place} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom pagination container positioned lower */}
        <div className="custom-swiper-pagination mt-5 flex justify-center"></div>

        <div className="custom-swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur p-3 rounded-full shadow-lg hover:bg-blue-50 cursor-pointer hidden md:flex items-center justify-center border border-gray-100 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>

        <div className="custom-swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur p-3 rounded-full shadow-lg hover:bg-blue-50 cursor-pointer hidden md:flex items-center justify-center border border-gray-100 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PopularPlaces;
