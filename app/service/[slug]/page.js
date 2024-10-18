'use client';
import React from 'react';
import Minibanner from '@/app/common/minibanner';
import { Services } from '@/rawdata/service';
import Servicesabout from '@/app/components/services/servicesabout';
import HeadingTitle from '@/app/common/headingTitle';
import { useSearchParams } from 'next/navigation';

const data = Services;
const page = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  console.log(params, 'from search params');
  return (
    <div>
      <Minibanner
        pageName="Service"
        aboutPage="A Registered Leading Disability Support Providers"
      />
      <div className="">
        <div className="container mx-auto px-30 py-20">
          <HeadingTitle title="" />
        </div>
      </div>
      <Servicesabout topLabel="Other Services" />
    </div>
  );
};

export default page;
