import CustomChip from '@/app/common/customChip';
import HeadingTitle from '@/app/common/headingTitle';
import Image from 'next/image';
import React from 'react';
import { RiHandHeartLine } from 'react-icons/ri';

const data = [
  {
    title: 'Personalised Support',
    content:
      'At Personal Best Support Services, we are dedicated to transforming the lives of individuals with disabilities by providing personalized, compassionate, and client-centered care. Our mission is to empower our clients',
  },
  {
    title: 'Personalised Support',
    content:
      'At Personal Best Support Services, we are dedicated to transforming the lives of individuals with disabilities by providing personalized, compassionate, and client-centered care. Our mission is to empower our clients',
  },
  {
    title: 'Personalised Support',
    content:
      'At Personal Best Support Services, we are dedicated to transforming the lives of individuals with disabilities by providing personalized, compassionate, and client-centered care. Our mission is to empower our clients',
  },
];
const WhyChooseUsComponents = () => {
  return (
    <div
      className="h-full bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: 'url("/featureimage.png")' }}
    >
      <div
        className="h-full bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: 'url("/featureoverlay.png")' }}
      >
        <div className="container px-20 mx-auto py-20">
          <div className="flex">
            <div className="w-[600px]">
              <CustomChip label="Why Us" bgColor="bg-pinkctabg" />
              <div className="py-4 w-[400px]">
                <HeadingTitle
                  color="text-pinkctabg"
                  title="Why Choose Personal Best Support Services
as your NDIS provider in Australia"
                />
              </div>
              <div className="pt-20">
                <Image height={80} width={80} src="/love.png" />
                <p className="text-white">
                  <b>Registered NDIS Provider</b>
                </p>
              </div>
            </div>
            <div className="flex-1">
              <ul>
                {data.map((item, idx) => (
                  <li key={idx + 1} className="flex mb-10">
                    <div className="text-white w-48 text-4xl">
                      <RiHandHeartLine />
                    </div>
                    <div>
                      <h2 className="text-white font-semibold mb-2 text-lg">
                        {item?.title}
                      </h2>
                      <p className="text-white">{item?.content}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsComponents;
