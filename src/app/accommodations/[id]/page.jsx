import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import PublicNav from "@/components/PublicNav";
import Footer from "@/components/Footer";
import AccommodationDetail from "./AccommodationDetail"; // Assuming you saved the previous component here

// ─── Mock Data ────────────────────────────────────────────────────────────────
// In a real app, you would fetch this from your database/API.
// For now, we combine all your arrays so the page can find any ID.
const hotelsData = [
  { id: 241, name: "Best Western Heritage", imageUrl: "https://otithee.sgp1.cdn.digitaloceanspaces.com/public/thumbnails/1736138175_677b5dbf3f848.webp", price: "9,000 ৳", description: "Heritage Hotel, 173-01 Bypass Road, Kolatoli Circle, Cox's Bazar." },
  { id: 71, name: "Ocean View Hotel & Convention", imageUrl: "https://otithee.sgp1.cdn.digitaloceanspaces.com/public/thumbnails/1736655908_67834424cb2e5.webp", price: "8,223 ৳", description: "East Side of Rakhain Mohila Market Kuakata, Kalapara, Bangladesh" },
  { id: 189, name: "The Castle Inn", imageUrl: "https://otithee.sgp1.cdn.digitaloceanspaces.com/public/thumbnails/1736139723_677b63cb51d4d.webp", price: "8,000 ৳", description: "House ,17,Rad 06,sector 09,Uttara,Dhaka-1230" },
  { id: 293, name: "FARS Hotel & Resorts", imageUrl: "https://otithee.sgp1.cdn.digitaloceanspaces.com/public/thumbnails/1736140917_677b6875d6003.webp", price: "11,568 ৳", description: "212, Shahid Syed Nazrul Islam Sharani Dhaka-1000" },
  { id: 257, name: "Hotel Sarina", imageUrl: "https://otithee.sgp1.cdn.digitaloceanspaces.com/public/thumbnails/1736139530_677b630a38925.webp", price: "11,000 ৳", description: "Plot #27, Road #17, Banani C/A, Dhaka 1213" },
];

const resortsData = [
  { id: 30, name: "SKS INN Hotel & Resort", imageUrl: "https://otithee.sgp1.cdn.digitaloceanspaces.com/uploads/images/resort/1699858948-22636580.jpg", price: "6,900 ৳", description: "Dinajpur Sadar, College Road, Radha Krishnapur" },
  { id: 8, name: "Sea Shell Park and Resort", imageUrl: "https://otithee.sgp1.cdn.digitaloceanspaces.com/uploads/images/resort/1638019667-75802440.jpg", price: "9,999 ৳", description: "300 ft attached Purbachal New Town, Purbachal" },
];

const conventionHallsData = [
  { id: 51, name: "ORCHARD CONVENTION HALL", imageUrl: "https://otithee.sgp1.cdn.digitaloceanspaces.com/uploads/images/conventionhall/1697361865-67186442.jpg", priceHall: { morning: { price: "50,000 ৳", shift: "Morning Shift" }, evening: { price: "40,000 ৳", shift: "Evening Shift" } }, description: "Plot 17, Road 7, Dhanmondi, Dhaka-1209" },
  { id: 35, name: "Jolsha Celebration Hall", imageUrl: "https://otithee.sgp1.cdn.digitaloceanspaces.com/uploads/images/conventionhall/1692021606-44834996.jpg", priceHall: { morning: { price: "50,000 ৳", shift: "Morning Shift" }, evening: { price: "30,000 ৳", shift: "Evening Shift" } }, description: "S.H Tower, House 35, Sector 14, Uttara" },
];

// Combine all arrays into one massive array for easy searching
const ALL_ACCOMMODATIONS = [
  ...hotelsData,
  ...resortsData,
  ...conventionHallsData,
  // Add your apartmentsData and sharedRoomsData here too
];

// ─── Page (Server Component) ──────────────────────────────────────────────────
export default async function AccommodationPage({ params }) {
  // 1. Await params (Required in Next.js App Router)
  const { id } = await params;
  const accommodationId = parseInt(id, 10);

  // 2. Find the specific accommodation by ID
  const placeData = ALL_ACCOMMODATIONS.find((p) => p.id === accommodationId) || null;

  // 3. Handle 404 / Not Found state
  if (!placeData) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <PublicNav />
        <div className="flex-grow flex flex-col items-center justify-center py-40 text-center px-4">
          <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center mb-6">
            <ChevronLeft className="w-8 h-8 text-red-400" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Accommodation Not Found</h1>
          <p className="text-gray-500 mb-8 max-w-sm">
            The property you're looking for doesn't exist or may have been removed.
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

  // 4. Pass the found data to the Client Component
  return <AccommodationDetail data={placeData} />;
}