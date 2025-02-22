"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import currencyData from "@/data/currencies.json";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const MenuItems = () => (
  <ul className="menu__nav flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
    {[
      { title: "Apartments", href: "/?service=apartment" },
      { title: "Hotels", href: "/?service=hotel" },
      { title: "Resorts", href: "/?service=resort" },
      { title: "Shared Rooms", href: "/?service=shared-room" },
      { title: "Convention Hall", href: "/?service=convention-hall" },
      { title: "Transports", href: "/?service=transport" },
    ].map((item) => (
      <li key={item.title}>
        <Link href={item.href} className="hover:text-indigo-500">
          {item.title}
        </Link>
      </li>
    ))}
  </ul>
);

const PublicNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedLang, setSelectedLang] = useState(currencyData.languages[0]);
  const [selectedCurrency, setSelectedCurrency] = useState(
    currencyData.currencies[0]
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero-section");
      if (heroSection) {
        const triggerPoint = heroSection.offsetHeight / 2;
        const scrolled = window.scrollY;
        setIsMenuVisible(scrolled > triggerPoint);
        setIsScrolled(scrolled > 20); // Add solid background after scrolling 20px
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? "bg-white shadow-md" : "bg-white/60 backdrop-blur-sm"}`}
    >
      <div className="container mx-auto px-10 py-2">
        <div className="row flex justify-between items-center">
          {/* Left Side - Logo */}
          <div className="col-auto">
            <div className="items-center flex">
              <Link href="/" className="header-logo mr-5">
                <Image
                  src="https://otithee.com/img/logo/logo.png"
                  alt="logo icon"
                  width={140}
                  height={27}
                  className="full_logo"
                />
                <Image
                  src="https://otithee.com/img/logo/tab_logo.png"
                  alt="logo icon"
                  width={40}
                  height={40}
                  className="mini_logo hidden"
                />
              </Link>

              {/* Menu - Now with transition */}
              <div
                className={`header-menu hidden md:block transition-all duration-300 ${
                  isMenuVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-full"
                }`}
              >
                <MenuItems />
              </div>
            </div>
          </div>

          {/* Right Side - Always visible */}
          <div className="col-auto">
            <div className="flex items-center space-x-4">
              {/* Currency & Language Dropdown */}
              <div className="dropdown hidden md:block relative">
                <button
                  onClick={toggleDropdown}
                  className="btn flex items-center space-x-2 px-3 py-2 border rounded hover:bg-gray-50"
                >
                  <Image
                    src={selectedLang.flag}
                    alt={selectedLang.name}
                    width={30}
                    height={30}
                  />
                  <span>
                    {selectedLang.code} | {selectedCurrency.code}
                  </span>
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border p-4 min-w-[300px] flex w-full justify-between">
                    {/* Language Selection */}
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold mb-2">Language</h3>
                      {currencyData.languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setSelectedLang(lang);
                            setIsDropdownOpen(false);
                          }}
                          className="flex items-center space-x-2 w-full p-2 hover:bg-gray-50 rounded"
                        >
                          <Image
                            src={lang.flag}
                            alt={lang.name}
                            width={20}
                            height={20}
                          />
                          <span>{lang.name}</span>
                        </button>
                      ))}
                    </div>

                    {/* Currency Selection */}
                    <div>
                      <h3 className="text-sm font-semibold mb-2">Currency</h3>
                      {currencyData.currencies.map((currency) => (
                        <button
                          key={currency.code}
                          onClick={() => {
                            setSelectedCurrency(currency);
                            setIsDropdownOpen(false);
                          }}
                          className="flex items-center space-x-2 w-full p-2 hover:bg-gray-50 rounded"
                        >
                          <span>{currency.symbol}</span>
                          <span>{currency.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sign In Button */}
              <Link href="/auth/login">
                <button className="btn bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                  Sign In
                </button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Now with transition */}
        {isMobileMenuOpen && (
          <div
            className={`md:hidden py-4 border-t mt-4 transition-all duration-300 ${
              isMenuVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <MenuItems />
          </div>
        )}
      </div>
    </nav>
  );
};

export default PublicNav;
