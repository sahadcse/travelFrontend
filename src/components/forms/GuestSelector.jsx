import { useState } from "react";

const GuestSelector = ({ adults, children, rooms, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        className="w-full p-3 border rounded mt-1 text-left"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-controls="guest-selector-dropdown"
      >
        {adults} Adults - {children} Children - {rooms} Rooms
      </button>
      {isOpen && (
        <div
          id="guest-selector-dropdown"
          className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-4 w-full mt-1 z-50"
        >
          <div className="space-y-4">
            {[
              { label: "Adults", value: adults, min: 1, key: "adults" },
              { label: "Children", value: children, min: 0, key: "children" },
              { label: "Rooms", value: rooms, min: 1, key: "rooms" },
            ].map(({ label, value, min, key }) => (
              <div key={key} className="flex justify-between items-center">
                <span>{label}</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onChange(key, value - 1)}
                    disabled={value <= min}
                    className="px-2 py-1 border rounded disabled:opacity-50"
                    aria-label={`Decrease ${label}`}
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{value}</span>
                  <button
                    onClick={() => onChange(key, value + 1)}
                    className="px-2 py-1 border rounded"
                    aria-label={`Increase ${label}`}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GuestSelector;
