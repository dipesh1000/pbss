import React from 'react';
import Link from 'next/link';
import CustomChip from '@/app/common/customChip';
import HeadingTitle from '@/app/common/headingTitle';
import { Services } from '@/rawdata/service';
import Image from 'next/image';

import { ServiceList } from './serviceList';

const Servicesabout = async ({ topLabel, serviceData }) => {
  const data = Services;

  return (
    <div className="relative h-[700px]">
      <div className="container mx-auto relative pl-20 pt-20 pb-10">
        <div className="  text-center ">
          <CustomChip label={`${topLabel ?? 'Our Services'}`} />
        </div>
        <div className="pt-4">
          <div className="flex flex-col items-center py-2">
            <HeadingTitle title="NDIS Support Services for Everyday Living" />
            <p className="py-2 w-[550px] px-2 text-center">
              Our NDIS support services offer a broad range of assistance to
              improve daily living and foster community involvement. These
              include:
            </p>
          </div>
        </div>
      </div>
      <ServiceList serviceData={serviceData} data={data} />
    </div>
  );
};

export default Servicesabout;
