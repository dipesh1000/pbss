import CustomButton from '@/app/common/button';
import CustomSelect from '@/app/common/customSelect';
import CustomTextArea from '@/app/common/customTextArea';
import FileUploadInput from '@/app/common/customUpload';
import Custominput from '@/app/common/custominput';
import React from 'react';
import { GoArrowRight } from 'react-icons/go';

const ContactForm = ({ services }) => {
  return (
    <div className="grid gap-4 lg:px-0 px-4 justify-center shadow-xl border-gray-200 border rounded-lg py-6">
      <h2 className="font-bold text-xl">For Inquiry</h2>
      <Custominput label="Your Name" type="standard" placeholder="Your Name" />
      <Custominput
        label="Email Address*"
        type="standard"
        placeholder="Enter Email Address"
      />
      <Custominput
        label="Phone Number*"
        type="standard"
        placeholder="Enter Phone Number"
      />
      <CustomSelect
        label="Services*"
        defaultvalue="Select Services"
        data={services}
      />
      <FileUploadInput />
      <CustomTextArea type="standard" label="Write Message" />
      <div>
        <CustomButton
          endIcon={<GoArrowRight />}
          label="Send"
          className="bg-pinkctabg w-full flex justify-center mt-8 font-bold"
        />
      </div>
    </div>
  );
};

export default ContactForm;
