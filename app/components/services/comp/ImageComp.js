import Image from 'next/image';
import React from 'react';

export const ImageComp = async ({ attUrl }) => {
  return (
    <Image
      height="200"
      width="200"
      src={attUrl ?? `/serviceone.png`}
      alt={'asdadad'}
      style={{ width: '100%' }}
    />
  );
};
