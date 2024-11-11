import CustomChip from '@/app/common/customChip';
import HeadingTitle from '@/app/common/headingTitle';
import Image from 'next/image';
import React from 'react';
import { GoPlay } from 'react-icons/go';

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
const WhyChooseUsComponents = ({ pagekey, data: acfData }) => {
  return (
    <div
      className="h-full bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: 'url("/featureimage.png")' }}
    >
      <div
        className="h-full bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: 'url("/featureoverlay.png")' }}
      >
        <div className="container mx-auto md:px-20 px-5 py-20">
          <div className="flex flex-wrap">
            <div className="md:w-[600px] w-full">
              <CustomChip label="Why Us" bgColor="bg-pinkctabg" />
              <div className="py-4 md:w-[400px] w-full">
                <HeadingTitle
                  color="text-pinkctabg"
                  title={`${acfData.title}`}
                />
              </div>
              <div className="pt-20">
                <Image height={80} width={80} src="/love.png" />
                <p className="text-white">
                  <b>Registered NDIS Provider</b>
                </p>
              </div>
            </div>
            <div className="flex-1 md:mt-6">
              {pagekey === 'about' ? (
                <div className="flex items-center justify-center">
                  <GoPlay className="text-5xl text-white" />
                </div>
              ) : (
                <ul>
                  <li className="flex mb-10">
                    <div className="text-white md:w-48 w-full text-4xl">
                      <Image
                        height={60}
                        width={60}
                        src="/whyusicon.png"
                        alt="why choose us"
                      />
                    </div>
                    <div className="pl-5">
                      <h2 className="text-white font-semibold mb-2 text-lg">
                        {acfData?.why_us_title_one}
                      </h2>
                      <p className="text-white">{acfData?.why_us_value_one}</p>
                    </div>
                  </li>
                  <li className="flex mb-10">
                    <div className="text-white md:w-48 w-full text-4xl">
                      <Image
                        height={60}
                        width={60}
                        src="/whyusicon.png"
                        alt="why choose us"
                      />
                    </div>
                    <div className="pl-5">
                      <h2 className="text-white font-semibold mb-2 text-lg">
                        {acfData?.why_us_title_two}
                      </h2>
                      <p className="text-white">{acfData?.why_us_value_two}</p>
                    </div>
                  </li>
                  <li className="flex mb-10">
                    <div className="text-white md:w-48 w-full text-4xl">
                      <Image
                        height={60}
                        width={60}
                        src="/whyusicon.png"
                        alt="why choose us"
                      />
                    </div>
                    <div className="pl-5">
                      <h2 className="text-white font-semibold mb-2 text-lg">
                        {acfData?.why_us_title_three}
                      </h2>
                      <p className="text-white">
                        {acfData?.why_us_value_three}
                      </p>
                    </div>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsComponents;
