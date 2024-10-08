import React from 'react';

const Custominput = ({ label, height, widht, type, ...rest }) => {
  return (
    <div className="relative w-full max-w-sm">
      {/* <label htmlFor="email" className="block text-sm font-bold text-gray-700">
        {label}
      </label> */}
      <label htmlFor="email" className="text-gray-700 mb-2 font-semibold">
        {label}
      </label>
      <input
        type="text"
        id="email"
        name="email"
        className={`mt-1 ${height ?? 'h - 12'} block ${widht ?? 'w-full'}  ${
          type === 'standard' ? 'border rounded-md shadow-sm' : 'border-b-2'
        } border-gray-300 focus:border-primaryBlue focus:outline-none focus:ring-0 sm:text-sm px-4 py-2`}
        placeholder="Enter your email"
        {...rest}
      />
    </div>
  );
};

export default Custominput;
