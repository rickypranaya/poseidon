import classNames from 'classnames'
import { Menu } from '@headlessui/react'

const MenuItem = (props) => {
  const { name, href } = props
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          href={href}
          className={classNames(
            'rounded-md duration-100',
            active ? 'bg-dark-base text-white' : 'text-gray-400',
            'block px-4 py-2 text-sm  font-medium'
          )}
        >
          {name}
        </a>
      )}
    </Menu.Item>
  )
}

export default MenuItem
