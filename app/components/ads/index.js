import CustomButton from '@/app/common/button';
import HeadingTitle from '@/app/common/headingTitle';
import { LuPhoneCall } from 'react-icons/lu';
import { GrSend } from 'react-icons/gr';

export const FrontAds = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto p-20">
        <div className="py-16 px-32 bg-primaryBlue rounded-tl-[150px]">
          <div className="md:w-[490px] w-full">
            <HeadingTitle
              title="Get high-quality health care for your needs"
              color="text-white"
            />
            <div className="flex mt-6">
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
        </div>
      </div>
    </div>
  );
};
