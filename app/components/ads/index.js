import CustomButton from '@/app/common/button';
import HeadingTitle from '@/app/common/headingTitle';
import { LuPhoneCall } from 'react-icons/lu';
import { GrSend } from 'react-icons/gr';
import Image from 'next/image';

export const FrontAds = ({ imgSrc }) => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-20 py-10">
        <div className="flex flex-wrap-reverse justify-between py-16 md:px-32 px-10 bg-primaryBlue rounded-tl-[150px]">
          <div className="md:w-[490px] w-full">
            <HeadingTitle
              title="Get high-quality health care for your needs"
              color="text-white"
            />
            <div className="flex flex-wrap mt-6">
              <CustomButton
                startIcon={<GrSend />}
                className="bg-pinkctabg"
                label="Make a Refferal"
              />
              <CustomButton
                className="md:ml-2 ml-0 text-primaryBlue bg-white"
                startIcon={<LuPhoneCall />}
                label="Call 00000000000"
              />
            </div>
          </div>
          <div>
            <div
              className="bg-no-repeat bg-cover w-48 h-48"
              style={{ backgroundImage: 'url("/circlebg.png")' }}
            >
              <Image
                height="170"
                width="170"
                className="pt-6 pl-6"
                src={imgSrc ?? '/adsimg.png'}
                alt="Ads Image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
