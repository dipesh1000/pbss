import React from 'react';
import { CiPhone } from 'react-icons/ci';
import { CiMail } from 'react-icons/ci';
import { LiaFacebookSquare } from 'react-icons/lia';
import { LuInstagram } from 'react-icons/lu';
import { TbBrandYoutube } from 'react-icons/tb';
import { FaXTwitter } from 'react-icons/fa6';
import Image from 'next/image';
import { RiFacebookBoxLine } from 'react-icons/ri';

const TopHeader = () => {
  return (
    <div className="flex items-center justify-between flex-wrap bg-white">
      <ul className="flex">
        <li className="flex items-center text-primaryBlue text-sm">
          <a>
            <CiPhone />
          </a>
          <span className="pl-1 ">9999999999</span>
        </li>
        <li className="flex items-center text-primaryBlue pl-4">
          <a>
            <CiMail />
          </a>
          <span className="pl-1 text-sm">
            info@personalbestsupportservices.com.au
          </span>
        </li>
      </ul>
      <ul className="flex items-center w-32 leading-loose justify-between border-l h-10 border-gray-300 pl-9">
        <li>
          <a>
            <RiFacebookBoxLine fontSize={25} className="text-primaryBlue " />
          </a>
        </li>
        <li className="pl-2">
          <a>
            <LuInstagram fontSize={25} className="text-primaryBlue" />
          </a>
        </li>
        <li className="pl-2">
          <a>
            <TbBrandYoutube fontSize={25} className="text-primaryBlue" />
          </a>
        </li>
        <li className="pl-2">
          <a>
            <FaXTwitter fontSize={25} className="text-primaryBlue" />
          </a>
        </li>
      </ul>
      <ul className="flex items-center border-l border-gray-300 pl-9">
        <li className="flex items-center">
          <Image width={30} height={20} src="/image.png" />
          <a className="pl-2">
            <b className="text-sm">Registered NDIS Provider</b>
          </a>
        </li>
        <li className="pl-6">
          <div>
            <button className="bg-primaryBlue text-white py-2 px-4">
              Make a Referral
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TopHeader;
