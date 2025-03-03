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
    <section className="grid md:grid-flow-col gap-4">
      <div className="">
        <label className="text-sm text-gray-500">Location</label>
        <input
          type="text"
          placeholder="Search Location"
          className="w-full border mt-1"
          value={formState.location}
          onChange={(e) => handleInputChange("location", e.target.value)}
        />
      </div>
      <div className="">
        <div className="grid md:grid-flow-col gap-4">
          <div>
            <label className="text-sm text-gray-500">Check In</label>
            <input
              type="date"
              className="w-full border mt-1"
              value={formState.checkIn}
              onChange={(e) => handleInputChange("checkIn", e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm text-gray-500">Check Out</label>
            <input
              type="date"
              className="w-full border mt-1"
              value={formState.checkOut}
              onChange={(e) => handleInputChange("checkOut", e.target.value)}
            />
          </div>
        </div>
      </div>
    </section>
  );

  const renderFormFields = () => {
    switch (activeTab) {
      case 0: // Apartments
        return (
          <div className="grid md:grid-flow-col items-center gap-4 w-full">
            {renderCommonFields()}
            <div className="">
              <label className="text-sm text-gray-500">Number of Beds</label>
              <div className="flex items-center md:space-x-2 mt-1 border rounded p-1 justify-between border-gray-500">
                <button
                  onClick={() =>
                    handleInputChange("beds", Math.max(1, formState.beds - 1))
                  }
                  className="px-3 py-1 border rounded text-lg"
                >
                  -
                </button>
                <span className="px-3 text-lg">{formState.beds}</span>
                <button
                  onClick={() => handleInputChange("beds", formState.beds + 1)}
                  className="px-3 py-1 border rounded text-lg"
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
          <section className="grid md:grid-flow-col gap-4">
            {renderCommonFields()}
            <div className="md:col-span-2">
              <label className="text-sm text-gray-500">Guests</label>
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
          <>
            <div className="md:col-span-6">
              <label className="text-sm text-gray-500">Location</label>
              <input
                type="text"
                placeholder="Convention Hall Location"
                className="w-full p-2 border rounded mt-1"
                value={formState.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
              />
            </div>
            <div className="md:col-span-4">
              <label className="text-sm text-gray-500">Event Date</label>
              <input
                type="date"
                className="w-full p-2 border rounded mt-1"
                value={formState.eventDate}
                onChange={(e) => handleInputChange("eventDate", e.target.value)}
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm text-gray-500">Capacity</label>
              <input
                type="number"
                placeholder="No. of guests"
                className="w-full p-2 border rounded mt-1"
                value={formState.eventCapacity}
                onChange={(e) =>
                  handleInputChange("eventCapacity", e.target.value)
                }
              />
            </div>
          </>
        );

      case 5: // Transports
        return (
          <TransportForm
            {...formState}
            onInputChange={handleInputChange}
            handleMultiCityChange={handleMultiCityChange}
            addMultiCityTrip={addMultiCityTrip}
            removeMultiCityTrip={removeMultiCityTrip}
          />
        );

      default:
        return renderCommonFields();
    }
  };

  const handleSearch = () => {
    console.log("Search with:", { activeTab, ...formState });
    // Implement search logic
  };

  return (
    <section id="hero-section" className="relative w-full">
      <div className="absolute inset-0 h-full">
        <Image
          src="/img/bg1.jpg"
          alt="hero background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      <div className="md:container mx-auto relative z-10 md:flex flex-col items-center md:justify-start min-h-[calc(100vh-64px)] md:pt-28 md:pb-16">
        <div className=" sm:mt-10 w-[90%] md:w-[80%] mx-auto">
          {/* Tabs */}
          <div className="flex justify-center items-center pt-24 md:pt-0">
            <div className="bg-white rounded-t-lg shadow w-[80%] py-1 px-2 md:p-0">
              <div className="flex space-x-1 justify-between">
                {tabs.map((tab) => {
                  const IconComponent = tab.Icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center md:px-4 md:py-3 text-sm transition-colors
                        ${
                          activeTab === tab.id
                            ? "text-blue-600 border-b-2 border-blue-600"
                            : "text-gray-600 hover:text-blue-600"
                        }`}
                    >
                      <IconComponent className="w-6 md:w-5 md:h-5 mr-1" />
                      <span className="hidden md:block">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Search Form */}
          <div className="bg-white px-10 py-6 rounded-b-lg shadow w-full">
            <div className="grid grid-cols-1 gap-4 items-center">
              {renderFormFields()}
            </div>

            {/* Search Button */}
            <div className="mt-6 flex justify-center">
              <button
                onClick={handleSearch}
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                <MagnifyingGlassIcon className="w-5 h-5 inline mr-2" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
