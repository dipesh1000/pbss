import React from 'react';

const CustomButton = ({ label, className, startIcon, endIcon, ...rest }) => {
  return (
    <button
      className={` py-2 px-4 font-medium outline-none flex items-center rounded ${
        className ?? ''
      }`}
      {...rest}
    >
      {startIcon ? <>{startIcon} &nbsp;</> : ''} {label ?? 'Button'}{' '}
      {endIcon ? <>&nbsp; {endIcon}</> : ''}
    </button>
  );
};

export default CustomButton;
