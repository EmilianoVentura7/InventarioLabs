import React from 'react';
import Sidebar from '../organisms/Sidebar';

const LaboratorioMaker = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="flex-1">
        {/* Contenido de la vista de artículos */}
      </div>
    </div>
  );
};

export default LaboratorioMaker;
