'use client';
import Link from 'next/link';
import React, { Suspense, useEffect, useState } from 'react';
import Slider from 'react-slick';
import { ImageComp } from './comp/ImageComp';
import { getAttachment } from '@/API';
import ServiceCard from './comp/ServiceCard';

export const ServiceList = ({ data, serviceData }) => {
  var settings = {
    dots: false,
    infinite: serviceData?.length > 3,
    speed: 4000, // Adjust the speed for smoothness
    slidesToShow: Math.min(serviceData?.length, 4), // Number of visible slides
    centerMode: serviceData?.length < 4, // Enable center mode if there's only one item
    centerPadding: serviceData?.length === 3 ? '80px' : '40px',
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 0, // Continuous sliding effect
    cssEase: 'linear', // Linear easing for smooth transition
    pauseOnHover: true, // Continuous autoplay
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 4,
    //       slidesToScroll: 4,
    //       // infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  const [thumbnails, setThumbnails] = useState([]);

  useEffect(() => {
    const fetchThumbnails = async () => {
      const thumbs = await Promise.all(
        serviceData?.map(async (item) => {
          let data = await getAttachment(item);
          return { ...item, attachement: data.source_url };
        })
      );
      setThumbnails(thumbs);
    };

    fetchThumbnails();
  }, [serviceData]);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      {thumbnails.length > 3 ? (
        <div className="slider-container">
          <Slider {...settings}>
            {thumbnails?.map((item, idx) => {
              return <ServiceCard key={idx + 1} item={item} />;
            })}
          </Slider>
        </div>
      ) : (
        <ul className="grid gap-4 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
          {thumbnails?.map((item, idx) => {
            return <ServiceCard key={idx + 1} item={item} />;
          })}
        </ul>
      )}
    </Suspense>
  );
};
