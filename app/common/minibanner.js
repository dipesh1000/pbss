import React from 'react';

const Minibanner = ({ pageName, aboutPage }) => {
  return (
    <div
      className="h-[358px] bg-contain bg-no-repeat bg-center"
      style={{ backgroundImage: 'url("/aboutbanner.png")' }}
    >
      <div className="container mx-auto px-20">
        <div className="flex items-center justify-center h-[358px]">
          <div className="w-60 text-center">
            <span className="font-semibold text-pinkctabg  text-sm">
              {pageName ?? 'Page Name'}
            </span>
            <h1 className="text-2xl text-white text-center font-bold">
              {aboutPage ?? 'Here the page will go.'}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Minibanner;
