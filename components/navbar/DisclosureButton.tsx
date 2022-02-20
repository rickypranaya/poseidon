import { Disclosure } from '@headlessui/react';
import { useRouter } from 'next/router';
import classNames from 'classnames';

interface Props {
  name: string;
  href: string;
}

const DisclosureButton = (props: Props) => {
  const { name, href } = props;
  const router = useRouter();
  const active =
    href == '/' ? router.pathname == '/' : router.pathname.startsWith(href);

  return (
    <Disclosure.Button
      as="a"
      href={href}
      className={classNames(
        'block px-3 py-2 rounded-md text-base font-medium',
        active
          ? 'bg-gray-900 text-white'
          : 'hover:bg-gray-700 hover:text-white text-gray-300'
      )}
    >
      {name}
    </Disclosure.Button>
  );
};

export default DisclosureButton;
