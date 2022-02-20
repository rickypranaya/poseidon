import { XIcon } from '@heroicons/react/solid';

const FilterButton = (props) => {
  const { item, deleteItem } = props;

  return (
    <div
      onClick={() => {
        deleteItem(item.id);
      }}
      className="duration-100 bg-cyan-500 bg-opacity-5 hover:bg-opacity-20  hover:text-white cursor-pointer select-none flex items-center w-fit rounded-full py-1 pl-5 pr-2 border mx-2 my-1 h-fit text-gray-200 border-cyan-500 text-sm"
    >
      <span>{item.label}</span>
      <XIcon className="w-4 h-4 ml-3 " />
    </div>
  );
};

export default FilterButton;
