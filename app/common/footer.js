import Image from 'next/image';
import React from 'react';
import { CiFacebook } from 'react-icons/ci';
import { PiInstagramLogoLight } from 'react-icons/pi';
import { PiLinkedinLogoLight } from 'react-icons/pi';
import Copyright from './copyright';
import Link from 'next/link';

const FooterComponent = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-20 py-10">
        <div className="flex items-start flex-wrap">
          <div className="w-72">
            <div>
              <div>
                <div className="mb-4">
                  <Image width={200} height={80} src="/logo.png"></Image>
                </div>
                <p className="text-darkText leading-7 mb-2">
                  At Personal Best Support Services, we are dedicated to
                  transforming the lives of individuals with disabilities by
                  providing personalized, compassionate, and client-centered
                  care.
                </p>
                <Link className="text-primaryBlue font-semibold " href={''}>
                  Know More
                </Link>
              </div>
              <div className="flex items-center text-primaryBlue">
                <p className="mb-0 font-semibold">Connect With us</p>
                <ul className="flex pl-4">
                  <li>
                    <a>
                      <CiFacebook />
                    </a>
                  </li>
                  <li>
                    <a>
                      <PiInstagramLogoLight />
                    </a>
                  </li>
                  <li>
                    <a>
                      <PiLinkedinLogoLight />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex-1 ml-10">
            <div className="flex items-center ">
              <Image width={80} height={80} src="/love.png"></Image>
              <p className="ml-4 text-sm text-grayText">
                We acknowledges the Traditional Custodians of Country throughout
                Australia and their continuing connection to land, sea and
                community. We pay our respects to them and their cultures and to
                Elders past, present and emerging.
              </p>
              <ul className="w-48 flex flex-col items-end">
                <li className="mb-2">
                  <Image width={40} height={20} src="/flag1.png" />
                </li>
                <li className="mb-2">
                  <Image width={40} height={20} src="/flag2.png" />
                </li>
                <li className="mb-2">
                  <Image width={40} height={20} src="/flag3.png" />
                </li>
              </ul>
            </div>
            <hr />
            <div className="flex justify-between flex-wrap">
              <div className="w-[480px]">
                <h5 className="my-2">
                  <b>Our Services</b>
                </h5>
                <ul className="grid grid-cols-2 gap-2 text-darkText">
                  <li>Assistance with Self Care Activities</li>
                  <li>Assistance with Social & Community Participation</li>
                  <li>HouseholdCleaning</li>
                  <li>Support Coordination</li>
                  <li>Assistance with Self Care Activities</li>
                  <li>Assistance with Social & Community Participation</li>
                  <li>HouseholdCleaning</li>
                  <li>Support Coordination</li>
                </ul>
              </div>
              <div>
                <h5 className="my-2">
                  <b>About</b>
                </h5>
                <ul className="text-darkText">
                  <li>About Us</li>
                  <li>Terms and conditions</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div>
                <h5 className="my-2">
                  <b>Assistance</b>
                </h5>
                <ul className="text-darkText">
                  <li>FAQ</li>
                  <li>Contact</li>
                  <li>Referral</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Copyright />
    </div>
  );
};

export default FooterComponent;
