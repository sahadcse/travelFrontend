"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import currencyData from "@/data/currencies.json";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Home, Building2, Palmtree, Users, Mic, Bus } from "lucide-react";

const MenuItems = ({ isMobile, closeMenu }) => {
  const items = [
    { title: "Apartments", href: "/?service=apartment", Icon: Home },
    { title: "Hotels", href: "/?service=hotel", Icon: Building2 },
    { title: "Resorts", href: "/?service=resort", Icon: Palmtree },
    { title: "Shared Rooms", href: "/?service=shared-room", Icon: Users },
    { title: "Convention Hall", href: "/?service=convention-hall", Icon: Mic },
    { title: "Transports", href: "/?service=transport", Icon: Bus },
  ];

  return (
    <ul className={isMobile ? "grid grid-cols-2 gap-3" : "menu__nav flex md:space-x-8 flex-row space-y-0"}>
      {items.map((item) => (
        <li key={item.title} className={isMobile ? "w-full" : ""}>
          <Link 
            href={item.href} 
            onClick={isMobile && closeMenu ? closeMenu : undefined}
            className={
              isMobile 
                ? "flex flex-col items-center justify-center text-center gap-2 p-4 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm text-gray-600 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-all duration-200 active:scale-95 group"
                : "text-gray-600 hover:text-blue-600 font-medium transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300 text-base pb-1"
            }
          >
            {isMobile && <item.Icon className="w-6 h-6 text-gray-500 group-hover:text-blue-600 transition-colors" />}
            <span className={isMobile ? "text-sm font-semibold" : ""}>{item.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

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
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
      <div className={`relative w-full rounded-full transition-all duration-300 bg-white/70 backdrop-blur-md shadow-lg border border-white/20`}>
        <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="row flex justify-between items-center">
          {/* Left Side - Logo */}
          <div className="col-auto">
            <div className="items-center flex">
              <Link href="/" className="header-logo mr-5">
                <Image
                  src="/img/logonav.png"
                  alt="logo icon"
                  width={140}
                  height={27}
                  className="full_logo w-full h-10 md:h-13"
                />
                {/* <Image
                  src="https://otithee.com/img/logo/tab_logo.png"
                  alt="logo icon"
                  width={40}
                  height={40}
                  className="mini_logo"
                /> */}
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
                  className="btn flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-full hover:bg-gray-50 bg-white/50 shadow-sm transition-all text-sm font-medium text-gray-700"
                >
                  <Image
                    src={selectedLang.flag}
                    alt={selectedLang.name}
                    width={20}
                    height={20}
                    className="rounded-sm"
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
                <button className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 font-semibold shadow-md hover:shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300">
                  Sign In
                </button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-1 text-gray-700 hover:text-blue-600 transition-colors"
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
      </div>
          
      {/* Mobile Menu - Absolutely Positioned Card OUTSIDE the Pill */}
      <div 
        className={`md:hidden absolute top-[110%] left-0 right-0 w-full transition-[opacity,transform,visibility] duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? "opacity-100 translate-y-0 visible" 
            : "opacity-0 -translate-y-4 invisible"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 p-5 mt-2 z-[60] flex flex-col mx-1 overflow-hidden">
          <MenuItems isMobile={true} closeMenu={() => setIsMobileMenuOpen(false)} />
        </div>
      </div>
      </div>
    </nav>
  );
};

export default PublicNav;


