import React from 'react';

const Copyright = () => {
  return (
    <div className="bg-primaryBlue text-center text-white py-2 mt-4">
      <span>
        &copy;Copyright {new Date().getFullYear()} Personal Best Support
        Services
      </span>
    </div>
  );
};

export default Copyright;
