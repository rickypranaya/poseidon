import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import MenuItem from './MenuItem';
import { profileNavigation } from '../../constants/navigation';

const ProfileDropdown = () => {
  return (
    <>
      <Menu as="div" className="ml-4 relative flex-shrink-0 z-20">
        <div>
          <Menu.Button className="bg-gray-800 rounded-full flex text-sm text-white">
            <span className="sr-only">Open user menu</span>
            <img className="h-8 w-8 rounded-full" src="nft.png" alt="profile" />
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
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none">
            {profileNavigation.map((nav) => (
              <MenuItem key={nav.name} name={nav.name} href={nav.href} />
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default ProfileDropdown;
