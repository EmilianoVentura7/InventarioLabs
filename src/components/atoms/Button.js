import React from "react";

const Button = ({ onClick, text }) => (
  <button onClick={onClick} className="bg-blue-500 text-white px-4 py-2 rounded-md">
    {text}
  </button>
);

export default Button;
