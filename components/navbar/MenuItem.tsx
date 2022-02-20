import classNames from 'classnames';
import { Menu } from '@headlessui/react';

interface Props {
  name: string;
  href: string;
}

const MenuItem = (props: Props) => {
  const { name, href } = props;
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          href={href}
          className={classNames(
            active ? 'bg-gray-900 text-white' : 'text-gray-300',
            'block px-4 py-2 text-sm  font-medium'
          )}
        >
          {name}
        </a>
      )}
    </Menu.Item>
  );
};

export default MenuItem;
