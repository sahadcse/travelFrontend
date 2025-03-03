import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PlaceCard = ({ place }) => {
  return (
    <Link href={place.link} legacyBehavior>
      <a className="block h-full">
        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
          {/* Image container with zoom effect - using group */}
          <div className="relative h-48 w-full overflow-hidden flex-shrink-0 group">
            {/* Single image with group-hover transform effect */}
            <Image
              src={place.imageUrl}
              alt={place.name}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-700 ease-in-out group-hover:scale-110"
            />

            {/* Dark overlay that appears on hover */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

            {/* Price tag */}
            <div className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium z-10">
              {place.price.split(" ")[0]}
            </div>

            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/70 to-transparent"></div>
          </div>

          <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-lg font-bold text-gray-800 line-clamp-1 mb-2">
              {place.name}
            </h3>
            <div className="mb-3">
              <div className="flex items-center text-blue-700 font-semibold">
                <span className="text-sm">Starting from: </span>
                <span className="ml-1">{place.price}</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm line-clamp-2 flex-grow min-h-[2.5rem]">
              {place.description}
            </p>
            <div className="mt-3 pt-2 border-t border-gray-100">
              <button className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center">
                View Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
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
              </button>
            </div>
          </div>
        </div>
      </a>
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
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 w-full">
        <Section
          title="Popular Hotels"
          subtitle="Discover top-rated hotels with exceptional amenities and services"
          places={hotels}
          swiperOptions={swiperOptions}
          showDivider={resorts.length > 0}
        />
        <Section
          title="Popular Resorts"
          subtitle="Explore luxurious resorts for a perfect getaway experience"
          places={resorts}
          swiperOptions={swiperOptions}
          showDivider={apartments.length > 0}
        />
        <Section
          title="Popular Apartments"
          subtitle="Find comfortable apartments for a home-like stay experience"
          places={apartments}
          swiperOptions={swiperOptions}
          showDivider={sharedRooms.length > 0}
        />
        <Section
          title="Popular Shared Rooms"
          subtitle="Affordable shared accommodations for budget travelers"
          places={sharedRooms}
          swiperOptions={swiperOptions}
          showDivider={conventionHalls.length > 0}
        />
        <Section
          title="Popular Convention Halls"
          subtitle="Perfect venues for your events and celebrations"
          places={conventionHalls}
          swiperOptions={swiperOptions}
          showDivider={false}
        />
      </div>
    </section>
  );
};

const Section = ({
  title,
  subtitle,
  places,
  swiperOptions,
  showDivider = false,
}) => {
  if (!places || places.length === 0) {
    return null;
  }

  return (
    <>
      <div className="mb-8 last:mb-0 w-full">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>
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

          <div className="custom-swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md hover:bg-blue-50 cursor-pointer hidden md:block">
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

          <div className="custom-swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md hover:bg-blue-50 cursor-pointer hidden md:block">
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

      {showDivider && (
        <div className="my-8 px-4">
          <hr className="border-gray-200" />
        </div>
      )}
    </>
  );
};

export default PopularPlaces;
