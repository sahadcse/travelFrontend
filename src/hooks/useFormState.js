import { useState } from "react";

const useFormState = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [formState, setFormState] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
    beds: 1,
    adults: 2,
    children: 0,
    rooms: 1,
    eventDate: "",
    eventCapacity: "",
    tripType: "one-way",
    transportType: "car",
    pickup: "",
    dropoff: "",
    pickupTime: "",
    returnDate: "",
    multiCityTrips: [{ pickup: "", dropoff: "", date: "" }],
    transportCategory: "trip", // 'trip' or 'package'
    // Package properties
    packageType: "boat", // 'boat', 'helicopter', 'ship'
    packageDuration: "",
    passengerCount: 1,
  });

  const updateFormState = (updates) => {
    setFormState((prev) => ({ ...prev, ...updates }));
  };

  const handleInputChange = (field, value) => {
    updateFormState({ [field]: value });
  };

  const handleGuestChange = (type, value) => {
    const minValues = { adults: 1, children: 0, rooms: 1 };
    updateFormState({
      [type]: Math.max(minValues[type], value),
    });
  };

  const handleMultiCityChange = (index, field, value) => {
    const newTrips = [...formState.multiCityTrips];
    newTrips[index][field] = value;
    updateFormState({ multiCityTrips: newTrips });
  };

  const addMultiCityTrip = () => {
    updateFormState({
      multiCityTrips: [
        ...formState.multiCityTrips,
        { pickup: "", dropoff: "", date: "" },
      ],
    });
  };

  const removeMultiCityTrip = (index) => {
    if (formState.multiCityTrips.length > 1) {
      updateFormState({
        multiCityTrips: formState.multiCityTrips.filter((_, i) => i !== index),
      });
    }
  };

  const handlePackageChange = (type, value) => {
    updateFormState({ packageType: type });
  };

  return {
    activeTab,
    setActiveTab,
    formState,
    handleInputChange,
    handleGuestChange,
    handleMultiCityChange,
    addMultiCityTrip,
    removeMultiCityTrip,
    updateFormState,
    handlePackageChange,
  };
};

export default useFormState;
