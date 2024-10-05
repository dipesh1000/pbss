import React from 'react';

const HeadingTitle = ({ title, color }) => {
  return (
    <h2
      className={`${color ?? ''} font-bold text-4xl leading-normal
`}
    >
      {title}
    </h2>
  );
};

export default HeadingTitle;
