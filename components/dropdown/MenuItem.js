import { Menu } from '@headlessui/react'
import classNames from 'classnames'

const MenuItem = (props) => {
  const { item, setSelected } = props
  return (
    <Menu.Item>
      {({ active }) => (
        <div
          onClick={() => {
            setSelected(item)
          }}
          className={classNames(
            active ? 'bg-dark-base text-white' : 'text-gray-300',
            'group mr-2 flex cursor-pointer select-none items-center rounded-md px-4 py-2 text-sm duration-100'
          )}
        >
          <span>{item.icon}</span>
          <span>{item.name}</span>
        </div>
      )}
    </Menu.Item>
  )
}

export default MenuItem
