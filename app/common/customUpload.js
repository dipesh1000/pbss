// components/FileUploadInput.js
const FileUploadInput = () => {
  return (
    <div className="flex flex-col">
      <label htmlFor="file-upload" className="text-gray-700 mb-2 font-semibold">
        Upload a File
      </label>
      <input
        type="file"
        id="file-upload"
        className="block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-md file:border-0
                      file:text-sm file:font-semibold
                      file:bg-blue-50 file:text-blue-700
                      hover:file:bg-blue-100
                      focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default FileUploadInput;
