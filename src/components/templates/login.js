import React, { useState } from 'react';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (username === 'admin' && password === '123456') { 
            window.location.href = '/home'; 
        } else {
            setError('Usuario o contraseña incorrectos');
        }
    };

    return (
        <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-200'>
            <h1 className='text-5xl font-semibold text-center'>¡Bienvenido!</h1>
            <p className='font-medium text-lg text-gray-500 mt-4'>Para visualizar los laboratorios por favor introduce tus datos.</p>
            <div className='mt-8'>
                <div>
                    <label className='text-lg font-medium'>Usuario</label>
                    <input
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        placeholder='Introduce tu usuario'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label className='text-lg font-medium'>Contraseña</label>
                    <input
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        placeholder='Introduce tu Contraseña'
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <p className='text-red-500 mt-2'>{error}</p>}
            </div>
            <div className='mt-8 flex flex-col gap-y-4'>
                <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  py-2 rounded-xl bg-orange-500 text-white text-lg font-bold' onClick={handleLogin}>Iniciar Sesión</button>
            </div>
        </div>
    )
}
