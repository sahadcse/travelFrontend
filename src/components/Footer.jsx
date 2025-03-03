import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaAngleUp,
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
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
    <footer className="bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-blue-500"></div>
        <div className="absolute top-1/2 -right-32 w-80 h-80 rounded-full bg-blue-400"></div>
        <div className="absolute bottom-0 left-1/4 w-40 h-40 rounded-full bg-blue-300"></div>
      </div>

      {/* Newsletter Bar - Full Width */}
      <div className="relative z-10 bg-gradient-to-r from-blue-600 to-blue-500 py-10 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white max-w-md">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                {footerData.newsletter.title}
              </h3>
              <p className="text-blue-100">
                {footerData.newsletter.description}
              </p>
            </div>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
            >
              <div className="relative flex-grow">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 pl-10 rounded-lg border-0 shadow-md focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <HiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 text-lg" />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-md hover:shadow-lg transition transform hover:translate-y-px"
              >
                {footerData.newsletter.buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Back to Top Button */}
        <div className="absolute right-8 -top-5 hidden md:block">
          <button
            onClick={scrollToTop}
            className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow-lg transition-all duration-300 group"
            aria-label="Back to top"
          >
            <FaAngleUp className="text-lg group-hover:animate-bounce" />
          </button>
        </div>

        {/* Mobile Back to Top Button */}
        <div className="md:hidden fixed bottom-5 right-5 z-50">
          <button
            onClick={scrollToTop}
            className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300"
            aria-label="Back to top"
          >
            <FaAngleUp className="text-xl" />
          </button>
        </div>

        <div className="pt-16 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Company Info Section */}
            <div className="col-span-1">
              <Link href="/" className="inline-block mb-6">
                <div className="text-xl font-bold text-gray-800">SAHAD</div>
              </Link>

              <p className="text-gray-600 mb-6 text-base text-justify leading-relaxed">
                Find the perfect hotel for your next trip with our easy-to-use
                booking platform. Get the best deals and enjoy a hassle-free
                stay.
              </p>

              <div className="flex items-center space-x-1 mb-4">
                <FaMapMarkerAlt className="text-blue-500 mr-2 flex-shrink-0" />
                <span className="text-gray-600 text-sm">
                  {footerData.contactInfo.address.text}
                </span>
              </div>

              <div className="flex items-center space-x-1">
                <FaPhoneAlt className="text-blue-500 mr-2 flex-shrink-0" />
                <span className="text-gray-600 text-sm">
                  {footerData.contactInfo.customerCare.phone}
                </span>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="col-span-1">
              <h5 className="text-base font-semibold mb-6 pb-1 border-b border-gray-200 inline-block text-gray-800">
                {footerData.quickLinks.title}
              </h5>
              <ul className="space-y-3">
                {footerData.quickLinks.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-blue-500 transition-all duration-300 flex items-center group"
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
              <h5 className="text-base font-semibold mb-6 pb-1 border-b border-gray-200 inline-block text-gray-800">
                {footerData.customerCare.title}
              </h5>
              <ul className="space-y-3">
                {footerData.customerCare.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-blue-500 transition-all duration-300 flex items-center group"
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
              <h5 className="text-base font-semibold mb-6 pb-1 border-b border-gray-200 inline-block text-gray-800">
                {footerData.mobileApps.title}
              </h5>

              <div className="space-y-4">
                <a
                  href={footerData.mobileApps.appStore.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-5 py-3 rounded-lg bg-gray-900 hover:bg-black transition shadow-sm"
                >
                  <FaApple className="text-white text-2xl" />
                  <div className="ml-3">
                    <div className="text-xs text-gray-400">
                      {footerData.mobileApps.appStore.subtitle}
                    </div>
                    <div className="text-sm font-medium text-white">
                      {footerData.mobileApps.appStore.label}
                    </div>
                  </div>
                </a>

                <a
                  href={footerData.mobileApps.googlePlay.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-5 py-3 rounded-lg bg-blue-900 hover:bg-blue-950 transition shadow-sm"
                >
                  <FaGooglePlay className="text-white text-2xl" />
                  <div className="ml-3">
                    <div className="text-xs text-blue-200">
                      {footerData.mobileApps.googlePlay.subtitle}
                    </div>
                    <div className="text-sm font-medium text-white">
                      {footerData.mobileApps.googlePlay.label}
                    </div>
                  </div>
                </a>
              </div>

              {/* Social Media Icons */}
              <div className="mt-8">
                <div className="text-sm font-semibold text-gray-700 mb-3">
                  Follow Us
                </div>
                <div className="flex items-center space-x-4">
                  {footerData.socialMedia.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition group"
                    >
                      <span
                        style={{ color: item.color }}
                        className="text-lg group-hover:scale-110 transform transition"
                      >
                        {getSocialIcon(item.platform)}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="py-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <div className="text-gray-600 text-sm">
                <span>{footerData.copyright}</span>
              </div>
            </div>

            <div className="text-gray-500 text-sm">
              <span className="mr-2">•</span>
              <Link
                href="/privacy-policy"
                className="hover:text-blue-500 transition"
              >
                Privacy Policy
              </Link>
              <span className="mx-2">•</span>
              <Link
                href="/terms-and-condition"
                className="hover:text-blue-500 transition"
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
