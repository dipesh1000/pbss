import { fetchFAQ } from '@/API';
import CustomAccordion from '@/app/common/accordion';
import HeadingTitle from '@/app/common/headingTitle';
import React from 'react';

const data = [
  {
    title: 'What Assistance with Self Care Activities mean?',
    content:
      'What Assistance with Self Care Activities mean?What Assistance with Self Care Activities mean?What Assistance with Self Care Activities mean?What Assistance with Self Care Activities mean?What Assistance with Self Care Activities mean?What Assistance with Self Care Activities mean?',
  },
  {
    title: 'What Assistance with Self Care Activities mean?',
    content:
      'What Assistance with Self Care Activities mean?What Assistance with Self Care Activities mean?What Assistance with Self Care Activities mean?What Assistance with Self Care Activities mean?What Assistance with Self Care Activities mean?What Assistance with Self Care Activities mean?',
  },
  {
    title: 'What Assistance with Self Care Activities mean?',
    content:
      'What Assistance with Self Care Activities mean?What Assistance with Self Care Activities mean?What Assistance with Self Care Activities mean?What Assistance with Self Care Activities mean?What Assistance with Self Care Activities mean?What Assistance with Self Care Activities mean?',
  },
  {
    title: 'What Assistance with Self Care Activities mean?',
    content:
      'What Assistance with Self Care Activities mean?What Assistance with Self Care Activities mean?What Assistance with Self Care Activities mean?What Assistance with Self Care Activities mean?What Assistance with Self Care Activities mean?What Assistance with Self Care Activities mean?',
  },
  {
    title: 'What Assistance with Self Care Activities mean?',
    content:
      'What Assistance with Self Care Activities mean?What Assistance with Self Care Activities mean?What Assistance with Self Care Activities mean?What Assistance with Self Care Activities mean?What Assistance with Self Care Activities mean?What Assistance with Self Care Activities mean?',
  },
  {
    title: 'What Assistance with Self Care Activities mean?',
    content:
      'What Assistance with Self Care Activities mean?What Assistance with Self Care Activities mean?What Assistance with Self Care Activities mean?What Assistance with Self Care Activities mean?What Assistance with Self Care Activities mean?What Assistance with Self Care Activities mean?',
  },
  {
    title: 'What Assistance with Self Care Activities mean?',
    content:
      'What Assistance with Self Care Activities mean?What Assistance with Self Care Activities mean?What Assistance with Self Care Activities mean?What Assistance with Self Care Activities mean?What Assistance with Self Care Activities mean?What Assistance with Self Care Activities mean?',
  },
  {
    title: 'What Assistance with Self Care Activities mean?',
    content:
      'What Assistance with Self Care Activities mean?What Assistance with Self Care Activities mean?What Assistance with Self Care Activities mean?What Assistance with Self Care Activities mean?What Assistance with Self Care Activities mean?What Assistance with Self Care Activities mean?',
  },
];
const FacComponent = async () => {
  const faqs = await fetchFAQ();
  console.log(faqs, 'From the FAQs');
  return (
    <div className="bg-white">
      <div className="container mx-auto lg:px-20 px-5 py-16">
        <HeadingTitle title="Faq" />

        <div className="grid md:grid-cols-2 gap-6 grid-cols-1">
          {faqs.map((item, idx) => (
            <div key={idx + 1}>
              <CustomAccordion
                title={item.title.rendered}
                content={item.excerpt.rendered}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacComponent;
