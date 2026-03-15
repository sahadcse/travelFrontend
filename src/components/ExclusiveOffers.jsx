"use client";

import React, { useState, useContext } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AppContext from "../context/AppContext";

// ─── Promo Codes per offer ────────────────────────────────────────────────────
const PROMO_CODES = {
  1: { code: "NEXUS10", discount: "10% OFF", terms: "Valid on bookings above ৳5,000. Cannot be combined with other offers. Expires March 31, 2026." },
  2: { code: "DIGITAL20", discount: "20% OFF", terms: "Applicable on first booking only. Minimum stay of 2 nights required. Expires April 15, 2026." },
  3: { code: "HOTEL15", discount: "15% OFF", terms: "Valid for hotel bookings only. Maximum discount ৳3,000. Expires March 31, 2026." },
};

// Default offer items that will be used if none are provided
const defaultOfferItems = [
  {
    id: 1,
    imageUrl: "/img/offer/one.jpg",
    imageAlt: "City Offer",
  },
  {
    id: 2,
    imageUrl: "/img/offer/two.jpg",
    imageAlt: "Digital Offer",
  },
  {
    id: 3,
    imageUrl: "/img/offer/three.jpg",
    imageAlt: "Hotel Offer",
  },
];

// ─── Promo Modal ──────────────────────────────────────────────────────────────
const PromoModal = ({ isOpen, onClose, promo }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !promo) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(promo.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textarea = document.createElement("textarea");
      textarea.value = promo.code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-sm bg-black/40 p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 max-w-md w-full transform animate-in zoom-in-95 slide-in-from-bottom-4 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors text-gray-500 hover:text-gray-700"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Decorative top badge */}
        <div className="flex justify-center mb-5">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg shadow-blue-500/25">
            🎉 Exclusive Offer
          </div>
        </div>

        {/* Discount */}
        <h3 className="text-3xl font-black text-center text-gray-900 mb-2">
          {promo.discount}
        </h3>
        <p className="text-center text-gray-500 text-sm mb-6">
          Use the code below at checkout to claim your discount
        </p>

        {/* Promo Code Box */}
        <div className="flex items-center justify-between bg-gray-50 border-2 border-dashed border-blue-300 rounded-2xl px-5 py-4 mb-4">
          <span className="text-2xl font-black tracking-[0.15em] text-blue-600">{promo.code}</span>
          <button
            onClick={handleCopy}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${
              copied
                ? "bg-emerald-500 text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {copied ? "✓ Copied!" : "Copy"}
          </button>
        </div>

        {/* Terms */}
        <p className="text-xs text-gray-400 text-center leading-relaxed mb-6">
          <span className="font-semibold text-gray-500">Terms: </span>
          {promo.terms}
        </p>

        {/* CTA */}
        <button
          onClick={() => {
            handleCopy();
            setTimeout(() => onClose(), 500);
          }}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/25 active:scale-[0.98] flex items-center justify-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
          </svg>
          Copy Code & Book
        </button>
      </div>
    </div>
  );
};

// ─── ExclusiveOffers Component ────────────────────────────────────────────────
const ExclusiveOffers = ({
  title = "Exclusive Offers",
  offers = defaultOfferItems,
  className = "",
}) => {
  const { state } = useContext(AppContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPromo, setSelectedPromo] = useState(null);

  const handleClaimOffer = (offerId) => {
    const promo = PROMO_CODES[offerId] || PROMO_CODES[1];
    setSelectedPromo(promo);
    setIsModalOpen(true);
  };

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
                <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-lg group h-56 sm:h-64 md:h-72 lg:h-80 flex flex-col justify-end transition-all duration-300">
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={offer.imageUrl}
                      alt={offer.imageAlt || "Promotional Offer"}
                      fill
                      sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                      priority
                    />
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10 transition-opacity duration-300"></div>
                  
                  {/* Dynamic Content Overlay */}
                  <div className="relative z-20 p-6 md:p-10 lg:p-12 w-full max-w-lg transform transition-transform duration-500 ease-out translate-y-2 group-hover:translate-y-0">
                    <span className="inline-block px-3 py-1 mb-3 text-xs md:text-sm font-bold tracking-wider text-blue-100 uppercase bg-blue-600/80 backdrop-blur-sm rounded-full shadow-sm">
                      Limited Time
                    </span>
                    <h3 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl leading-tight drop-shadow-md mb-2 md:mb-4">
                      {offer.imageAlt || "Exclusive Hotel & Resort Booking"}
                    </h3>
                    <p className="text-gray-200 text-sm md:text-base font-medium drop-shadow mb-4 md:mb-6 md:line-clamp-2">
                      Book now and get exclusive discounts on your next dream vacation. Terms and conditions apply.
                    </p>
                    <button
                      onClick={() => handleClaimOffer(offer.id)}
                      className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full shadow-lg transition-all duration-300 transform inline-flex items-center group/btn"
                    >
                      Claim Offer
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Custom Pagination */}
            <div className="swiper-pagination !bottom-0 !-mb-2"></div>
          </Swiper>
        </div>
      </div>

      {/* Promo Modal */}
      <PromoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        promo={selectedPromo}
      />

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
