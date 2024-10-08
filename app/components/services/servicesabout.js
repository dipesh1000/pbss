'use client';
import React from 'react';
import { TbBath } from 'react-icons/tb';
import { HiArrowLongRight } from 'react-icons/hi2';
import Link from 'next/link';
import CustomChip from '@/app/common/customChip';
import HeadingTitle from '@/app/common/headingTitle';
import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Services } from '@/rawdata/service';
import Image from 'next/image';

const Servicesabout = () => {
  const data = Services;

  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <div className="relative h-[700px]">
      <div className="container mx-auto relative pl-20 py-20">
        <div className="  text-center ">
          <CustomChip label="Our Services" />
        </div>
        <div className="pt-4">
          <div className="flex flex-col items-center py-2">
            <HeadingTitle title="NDIS Support Services for Everyday Living" />
            <p className="py-2 w-[550px] px-2 text-center">
              Our NDIS support services offer a broad range of assistance to
              improve daily living and foster community involvement. These
              include:
            </p>
          </div>
          <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="indicator"
              style={{ pathLength: scrollXProgress }}
            />
          </svg>
          <div className="absolute z-1 container pr-1">
            <ul
              ref={ref}
              className="flex space-x-4 flex-nowrap overflow-x-scroll"
            >
              {data.map((item, idx) => {
                return (
                  <li
                    key={idx + 1}
                    className="border-gray-200 min-w-[250px] w-[300px] shadow-lg border bg-white text-darkText transition-all duration-300 ease-in-out hover:text-white hover:bg-primaryBlue rounded-2xl  relative group"
                  >
                    <Link href="/">
                      <div className="card">
                        <div>
                          <Image
                            height="200"
                            width="200"
                            src={item.imgUrl}
                            alt={item.title}
                            style={{ width: '100%' }}
                          />
                        </div>
                        <div
                          className={`px-8 rounded-b-2xl`}
                          style={{
                            background: `${item.color}`,
                            height: '120px',
                            overflow: 'hidden',
                          }}
                        >
                          {/* {item.icon} */}
                          <p className="py-4 font-bold">{item.title}</p>
                          {/* {item.arrowIcon} */}
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicesabout;
