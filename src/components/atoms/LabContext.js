import React, { createContext, useState } from 'react';

const LabContext = createContext();

export const LabProvider = ({ children }) => {
  const [labName, setLabName] = useState("Laboratorio Maker");

  return (
    <LabContext.Provider value={{ labName, setLabName }}>
      {children}
    </LabContext.Provider>
  );
};

export default LabContext;
