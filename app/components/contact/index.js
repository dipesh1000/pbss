import Custominput from '@/app/common/custominput';
import HeadingTitle from '@/app/common/headingTitle';
import React from 'react';

const ContactComponent = () => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: 'url("/contactbg.png")' }}
    >
      <div className="container mx-auto py-20 px-20">
        <div className="flex">
          <div className="w-[500px]">
            <p>Contact Us</p>
            <HeadingTitle title="Ask a Question" />
            <div className="grid grid-cols-2 gap-4">
              <Custominput label="Your Name" />
              <Custominput label="MAIL" />
              <Custominput label="Your Phone" name="phone" />
              <Custominput label="Select Services" />
            </div>
            <div className="w-[500px]">
              <Custominput
                label="Write Message"
                width="w-[500px]"
                height="h-30"
              />
            </div>
          </div>
          <div className="w-[500px]"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
