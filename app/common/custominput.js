import React from 'react';

const Custominput = ({ label, height, widht, ...rest }) => {
  return (
    <div className="relative w-full max-w-sm">
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        type="text"
        id="email"
        name="email"
        className={`mt-1 ${height ?? 'h - 12'} block ${
          widht ?? 'w-full'
        }  border-b-2 border-gray-300 focus:border-primaryBlue focus:outline-none focus:ring-0 sm:text-sm px-4 py-2`}
        placeholder="Enter your email"
        {...rest}
      />
    </div>
  );
};

export default Custominput;
