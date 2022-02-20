import Skeleton from './Skeleton';
import SkeletonText from './SkeletonText';
import SkeletonChart from './SkeletonChart';
import classNames from 'classnames';

const Placeholder = ({ idx }) => {
  return (
    <tr className={idx % 2 === 0 ? 'bg-dark-darkest' : 'bg-dark-darker'}>
      <td className="flex py-3 w-24 space-x-2 pl-3 items-center whitespace-nowrap">
        <Skeleton width="w-5" />
        <div className="bg-dark-base w-9 h-9 rounded-full animate-pulse" />
      </td>
      <SkeletonText width="w-52" />
      <SkeletonText width="w-10" />
      {/* <SkeletonChart />
      <SkeletonChart />
      <SkeletonChart /> */}
      <SkeletonText width="w-14" />
      <SkeletonText width="w-14" />
      <SkeletonText width="w-14" />
      <SkeletonText width="w-14" />
      <SkeletonText width="w-14" />
    </tr>
  );
};

export default Placeholder;
