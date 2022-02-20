import { Disclosure } from '@headlessui/react';
import { BellIcon } from '@heroicons/react/outline';
import { profileNavigation } from '../../constants/navigation';
import { navigation } from '../../constants/navigation';
import DisclosureButton from './DisclosureButton';

const DisclosurePanel = () => {
  return (
    <Disclosure.Panel className="lg:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {navigation.map((nav) => (
          <DisclosureButton key={nav.name} name={nav.name} href={nav.href} />
        ))}
      </div>
      <div className="pt-4 pb-3 border-t border-gray-700">
        <div className="flex items-center px-5">
          <div className="flex-shrink-0">
            <img className="h-10 w-10 rounded-full" src="nft.png" alt="" />
          </div>
          <div className="ml-3">
            <div className="text-base font-medium text-white">User32837</div>
            <div className="text-sm font-medium text-gray-400">
              email@example.com
            </div>
          </div>
          <button
            type="button"
            className="ml-auto flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white "
          >
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-3 px-2 space-y-1">
          {profileNavigation.map((nav) => (
            <DisclosureButton key={nav.name} name={nav.name} href={nav.href} />
          ))}
        </div>
      </div>
    </Disclosure.Panel>
  );
};

export default DisclosurePanel;
