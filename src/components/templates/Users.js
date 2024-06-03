import React, { useState } from "react";
import Sidebar from "../organisms/Sidebar";

const Users = () => {
  // Datos de ejemplo para la tabla 
  const [users] = useState([
    { usuario: "Usuario 1", correo: "Correo 1", nombre: "Nombre 1", apellidos: "Apellidos", cargo: "Cargo" },
    { usuario: "Usuario 2", correo: "Correo 2", nombre: "Nombre 2", apellidos: "Apellidos", cargo: "Cargo" },
    { usuario: "Usuario 3", correo: "Correo 3", nombre: "Nombre 3", apellidos: "Apellidos", cargo: "Cargo" },
    { usuario: "Usuario 4", correo: "Correo 4", nombre: "Nombre 4", apellidos: "Apellidos", cargo: "Cargo" },
    { usuario: "Usuario 5", correo: "Correo 5", nombre: "Nombre 5", apellidos: "Apellidos", cargo: "Cargo" },
  ]);

  // Estado para el término de búsqueda
  const [searchTerm, setSearchTerm] = useState("");
  // Estado para el número de página actual
  const [currentPage, setCurrentPage] = useState(1);
  // Estado para el número de artículos por página
  const [usersPerPage] = useState(5);

  // Función para filtrar los usuarios según el término de búsqueda
  const filteredUsers = users.filter((user) =>
    user.usuario.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Índice del último usuario en la página actual
  const indexOfLastUser = currentPage * usersPerPage;
  // Índice del primer usuario en la página actual
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  // Usuarios de la página actual
  const currentUsers = filteredUsers.slice(
    indexOfFirstUser,
    indexOfLastUser
  );
  
  // Cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Usuarios</h1>
        <div className="flex mb-6">
          <input
            type="text"
            placeholder="Buscar usuario"
            className="border border-gray-300 rounded-l-md px-4 py-2 w-full max-w-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="overflow-x-auto bg-white shadow-md rounded-md">
          <table className="min-w-full table-auto">
            <thead className="bg-orange-500 text-white">
              <tr>
                <th className="px-4 py-2">Usuario</th>
                <th className="px-4 py-2">Correo</th>
                <th className="px-4 py-2">Nombre</th>
                <th className="px-4 py-2">Apellidos</th>
                <th className="px-4 py-2">Cargo</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user) => (
                <tr
                  key={user.usuario}
                  className="odd:bg-gray-100 even:bg-gray-50"
                >
                  <td className="border px-4 py-2 text-center">
                    {user.usuario}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    {user.correo}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    {user.nombre}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    {user.apellidos}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    {user.cargo}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Paginación */}
        <div className="flex justify-center mt-6">
          <button
            className={`mx-1 px-3 py-1 rounded-md ${
              currentPage === 1
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-orange-500 hover:bg-orange-600 text-white"
            }`}
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Anterior
          </button>
          {Array.from(
            { length: Math.ceil(filteredUsers.length / usersPerPage) },
            (_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`mx-1 px-3 py-1 rounded-md ${
                  currentPage === index + 1
                    ? "bg-orange-500 text-white"
                    : "bg-white hover:bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            )
          )}
          <button
            className={`mx-1 px-3 py-1 rounded-md ${
              currentPage ===
              Math.ceil(filteredUsers.length / usersPerPage)
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-orange-500 hover:bg-orange-600 text-white"
            }`}
            onClick={() => paginate(currentPage + 1)}
            disabled={
              currentPage ===
              Math.ceil(filteredUsers.length / usersPerPage)
            }
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default Users;
