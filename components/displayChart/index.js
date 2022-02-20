import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid'
import Chart from './Chart'
import moment from 'moment'
import classNames from 'classnames'

export default function DisplayCollection(props) {
  const { open, setOpen, item, data } = props

  const now = moment().format('ddd, DD MMM, h:mm a')

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-[9999] overflow-y-auto"
        onClose={setOpen}
      >
        <div className="flex min-h-screen flex-col  items-center justify-center  text-center md:px-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-dark-base bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block w-full  transform  overflow-hidden bg-dark-darkest px-2  pt-5 pb-4 text-left align-middle text-white shadow-xl transition-all md:max-w-2xl md:rounded-lg lg:max-w-4xl">
              <div className="mx-4 mb-8">
                <div className="flex items-start justify-between">
                  <div className="mb-2 text-xl font-medium">{item.name}</div>
                  <div className="text-gray-400">{now}</div>
                </div>

                <div className="flex items-end">
                  <div className="text-3xl font-medium text-white">
                    {item.stat}
                  </div>
                  <div className="px-3 text-gray-400">
                    from {item.previousStat}
                  </div>
                </div>
                <div
                  className={classNames(
                    'flex',
                    item.changeType === 'increase'
                      ? 'text-[#81C995]'
                      : 'text-red-400'
                  )}
                >
                  <span>{item.diff}</span>
                  <span className="ml-1">({item.change})</span>
                  {item.changeType === 'increase' ? (
                    <ArrowSmUpIcon
                      className="mx-1 h-4 w-4 flex-shrink-0 self-center"
                      aria-hidden="true"
                    />
                  ) : (
                    <ArrowSmDownIcon
                      className="mx-1 h-4 w-4 flex-shrink-0 self-center"
                      aria-hidden="true"
                    />
                  )}
                  today
                </div>
              </div>
              <div className="h-52 w-full sm:h-60">
                <Chart
                  value={item.changeType}
                  data={data}
                  type={item.name}
                  range={item.range}
                />
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
