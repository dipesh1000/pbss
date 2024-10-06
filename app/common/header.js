'use client';
import React, { useEffect, useRef, useState } from 'react';
import TopHeader from './topHeader';
import Image from 'next/image';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Handle clicks outside of the dropdown and mobile menu
  useEffect(() => {
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <div className="container mx-auto px-20">
        <TopHeader />
      </div>
      <div className="bg-headerbg">
        <div className="container mx-auto px-20 relative">
          <div className="flex items-center">
            <a className="flex-grow">
              <Image width={200} height={80} src="/logo.png"></Image>
            </a>
            <div className="hidden md:flex space-x-6 md:justify-between md:w-[450px] w-full">
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-semibold  menu-nav active-nav"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-semibold menu-nav"
              >
                About
              </a>
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleDropdown}
                  className="text-gray-700 flex items-center hover:text-blue-600 focus:outline-none menu-nav font-semibold"
                >
                  Services&nbsp; <MdKeyboardArrowDown />
                </button>
                {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow">
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Web Development
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Graphic Design
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      SEO
                    </a>
                  </div>
                )}
              </div>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-semibold menu-nav"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="md:hidden absolute top-7 right-0">
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
            <div
              ref={mobileMenuRef}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Home
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                About
              </a>
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Services <MdKeyboardArrowDown />
                </button>
                {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded shadow">
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Web Development
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Graphic Design
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      SEO
                    </a>
                  </div>
                )}
              </div>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
