import HomeBanner from './components/banner';
import ServiceComponent from './components/services';
import AboutComponents from './components/about';
import WhyChooseUsComponents from './components/features';
import ContactComponent from './components/contact';
import FacComponent from './components/faq';
import { FrontAds } from './components/ads';
import { fetchHomePageData } from '@/API';

export default async function Home() {
  const data = await fetchHomePageData();

  return (
    <>
      <HomeBanner />
      <ServiceComponent />
      <AboutComponents
        isFag={true}
        title="A Registered Leading Disability Support Providers"
        content="At Personal Best Support Services, we are dedicated to transforming the lives of individuals with disabilities by providing personalized, compassionate, and client-centered care. Our mission is to empower our clients, helping them achieve their dreams and live life to the fullest. 

We are passionate about offering tailored support that meets the unique needs and aspirations of each person we serve. Our experienced and caring team works diligently to empower lives and enable dreams, ensuring that every client can thrive, achieve their goals, and truly shine. Join us on a journey of empowerment and transformation, because at Personal Best, we believe in enabling dreams and fostering independence."
      />
      <WhyChooseUsComponents data={data?.acf} />
      <ContactComponent />
      <FacComponent />

      {/* Ads Section starts */}
      <FrontAds />
    </>
  );
}
