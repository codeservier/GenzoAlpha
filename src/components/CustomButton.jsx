import React from 'react';

const CustomButton = ({
  text = 'Click Me',
  onClick = () => {},
  type = 'button',
  color = 'bg-blue-500',
  textColor = 'text-white',
  size = 'px-4 py-4',
  rounded = 'rounded-md',
  disabled = false,
}) => {
  const baseClasses = `font-semibold ${size} ${rounded} ${color} ${textColor} border border-transparent shadow-sm hover:${color === 'bg-blue-500' ? 'bg-blue-600' : 'bg-gray-600'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default CustomButton;
