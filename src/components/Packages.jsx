"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const packages = [
  {
    title: "Dhaka - Sajek - Dhaka Tour Package: Discover the Land of Clouds",
    price: "11,800",
    image: "/sajek.jpg",
  },
  {
    title: "Dhaka - Sylhet - Dhaka Tour Package: Experience the Heart of Sylhet",
    price: "11,630",
    image: "/sylhet.jpg",
  },
];

export default function PackagesSlider() {
  return (
    <div className="bg-blue-100 py-10 px-5">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold text-gray-900">Packages</h2>
          <a href="#" className="text-blue-600 hover:underline">
            See More
          </a>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1.5}
          navigation
          pagination={{ clickable: true }}
          className="mt-5"
        >
          {packages.map((pkg, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-5 rounded-2xl shadow-lg flex items-center gap-5">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-40 h-32 rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {pkg.title}
                  </h3>
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                    Affiliate
                  </span>
                  <p className="mt-2 text-gray-600">
                    <strong className="text-xl text-gray-900">{pkg.price} ৳</strong>
                    <br />
                    <span className="text-sm">*Price includes VAT & Tax</span>
                  </p>
                  <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg">
                    Details
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
