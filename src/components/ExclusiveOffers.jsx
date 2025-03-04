import React, { useContext } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AppContext from "../context/AppContext";

// Default offer items that will be used if none are provided
const defaultOfferItems = [
  {
    id: 1,
    imageUrl: "/img/offer/1.jpg",
    imageAlt: "City Offer",
  },
  {
    id: 2,
    imageUrl: "/img/offer/2.jpg",
    imageAlt: "Digital Offer",
  },
  {
    id: 3,
    imageUrl: "/img/offer/3.jpeg",
    imageAlt: "Hotel Offer",
  },
];

const ExclusiveOffers = ({
  title = "Exclusive Offers",
  offers = defaultOfferItems,
  className = "",
}) => {
  const { state } = useContext(AppContext);

  return (
    <section
      className={`py-6 md:py-8 lg:py-12 bg-gradient-to-b from-gray-50 to-white ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative">
        <div className="flex items-center mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 relative">
            {title}
            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-blue-600 -mb-1 sm:-mb-2"></span>
          </h2>
        </div>
        <div className="relative group">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={12}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              480: { slidesPerView: 1, spaceBetween: 12 },
              640: { slidesPerView: 2, spaceBetween: 16 },
              768: { slidesPerView: 2, spaceBetween: 16 },
              1024: { slidesPerView: 2, spaceBetween: 20 },
            }}
            className="!pb-12 sm:!pb-16 !px-1"
          >
            {offers.map((offer) => (
              <SwiperSlide key={offer.id}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                  <div className="relative h-32 xs:h-36 sm:h-40 md:h-48 lg:h-52">
                    <Image
                      src={offer.imageUrl}
                      alt={offer.imageAlt || "Offer Image"}
                      fill
                      sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      priority
                    />
                  </div>
                  <div className="p-3 sm:p-4">
                    <h3 className="text-sm sm:text-base font-medium text-gray-800 mb-1 sm:mb-2">
                      {offer.imageAlt}
                    </h3>
                    <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2 xs:gap-0">
                      <p className="text-xs sm:text-sm text-gray-600">
                        Limited time offer
                      </p>
                      <button className="text-xs sm:text-sm bg-blue-600 text-white py-1 px-3 sm:py-2 sm:px-4 rounded-md hover:bg-blue-700 transition-colors w-full xs:w-auto">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Navigation Buttons - Responsive positioning */}
            <button className="swiper-button-prev !hidden md:!flex !w-8 !h-8 lg:!w-10 lg:!h-10 !bg-white !shadow-lg !rounded-full !text-blue-600 after:!text-base lg:after:!text-lg hover:!bg-blue-50 !left-0 -translate-x-1/2 !opacity-70 hover:!opacity-100 transition-all duration-300"></button>
            <button className="swiper-button-next !hidden md:!flex !w-8 !h-8 lg:!w-10 lg:!h-10 !bg-white !shadow-lg !rounded-full !text-blue-600 after:!text-base lg:after:!text-lg hover:!bg-blue-50 !right-0 translate-x-1/2 !opacity-70 hover:!opacity-100 transition-all duration-300"></button>

            {/* Custom Pagination */}
            <div className="swiper-pagination !bottom-0 !-mb-2"></div>
          </Swiper>
        </div>
      </div>

      {/* Add custom styles */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          background: #cbd5e1;
          opacity: 0.5;
        }
        @media (min-width: 640px) {
          .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
          }
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #2563eb;
        }
        .swiper-button-prev:after,
        .swiper-button-next:after {
          font-size: 1rem;
          font-weight: bold;
        }
        @media (min-width: 1024px) {
          .swiper-button-prev:after,
          .swiper-button-next:after {
            font-size: 1.2rem;
          }
        }
        .swiper {
          position: static !important;
        }
        @media (max-width: 768px) {
          .swiper-button-prev,
          .swiper-button-next {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ExclusiveOffers;
