import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LabContext from '../atoms/LabContext';

export default function Home() {
  const { setLab } = useContext(LabContext);

  const handleLabSelection = (name, path) => {
    setLab({ name, path });
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <h1 className='text-5xl font-bold mb-12 text-gray-800'>¡Bienvenido a Inventario Hampton!</h1>
      <div className='flex flex-wrap justify-center gap-8'>
        <Link
          to="/view-article-maker"
          className='w-80 bg-gradient-to-tr from-orange-500 to-indigo-900 rounded-lg shadow-lg p-6 m-4 flex flex-col items-center justify-center text-white transform transition-transform hover:scale-105 hover:shadow-2xl'
          onClick={() => handleLabSelection("Laboratorio Maker", "/view-article-maker")}
        >
          <img src="https://cdn.icon-icons.com/icons2/38/PNG/512/hammer_5015.png" alt="Laboratorio Maker" className='h-40 object-cover rounded-lg mb-6' />
          <h2 className='text-3xl font-semibold text-center'>Laboratorio Maker</h2>
        </Link>
        <Link
          to="/view-article-quimica"
          className='w-80 bg-gradient-to-tr from-green-500 to-blue-900 rounded-lg shadow-lg p-6 m-4 flex flex-col items-center justify-center text-white transform transition-transform hover:scale-105 hover:shadow-2xl'
          onClick={() => handleLabSelection("Laboratorio de Química", "/view-article-quimica")}
        >
          <img src="https://cdn.icon-icons.com/icons2/830/PNG/512/chemistry-tube_icon-icons.com_66637.png" alt="Laboratorio de Química" className='h-40 object-cover rounded-lg mb-6' />
          <h2 className='text-3xl font-semibold text-center'>Laboratorio de Química</h2>
        </Link>
      </div>
    </div>
  );
}
