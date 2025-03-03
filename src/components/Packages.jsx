"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
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

const PackageCard = ({ title, price, image, duration, rating }) => {
  const [isImageError, setIsImageError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkImage = async () => {
      try {
        const response = await fetch(image);
      } catch (error) {
      } finally {
      }
    };

    checkImage();
  }, [image]);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      <div className="relative">
        {image === "" || null ? (
          <div className="w-full h-48 bg-gray-400 flex items-center justify-center">
            <span className="text-red-600 text-lg">Image not available</span>
          </div>
        ) : (
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover"
            onError={() => setIsImageError(true)}
          />
        )}
        <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-medium px-2 py-1 rounded-full">
          Affiliate
        </span>
        <div className="absolute top-3 right-3 bg-white bg-opacity-90 px-2 py-1 rounded-full flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
          <span className="text-xs font-medium ml-1">{rating}</span>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center mb-2 text-sm text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {duration}
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 flex-grow">
          {title}
        </h3>

        <div className="mt-auto">
          <div className="flex items-baseline mb-3">
            <span className="text-xl font-bold text-blue-600">{price} ৳</span>
            <span className="ml-1 text-xs text-gray-500">*inc. VAT & Tax</span>
          </div>

          <div className="flex space-x-2">
            <button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors text-sm">
              Book Now
            </button>
            <button className="px-3 py-2 border border-gray-300 hover:bg-gray-50 rounded-md transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Package() {
  return (
    <section className="bg-blue-100 py-12 md:py-16 px-4 md:px-6">
      <div className="container mx-auto relative">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Packages
          </h2>
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors text-base"
          >
            See More
          </a>
        </div>

        <div className="swiper-container-wrapper relative">
          <div className="swiper-button-prev !w-10 !h-10 rounded-full !text-blue-600 !left-0 -translate-y-1/2 !hidden md:!flex">
            <span className="sr-only">Previous</span>
          </div>
          <div className="md:w-[92%] m-auto">
            <Swiper
              modules={[Navigation, Pagination, EffectCoverflow]}
              spaceBetween={24}
              slidesPerView={2}
              centeredSlides={true}
              loop={true}
              effect="coverflow"
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 300,
                modifier: 1,
                slideShadows: true,
              }}
              breakpoints={{
                640: { slidesPerView: 1.2 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{
                clickable: true,
                el: ".swiper-pagination",
              }}
              className="!pb-14"
            >
              {TOUR_PACKAGES.map(({ id, ...pkg }) => (
                <SwiperSlide key={id} className="h-auto">
                  <div className="h-full">
                    <PackageCard {...pkg} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="swiper-button-next !w-10 !h-10 !text-blue-600 !right-0 -translate-y-1/2 !hidden md:!flex">
            <span className="sr-only">Next</span>
          </div>
          <div className="swiper-pagination !bottom-0"></div>
        </div>
      </div>
    </section>
  );
}
