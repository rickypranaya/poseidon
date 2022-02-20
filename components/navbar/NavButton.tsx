import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';

interface Props {
  name: string;
  href: string;
}

function NavButton(props: Props) {
  const { name, href } = props;
  const router = useRouter();
  const active =
    href == '/' ? router.pathname == '/' : router.pathname.startsWith(href);

  return (
    <Link href={href}>
      <a
        className={classNames(
          ' px-3 py-2 rounded-md text-sm font-medium',
          active
            ? 'bg-gray-900 text-white'
            : 'hover:bg-gray-700 hover:text-white text-gray-300'
        )}
      >
        {name}
      </a>
    </Link>
  );
}

export default NavButton;
