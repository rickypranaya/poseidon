import { useState } from 'react'
import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid'
import classNames from 'classnames'
import SmallChart from '../SmallChart'
import { statsData, chartData } from '../../constants/dummy'
import DisplayChart from '../displayChart'

export default function Stats() {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState([])
  const [item, setItem] = useState(null)

  return (
    <div>
      <dl className="grid grid-cols-1 divide-y  divide-dark-base overflow-hidden border-t border-b border-dark-base bg-dark-darkest  shadow sm:grid-cols-2 sm:divide-y-0 sm:px-4 lg:grid-cols-5 ">
        {statsData.map((item, index) => (
          <div key={item.name} className="px-5 py-3 sm:px-4">
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
                  'mx-3 inline-flex items-baseline rounded-full bg-gray-900 px-2.5 py-0.5 text-sm font-medium '
                )}
              >
                {item.changeType === 'increase' ? (
                  <ArrowSmUpIcon
                    className="-ml-1 mr-0.5 h-3 w-3 flex-shrink-0 self-center text-[#81C995]"
                    aria-hidden="true"
                  />
                ) : (
                  <ArrowSmDownIcon
                    className="-ml-1 mr-0.5 h-3 w-3 flex-shrink-0 self-center text-red-400"
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

            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
              <div className="flex flex-grow  text-xl font-semibold text-cyan-500">
                <div className="flex min-w-fit flex-col">
                  <span>{item.stat}</span>
                  <span className="flex flex-grow text-xs font-normal text-gray-500">
                    from {item.previousStat}
                  </span>
                </div>

                <div
                  onClick={() => {
                    setOpen(true)
                    setItem(item)
                    setData(chartData[index])
                  }}
                  className=" relative h-full w-full cursor-pointer px-3 pt-2"
                >
                  <div className="h-12 w-full  ">
                    <SmallChart
                      value={item.changeType}
                      data={chartData[index]}
                      range={item.range}
                    />
                  </div>
                  <div className="absolute top-0 left-0 h-full w-full bg-transparent" />
                </div>
              </div>
            </dd>
          </div>
        ))}
      </dl>
      {item && (
        <DisplayChart open={open} setOpen={setOpen} item={item} data={data} />
      )}
    </div>
  )
}
