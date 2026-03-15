"use client";
import React from "react";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { tabs } from "@/constants/tabs";
import GuestSelector from "./forms/GuestSelector";
import TransportForm from "./forms/TransportForm";
import useFormState from "@/hooks/useFormState";

const Hero = () => {
  const {
    activeTab,
    setActiveTab,
    formState,
    handleInputChange,
    handleGuestChange,
    handleMultiCityChange,
    addMultiCityTrip,
    removeMultiCityTrip,
  } = useFormState();

  const renderCommonFields = () => (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 items-center w-full">
      <div className="w-full">
        <label className="text-sm font-semibold text-white/95 drop-shadow-md ml-1 block mb-1.5">Location</label>
        <input
          type="text"
          placeholder="Where are you going?"
          className="w-full bg-white/10 border border-white/20 text-white placeholder-white/70 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-md transition-all shadow-inner"
          value={formState.location}
          onChange={(e) => handleInputChange("location", e.target.value)}
        />
      </div>
      <div className="w-full">
        <label className="text-sm font-semibold text-white/95 drop-shadow-md ml-1 block mb-1.5">Check In</label>
        <input
          type="date"
          className="w-full bg-white/10 border border-white/20 text-white placeholder-white/70 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-md transition-all shadow-inner [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert"
          value={formState.checkIn}
          onChange={(e) => handleInputChange("checkIn", e.target.value)}
        />
      </div>
      <div className="w-full">
        <label className="text-sm font-semibold text-white/95 drop-shadow-md ml-1 block mb-1.5">Check Out</label>
        <input
          type="date"
          className="w-full bg-white/10 border border-white/20 text-white placeholder-white/70 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-md transition-all shadow-inner [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert"
          value={formState.checkOut}
          onChange={(e) => handleInputChange("checkOut", e.target.value)}
        />
      </div>
    </section>
  );

  const renderFormFields = () => {
    switch (activeTab) {
      case 0: // Apartments
        return (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-6 items-center w-full">
            <div className="md:col-span-3">
              {renderCommonFields()}
            </div>
            <div className="w-full">
              <label className="text-sm font-semibold text-white/95 drop-shadow-md ml-1 block mb-1.5">Number of Beds</label>
              <div className="flex items-center space-x-2 bg-white/10 border border-white/20 rounded-2xl p-2.5 justify-between backdrop-blur-md text-white shadow-inner">
                <button
                  onClick={() =>
                    handleInputChange("beds", Math.max(1, formState.beds - 1))
                  }
                  className="w-10 h-10 flex items-center justify-center border border-white/30 rounded-xl hover:bg-white/20 transition-colors text-xl"
                >
                  -
                </button>
                <span className="px-3 text-lg font-medium">{formState.beds}</span>
                <button
                  onClick={() => handleInputChange("beds", formState.beds + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-white/30 rounded-xl hover:bg-white/20 transition-colors text-xl"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        );

      case 1: // Hotels
      case 2: // Resorts
        return (
          <section className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-6 items-center w-full">
            <div className="md:col-span-3">
              {renderCommonFields()}
            </div>
            <div className="w-full">
              <label className="text-sm font-semibold text-white/95 drop-shadow-md ml-1 block mb-1.5">Guests & Rooms</label>
              <GuestSelector
                adults={formState.adults}
                children={formState.children}
                rooms={formState.rooms}
                onChange={handleGuestChange}
              />
            </div>
          </section>
        );

      case 3: // Shared Rooms
        return renderCommonFields();

      case 4: // Convention Hall
        return (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-center w-full">
            <div className="md:col-span-5 w-full">
              <label className="text-sm font-semibold text-white/95 drop-shadow-md ml-1 block mb-1.5">Location</label>
              <input
                type="text"
                placeholder="Convention Hall Location"
                className="w-full bg-white/10 border border-white/20 text-white placeholder-white/70 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-md transition-all shadow-inner"
                value={formState.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
              />
            </div>
            <div className="md:col-span-4 w-full">
              <label className="text-sm font-semibold text-white/95 drop-shadow-md ml-1 block mb-1.5">Event Date</label>
              <input
                type="date"
                className="w-full bg-white/10 border border-white/20 text-white placeholder-white/70 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-md transition-all shadow-inner [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert"
                value={formState.eventDate}
                onChange={(e) => handleInputChange("eventDate", e.target.value)}
              />
            </div>
            <div className="md:col-span-3 w-full">
              <label className="text-sm font-semibold text-white/95 drop-shadow-md ml-1 block mb-1.5">Capacity</label>
              <input
                type="number"
                placeholder="No. of guests"
                className="w-full bg-white/10 border border-white/20 text-white placeholder-white/70 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-md transition-all shadow-inner"
                value={formState.eventCapacity}
                onChange={(e) =>
                  handleInputChange("eventCapacity", e.target.value)
                }
              />
            </div>
          </div>
        );

      case 5: // Transports
        return (
          <div className="w-full text-white">
            <TransportForm
              {...formState}
              onInputChange={handleInputChange}
              handleMultiCityChange={handleMultiCityChange}
              addMultiCityTrip={addMultiCityTrip}
              removeMultiCityTrip={removeMultiCityTrip}
            />
          </div>
        );

      default:
        return renderCommonFields();
    }
  };

  const handleSearch = () => {
    // Implement search logic
  };

  return (
    <section id="hero-section" className="relative w-full min-h-[100vh] lg:min-h-[800px] flex items-center justify-center overflow-hidden">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
      `}</style>

      {/* Background Media Container */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Structure supports Video or Image Slider (currently Image) */}
        <Image
          src="/img/bg1.jpg"
          alt="hero background"
          fill
          className="object-cover object-center scale-105"
          priority
          sizes="100vw"
          quality={95}
        />
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        {/* Soft bottom gradient to blend into next sections smoothly */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
      </div>

      <div className="container mx-auto relative z-20 px-4 pt-32 pb-16 flex flex-col items-center justify-center h-full w-full">
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
          
          {/* Animated Headline */}
          <div className="text-center w-full mb-8 md:mb-12 opacity-0 animate-fade-in-up px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white drop-shadow-2xl tracking-tight mb-4 md:mb-6 leading-tight">
              Find Your Perfect Stay
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 drop-shadow-md max-w-3xl mx-auto font-medium">
              Discover and book exceptional hotels, resorts, and vacation rentals with exclusive deals globally.
            </p>
          </div>

          {/* Search/Filter Block Container */}
          <div 
            className="w-full lg:w-[95%] xl:w-[90%] opacity-0 animate-fade-in-up" 
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            {/* Tabs */}
            <div className="flex justify-start w-full relative overflow-hidden mb-2 px-1 md:px-8 z-20">
              <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide w-full gap-2 md:gap-4 pb-2 px-2 snap-x">
                {tabs.map((tab) => {
                  const IconComponent = tab.Icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center px-4 md:px-5 py-2.5 md:py-3 rounded-full text-sm font-semibold transition-all backdrop-blur-md whitespace-nowrap snap-center shrink-0
                        ${
                          activeTab === tab.id
                            ? "bg-white text-blue-600 shadow-xl md:scale-105"
                            : "bg-white/10 text-white hover:bg-white/20 border border-white/20 hover:scale-105"
                        }`}
                    >
                      <IconComponent className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Form Container (Sleek Glassmorphism Pill-Aesthetic) */}
            <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl lg:rounded-[2.5rem] p-4 sm:p-6 lg:p-8 w-full transition-all">
              <div className="flex flex-col xl:flex-row gap-4 md:gap-6 items-center w-full">
                
                {/* Dynamically Rendered Inputs */}
                <div className="flex-grow w-full">
                  {renderFormFields()}
                </div>

                {/* Search Button */}
                <div className="w-full xl:w-auto mt-2 xl:mt-0 flex-shrink-0 self-end">
                  <button
                    onClick={handleSearch}
                    className="w-full xl:w-20 xl:h-20 flex items-center justify-center bg-blue-600 text-white rounded-2xl xl:rounded-full hover:bg-blue-700 transition-all hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.5)] py-4 xl:py-0"
                  >
                    <MagnifyingGlassIcon className="w-8 h-8 hidden xl:block" />
                    <span className="xl:hidden font-bold text-xl flex items-center justify-center">
                      <MagnifyingGlassIcon className="w-6 h-6 mr-2" />
                      Search
                    </span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

