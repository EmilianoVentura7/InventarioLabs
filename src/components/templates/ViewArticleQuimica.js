import React, { useState } from "react";
import Sidebar from "../organisms/Sidebar";
import AddArticleModal from "../organisms/AddArticleModal";

const ViewArticlesQuimica = () => {
  const [articles] = useState([
    { id: 1, name: "Artículo 1", stock: 4, available: true },
    { id: 2, name: "Artículo 2", stock: 7, available: false },
    { id: 3, name: "Artículo 3", stock: 2, available: true },
    { id: 4, name: "Artículo 4", stock: 2, available: true },
    { id: 5, name: "Artículo 5", stock: 14, available: false },
    { id: 6, name: "Artículo 6", stock: 21, available: true },
    { id: 7, name: "Artículo 7", stock: 6, available: true },
    { id: 8, name: "Artículo 8", stock: 3, available: false },
    { id: 9, name: "Artículo 9", stock: 9, available: true },
    { id: 10, name: "Artículo 10", stock: 7, available: true },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(5);

  const filteredArticles = articles.filter((article) =>
    article.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const handleDelete = (id) => {
    console.log(`Eliminar artículo con ID: ${id}`);
  };

  const handleEdit = (id) => {
    console.log(`Editar artículo con ID: ${id}`);
  };

  const handleAdd = () => {
    console.log("Agregar nuevo artículo");
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <AddArticleModal isOpen={isModalOpen} onClose={closeModal} onAdd={handleAdd} />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Artículos</h1>
        <div className="flex mb-6">
          <input
            type="text"
            placeholder="Buscar artículo"
            className="border border-gray-300 rounded-l-md px-4 py-2 w-full max-w-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-r-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            onClick={openModal}
          >
            Agregar
          </button>
        </div>
        <div className="overflow-x-auto bg-white shadow-md rounded-md">
          <table className="min-w-full table-auto">
            <thead className="bg-orange-500 text-white">
              <tr>
                <th className="px-4 py-2">Nombre</th>
                <th className="px-4 py-2">Stock</th>
                <th className="px-4 py-2">Disponibilidad</th>
                <th className="px-4 py-2">Acción</th>
              </tr>
            </thead>
            <tbody>
              {currentArticles.map((article) => (
                <tr key={article.id} className="odd:bg-gray-100 even:bg-gray-50">
                  <td className="border px-4 py-2 text-center">{article.name}</td>
                  <td className="border px-4 py-2 text-center">{article.stock}</td>
                  <td className="border px-4 py-2 text-center">
                    {article.available ? "Disponible" : "No disponible"}
                  </td>
                  <td className="border px-4 py-2 flex justify-center">
                    <img
                      src="../../assets/icons/editar.svg"
                      alt="Editar"
                      className="cursor-pointer mr-2 hover:scale-110 transition-transform"
                      onClick={() => handleEdit(article.id)}
                    />
                    <img
                      src="../../assets/icons/basura.svg"
                      alt="Eliminar"
                      className="cursor-pointer hover:scale-110 transition-transform"
                      onClick={() => handleDelete(article.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
              currentPage === Math.ceil(filteredArticles.length / articlesPerPage)
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-orange-500 hover:bg-orange-600 text-white"
            }`}
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(filteredArticles.length / articlesPerPage)}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewArticlesQuimica;
