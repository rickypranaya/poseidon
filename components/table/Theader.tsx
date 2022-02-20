import { InformationCircleIcon } from '@heroicons/react/solid';

interface Props {
  label: string;
  info: string;
}

const Theader = (props: Props) => {
  const { label, info } = props;
  return (
    <th
      scope="col"
      className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider"
    >
      <div className="relative ">
        <div className='group  cursor-pointer hover:text-white peer flex items-center justify-center'>
          <span className="">{label}</span>
          <div className=" min-w-fit">
            <InformationCircleIcon className=" mx-1.5 w-4 h-4 text-dark-base  cursor-pointer group-hover:text-white" />
          </div>
        </div>

        <div className="opacity-0 invisible peer-hover:visible peer-hover:opacity-100 duration-300 translate-y-2 peer-hover:translate-y-0 absolute bg-dark-base text-zinc-300 font-normal w-36 shadow-xl rounded p-2 text-xs capitalize right-0 top-8 z-40">
          {info}
        </div>
      </div>
    </th>
  );
};

export default Theader;
