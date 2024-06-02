import React, { useState } from "react";
import InputField from "../atoms/InputField";
import SelectField from "../atoms/SelectField";
import Button from "../atoms/Button";

const AddArticleForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [stock, setStock] = useState(0);
  const [available, setAvailable] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (stock < 0) {
      alert("El stock no puede ser menor a 0");
      return;
    }
    onSubmit({ name, stock, available });
    setName("");
    setStock(0);
    setAvailable(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Nombre"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <InputField
        label="Stock"
        type="number"
        value={stock}
        onChange={(e) => setStock(parseInt(e.target.value))}
        min="0"
        required
      />
      <SelectField
        label="Disponibilidad"
        value={available}
        onChange={(e) => setAvailable(e.target.value === "true")}
        options={[
          { value: true, label: "Disponible" },
          { value: false, label: "No disponible" }
        ]}
      />
      <div className="flex justify-center">
        <Button text="Agregar" />
      </div>
    </form>
  );
};

export default AddArticleForm;
