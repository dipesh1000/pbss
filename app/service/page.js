import React from 'react';
import Minibanner from '../common/minibanner';
import ServiceComponent from '../components/services';
import { fetchPosts } from '@/API';

const ServicePage = () => {
  return (
    <div>
      <Minibanner
        pageName="Service"
        aboutPage="Assistance with Self Care Activities"
      />
      <ServiceComponent pageKey="service" />
    </div>
  );
};

export default ServicePage;
