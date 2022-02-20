import Metrics from './Metrics';
function index(props) {
  return (
    <div className="flex">
      <div className="bg-dark-base w-1/3 rounded-md animate-pulse" />
      <div className="pl-8 w-2/3">
        <div className="bg-dark-base w-40 h-6 rounded-md animate-pulse" />
        <div className="bg-dark-base w-full h-3 rounded-md animate-pulse mt-4" />
        <div className="bg-dark-base w-3/4 h-3 rounded-md animate-pulse mt-2" />
        <div className="grid grid-cols-3 justify gap-4 py-4">
          <Metrics />
          <Metrics />
          <Metrics />
          <Metrics />
          <Metrics />
          <Metrics />
        </div>
      </div>
    </div>
  );
}

export default index;
