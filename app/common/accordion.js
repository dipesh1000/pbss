'use client';
import { useState } from 'react';
import { HiPlus, HiMinus } from 'react-icons/hi'; // Import icons from react-icons

export default function CustomAccordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full mx-auto">
      {/* Accordion Header */}
      <div
        onClick={toggleAccordion}
        className="flex justify-between items-center p-4 bg-white-100 border-b-2 cursor-pointer"
      >
        <h2 className="text-lg font-medium text-darkText">{title}</h2>
        {isOpen ? (
          <HiMinus className="text-xl" />
        ) : (
          <HiPlus className="text-xl" />
        )}
      </div>

      {/* Accordion Content */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="p-4 bg-white border-b-2">
          <p className="text-gray-600">{content}</p>
        </div>
      </div>
    </div>
  );
}
