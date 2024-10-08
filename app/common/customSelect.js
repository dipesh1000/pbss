// components/SelectInput.js
const CustomSelect = ({ label, defaultvalue, data }) => {
  console.log(data, 'adsasdadads');
  return (
    <div className="relative w-full max-w-sm">
      <label htmlFor="options" className="text-gray-700 mb-2 font-semibold">
        {label ?? 'Choose an Option'}
      </label>
      <select
        id="options"
        className=" w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="">{defaultvalue ?? 'Select an option'}</option>
        {data.map((item, idx) => (
          <option key={idx + 1} value={item?.title}>
            {item?.title ?? `Option ${idx + 1}`}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
