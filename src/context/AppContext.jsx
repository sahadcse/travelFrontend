import React, { createContext, useState } from "react";

// Create the context with a default value
const AppContext = createContext({});

// Create a provider component
export const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    // Add your initial state here
  });

  const value = {
    state,
    setState,
    // Add other context values and functions here
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Export the context for consumption in other components
export default AppContext;
