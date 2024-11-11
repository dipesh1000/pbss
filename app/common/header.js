'use client';
import React, { useEffect, useRef, useState } from 'react';
import TopHeader from './topHeader';
import Image from 'next/image';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Services } from '@/rawdata/service';
import { fetchPosts } from '@/API';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [serviceList, setServiceList] = useState(null);

  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const data = Services;

  // Handle clicks outside of the dropdown and mobile menu
  useEffect(() => {
    async function getServiceData() {
      setServiceList(await fetchPosts());
    }
    getServiceData();
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  console.log(serviceList, 'from service list');

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const router = usePathname();

  return (
    <div className="bg-white">
      <div className="container mx-auto px-20">
        <TopHeader />
      </div>
      <div className="bg-headerbg">
        <div className="container mx-auto lg:px-20 px-5 sm:py-0 py-2 relative">
          <div className="flex items-center">
            <Link href="/" className="flex-grow">
              <Image width={200} height={80} src="/logo.png" alt="Logo"></Image>
            </Link>
            <div className="hidden md:flex space-x-6 md:justify-between md:w-[450px] w-full">
              <Link
                href="/"
                className={`text-gray-700 hover:text-blue-600 font-semibold  menu-nav ${
                  router === '/' ? 'active-nav' : ''
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`text-gray-700 hover:text-blue-600 font-semibold menu-nav ${
                  router === '/about' ? 'active-nav' : ''
                }`}
              >
                About
              </Link>
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleDropdown}
                  className="text-gray-700 flex items-center hover:text-blue-600 focus:outline-none menu-nav font-semibold"
                >
                  Services&nbsp; <MdKeyboardArrowDown />
                </button>
                {isDropdownOpen && (
                  <div className="absolute left-0 font-semibold w-80 bg-white  text-sm border border-gray-200 rounded shadow">
                    {serviceList.map((item, idx) => (
                      <Link
                        key={idx + 1}
                        href={`/service/${item.id}`}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {item.title.rendered}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/contact"
                className={`text-gray-700 hover:text-blue-600 font-semibold menu-nav ${
                  router === '/contact' ? 'active-nav' : ''
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="md:hidden absolute top-7 right-4">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {/* Hamburger Icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          {isMobileMenuOpen && (
            <div ref={mobileMenuRef} className="md:hidden bg-white py-2">
              <Link
                href="/"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                About
              </Link>
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Services <MdKeyboardArrowDown />
                </button>
                {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded shadow">
                    {serviceList.map((item, idx) => (
                      <Link
                        key={idx + 1}
                        href={`/service/${item.id}`}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {item.title.rendered}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/contact"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
