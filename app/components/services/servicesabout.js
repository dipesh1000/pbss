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
import Slider from 'react-slick';

const Servicesabout = ({ topLabel }) => {
  const data = Services;
  var settings = {
    dots: false,
    infinite: true,
    speed: 4000, // Adjust the speed for smoothness
    slidesToShow: 5, // Number of visible slides
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Continuous sliding effect
    cssEase: 'linear', // Linear easing for smooth transition
    pauseOnHover: true, // Continuous autoplay
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="relative h-[700px]">
      <div className="container mx-auto relative pl-20 pt-20 pb-10">
        <div className="  text-center ">
          <CustomChip label={`${topLabel ?? 'Our Services'}`} />
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
        </div>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {data.map((item, idx) => {
            return (
              <li
                key={idx + 1}
                className="border-gray-200  shadow-lg border bg-white text-darkText transition-all duration-300 ease-in-out hover:text-white hover:bg-primaryBlue rounded-2xl  relative group"
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
        </Slider>
      </div>
    </div>
  );
};

export default Servicesabout;
