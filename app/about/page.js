'use server';
import React from 'react';
import AboutComponents from '../components/about';
import Minibanner from '../common/minibanner';
import MeetExperts from '../components/meetexpert';
import { FrontAds } from '../components/ads';
import FeaturesSection from '../components/features/featuresSection';
import Servicesabout from '../components/services/servicesabout';
import { fetchAboutPageData, fetchPosts } from '@/API';
import MissionVisionGoalComponents from '../components/about/MissionVisionGoal';

const About = async () => {
  let serviceData = await fetchPosts();
  const {
    excerpt,
    acf: companyStatement,
    ...meta
  } = await fetchAboutPageData();

  console.log(excerpt, companyStatement, meta, 'from content');
  return (
    <div>
      <Minibanner pageName="About Us" aboutPage={companyStatement?.sub_title} />
      <AboutComponents
        isFag={false}
        title={companyStatement?.sub_title}
        content="At Personal Best Support Services, we are dedicated to transforming the lives of individuals with disabilities by providing personalized, compassionate, and client-centered care. Our mission is to empower our clients, helping them achieve their dreams and live life to the fullest. 

We are passionate about offering tailored support that meets the unique needs and aspirations of each person we serve. Our experienced and caring team works diligently to empower lives and enable dreams, ensuring that every client can thrive, achieve their goals, and truly shine. Join us on a journey of empowerment and transformation, because at Personal Best, we believe in enabling dreams and fostering independence."
      />
      <MissionVisionGoalComponents companyStatement={companyStatement} />
      {/* <FeaturesSection pagekey="about" /> */}
      <MeetExperts
        isFag={false}
        title="Meet The Expert"
        content="At Personal Best Support Services, we are dedicated to transforming the lives of individuals with disabilities by providing personalized, compassionate, and client-centered care. Our mission is to empower our clients, helping them achieve their dreams and live life to the fullest. 

We are passionate about offering tailored support that meets the unique needs and aspirations of each person we serve. Our experienced and caring team works diligently to empower lives and enable dreams, ensuring that every client can thrive, achieve their goals, and truly shine. Join us on a journey of empowerment and transformation, because at Personal Best, we believe in enabling dreams and fostering independence."
      />
      <Servicesabout topLabel="Our Services" serviceData={serviceData} />

      {/* <FrontAds imgSrc="/adsimg.png" /> */}
    </div>
  );
};

export default About;
