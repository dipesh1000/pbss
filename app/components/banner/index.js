import CustomButton from '@/app/common/button';
import React from 'react';
import { LuPhoneCall } from 'react-icons/lu';
import { GrSend } from 'react-icons/gr';
import Image from 'next/image';

const HomeBanner = () => {
  return (
    <div>
      <div
        className="2xl:h-[700px] h-[600px] bg-cover bg-center"
        style={{ backgroundImage: 'url("/bannerbg.png")' }}
      >
        <div className="container mx-auto sm:px-20 px-5">
          <div className=" flex items-center flex-wrap-reverse md:flex-nowrap  2xl:h-[700px] h-[600px]">
            <div className="md:w-[630px] w-full">
              <h1 className="text-white sm:text-5xl text-2xl leading-normal font-bold md:w-[630px]">
                A Registered Leading Disability Support Providers
              </h1>
              <p className="text-white sm:block hidden">
                At Personal Best Support Services, we are dedicated to
                transforming the lives of individuals with disabilities by
                providing personalized, compassionate, and client-centered care.
              </p>
              <div className="flex mt-4">
                <CustomButton
                  startIcon={<GrSend />}
                  className="bg-pinkctabg"
                  label="Make a Refferal"
                />
                <CustomButton
                  className="ml-2 text-primaryBlue bg-white"
                  startIcon={<LuPhoneCall />}
                  label="Call 00000000000"
                />
              </div>
            </div>
            <div className="sm:self-end">
              <Image
                width="400"
                height="350"
                src="/bannerimg.png"
                alt="A Registered Leading Disability Support Providers"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
