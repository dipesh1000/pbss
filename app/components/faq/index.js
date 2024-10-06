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
const FacComponent = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-20 py-16">
        <HeadingTitle title="Faq" />

        <div className="grid md:grid-cols-2 gap-6 grid-cols-1">
          {data.map((item, idx) => (
            <div key={idx + 1}>
              <CustomAccordion title={item.title} content={item.content} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacComponent;
