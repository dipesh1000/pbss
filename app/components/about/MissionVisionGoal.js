'use client';
import { AboutFamilyBox, AboutImageBox } from '@/app/common/aboutimagebox';
import CustomChip from '@/app/common/customChip';
import HeadingTitle from '@/app/common/headingTitle';
import React, { useState } from 'react';

const MissionVisionGoalComponents = ({ companyStatement }) => {
  const [state, setState] = useState(0);
  return (
    <div className="bg-no-repeat bg-cover bg-center lg:h-[710px]">
      <div className="container mx-auto py-20 lg:px-20 px-5">
        <div className="my-4 text-center">
          <HeadingTitle title={'OUR MISSON VISION & GOAL'} />
        </div>
        <tabs className="flex justify-center border-gray-200 border-t border-b py-2 mb-10">
          <div
            className="w-32 hover:cursor-pointer"
            onClick={() => setState(0)}
          >
            <div
              className={`font-bold ${state === 0 ? 'text-primaryBlue' : ''}`}
            >
              MISSION
            </div>
          </div>
          <div
            className="w-32 hover:cursor-pointer"
            onClick={() => setState(1)}
          >
            <div
              className={`font-bold ${state === 1 ? 'text-primaryBlue' : ''}`}
            >
              VISION
            </div>
          </div>
          <div
            className="w-32 hover:cursor-pointer"
            onClick={() => setState(2)}
          >
            <div
              className={`font-bold ${state === 2 ? 'text-primaryBlue' : ''}`}
            >
              GOAL
            </div>
          </div>
        </tabs>
        <div className="flex sm:flex-nowrap flex-wrap px-20">
          <div className="sm:w-[40%] w-full ">
            {/* <div className="absolute right-0 z-[0]">
              <AboutImageBox src="/wheelchair.png" />
            </div> */}

            <div
              className="w-full  sm:block hidden pl-10 pt-10 rounded-2xl bg-contain bg-no-repeat bg-center"
              style={{ backgroundColor: '#E4ECF9' }}
            >
              <AboutFamilyBox imgsrc={'/wheelchair.png'} />
            </div>
          </div>
          <div className="flex-1 md:pl-20 self-center pl-5">
            <div>
              <h6 className="text-lg font-bold">
                {state === 0
                  ? 'Our Mission'
                  : state === 1
                  ? 'Our Vision'
                  : 'Goal'}
              </h6>
              <p className="text-darkText mb-4">
                {state === 0
                  ? companyStatement?.mission
                  : state === 1
                  ? companyStatement?.vision
                  : companyStatement?.goal}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionGoalComponents;
