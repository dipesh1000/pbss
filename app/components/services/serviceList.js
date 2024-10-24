'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { Suspense, useEffect, useState } from 'react';
import Slider from 'react-slick';
import { ImageComp } from './comp/ImageComp';

export const ServiceList = ({ data, serviceData }) => {
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

  const [thumbnails, setThumbnails] = useState([]);

  useEffect(() => {
    const fetchThumbnails = async () => {
      const thumbs = await Promise.all(
        serviceData.map(async (item) => {
          const res = await fetch(
            `${proces.env.NEXT_PUBLIC_BASE_URL}/media/${item?.featured_media}`
          );
          const data = await res.json();
          return { ...item, attachement: data.source_url };
        })
      );
      setThumbnails(thumbs);
    };

    fetchThumbnails();
  }, [serviceData]);

  console.log(thumbnails, 'serviceData ??');

  return (
    <div className="slider-container">
      <Suspense fallback={<p>Loading...</p>}>
        <Slider {...settings}>
          {thumbnails?.map((item, idx) => {
            return (
              <li
                key={idx + 1}
                className="border-gray-200  shadow-lg border bg-white text-darkText transition-all duration-300 ease-in-out hover:text-white hover:bg-primaryBlue rounded-2xl  relative group"
              >
                <Link href="/">
                  <div className="card">
                    <div>
                      <ImageComp attUrl={item?.attachement} />
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
                      <p className="py-4 font-bold">{item?.title?.rendered}</p>
                      {/* {item.arrowIcon} */}
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </Slider>
      </Suspense>
    </div>
  );
};
