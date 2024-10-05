import React from 'react';

const CustomButton = ({ label, className, startIcon, ...rest }) => {
  return (
    <button
      className={` py-2 px-4 font-medium outline-none flex items-center rounded ${
        className ?? ''
      }`}
      {...rest}
    >
      {startIcon}&nbsp; {label ?? 'Button'}
    </button>
  );
};

export default CustomButton;
