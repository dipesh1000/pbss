import CustomButton from '@/app/common/button';
import HeadingTitle from '@/app/common/headingTitle';
import React from 'react';
import { LuPhoneCall } from 'react-icons/lu';
import { LuSend } from 'react-icons/lu';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { ImLocation2 } from 'react-icons/im';
import Custominput from '@/app/common/custominput';
import CustomSelect from '@/app/common/customSelect';
import { Services } from '@/rawdata/service';
import FileUploadInput from '@/app/common/customUpload';
import CustomTextArea from '@/app/common/customTextArea';
import { GoArrowRight } from 'react-icons/go';
import { MapEmbed } from '@/app/common/EmbededMap';
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-20 py-16">
        <div className="maintitle mb-5">
          <HeadingTitle title="Contact Us" color="text-black" />
        </div>
        <div className="flex flex-wrap">
          <div className="lg:w-[48%] w-full">
            <ul className="mb-5">
              <li className="flex flex-wrap items-center mb-5">
                <div className="w-11">
                  <LuPhoneCall className="text-primaryBlue text-2xl" />
                </div>
                <div>
                  <p className="font-semibold text-black">Call Us</p>
                  <span className="text-darkText">0414 201 693</span>
                </div>
              </li>
              <li className="flex flex-wrap items-center mb-5">
                <div className="w-11">
                  <HiOutlineMailOpen className="text-primaryBlue text-2xl" />
                </div>
                <div>
                  <p className="font-semibold text-black">Email Us</p>
                  <span className="text-darkText">
                    info@personalbestsupportservices.com.au
                  </span>
                </div>
              </li>
              <li className="flex flex-wrap items-center">
                <div className="w-11">
                  <ImLocation2 className="text-primaryBlue text-2xl" />
                </div>
                <div>
                  <p className="font-semibold text-black">Address</p>
                  <span className="text-darkText">
                    138 Greens Rd, Wyndham Vale VIC 3024.
                  </span>
                </div>
              </li>
            </ul>
            <CustomButton
              label={'Make Refferal'}
              startIcon={<LuSend />}
              className="bg-pinkctabg"
            />
            <div className="w-[100%] pt-5">
              <p>GET DIRECTION</p>

              <MapEmbed />
            </div>
          </div>
          <div className="flex-1">
            <div className="lg:w-[480px] w-full block mx-auto ">
              <ContactForm services={Services} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
