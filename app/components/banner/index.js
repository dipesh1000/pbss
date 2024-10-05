import Image from 'next/image';
import React from 'react';

const HomeBanner = () => {
  return (
    <div>
      <div
        className="h-[490px] bg-cover bg-center"
        style={{ backgroundImage: 'url("/bannerbg.png")' }}
      >
        <div className="container mx-auto px-6 flex items-center h-[490px]">
          <div>
            <h1 className="text-white text-5xl font-bold w-[630px]">
              A Registered Leading Disability Support Providers
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
