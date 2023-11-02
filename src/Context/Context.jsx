import React, { createContext, useState } from "react";

// Create a context
export const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const [formData, setFormData] = useState({});

  // Function to update the form data
  const updateFormData = (data) => {
    setFormData(data);
  };

  // Value to be provided to the components
  const value = {
    formData,
    updateFormData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};