import React from 'react';
import { TbBath } from 'react-icons/tb';
import { HiArrowLongRight } from 'react-icons/hi2';
import Link from 'next/link';
import CustomChip from '@/app/common/customChip';
import HeadingTitle from '@/app/common/headingTitle';

const data = [
  {
    icon: <TbBath fontSize={30} />,
    title: 'Assistance with Self Care Activities',
    arrowIcon: (
      <HiArrowLongRight
        fontSize={30}
        className="absolute bottom-8 left-7 transition-all duration-300 ease-in-out group-hover:bottom-8 group-hover:right-7 group-hover:left-auto"
      />
    ),
  },
  {
    icon: <TbBath fontSize={30} />,
    title: 'Assistance with Self Care Activities',
    arrowIcon: (
      <HiArrowLongRight
        fontSize={30}
        className="absolute bottom-8 left-7 transition-all duration-300 ease-in-out group-hover:bottom-8 group-hover:right-7 group-hover:left-auto"
      />
    ),
  },
  {
    icon: <TbBath fontSize={30} />,
    title: 'Assistance with Self Care Activities',
    arrowIcon: (
      <HiArrowLongRight
        fontSize={30}
        className="absolute bottom-8 left-7 transition-all duration-300 ease-in-out group-hover:bottom-8 group-hover:right-7 group-hover:left-auto"
      />
    ),
  },
  {
    icon: <TbBath fontSize={30} />,
    title: 'Assistance with Self Care Activities',
    arrowIcon: (
      <HiArrowLongRight
        fontSize={30}
        className="absolute bottom-8 left-7 transition-all duration-300 ease-in-out group-hover:bottom-8 group-hover:right-7 group-hover:left-auto"
      />
    ),
  },
  {
    icon: <TbBath fontSize={30} />,
    title: 'Assistance with Self Care Activities',
    arrowIcon: (
      <HiArrowLongRight
        fontSize={30}
        className="absolute bottom-8 left-7 transition-all duration-300 ease-in-out group-hover:bottom-8 group-hover:right-7 group-hover:left-auto"
      />
    ),
  },
  {
    icon: <TbBath fontSize={30} />,
    title: 'Assistance with Self Care Activities',
    arrowIcon: (
      <HiArrowLongRight
        fontSize={30}
        className="absolute bottom-8 left-7 transition-all duration-300 ease-in-out group-hover:bottom-8 group-hover:right-7 group-hover:left-auto"
      />
    ),
  },
  {
    icon: <TbBath fontSize={30} />,
    title: 'Assistance with Self Care Activities',
    arrowIcon: (
      <HiArrowLongRight
        fontSize={30}
        className="absolute bottom-8 left-7 transition-all duration-300 ease-in-out group-hover:bottom-8 group-hover:right-7 group-hover:left-auto"
      />
    ),
  },
  {
    icon: <TbBath fontSize={30} />,
    title: 'Assistance with Self Care Activities',
    arrowIcon: (
      <HiArrowLongRight
        fontSize={30}
        className="absolute bottom-8 left-7 transition-all duration-300 ease-in-out group-hover:bottom-8 group-hover:right-7 group-hover:left-auto"
      />
    ),
  },
];
const ServiceComponent = () => {
  return (
    <div className="bg-lightpalebg">
      <div className="container mx-auto px-20 py-20">
        <div className="  text-center ">
          <CustomChip label="Our Services" />
        </div>
        <div className="pt-4">
          <div className="flex flex-col items-center py-2">
            <HeadingTitle title="Assistance to improve daily living" />
            <p className="py-2 w-[550px] px-2 text-center">
              Our NDIS support services offer a broad range of assistance to
              improve daily living and foster community involvement. These
              include:
            </p>
          </div>

          <ul className="grid gap-4 grid-cols-4">
            {data.map((item, idx) => {
              return (
                <li
                  key={idx + 1}
                  className="border-gray-200 border bg-white text-darkText transition-all duration-300 ease-in-out hover:text-white hover:bg-primaryBlue rounded pt-12 pb-16 px-8 relative group"
                >
                  <Link href="/">
                    <>
                      {item.icon}
                      <p className="py-2 font-bold ">{item.title}</p>
                      {item.arrowIcon}
                    </>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;
