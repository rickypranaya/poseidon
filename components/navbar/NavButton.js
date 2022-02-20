import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'

function NavButton(props) {
  const { name, href } = props
  const router = useRouter()
  const active =
    href == '/' ? router.pathname == '/' : router.pathname.startsWith(href)

  return (
    <Link href={href}>
      <a
        className={classNames(
          'rounded-md px-3 py-2 text-sm font-medium duration-200',
          active
            ? 'bg-dark-darkest text-white'
            : 'text-gray-500 hover:bg-dark-darker hover:text-white'
        )}
      >
        {name}
      </a>
    </Link>
  )
}

export default NavButton
