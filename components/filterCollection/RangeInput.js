const RangeInput = (props) => {
  const { placeholder, onChange, value, type } = props;
  return (
    <div className=" duration-200 rounded-md w-full border border-transparent hover:border-dark-base">
      <input
        value={value}
        onChange={(event) => {
          onChange(event, type);
        }}
        placeholder={placeholder}
        // id={id}
        // name={name}
        type="text"
        className=" caret-white text-white appearance-none placeholder-dark-lighter  w-full px-1 py-1 bg-dark-darkest border border-dark-base rounded-md shadow-sm focus:outline-none focus:ring-transparent focus:bg-transparent focus:shadow-md focus:border-zinc-500 sm:text-sm"
      />
    </div>
  );
};
export default RangeInput;
