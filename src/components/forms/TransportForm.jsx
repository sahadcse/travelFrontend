import {
  TruckIcon,
  GlobeAsiaAustraliaIcon,
  CalendarDaysIcon,
  MapPinIcon,
  ClockIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";

const TransportForm = ({
  transportCategory,
  pickup,
  dropoff,
  tripType,
  transportType,
  pickupTime,
  packageType,
  packageDuration,
  passengerCount,
  onInputChange,
}) => {
  const categories = [
    {
      id: "trip",
      Icon: TruckIcon,
      label: "Trip Transport",
      bgColor: "from-blue-600 to-blue-700",
    },
    {
      id: "package",
      Icon: GlobeAsiaAustraliaIcon,
      label: "Tour Package",
      bgColor: "from-emerald-600 to-emerald-700",
    },
  ];

  const transportTypes = [
    { id: "car", label: "Car", capacity: "4 Seats", icon: "🚗" },
    { id: "bus", label: "Bus", capacity: "36 Seats", icon: "🚌" },
    { id: "micro", label: "Micro", capacity: "11 Seats", icon: "🚐" },
  ];

  const tripTypes = [
    { id: "one-way", label: "One Way Trip" },
    { id: "round-trip", label: "Round Trip" },
    { id: "scheduled", label: "Scheduled Service" },
  ];

  const packageTypes = [
    {
      id: "boat",
      label: "Boat Tour",
      icon: "🚤",
      description: "Scenic river & lake tours",
      startingPrice: "4,999",
      features: ["3-4 Hours", "Max 8 people", "Snacks included"],
    },
    {
      id: "helicopter",
      label: "Helicopter Tour",
      icon: "🚁",
      description: "Aerial city & mountain views",
      startingPrice: "15,999",
    },
    {
      id: "ship",
      label: "Ship Cruise",
      icon: "🚢",
      description: "Luxury ocean experiences",
      startingPrice: "9,999",
    },
  ];

  const renderCategoryButtons = () => (
    <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
      {categories.map(({ id, Icon, label, desc, bgColor }) => (
        <button
          key={id}
          className={`rounded-2xl bg-gradient-to-r ${bgColor} text-white shadow-xl p-3 px-5 flex items-center gap-3 transition-all hover:-translate-y-1 hover:shadow-2xl ${
            transportCategory === id
              ? "ring-2 ring-white ring-offset-2 ring-offset-transparent scale-105"
              : "opacity-80 hover:opacity-100"
          }`}
          onClick={() => onInputChange("transportCategory", id)}
        >
          <Icon className="w-6 h-6" />
          <div className="text-left">
            <h3 className="text-sm font-bold tracking-wide">{label}</h3>
            {desc && <p className="text-xs text-white/80">{desc}</p>}
          </div>
        </button>
      ))}
    </div>
  );

  const renderTripForm = () => (
    <div className="space-y-6 w-full animate-[fadeInUp_0.5s_ease-out_forwards]">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 bg-white/5 p-4 rounded-3xl border border-white/10 shadow-inner">
        <div className="flex flex-col md:flex-row gap-3 md:items-center">
          <span className="text-sm font-semibold text-white/90">Trip Type:</span>
          <div className="flex flex-wrap gap-2">
            {tripTypes.map((type) => (
              <button
                key={type.id}
                className={`px-4 py-2 border rounded-xl text-sm font-medium transition-all ${
                  tripType === type.id
                    ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/30"
                    : "bg-white/10 border-white/20 text-white hover:bg-white/20"
                }`}
                onClick={() => onInputChange("tripType", type.id)}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:items-center">
          <span className="text-sm font-semibold text-white/90">Transport:</span>
          <div className="flex flex-wrap gap-2">
            {transportTypes.map(({ id, label, icon }) => (
              <button
                key={id}
                className={`border rounded-xl text-sm py-2 px-3 transition-all ${
                  transportType === id
                    ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/30"
                    : "bg-white/10 border-white/20 text-white hover:bg-white/20"
                }`}
                onClick={() => onInputChange("transportType", id)}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{icon}</span>
                  <h3 className="text-xs font-semibold">{label}</h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-end">
        <div className="w-full">
          <label className="flex items-center gap-2 text-sm font-semibold text-white/95 drop-shadow-md ml-1 mb-1.5">
            <BuildingOfficeIcon className="w-4 h-4" />
            From
          </label>
          <input
            type="text"
            className="w-full bg-white/10 border border-white/20 text-white placeholder-white/70 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-md transition-all shadow-inner"
            placeholder="Pickup location"
            value={pickup}
            onChange={(e) => onInputChange("pickup", e.target.value)}
          />
        </div>
        <div className="w-full">
          <label className="flex items-center gap-2 text-sm font-semibold text-white/95 drop-shadow-md ml-1 mb-1.5">
            <MapPinIcon className="w-4 h-4" />
            To
          </label>
          <input
            type="text"
            className="w-full bg-white/10 border border-white/20 text-white placeholder-white/70 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-md transition-all shadow-inner"
            placeholder="Drop-off location"
            value={dropoff}
            onChange={(e) => onInputChange("dropoff", e.target.value)}
          />
        </div>
        <div className="w-full">
          <label className="flex items-center gap-2 text-sm font-semibold text-white/95 drop-shadow-md ml-1 mb-1.5">
            <ClockIcon className="w-4 h-4" />
            Pickup Time
          </label>
          <input
            type="time"
            className="w-full bg-white/10 border border-white/20 text-white placeholder-white/70 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-md transition-all shadow-inner [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert"
            value={pickupTime}
            onChange={(e) => onInputChange("pickupTime", e.target.value)}
          />
        </div>
      </div>
    </div>
  );

  const renderPackageForm = () => (
    <div className="space-y-6 w-full animate-[fadeInUp_0.5s_ease-out_forwards]">
      <div className="flex flex-wrap gap-3">
        {packageTypes.map(({ id, label, icon }) => (
          <button
            key={id}
            className={`border rounded-xl p-3 px-5 transition-all ${
              packageType === id
                ? "bg-emerald-600 border-emerald-500 text-white shadow-lg shadow-emerald-500/30"
                : "bg-white/10 border-white/20 text-white hover:bg-white/20 shadow-inner"
            }`}
            onClick={() => onInputChange("packageType", id)}
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">{icon}</span>
              <h3 className="text-sm font-bold">{label}</h3>
            </div>
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {packageTypes
          .filter(({ id }) => id === packageType)
          .map(({ id, description, startingPrice, features }) => (
            <div
              key={id}
              className="p-5 flex flex-col md:flex-row bg-emerald-900/40 backdrop-blur-md border border-emerald-500/30 rounded-3xl justify-between lg:w-3/4 xl:w-2/3 shadow-inner"
            >
              <div className="mb-4 md:mb-0">
                <p className="text-sm font-medium text-emerald-100 capitalize">
                  {description}
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-xs text-emerald-200/80 uppercase tracking-wider font-semibold">
                    Starting from
                  </span>
                  <div className="text-xl font-black text-white">৳{startingPrice}</div>
                </div>
              </div>

              {features && features.length > 0 && (
                <ul className="text-sm text-emerald-50 list-disc pl-5 space-y-1 my-auto">
                  {features.map((feature, index) => (
                    <li key={index} className="leading-tight font-medium">
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:w-3/4 xl:w-2/3">
        <div className="w-full">
          <label className="flex items-center gap-2 text-sm font-semibold text-white/95 drop-shadow-md ml-1 mb-1.5">
            <CalendarDaysIcon className="w-4 h-4" />
            Duration (hours)
          </label>
          <input
            type="number"
            className="w-full bg-white/10 border border-white/20 text-white placeholder-white/70 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-md transition-all shadow-inner"
            min="1"
            value={packageDuration}
            onChange={(e) => onInputChange("packageDuration", e.target.value)}
          />
        </div>
        <div className="w-full">
          <label className="flex items-center gap-2 text-sm font-semibold text-white/95 drop-shadow-md ml-1 mb-1.5">
            <UserGroupIcon className="w-4 h-4" />
            Passengers
          </label>
          <input
            type="number"
            className="w-full bg-white/10 border border-white/20 text-white placeholder-white/70 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-md transition-all shadow-inner"
            min="1"
            value={passengerCount}
            onChange={(e) => onInputChange("passengerCount", e.target.value)}
          />
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full pb-2">
      {renderCategoryButtons()}
      <div className="transition-all duration-300 ease-in-out">
        {transportCategory === "trip" ? renderTripForm() : renderPackageForm()}
      </div>
    </section>
  );
};

export default TransportForm;
