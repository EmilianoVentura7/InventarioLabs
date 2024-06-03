import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LabContext from '../atoms/LabContext';

export default function Home() {
  const { setLabName } = useContext(LabContext);

  const handleLabSelection = (labName) => {
    setLabName(labName);
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl font-bold mb-8'>¡Bienvenido a Inventario Hampton!</h1>
      <div className='flex flex-row'>
        <Link
          to="/view-article-maker"
          className='w-80 bg-gradient-to-tr from-orange-500 to-indigo-900 rounded-lg shadow-lg p-4 m-4 flex flex-col items-center justify-center text-white'
          onClick={() => handleLabSelection("Laboratorio Maker")}
        >
          <img src="https://cdn.icon-icons.com/icons2/38/PNG/512/hammer_5015.png" alt="Laboratorio Maker" className=' h-40 object-cover rounded-lg mb-4' />
          <h2 className='text-2xl font-semibold'>Laboratorio Maker</h2>
        </Link>
        <Link
          to="/view-article-quimica"
          className='w-80 bg-gradient-to-tr from-orange-500 to-indigo-900 rounded-lg shadow-lg p-4 m-4 flex flex-col items-center justify-center text-white'
          onClick={() => handleLabSelection("Laboratorio de Química")}
        >
          <img src="https://cdn.icon-icons.com/icons2/830/PNG/512/chemistry-tube_icon-icons.com_66637.png" alt="Laboratorio de Química" className=' h-40 object-cover rounded-lg mb-4' />
          <h2 className='text-2xl font-semibold'>Laboratorio de Química</h2>
        </Link>
      </div>
    </div>
  );
}
