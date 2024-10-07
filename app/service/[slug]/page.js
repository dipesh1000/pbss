import React from 'react';
import { TbBath } from 'react-icons/tb';
import { HiArrowLongRight } from 'react-icons/hi2';
import Minibanner from '@/app/common/minibanner';

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
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
  },
];
const page = () => {
  return (
    <div>
      <Minibanner
        pageName="Service"
        aboutPage="A Registered Leading Disability Support Providers"
      />
    </div>
  );
};

export default page;
