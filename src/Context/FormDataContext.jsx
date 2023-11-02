import React, { createContext, useState } from "react";

export const FormDataContext = createContext();

export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({});

  const saveFormData = (data) => {
    setFormData(data);
  };

  return (
    <FormDataContext.Provider value={{ formData, saveFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};