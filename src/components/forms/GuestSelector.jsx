import { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const GuestSelector = ({ adults, children, rooms, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  // Close modal on escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="relative w-full">
      <button
        className="w-full p-4 bg-white/10 border border-white/20 rounded-2xl text-left text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-md transition-all shadow-inner flex items-center justify-between"
        onClick={toggleModal}
      >
        <span>
          {adults} Adults - {children} Children - {rooms} Rooms
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
          {/* Backdrop click area */}
          <div className="absolute inset-0" onClick={() => setIsOpen(false)}></div>
          
          {/* Modal Container */}
          <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-800 hover:bg-gray-100 p-2 rounded-full transition-all"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Guests & Rooms</h3>
            
            <div className="space-y-6">
              {[
                { label: "Adults", value: adults, min: 1, key: "adults", desc: "Ages 13 or above" },
                { label: "Children", value: children, min: 0, key: "children", desc: "Ages 2–12" },
                { label: "Rooms", value: rooms, min: 1, key: "rooms", desc: "Number of rooms" },
              ].map(({ label, value, min, key, desc }) => (
                <div key={key} className="flex justify-between items-center">
                  <div>
                    <span className="block font-bold text-gray-800 text-lg">{label}</span>
                    <span className="block text-sm text-gray-500 font-medium">{desc}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => onChange(key, value - 1)}
                      disabled={value <= min}
                      className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full disabled:opacity-30 disabled:hover:bg-transparent hover:bg-gray-100 hover:border-gray-400 transition-all text-gray-800 text-lg"
                      aria-label={`Decrease ${label}`}
                    >
                      -
                    </button>
                    <span className="w-6 text-center tabular-nums font-bold text-lg text-gray-900">{value}</span>
                    <button
                      onClick={() => onChange(key, value + 1)}
                      className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 hover:border-gray-400 transition-all text-gray-800 text-lg"
                      aria-label={`Increase ${label}`}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => setIsOpen(false)}
              className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-full transition-all shadow-lg shadow-blue-500/30"
            >
              Apply Selection
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GuestSelector;
