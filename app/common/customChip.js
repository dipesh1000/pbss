import React from 'react';

const CustomChip = ({ label, bgColor }) => {
  return (
    <span
      className={`${
        bgColor ?? 'bg-primaryBlue'
      } text-white w-48 rounded-3xl py-3 text-sm px-4`}
    >
      {label ?? 'Label'}
    </span>
  );
};

export default CustomChip;
