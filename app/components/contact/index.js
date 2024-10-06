import CustomButton from '@/app/common/button';
import CustomTextArea from '@/app/common/customTextArea';
import Custominput from '@/app/common/custominput';
import HeadingTitle from '@/app/common/headingTitle';
import React from 'react';
import { GoArrowRight } from 'react-icons/go';
import { FiPhoneCall } from 'react-icons/fi';

const ContactComponent = () => {
  return (
    <div className="bg-skylightbg">
      <div
        className="bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: 'url("/contactbg.png")' }}
      >
        <div className="container mx-auto py-20 px-20">
          <div className="flex flex-wrap">
            <div className="md:w-[500px] w-full">
              <p className="text-darkText">Contact Us</p>
              <HeadingTitle title="Ask a Question" />
              <div className="grid gap-6 sm:grid-cols-2 grid-cols-1">
                <Custominput label="Your Name" />
                <Custominput label="MAIL" />
                <Custominput label="Your Phone" name="phone" />
                <Custominput label="Select Services" />
              </div>
              <div className="w-[500px] pt-6 grid grid-cols-1 gap-4">
                <CustomTextArea label="Write Message" />
              </div>
              <div>
                <CustomButton
                  endIcon={<GoArrowRight />}
                  label="Send"
                  className="bg-pinkctabg w-full flex justify-center mt-8 font-bold"
                />
              </div>
            </div>
            <div className="w-[500px] lg:pl-16 pl-0 pt-6">
              <div className="font-bold text-4xl leading-normal text-black">
                Direct {<span className="text-primaryBlue">Contact</span>} Us
              </div>
              <ul className="pt-4">
                <li className="flex items-center mb-8">
                  <div className="bg-primaryBlue mt-1 h-12 w-12 rounded-full flex justify-center items-center text-white">
                    <FiPhoneCall />
                  </div>
                  <div className="pl-4">
                    <p className="text-primaryBlue font-semibold">Call Us</p>
                    <span className="font-semibold text-darkText">
                      9884548855
                    </span>
                  </div>
                </li>
                <li className="flex items-center mb-8">
                  <div className="bg-primaryBlue mt-1 h-12 w-12 rounded-full flex justify-center items-center text-white">
                    <FiPhoneCall />
                  </div>
                  <div className="pl-4">
                    <p className="text-primaryBlue font-semibold">
                      Write a Email
                    </p>
                    <span className="font-semibold text-darkText">
                      info@personalbestsupportservices.com.au
                    </span>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="bg-primaryBlue mt-1 h-12 w-12 rounded-full flex justify-center items-center text-white">
                    <FiPhoneCall />
                  </div>
                  <div className="pl-4">
                    <p className="text-primaryBlue font-semibold">Location</p>
                    <span className="font-semibold text-darkText">
                      138 Green Rd, Wyndham Vale VIC 3024.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
