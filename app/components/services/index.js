import React from 'react';
import Link from 'next/link';
import CustomChip from '@/app/common/customChip';
import HeadingTitle from '@/app/common/headingTitle';
import { Services } from '@/rawdata/service';
import { HiArrowLongRight } from 'react-icons/hi2';
import { fetchPosts } from '@/API';
import Image from 'next/image';

const ServiceComponent = async ({ pageKey }) => {
  let items = await fetchPosts();

  return (
    <div className="bg-lightpalebg">
      <div className="container mx-auto sm:px-20 px-5 py-20">
        {pageKey === 'service' ? (
          ''
        ) : (
          <div className="  text-center ">
            <CustomChip label="Our Services" />
          </div>
        )}
        <div className="pt-4">
          <div className="flex flex-col items-center py-2">
            <HeadingTitle title="Assistance to improve daily living" />
            <p className="py-2 md:w-[550px] w-full   px-2 text-center">
              Our NDIS support services offer a broad range of assistance to
              improve daily living and foster community involvement. These
              include:
            </p>
          </div>

          <ul className="grid gap-4 grid-cols-1 md:grid-cols-3  sm:grid-cols-2 xs:grid-cols-1 lg:grid-cols-4">
            {items?.map((item, idx) => {
              return (
                <li
                  key={idx + 1}
                  className="border-gray-200 border bg-white text-darkText transition-all duration-300 ease-in-out hover:text-white hover:bg-primaryBlue rounded pt-12 pb-16 px-8 relative group"
                >
                  <Link href={`/service/${item?.id}`}>
                    <>
                      <Image
                        height="53"
                        width="53"
                        alt="icon"
                        src={
                          Boolean(item.acf.icon)
                            ? item.acf.icon.url
                            : '/icondummy.png'
                        }
                      />

                      <p className="py-2 font-bold ">{item?.title?.rendered}</p>
                      <HiArrowLongRight
                        fontSize={30}
                        className="absolute bottom-8 left-7 transition-all duration-300 ease-in-out group-hover:bottom-8 group-hover:right-7 group-hover:left-auto"
                      />
                    </>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;
