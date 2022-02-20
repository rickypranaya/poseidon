import { Disclosure } from '@headlessui/react'
import { useRouter } from 'next/router'
import classNames from 'classnames'


const DisclosureButton = (props) => {
  const { name, href } = props
  const router = useRouter()
  const active =
    href == '/' ? router.pathname == '/' : router.pathname.startsWith(href)

  return (
    <Disclosure.Button
      as="a"
      href={href}
      className={classNames(
        'block rounded-md px-3 py-2 text-base font-medium duration-100',
        active
          ? 'bg-gray-900 text-white'
          : 'text-gray-400 hover:bg-dark-darker hover:text-white'
      )}
    >
      {name}
    </Disclosure.Button>
  )
}

export default DisclosureButton
