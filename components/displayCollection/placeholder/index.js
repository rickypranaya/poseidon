import Metrics from './Metrics'
function index(props) {
  return (
    <div className="flex">
      <div className="hidden w-1/3 animate-pulse rounded-md bg-dark-base md:block" />
      <div className="w-full md:w-2/3 md:pl-8">
        <div className="flex md:block items-center">
          <div className="block h-36 w-2/5 animate-pulse rounded-md bg-dark-base md:hidden" />
          <div className="ml-4 h-6 w-40 animate-pulse rounded-md bg-dark-base md:ml-0" />
        </div>
        <div className="mt-4 h-3 w-full animate-pulse rounded-md bg-dark-base" />
        <div className="mt-2 h-3 w-3/4 animate-pulse rounded-md bg-dark-base" />
        <div className="justify grid grid-cols-3 gap-4 py-4">
          <Metrics />
          <Metrics />
          <Metrics />
          <Metrics />
          <Metrics />
          <Metrics />
        </div>
      </div>
    </div>
  )
}

export default index
