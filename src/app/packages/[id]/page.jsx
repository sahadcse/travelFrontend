// Server Component — Next.js 16 requires params to be awaited as a Promise
import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import PublicNav from "@/components/PublicNav";
import Footer from "@/components/Footer";
import DetailClient from "./DetailClient";

// ─── Mock Data ────────────────────────────────────────────────────────────────
// Enriched data shape — same base as Packages.jsx plus location, description,
// amenities[], and images[]. Swap the lookup below for fetch() when API is ready.
const TOUR_PACKAGES = [
  {
    id: 1,
    title: "Dhaka – Sajek – Dhaka Tour Package: Discover the Land of Clouds",
    price: "11,800",
    duration: "3 Days, 2 Nights",
    rating: 4.8,
    reviewCount: 124,
    location: "Sajek Valley, Rangamati, Bangladesh",
    description:
      "Escape to Sajek Valley — the 'Queen of Hills' — where the clouds kiss the mountain ridges and the air is crisp with serenity. This curated 3-day journey takes you through winding hill roads, indigenous villages, and breathtaking sunset viewpoints. Your stay includes comfortable resort accommodation, guided hikes to Konglak and Ruilui para, bonfires under a star-filled sky, and all transfers from Dhaka. A truly transformative experience for nature lovers and adventure seekers alike.",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&q=80",
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&q=80",
    ],
    amenities: [
      { label: "Free Wi-Fi", icon: "Wifi" },
      { label: "All Meals", icon: "Utensils" },
      { label: "Transport", icon: "Car" },
      { label: "Smart TV", icon: "Tv" },
      { label: "AC Rooms", icon: "Wind" },
      { label: "Breakfast", icon: "Coffee" },
      { label: "24/7 Security", icon: "Shield" },
      { label: "Hot Shower", icon: "Bath" },
      { label: "Gym Access", icon: "Dumbbell" },
    ],
  },
  {
    id: 2,
    title: "Dhaka – Sylhet – Dhaka Tour Package: Experience the Heart of Sylhet",
    price: "11,630",
    duration: "4 Days, 3 Nights",
    rating: 4.7,
    reviewCount: 98,
    location: "Sylhet, Bangladesh",
    description:
      "Immerse yourself in the emerald tea gardens and misty waterfalls of Sylhet. This 4-day package covers the iconic Ratargul Swamp Forest, Jaflong stone fields, Bisnakandi, and the serene Lalakhal river. Enjoy comfortable hotel stays, a guided boat tour, and authentic Sylheti cuisine. Perfect for couples, families, and solo travelers seeking a refreshing getaway from the city.",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
      "https://images.unsplash.com/photo-1482192505345-5852d85c8a8f?w=600&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80",
      "https://images.unsplash.com/photo-1455156218388-5e61b526818b?w=600&q=80",
    ],
    amenities: [
      { label: "Free Wi-Fi", icon: "Wifi" },
      { label: "All Meals", icon: "Utensils" },
      { label: "Transport", icon: "Car" },
      { label: "Smart TV", icon: "Tv" },
      { label: "AC Rooms", icon: "Wind" },
      { label: "Breakfast", icon: "Coffee" },
      { label: "24/7 Security", icon: "Shield" },
      { label: "Hot Shower", icon: "Bath" },
      { label: "Gym Access", icon: "Dumbbell" },
    ],
  },
  {
    id: 3,
    title: "Dhaka – Cox's Bazar – Dhaka Tour Package: Beach Paradise",
    price: "15,000",
    duration: "5 Days, 4 Nights",
    rating: 4.9,
    reviewCount: 213,
    location: "Cox's Bazar, Chittagong, Bangladesh",
    description:
      "Experience the world's longest natural sea beach. This 5-day paradise package includes beachfront hotel stays, sunset boat cruises to Maheshkhali island, an ATV beach ride, and visits to the Buddhist temples of Ramu. Enjoy fresh seafood dinners, sunrise walks along the 120 km sand stretch, and complete relaxation by the Bay of Bengal.",
    images: [
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80",
      "https://images.unsplash.com/photo-1505236818630-a8a0f7b0697a?w=600&q=80",
      "https://images.unsplash.com/photo-1473621038790-b778b4750efe?w=600&q=80",
    ],
    amenities: [
      { label: "Free Wi-Fi", icon: "Wifi" },
      { label: "All Meals", icon: "Utensils" },
      { label: "Transport", icon: "Car" },
      { label: "Smart TV", icon: "Tv" },
      { label: "AC Rooms", icon: "Wind" },
      { label: "Breakfast", icon: "Coffee" },
      { label: "24/7 Security", icon: "Shield" },
      { label: "Hot Shower", icon: "Bath" },
      { label: "Gym Access", icon: "Dumbbell" },
    ],
  },
  {
    id: 4,
    title: "Dhaka – Bandarban – Dhaka Tour Package: Hills and Adventures",
    price: "13,500",
    duration: "4 Days, 3 Nights",
    rating: 4.6,
    reviewCount: 87,
    location: "Bandarban Hill District, Bangladesh",
    description:
      "Trek to the roof of Bangladesh. Bandarban is home to Keokradong and Tahjindong, the nation's two highest peaks. This adventure package includes guided treks, tribal village homestay option, visits to Nilgiri and Shoilo Propat waterfall, jeep safaris through forest roads, and unforgettable panoramic views above the clouds.",
    images: [
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=80",
      "https://images.unsplash.com/photo-1416244698895-6efb3b8c4f86?w=600&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=600&q=80",
      "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=600&q=80",
    ],
    amenities: [
      { label: "Free Wi-Fi", icon: "Wifi" },
      { label: "All Meals", icon: "Utensils" },
      { label: "Transport", icon: "Car" },
      { label: "Smart TV", icon: "Tv" },
      { label: "AC Rooms", icon: "Wind" },
      { label: "Breakfast", icon: "Coffee" },
      { label: "24/7 Security", icon: "Shield" },
      { label: "Hot Shower", icon: "Bath" },
      { label: "Gym Access", icon: "Dumbbell" },
    ],
  },
  {
    id: 5,
    title: "Dhaka – Rangamati – Dhaka Tour Package: Lake and Culture",
    price: "12,200",
    duration: "3 Days, 2 Nights",
    rating: 4.7,
    reviewCount: 76,
    location: "Rangamati, Chittagong Hill Tracts, Bangladesh",
    description:
      "Float through the emerald waters of Kaptai Lake, visit the iconic hanging bridge, and explore the vibrant tribal culture of Rangamati. This package includes a scenic boat tour of the lake, visits to the Rajbari and Buddhist temples, tasting indigenous cuisine, and overnight stays at a lakeview resort. A perfect blend of nature, culture, and adventure.",
    images: [
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1200&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80",
      "https://images.unsplash.com/photo-1439853949212-36589f9a0638?w=600&q=80",
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&q=80",
      "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=600&q=80",
    ],
    amenities: [
      { label: "Free Wi-Fi", icon: "Wifi" },
      { label: "All Meals", icon: "Utensils" },
      { label: "Transport", icon: "Car" },
      { label: "Smart TV", icon: "Tv" },
      { label: "AC Rooms", icon: "Wind" },
      { label: "Breakfast", icon: "Coffee" },
      { label: "24/7 Security", icon: "Shield" },
      { label: "Hot Shower", icon: "Bath" },
      { label: "Gym Access", icon: "Dumbbell" },
    ],
  },
];

// ─── Page (Server Component) ──────────────────────────────────────────────────
export default async function PackageDetailPage({ params }) {
  // Next.js 16 App Router: params is a Promise — must be awaited
  const { id } = await params;
  const packageId = parseInt(id, 10);

  // Simulate API lookup by params.id — replace with fetch() when backend is ready
  const pkg = TOUR_PACKAGES.find((p) => p.id === packageId) || null;

  if (!pkg) {
    return (
      <div className="min-h-screen bg-white">
        <PublicNav />

        <div className="flex flex-col items-center justify-center py-40 text-center px-4">
          <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center mb-6">
            <ChevronLeft className="w-8 h-8 text-red-400" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Package Not Found</h1>
          <p className="text-gray-500 mb-8 max-w-sm">
            The tour package you&apos;re looking for doesn&apos;t exist or may have been removed.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
        
        <Footer />
      </div>
    );
  }

  return <DetailClient pkg={pkg} />;
}
