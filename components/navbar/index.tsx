import { Disclosure } from '@headlessui/react';
import { BellIcon } from '@heroicons/react/outline';
import Logo from '../Logo';
import NavButton from './NavButton';
import SearchBar from '../search';
import MenuButton from './MenuButton';
import ProfileDropdown from './ProfileDropdown';
import DisclosurePanel from './DisclosurePanel';
import { navigation } from '../../constants/navigation';

export default function NavBar(props) {
  return (
    <Disclosure as="nav" className="border-b bg-gray-900 border-dark-base">
      {({ open }) => (
        <>
          <div className=" mx-auto px-2 sm:px-4 lg:px-8">
            <div className="relative  flex items-center justify-between h-16">
              <div className="flex items-center px-2 lg:pr-3">
                <Logo />
              </div>

              <div className="hidden sm:flex flex-1  justify-center px-2 lg:ml-6 lg:justify-end max-w-md lg:max-w-lg">
                <SearchBar placeholder="Search for NFT Collection" />
              </div>
              <div className="flex sm:hidden flex-1  justify-center px-2 lg:ml-6 lg:justify-end max-w-md lg:max-w-lg">
                <SearchBar placeholder="Search NFT" />
              </div>

              {/* ================= ONGOING PROGRESS =================

              <div className="hidden lg:block lg:ml-6">
                <div className="flex space-x-4">
                  {navigation.map((nav) => (
                    <NavButton key={nav.name} name={nav.name} href={nav.href} />
                  ))}
                </div>
              </div>

              <div className="flex lg:hidden">
                <MenuButton open={open} />
              </div>

              <div className="hidden lg:block lg:ml-4">
                <div className="flex items-center">
                  <button
                    type="button"
                    className="flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <ProfileDropdown />
                </div>
              </div>

              =================================================== */}
            </div>
          </div>
          <DisclosurePanel />
        </>
      )}
    </Disclosure>
  );
}
