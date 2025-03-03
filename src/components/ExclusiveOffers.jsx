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
      className={`py-8 md:py-12 bg-gradient-to-b from-gray-50 to-white ${className}`}
    >
      <div className="container mx-auto px-12 relative">
        {" "}
        {/* Added px-12 for navigation space */}
        <div className="flex items-center mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 relative">
            {title}
            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-blue-600 -mb-2"></span>
          </h2>
        </div>
        <div className="relative group">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={2}
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
              540: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
            className="!pb-16 !px-1" // Added padding to prevent shadow cutoff
          >
            {offers.map((offer) => (
              <SwiperSlide key={offer.id}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="relative h-40 sm:h-48">
                    <Image
                      src={offer.imageUrl}
                      alt={offer.imageAlt || "Offer Image"}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-105"
                      priority
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-medium text-gray-800 mb-2">
                      {offer.imageAlt}
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-600">
                        Limited time offer
                      </p>
                      <button className="text-sm bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Repositioned Navigation Buttons */}
            <button
              className="swiper-button-prev !hidden md:!flex !w-10 !h-10 !bg-white !shadow-lg !rounded-full !text-blue-600 after:!text-lg hover:!bg-blue-50 !left-0 -translate-x-full !opacity-70 hover:!opacity-100 transition-all duration-300"
            ></button>
            <button
              className="swiper-button-next !hidden md:!flex !w-10 !h-10 !bg-white !shadow-lg !rounded-full !text-blue-600 after:!text-lg hover:!bg-blue-50 !right-0 translate-x-full !opacity-70 hover:!opacity-100 transition-all duration-300"
            ></button>

            {/* Custom Pagination */}
            <div className="swiper-pagination !bottom-0 !-mb-2"></div>
          </Swiper>
        </div>
      </div>

      {/* Add custom styles */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #cbd5e1;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #2563eb;
        }
        .swiper-button-prev:after,
        .swiper-button-next:after {
          font-size: 1.2rem;
          font-weight: bold;
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
