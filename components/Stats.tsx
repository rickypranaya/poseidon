import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid';
import classNames from 'classnames';
import SmallChart from './SmallChart';
import { statsData, chartData } from '../constants/dummy';

export default function Stats() {
  return (
    <div>
      <dl className="grid grid-cols-1 sm:px-4  bg-gray-800 overflow-hidden shadow divide-y divide-gray-700 sm:divide-y-0  border-t border-b border-gray-700 sm:grid-cols-2 lg:grid-cols-5 ">
        {statsData.map((item, index) => (
          <div key={item.name} className="px-5 sm:px-4 py-3">
            <div
              style={{ display: 'flex', alignItems: 'center' }}
              className="flex items-center"
            >
              <dt className="text-base font-normal text-gray-300">
                {item.name}
              </dt>
              <div
                className={classNames(
                  item.changeType === 'increase'
                    ? 'text-[#81C995]'
                    : ' text-red-400',
                  'bg-gray-900 mx-3 inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium '
                )}
              >
                {item.changeType === 'increase' ? (
                  <ArrowSmUpIcon
                    className="-ml-1 mr-0.5 flex-shrink-0 self-center h-3 w-3 text-[#81C995]"
                    aria-hidden="true"
                  />
                ) : (
                  <ArrowSmDownIcon
                    className="-ml-1 mr-0.5 flex-shrink-0 self-center h-3 w-3 text-red-400"
                    aria-hidden="true"
                  />
                )}

                <span className="sr-only">
                  {item.changeType === 'increase' ? 'Increased' : 'Decreased'}{' '}
                  by
                </span>
                <span className="text-xs">{item.change}</span>
              </div>
            </div>

            <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
              <div className="flex flex-grow  text-xl font-semibold text-cyan-500">
                <div className="flex flex-col min-w-fit">
                  <span>{item.stat}</span>
                  <span className="text-xs text-gray-500 font-normal flex flex-grow">
                    from {item.previousStat}
                  </span>
                </div>
                <div className=" h-full w-full px-3 pt-2 ">
                  <div className="w-full h-12  ">
                    <SmallChart
                      value={item.changeType}
                      data={chartData[index]}
                    />
                  </div>
                </div>
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
