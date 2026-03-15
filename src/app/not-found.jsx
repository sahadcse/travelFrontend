import React from "react";
import Link from "next/link";
import { SearchX, Home } from "lucide-react";
import PublicNav from "@/components/PublicNav";
import Footer from "@/components/Footer";

export default function GlobalNotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <PublicNav />
      
      <main className="flex-grow mt-10 md:mt-20 flex flex-col items-center justify-center px-4 py-24 text-center">
        {/* Animated Icon Container */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-blue-100 rounded-full animate-ping opacity-75"></div>
          <div className="relative bg-blue-50 text-blue-600 p-5 rounded-full border-4 border-white shadow-sm">
            <SearchX className="w-12 h-12" strokeWidth={1.5} />
          </div>
        </div>

        {/* Text Content */}
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-lg text-gray-500 mb-10 max-w-md mx-auto">
          Oops! It looks like the page you are looking for has been moved, deleted, or simply doesn't exist.
        </p>

        {/* Call to Action */}
        <Link 
          href="/" 
          className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
        >
          <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
          Take Me Home
        </Link>
      </main>

      <Footer />
    </div>
  );
}