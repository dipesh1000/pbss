import React from 'react';
import { ImageComp } from './ImageComp';
import Link from 'next/link';

const ServiceCard = ({ key, item }) => {
  return (
    <li
      key={key}
      className="border-gray-200   shadow-lg border bg-white text-darkText transition-all duration-300 ease-in-out hover:text-white hover:bg-primaryBlue rounded-2xl relative group max-w-xs"
    >
      <Link href={`/service/${item.id}`}>
        <div className="card">
          <div className="rounded-t-2xl overflow-hidden">
            <ImageComp attUrl={item?.attachement ?? '/Dummyimg.jpg'} />
          </div>
          <div
            className={`px-8 rounded-b-2xl `}
            style={{
              background: `${item?.acf?.color}`,
              height: '120px',
              overflow: 'hidden',
            }}
          >
            {/* {item.icon} */}
            <p className="py-4 font-bold">{item?.title?.rendered}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ServiceCard;
