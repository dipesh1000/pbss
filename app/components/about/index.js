import CustomChip from '@/app/common/customChip';
import HeadingTitle from '@/app/common/headingTitle';
import React from 'react';

const AboutComponents = () => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: 'url("/aboutbg.png")' }}
    >
      <div className="container mx-auto py-20 px-20">
        <div className="flex">
          <div className="w-[500px]">
            <div
              className="h-[410px] bg-contain bg-no-repeat bg-center"
              style={{ backgroundImage: 'url("/shadowbg.png")' }}
            ></div>
          </div>
          <div className="flex-1">
            <div>
              <CustomChip label="About Us" />
              <div className="mt-4">
                <HeadingTitle title="Get high-quality health care for your needs" />
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
                experienced and caring team works diligently to empower lives
                and enable dreams, ensuring that every client can thrive,
                achieve their goals, and truly shine. Join us on a journey of
                empowerment and transformation, because at Personal Best, we
                believe in enabling dreams and fostering independence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponents;
