import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import classNames from 'classnames';
import MenuItem from './MenuItem';

export default function Dropdown(props) {
  const { data, selected, setSelected, width, icon, responsive, variant } =
    props;

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className={classNames(
            ' duration-200 items-center inline-flex justify-between rounded-md border border-grayfocus-300 shadow-sm  text-sm font-medium border-gray-600 text-gray-200 hover:bg-gray-700 ',
            variant == 'small' ? 'px-2 py-1' : 'px-4 py-2'
          )}
        >
          <div className="flex">
            <span
              className={classNames(responsive ? 'hidden sm:block' : 'block')}
            >
              {icon}
            </span>
            <span
              className={classNames(
                variant == 'small' ? 'text-sm' : 'text-base'
              )}
            >
              {selected.name}
            </span>
          </div>

          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={classNames(
            ' dropdown w-full absolute left-0 mt-2 rounded-md shadow-xl z-50 bg-gray-700 ring-1 ring-black ring-opacity-5  focus:outline-none',
            width
          )}
        >
          <div className="py-2 pl-2">
            <div className=" dropdown max-h-56 overflow-y-auto overflow-hidden font-medium">
              {data.map((item) => (
                <MenuItem key={item.id} item={item} setSelected={setSelected} />
              ))}
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
