import { TbBath } from 'react-icons/tb';
import { HiArrowLongRight } from 'react-icons/hi2';
import { PiPaintBrushHouseholdThin } from 'react-icons/pi';
import { SlSupport } from 'react-icons/sl';
import { HiOutlineUserGroup } from 'react-icons/hi2';
import { BsCupHot } from 'react-icons/bs';
import { TbHomeHeart } from 'react-icons/tb';
import { TbBed } from 'react-icons/tb';
import { GiStrongMan } from 'react-icons/gi';

export const Services = [
  {
    icon: <TbBath fontSize={30} />,
    title: 'Assistance with Self Care Activities',
    imgUrl: '/serviceone.png',
    arrowIcon: (
      <HiArrowLongRight
        fontSize={30}
        className="absolute bottom-8 left-7 transition-all duration-300 ease-in-out group-hover:bottom-8 group-hover:right-7 group-hover:left-auto"
      />
    ),
    id: 1,
    color: '#B8DDFE',
  },
  {
    icon: <HiOutlineUserGroup fontSize={30} />,
    title: 'Assistance with Social & Community Participation',
    imgUrl: '/servicetwo.png',
    arrowIcon: (
      <HiArrowLongRight
        fontSize={30}
        className="absolute bottom-8 left-7 transition-all duration-300 ease-in-out group-hover:bottom-8 group-hover:right-7 group-hover:left-auto"
      />
    ),
    id: 2,
    color: '#DAABFF',
  },
  {
    icon: <PiPaintBrushHouseholdThin fontSize={30} />,
    title: 'Household Cleaning',
    imgUrl: '/servicethree.png',
    arrowIcon: (
      <HiArrowLongRight
        fontSize={30}
        className="absolute bottom-8 left-7 transition-all duration-300 ease-in-out group-hover:bottom-8 group-hover:right-7 group-hover:left-auto"
      />
    ),
    id: 3,
    color: '#9AEBB4',
  },
  {
    icon: <SlSupport fontSize={30} />,
    title: 'Support Coordination',
    imgUrl: '/serviceone.png',
    arrowIcon: (
      <HiArrowLongRight
        fontSize={30}
        className="absolute bottom-8 left-7 transition-all duration-300 ease-in-out group-hover:bottom-8 group-hover:right-7 group-hover:left-auto"
      />
    ),
    id: 4,
    color: '#EAF57E',
  },
  {
    icon: <GiStrongMan fontSize={30} />,
    title: 'Psychosocial Recovery Coaching',
    imgUrl: '/servicetwo.png',
    arrowIcon: (
      <HiArrowLongRight
        fontSize={30}
        className="absolute bottom-8 left-7 transition-all duration-300 ease-in-out group-hover:bottom-8 group-hover:right-7 group-hover:left-auto"
      />
    ),
    id: 5,
    color: '#B8DDFE',
  },
  {
    icon: <TbBed fontSize={30} />,
    title: 'Short-Term Accommodation / Respite',
    imgUrl: '/servicethree.png',
    arrowIcon: (
      <HiArrowLongRight
        fontSize={30}
        className="absolute bottom-8 left-7 transition-all duration-300 ease-in-out group-hover:bottom-8 group-hover:right-7 group-hover:left-auto"
      />
    ),
    id: 6,
    color: '#9AEBB4',
  },
  {
    icon: <TbHomeHeart fontSize={30} />,
    title: 'Medium-Term Accommodation',
    imgUrl: '/serviceone.png',
    arrowIcon: (
      <HiArrowLongRight
        fontSize={30}
        className="absolute bottom-8 left-7 transition-all duration-300 ease-in-out group-hover:bottom-8 group-hover:right-7 group-hover:left-auto"
      />
    ),
    id: 7,
    color: '#9AEBB4',
  },
  {
    icon: <BsCupHot fontSize={30} />,
    title: 'Individualised Living Options (ILO)',
    imgUrl: '/servicetwo.png',
    arrowIcon: (
      <HiArrowLongRight
        fontSize={30}
        className="absolute bottom-8 left-7 transition-all duration-300 ease-in-out group-hover:bottom-8 group-hover:right-7 group-hover:left-auto"
      />
    ),
    id: 8,
    color: '#9AEBB4',
  },
];
