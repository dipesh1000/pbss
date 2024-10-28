import React from 'react';

const Minibanner = ({ pageName, aboutPage }) => {
  return (
    <div
      className="lg:h-[358px] h-[200px] lg:bg-cover bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: 'url("/aboutbanner.png")' }}
    >
      <div className="container mx-auto px-20">
        <div className="flex items-center justify-center lg:h-[358px] h-[200px]">
          <div className="lg:w-60 md:w-80 w-full text-center">
            <span className="font-semibold text-pinkctabg  text-sm">
              {pageName ?? 'Page Name'}
            </span>
            <h1 className="lg:text-2xl text-xl text-white text-center font-bold">
              {aboutPage ?? 'Here the page will go.'}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Minibanner;
