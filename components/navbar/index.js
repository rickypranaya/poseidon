import { Disclosure } from '@headlessui/react'
import { BellIcon } from '@heroicons/react/outline'
import Logo from '../Logo'
import NavButton from './NavButton'
import SearchBar from '../search'
import MenuButton from './MenuButton'
import ProfileDropdown from './ProfileDropdown'
import DisclosurePanel from './DisclosurePanel'
import { navigation } from '../../constants/navigation'

export default function NavBar() {
  return (
    <Disclosure as="nav" className=" border-dark-base bg-dark-darkest">
      {({ open }) => (
        <>
          <div className=" mx-auto px-2 sm:px-4 lg:px-8">
            <div className="relative  flex h-16 items-center justify-between">
              <div className="flex items-center px-2 lg:pr-3">
                <Logo />
              </div>

              <div className="hidden max-w-md flex-1  justify-center px-2 sm:flex lg:ml-6 lg:max-w-lg lg:justify-end">
                <SearchBar placeholder="Search for NFT Collection" />
              </div>
              <div className="flex max-w-md flex-1  justify-center px-2 sm:hidden lg:ml-6 lg:max-w-lg lg:justify-end">
                <SearchBar placeholder="Search NFT" />
              </div>

              <div className="hidden lg:ml-6 lg:block">
                <div className="flex space-x-4">
                  {navigation.map((nav) => (
                    <NavButton key={nav.name} name={nav.name} href={nav.href} />
                  ))}
                </div>
              </div>

              <div className="flex lg:hidden">
                <MenuButton open={open} />
              </div>

              <div className="hidden lg:ml-4 lg:block">
                <div className="flex items-center">
                  <button
                    type="button"
                    className="flex-shrink-0 rounded-full bg-dark-darker p-1 text-dark-light hover:text-white"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <ProfileDropdown />
                </div>
              </div>
            </div>
          </div>
          <DisclosurePanel />
        </>
      )}
    </Disclosure>
  )
}
