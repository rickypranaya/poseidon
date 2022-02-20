import { Menu } from '@headlessui/react';
import classNames from 'classnames';

const MenuItem = (props) => {
  const { item, setSelected } = props;
  return (
    <Menu.Item>
      {({ active }) => (
        <div
          onClick={() => {
            setSelected(item);
          }}
          className={classNames(
            active ? 'bg-gray-600 text-white' : 'text-gray-300',
            'rounded-md mr-2 cursor-pointer select-none duration-100 group flex items-center px-4 py-2 text-sm'
          )}
        >
          <span>{item.icon}</span>
          <span>{item.name}</span>
        </div>
      )}
    </Menu.Item>
  );
};

export default MenuItem;
