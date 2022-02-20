import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import MenuItem from './MenuItem'
import { profileNavigation } from '../../constants/navigation'

const ProfileDropdown = () => {
  return (
    <>
      <Menu as="div" className="relative z-20 ml-4 flex-shrink-0">
        <div>
          <Menu.Button className="flex rounded-full bg-gray-800 text-sm text-white">
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
          <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-dark-darker p-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {profileNavigation.map((nav) => (
              <MenuItem key={nav.name} name={nav.name} href={nav.href} />
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  )
}

export default ProfileDropdown
