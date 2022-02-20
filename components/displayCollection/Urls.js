import { Fragment } from 'react';
import { Transition } from '@headlessui/react';

const Button = (props) => {
  const { logo, label, url } = props;
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer noopener"
      className="relative group duration-200 ring-transparent bg-dark-darkest w-9 h-9 flex justify-center items-center rounded-lg hover:bg-dark-darker cursor-pointer"
    >
      {logo}
      <div className="duration-300 translate-y-5 -translate-x-1/2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 invisible group-hover:visible absolute -bottom-7 left-1/2 text-xs text-white bg-dark-darker py-1 px-2 rounded-md">
        {label}
      </div>
    </a>
  );
};

function Urls({ urls }) {
  return (
    <Transition.Child
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      enterTo="opacity-100 translate-y-0 sm:scale-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100 translate-y-0 sm:scale-100"
      leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    >
      <div className="z-50 flex space-x-2 mt-2">
        {urls.map((url, idx) => (
          <Button key={idx} logo={url.logo} label={url.label} url={url.url} />
        ))}
      </div>
    </Transition.Child>
  );
}

export default Urls;
