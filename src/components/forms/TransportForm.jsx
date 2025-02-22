import {
  TruckIcon,
  GlobeAsiaAustraliaIcon,
  CalendarDaysIcon,
  MapPinIcon,
  ClockIcon,
  UserGroupIcon,
  ArrowLongRightIcon,
  BuildingOfficeIcon,
  CurrencyDollarIcon,
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
      bgColor: "from-blue-500 to-blue-600",
    },
    {
      id: "package",
      Icon: GlobeAsiaAustraliaIcon,
      label: "Tour Package",
      bgColor: "from-emerald-500 to-emerald-600",
    },
  ];

  const transportTypes = [
    {
      id: "car",
      label: "Car",
      capacity: "4 Seats",
    },
    { id: "bus", label: "Bus", capacity: "36 Seats" },
    { id: "micro", label: "Micro", capacity: "11 Seats" },
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
    <div className="flex flex-wrap justify-center gap-2 p-2">
      {categories.map(({ id, Icon, label, desc, bgColor }) => (
        <button
          key={id}
          className={`rounded bg-gradient-to-r ${bgColor} text-white shadow p-2 flex items-center gap-2 hover:shadow-md`}
          onClick={() => onInputChange("transportCategory", id)}
        >
          <Icon className="w-4 h-4" />
          <div>
            <h3 className="text-xs font-semibold">{label}</h3>
            <p className="text-xs">{desc}</p>
          </div>
        </button>
      ))}
    </div>
  );

  const renderTripForm = () => (
    <div className="p-1 space-y-1">
      <div className="flex justify-between items-center gap-1">
        <div className="flex justify-center gap-1 items-center">
          <span className="text-sm font-semibold">Trip Type:</span>
          {tripTypes.map((type) => (
            <button
              key={type.id}
              className={`px-1.5 py-0.5 border rounded text-sm ${
                tripType === type.id
                  ? "bg-blue-500 text-white shadow-md"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => onInputChange("tripType", type.id)}
            >
              {type.label}
            </button>
          ))}
        </div>
        <div className="flex justify-center gap-1 mt-2 items-center">
          <span className="text-sm font-semibold">Transport Type:</span>
          {transportTypes.map(({ id, label, icon }) => (
            <button
              key={id}
              className={`border rounded text-sm py-1 px-2 ${
                transportType === id
                  ? "bg-blue-500 text-white shadow-md"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => onInputChange("transportType", id)}
            >
              <div className="flex items-center gap-1">
                <span className="text-lg">{icon}</span>
                <h3 className="text-xs font-semibold">{label}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-1 space-y-1 md:space-y-0">
        <div className="flex-1">
          <label className="flex items-center gap-1 text-sm">
            <BuildingOfficeIcon className="w-3 h-3" />
            From
          </label>
          <input
            type="text"
            className="w-[85%] border rounded py-0.5 px-1 text-sm"
            placeholder="Pickup location"
            value={pickup}
            onChange={(e) => onInputChange("pickup", e.target.value)}
          />
        </div>
        <div className="flex-1 md:mx-3">
          <label className="flex items-center gap-1 text-sm">
            <MapPinIcon className="w-3 h-3" />
            To
          </label>
          <input
            type="text"
            className="w-[92%] border rounded py-0.5 px-1 text-sm"
            placeholder="Drop-off location"
            value={dropoff}
            onChange={(e) => onInputChange("dropoff", e.target.value)}
          />
        </div>
        <div className="flex-1">
          <label className="flex items-center gap-1 text-sm">
            <ClockIcon className="w-3 h-3" />
            Pickup Time
          </label>
          <input
            type="time"
            className="w-[75%] border rounded py-0.5 px-1 text-sm"
            value={pickupTime}
            onChange={(e) => onInputChange("pickupTime", e.target.value)}
          />
        </div>
      </div>
    </div>
  );

  const renderPackageForm = () => (
    <div className="p-2 space-y-2">
      <div className="flex flex-wrap gap-2">
        {packageTypes.map(({ id, label, icon }) => (
          <button
            key={id}
            className={`border rounded p-1 ${
              packageType === id ? "bg-emerald-500 text-white" : "hover:shadow"
            }`}
            onClick={() => onInputChange("packageType", id)}
          >
            <div className="flex items-center gap-1">
              {/* <span className="text-xl">{icon}</span> */}
              <h3 className="text-sm font-semibold">{label}</h3>
            </div>
          </button>
        ))}
      </div>
      <div className="space-y-1">
        {packageTypes
          .filter(({ id }) => id === packageType)
          .map(({ id, description, startingPrice, features }) => (
            <div key={id} className=" p-1 flex bg-emerald-200 px-3 justify-between w-1/3">
              <div className="">
                {/* Description */}
                <p className="text-xs leading-tight">{description}</p>
                {/* Price */}
                <div className="mt-0.5 flex items-center gap-1">
                  <span className="text-xs">Starting from</span>
                  <div className="text-sm font-bold">৳{startingPrice}</div>
                </div>
              </div>

              {/* Features */}
              {features && features.length > 0 && (
                <ul className="text-xs list-disc pl-3 mt-0.5 space-y-0.5">
                  {features.map((feature, index) => (
                    <li key={index} className="leading-tight">
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
      </div>
      <div className="flex flex-col md:flex-row gap-2">
        <div className="flex-1">
          <label className="flex items-center gap-1">
            <CalendarDaysIcon className="w-4 h-4" />
            Duration (hours)
          </label>
          <input
            type="number"
            className="w-full border rounded"
            min="1"
            value={packageDuration}
            onChange={(e) => onInputChange("packageDuration", e.target.value)}
          />
        </div>
        <div className="flex-1">
          <label className="flex items-center gap-1">
            <UserGroupIcon className="w-4 h-4" />
            Number of Passengers
          </label>
          <input
            type="number"
            className="w-full border rounded"
            min="1"
            value={passengerCount}
            onChange={(e) => onInputChange("passengerCount", e.target.value)}
          />
        </div>
      </div>
    </div>
  );

  return (
    <>
      {renderCategoryButtons()}
      {transportCategory === "trip" ? renderTripForm() : renderPackageForm()}
    </>
  );
};

export default TransportForm;
