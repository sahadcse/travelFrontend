"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaApple, FaGooglePlay } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import footerData from "../data/footerData.json";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };

  const getSocialIcon = (platform) => {
    switch (platform) {
      case "Facebook":
        return <FaFacebookF />;
      case "YouTube":
        return <FaYoutube />;
      case "Instagram":
        return <FaInstagram />;
      case "LinkedIn":
        return <FaLinkedinIn />;
      default:
        return null;
    }
  };

  return (
    <footer className="relative overflow-hidden text-slate-300">
      {/* Modern Background Image with Overlays */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <Image
          src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1920&auto=format&fit=crop"
          alt="Footer Background"
          fill
          className="object-cover opacity-20 filter grayscale"
        />
        {/* Core Dark Overlays for Readability */}
        <div className="absolute inset-0 bg-slate-950/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent"></div>
      </div>

      {/* Decorative Glow Elements */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-600/20 blur-[100px]"></div>
        <div className="absolute bottom-1/2 -right-32 w-80 h-80 rounded-full bg-indigo-500/20 blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">

        <div className="pt-8 pb-10 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Company Info Section */}
            <div className="col-span-1 md:col-span-2 lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-6 group ">
                <Image
                  src="/img/logofooter.png"
                  alt="logo icon"
                  width={140}
                  height={27}
                  className="w-auto h-10 md:h-13 group-hover:opacity-90 transition-opacity"
                />
                <span className="text-2xl font-bold tracking-tight text-white group-hover:text-blue-100 transition-colors flex flex-col ">NexusStays
                  <h4 className=" text-sm md:text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white tracking-wide uppercase max-w-sm">
                    "Redefining Travel & Comfort"
                  </h4>
                </span>

              </Link>



              <p className="text-slate-300 mb-8 text-sm md:text-base text-left leading-relaxed max-w-sm drop-shadow-sm font-light">
                NexusStays is a premium accommodation and travel booking platform. We bridge the gap between luxury and affordability, ensuring every journey you take is seamless and unforgettable.
              </p>

              <div className="flex flex-col space-y-4">
                <div className="flex items-start space-x-3.5 group cursor-pointer">
                  <div className="w-9 h-9 mt-0.5 rounded-full bg-slate-800/80 border border-slate-700/50 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300 shadow-sm">
                    <FaMapMarkerAlt className="text-blue-400 group-hover:text-white flex-shrink-0 text-sm transition-colors" />
                  </div>
                  <span className="text-slate-300 text-sm leading-relaxed group-hover:text-white transition-colors pt-1">
                    {footerData.contactInfo.address.text}
                  </span>
                </div>

                <div className="flex items-center space-x-3.5 group cursor-pointer">
                  <div className="w-9 h-9 rounded-full bg-slate-800/80 border border-slate-700/50 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300 shadow-sm">
                    <FaPhoneAlt className="text-blue-400 group-hover:text-white flex-shrink-0 text-sm transition-colors" />
                  </div>
                  <span className="text-slate-300 font-medium text-sm group-hover:text-white transition-colors">
                    {footerData.contactInfo.customerCare.phone}
                  </span>
                </div>

                <div className="flex items-center space-x-3.5 group cursor-pointer">
                  <div className="w-9 h-9 rounded-full bg-slate-800/80 border border-slate-700/50 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300 shadow-sm">
                    <HiMail className="text-blue-400 group-hover:text-white flex-shrink-0 text-lg transition-colors" />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <a href={`mailto:${footerData.contactInfo.email.support}`} className="text-slate-300 font-medium text-sm group-hover:text-white transition-colors">
                      {footerData.contactInfo.email.support}
                    </a>
                    <a href={`mailto:${footerData.contactInfo.email.corporate}`} className="text-slate-400 text-xs group-hover:text-blue-200 transition-colors">
                      {footerData.contactInfo.email.corporate}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="col-span-1">
              <h5 className="text-base font-semibold mb-6 pb-2 border-b border-white/10 inline-block text-white">
                {footerData.quickLinks.title}
              </h5>
              <ul className="space-y-3">
                {footerData.quickLinks.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-all duration-300 flex items-center group font-medium"
                    >
                      <span className="w-0 h-px text-base bg-blue-500 inline-block transition-all duration-300 mr-0 group-hover:w-3 group-hover:mr-2"></span>
                      <span className="text-sm">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Care Section */}
            <div className="col-span-1">
              <h5 className="text-base font-semibold mb-6 pb-2 border-b border-white/10 inline-block text-white">
                {footerData.customerCare.title}
              </h5>
              <ul className="space-y-3">
                {footerData.customerCare.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-all duration-300 flex items-center group font-medium"
                    >
                      <span className="w-0 h-px bg-blue-500 inline-block transition-all duration-300 mr-0 group-hover:w-3 group-hover:mr-2"></span>
                      <span className="text-sm">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile App Section */}
            <div className="col-span-1">
              <h5 className="text-base font-semibold mb-6 pb-2 border-b border-white/10 inline-block text-white">
                {footerData.mobileApps.title}
              </h5>

              <div className="space-y-3 flex flex-col items-start">


                <Link
                  href={footerData.mobileApps.googlePlay.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition shadow-sm border border-white/10 w-full max-w-[180px] justify-center sm:justify-start"
                >
                  <FaGooglePlay className="text-white text-xl flex-shrink-0" />
                  <div className="ml-2.5 text-left">
                    <div className="text-[9px] text-slate-400 uppercase tracking-wider leading-none mb-1">
                      {footerData.mobileApps.googlePlay.subtitle}
                    </div>
                    <div className="text-[13px] font-semibold text-white leading-tight whitespace-nowrap">
                      {footerData.mobileApps.googlePlay.label}
                    </div>
                  </div>
                </Link>

                <Link
                  href={footerData.mobileApps.appStore.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition shadow-sm border border-white/10 w-full max-w-[180px] justify-center sm:justify-start"
                >
                  <FaApple className="text-white text-2xl flex-shrink-0" />
                  <div className="ml-2.5 text-left">
                    <div className="text-[9px] text-slate-400 uppercase tracking-wider leading-none mb-1">
                      {footerData.mobileApps.appStore.subtitle}
                    </div>
                    <div className="text-[13px] font-semibold text-white leading-tight whitespace-nowrap">
                      {footerData.mobileApps.appStore.label}
                    </div>
                  </div>
                </Link>

              </div>

              {/* Social Media Icons */}
              <div className="mt-8">
                <div className="text-sm font-semibold text-white mb-4">
                  Follow Us
                </div>
                <div className="flex items-center space-x-3">
                  {footerData.socialMedia.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-transparent text-slate-300 hover:text-white transition-all duration-300 group shadow-sm"
                    >
                      <span className="text-base group-hover:scale-110 transform transition-transform">
                        {getSocialIcon(item.platform)}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Newsletter Card at the Bottom */}
        <div className="flex justify-center pb-12 pt-2">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-5 md:p-6 backdrop-blur-md shadow-2xl relative overflow-hidden w-full max-w-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 md:gap-8">
              <div className="text-white text-center sm:text-left flex-shrink-1">
                <h3 className="text-lg md:text-xl font-bold mb-1">
                  {footerData.newsletter.title}
                </h3>
                <p className="text-slate-400 text-xs md:text-sm">
                  {footerData.newsletter.description}
                </p>
              </div>
              <form
                onSubmit={handleNewsletterSubmit}
                className="relative flex items-center bg-white/10 rounded-full shadow-inner border border-white/10 p-1 w-full max-w-sm focus-within:ring-2 focus-within:ring-blue-500/50 transition-all shrink-0"
              >
                <HiMail className="absolute left-3.5 text-slate-400 text-lg" />
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full pl-10 pr-28 py-2.5 bg-transparent border-0 focus:outline-none focus:ring-0 text-white placeholder-slate-400 text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-5 bg-blue-600 hover:bg-blue-500 text-white font-medium flex items-center justify-center rounded-full shadow-lg transition-all active:scale-95 text-sm"
                >
                  {footerData.newsletter.buttonText}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <div className="text-slate-500 text-sm">
                <span>© {new Date().getFullYear()}</span>
                <span className="text-white/20 mx-2">•</span>
                <span>{footerData.copyright}</span>
              </div>
            </div>

            <div className="text-slate-500 text-sm flex items-center space-x-3">
              <Link
                href="/privacy-policy"
                className="hover:text-blue-400 transition"
              >
                Privacy Policy
              </Link>
              <span className="text-white/20">•</span>
              <Link
                href="/terms-and-condition"
                className="hover:text-blue-400 transition"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
