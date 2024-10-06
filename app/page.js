import Image from 'next/image';
import HomeBanner from './components/banner';
import ServiceComponent from './components/services';
import AboutComponents from './components/about';
import WhyChooseUsComponents from './components/features';
import ContactComponent from './components/contact';
import FacComponent from './components/faq';
import { FrontAds } from './components/ads';

export default function Home() {
  return (
    <>
      <HomeBanner />
      <ServiceComponent />
      <AboutComponents />
      <WhyChooseUsComponents />
      <ContactComponent />
      <FacComponent />

      {/* Ads Section starts */}
      <FrontAds />
    </>
  );
}
