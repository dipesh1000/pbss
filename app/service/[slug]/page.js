import React from 'react';
import Minibanner from '@/app/common/minibanner';
import Servicesabout from '@/app/components/services/servicesabout';
import HeadingTitle from '@/app/common/headingTitle';
import { getServiceDetailsWithId } from '@/API';

async function ServiceDetails({ params }) {
  const data = await getServiceDetailsWithId(params.slug);
  try {
    // console.log(id, params);
    // const item = await getServiceDetailsWithId(id);
    return (
      <div>
        <Minibanner pageName="Service" aboutPage={data?.title?.rendered} />
        <div className="">
          <div className="container mx-auto px-20 py-20">
            <HeadingTitle title={data?.title?.rendered} />
            <div
              dangerouslySetInnerHTML={{ __html: data?.content?.rendered }}
            />
          </div>
        </div>
        {/* <Servicesabout topLabel="Other Services" /> */}
      </div>
    );
  } catch (error) {
    return <div> Error fetching item data</div>;
  }
}
export default ServiceDetails;
