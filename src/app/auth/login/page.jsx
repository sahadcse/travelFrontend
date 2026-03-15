"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGoogle, FaApple } from "react-icons/fa";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import PublicNav from "@/components/PublicNav";
import Footer from "@/components/Footer";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for authentication logic
    console.log("Signing in with:", { email, password });
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
      <PublicNav />

      {/* Main Split Screen Area - Adjust height to account for navbar */}
      <main className="flex-1 flex w-full pt-16 md:pt-20">
        {/* Left Side (Visual Area - Desktop Only) */}
        <div className="hidden lg:flex lg:w-1/2 relative bg-slate-900 border-r border-slate-200 shadow-xl z-10">
        <Image
          src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1920&auto=format&fit=crop"
          alt="Luxury Resort Destination"
          fill
          priority
          className="object-cover"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-black/30 z-10"></div>
        
        {/* Brand Overlay */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center px-16 text-white">
          <Link href="/" className="mb-6 inline-block w-fit">
            <span className="text-4xl font-black tracking-tight drop-shadow-lg">
              NexusStays
            </span>
          </Link>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight drop-shadow-md max-w-lg">
            Start your journey with NexusStays
          </h2>
          <p className="mt-6 text-lg text-slate-200 max-w-md drop-shadow font-light">
            Discover premium accommodations worldwide. We bring you luxury and comfort at your fingertips.
          </p>
        </div>
      </div>

      {/* Right Side (Form Area) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 bg-white relative">
        
        {/* Mobile Logo overlay (visible only on small screens) */}
        {/* <div className="absolute top-8 left-8 lg:hidden">
          <Link href="/" className="text-2xl font-black tracking-tight text-blue-600">
            NexusStays
          </Link>
        </div> */}

        <div className="max-w-md w-full flex flex-col gap-8">
          {/* Headings */}
          <div className="text-center lg:text-left flex flex-col gap-2">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Welcome back
            </h1>
            <p className="text-gray-500 text-sm sm:text-base">
              Sign in to your account to continue your bookings.
            </p>
          </div>

          {/* Social Logins */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 rounded-full border border-gray-200 py-3 flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors shadow-sm active:scale-[0.98]">
              <FaGoogle className="text-red-500 text-lg" />
              <span className="text-sm font-semibold text-gray-700">Google</span>
            </button>
            <button className="flex-1 rounded-full border border-gray-200 py-3 flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors shadow-sm active:scale-[0.98]">
              <FaApple className="text-gray-900 text-xl" />
              <span className="text-sm font-semibold text-gray-700">Apple</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink-0 mx-4 text-gray-400 text-sm font-medium">
              or sign in with email
            </span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700 ml-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <HiOutlineMail className="text-lg" />
                </div>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-xl pl-11 pr-4 py-3 bg-gray-50/50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 outline-none transition-all shadow-inner text-gray-900 placeholder-gray-400"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700 ml-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <HiOutlineLockClosed className="text-lg" />
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full rounded-xl pl-11 pr-4 py-3 bg-gray-50/50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 outline-none transition-all shadow-inner text-gray-900 placeholder-gray-400"
                />
              </div>
            </div>

            <div className="flex items-center justify-between mt-1">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-gray-300 cursor-pointer"
                />
                <label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer select-none">
                  Remember me
                </label>
              </div>
              <Link
                href="/auth/forgot-password"
                className="text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline transition-all"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="mt-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 shadow-md shadow-blue-600/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              Sign In
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                href="/auth/signup"
                className="font-bold text-blue-600 hover:text-blue-800 hover:underline transition-all"
              >
                Sign up
              </Link>
            </p>
          </div>

        </div>
      </div>
      </main>

      <Footer />
    </div>
  );
}
