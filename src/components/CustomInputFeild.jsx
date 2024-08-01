import React from 'react';

const CustomInputField = ({ label, type = 'text', placeholder = '' }) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="mb-1 text-sm font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
};

export default CustomInputField;
