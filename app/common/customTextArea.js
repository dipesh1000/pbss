import React from 'react';

const CustomTextArea = ({ type }) => {
  return (
    <div className="relative w-full max-w-sm">
      <label
        htmlFor="message"
        className="block text-sm font-bold text-gray-700"
      >
        Your Message
      </label>
      <textarea
        id="message"
        name="message"
        rows="4"
        className={`mt-1 block w-full ${
          type === 'standard' ? 'border rounded-md shadow-sm' : 'border-b-2'
        } border-gray-300 focus:border-primaryBlue focus:outline-none focus:ring-0 px-4 py-2 sm:text-sm`}
        placeholder="Enter your message here"
      ></textarea>
    </div>
  );
};

export default CustomTextArea;
