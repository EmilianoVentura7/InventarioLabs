import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <div className='flex flex-row'>
                <Link to="/view-article-maker" className='w-80 bg-gradient-to-tr from-orange-500 to-indigo-900 rounded-lg shadow-lg p-4 m-4 flex flex-col items-center justify-center text-white'>
                    <img src="https://cdn.icon-icons.com/icons2/38/PNG/512/hammer_5015.png" alt="Laboratorio Maker" className=' h-40 object-cover rounded-lg mb-4' />
                    <h2 className='text-2xl font-semibold'>Laboratorio Maker</h2>
                </Link>
                <Link to="/laboratorio-quimica" className='w-80 bg-gradient-to-tr from-orange-500 to-indigo-900 rounded-lg shadow-lg p-4 m-4 flex flex-col items-center justify-center text-white'>
                    <img src="https://cdn.icon-icons.com/icons2/830/PNG/512/chemistry-tube_icon-icons.com_66637.png" alt="Laboratorio de Química" className=' h-40 object-cover rounded-lg mb-4' />
                    <h2 className='text-2xl font-semibold'>Laboratorio de Química</h2>
                </Link>
            </div>
        </div>
    );
}
