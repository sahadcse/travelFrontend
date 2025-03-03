"use client";
import Hero from "@/components/Hero";
import PublicNav from "@/components/PublicNav";
import Package from "@/components/Packages";
import TopDestinations from "@/components/TopDestinations";
import ExclusiveOffers from "@/components/ExclusiveOffers";
import { AppProvider } from "../context/AppContext"; // Import the provider
import PopularPlacesSection from "@/components/PopularPlacesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <AppProvider>
      <main className="min-h-screen">
        <PublicNav />
        <Hero />
        <Package />
        <TopDestinations />
        <ExclusiveOffers />
        <PopularPlacesSection />
        <Footer />
      </main>
    </AppProvider>
  );
}
