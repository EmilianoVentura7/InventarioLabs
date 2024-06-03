import React, { createContext, useState } from 'react';

const LabContext = createContext();

export const LabProvider = ({ children }) => {
  const [lab, setLab] = useState({
    name: "Laboratorio Maker",
    path: "/view-article-maker"
  });

  return (
    <LabContext.Provider value={{ lab, setLab }}>
      {children}
    </LabContext.Provider>
  );
};

export default LabContext;
