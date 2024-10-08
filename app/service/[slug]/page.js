import React from 'react';
import Minibanner from '@/app/common/minibanner';
import { Services } from '@/rawdata/service';

const data = Services;
const page = () => {
  return (
    <div>
      <Minibanner
        pageName="Service"
        aboutPage="A Registered Leading Disability Support Providers"
      />
    </div>
  );
};

export default page;
