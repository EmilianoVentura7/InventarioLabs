import React from "react";
import AddArticleForm from "../molecules/AddArticleForm";

const AddArticleModal = ({ isOpen, onClose, onAdd }) => {
  if (!isOpen) return null;

return (
    <div className="fixed inset-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="bg-white p-8 rounded-lg z-10">
            <h2 className="text-2xl font-bold mb-4">Agregar Artículo</h2>
            <AddArticleForm onSubmit={onAdd} />
            <div className="flex justify-center">
                <button onClick={onClose} className="bg-red-600 text-white px-4 py-2 m-4 rounded-md">
                    Cancelar
                </button>
            </div>
        </div>
    </div>
);
};

export default AddArticleModal;
