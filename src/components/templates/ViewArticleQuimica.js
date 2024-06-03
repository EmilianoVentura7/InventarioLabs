import React, { useState } from "react";
import Sidebar from "../organisms/Sidebar";
import AddArticleModal from "../organisms/AddArticleModal";

const ViewArticlesQuimica = () => {
  // Datos de ejemplo para la tabla 
  const [articles] = useState([
    { id: 1, name: "Artículo 1", stock: 3, available: true },
    { id: 2, name: "Artículo 2", stock: 7, available: false },
    { id: 3, name: "Artículo 3", stock: 2, available: true },
    { id: 4, name: "Artículo 4", stock: 2, available: true },
    { id: 5, name: "Artículo 5", stock: 15, available: false },
    { id: 6, name: "Artículo 6", stock: 25, available: true },
    { id: 7, name: "Artículo 7", stock: 9, available: true },
    { id: 8, name: "Artículo 8", stock: 10, available: false },
    { id: 9, name: "Artículo 9", stock: 9, available: true },
    { id: 10, name: "Artículo 10", stock: 7, available: true },
  ]);

  // Estado para el término de búsqueda
  const [searchTerm, setSearchTerm] = useState("");
  // Estado para el número de página actual
  const [currentPage, setCurrentPage] = useState(1);
  // Estado para el número de artículos por página
  const [articlesPerPage] = useState(5);

  // Función para filtrar los artículos según el término de búsqueda
  const filteredArticles = articles.filter((article) =>
    article.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Índice del último artículo en la página actual
  const indexOfLastArticle = currentPage * articlesPerPage;
  // Índice del primer artículo en la página actual
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  // Artículos de la página actual
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  // Función para manejar la eliminación de un artículo
  const handleDelete = (id) => {
    // Aquí puedes escribir la lógica para eliminar el artículo con el ID proporcionado
    console.log(`Eliminar artículo con ID: ${id}`);
  };

  // Función para manejar la edición de un artículo
  const handleEdit = (id) => {
    // Aquí puedes escribir la lógica para editar el artículo con el ID proporcionado
    console.log(`Editar artículo con ID: ${id}`);
  };

  // Función para manejar la acción de agregar un artículo
  const handleAdd = () => {
    // Aquí puedes escribir la lógica para agregar un nuevo artículo
    console.log("Agregar nuevo artículo");
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  
  // Cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex">
      <Sidebar />
      <AddArticleModal isOpen={isModalOpen} onClose={closeModal} onAdd={handleAdd} />

      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Artículos</h1>
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Buscar artículo"
            className="border border-gray-300 rounded-md px-3 py-2 w-full max-w-md mr-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-md"
            onClick={openModal}
          >
            Agregar
          </button>
        </div>
        <div className="overflow-x-auto border rounded-md">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-orange-500">
                <th className="px-4 py-2 text-neutral-100">Nombre</th>
                <th className="px-4 py-2 text-neutral-100">Stock</th>
                <th className="px-4 py-2 text-neutral-100">Disponibilidad</th>
                <th className="px-4 py-2 text-neutral-100">Acción</th>
              </tr>
            </thead>
            <tbody>
              {currentArticles.map((article) => (
                <tr
                  key={article.id}
                  className="odd:bg-gray-100 even:bg-gray-50"
                >
                  <td className="border px-4 py-2 text-center">
                    {article.name}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    {article.stock}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    {article.available ? "Disponible" : "No disponible"}
                  </td>
                  <td className="border px-4 py-2 flex justify-center">
                    <img
                      src="../../assets/icons/editar.svg"
                      alt="Editar"
                      className="cursor-pointer mr-2"
                      onClick={() => handleEdit(article.id)}
                    />
                    <img
                      src="../../assets/icons/basura.svg"
                      alt="Eliminar"
                      className="cursor-pointer"
                      onClick={() => handleDelete(article.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Paginación */}
        <div className="flex justify-center mt-4">
          <button
            className={`mx-1 px-3 py-1 rounded-md ${
              currentPage === 1 ? "bg-gray-400 cursor-not-allowed" : "bg-orange-500 hover:bg-orange-600 text-white"
            }`}
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Anterior
          </button>
          {Array.from(
            { length: Math.ceil(filteredArticles.length / articlesPerPage) },
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
              Math.ceil(filteredArticles.length / articlesPerPage)
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-orange-500 hover:bg-orange-600 text-white"
            }`}
            onClick={() => paginate(currentPage + 1)}
            disabled={
              currentPage ===
              Math.ceil(filteredArticles.length / articlesPerPage)
            }
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewArticlesQuimica;
