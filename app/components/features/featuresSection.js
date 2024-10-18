import CustomChip from '@/app/common/customChip';
import HeadingTitle from '@/app/common/headingTitle';
import Image from 'next/image';
import React from 'react';
import { AiTwotonePlayCircle } from 'react-icons/ai';

const FeaturesSection = () => {
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
          <div className="flex flex-wrap">
            <div className="md:w-[600px] w-full">
              <CustomChip label="Why Us" bgColor="bg-pinkctabg" />
              <div className="py-4 w-[600px]">
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
            <div className="flex-1 md:mt-6">
              <div className="flex h-full items-center justify-center">
                <AiTwotonePlayCircle className="text-5xl text-white border rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
