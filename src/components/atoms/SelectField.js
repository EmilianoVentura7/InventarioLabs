import React from "react";

const SelectField = ({ label, value, onChange, options }) => (
  <div className="mb-4">
    <label htmlFor={label.toLowerCase()} className="block text-gray-700 font-bold mb-2">
      {label}
    </label>
    <select
      id={label.toLowerCase()}
      value={value}
      onChange={onChange}
      className="border border-gray-300 rounded-md px-3 py-2 w-full"
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default SelectField;
