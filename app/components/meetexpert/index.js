import { AboutFamilyBox, AboutImageBox } from '@/app/common/aboutimagebox';
import CustomChip from '@/app/common/customChip';
import HeadingTitle from '@/app/common/headingTitle';
import React from 'react';

const MeetExperts = ({ isFag, title }) => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center h-[610px]"
      //  style={{ backgroundImage: 'url("/aboutbg.png")' }}
    >
      <div className="container mx-auto py-20 px-20">
        <div className="flex flex-wrap">
          <div className="lg:w-[500px] w-full relative">
            <div className="absolute right-0 z-[0]">
              <AboutImageBox />
            </div>

            <div className="h-[410px] pt-8 pl-8 top-10 right-20 w-[400px] absolute bg-playbg rounded-2xl">
              <AboutFamilyBox imgsrc={'/musicicon.png'} />
            </div>
          </div>
          <div className="flex-1 pl-20">
            <div>
              {isFag ? <CustomChip label="About Us" /> : ''}
              <div className="mt-4">
                <HeadingTitle
                  title={`${
                    title ?? 'Get high-quality health care for your needs'
                  }`}
                />
              </div>
              <p className="text-darkText mb-4">
                At Personal Best Support Services, we are dedicated to
                transforming the lives of individuals with disabilities by
                providing personalized, compassionate, and client-centered care.
                Our mission is to empower our clients, helping them achieve
                their dreams and live life to the fullest. 
              </p>{' '}
              <p className="text-darkText">
                We are passionate about offering tailored support that meets the
                unique needs and aspirations of each person we serve. Our
              </p>
              <div className="quote py-6">
                <p className="font-semibold text-black">Ms. Pragati Regmi</p>
                <span className="text-darkText text-sm">Clinical Officer</span>
              </div>
              <blockquote className="relative  border-blue-500 italic pl-4 text-gray-700 before:content-['\201C'] after:content-['\201D'] before:text-4xl before:absolute before:-top-2 before:-left-4 after:text-4xl after:absolute after:-bottom-2 after:-right-4">
                We are passionate about offering tailored support that meets the
                unique needs and aspirations of each person we serve. Our
                experienced and caring team works diligently to empower lives
                and enable dreams.
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetExperts;
