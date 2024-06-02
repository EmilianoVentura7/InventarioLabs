import React from 'react';

const InputField = ({ label, ...rest }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-bold mb-2">{label}</label>
      <input className="border border-gray-300 rounded-md px-3 py-2 w-full" {...rest} />
    </div>
  );
};

export default InputField;
