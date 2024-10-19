import React, { createContext, useState } from "react";

// Create a Context for authentication
export const StateContext = createContext();

// Create a provider component
const StateProvider = ({ children }) => {
  const [name, setName] = useState();

  return (
    <StateContext.Provider value={{ name, setName }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
