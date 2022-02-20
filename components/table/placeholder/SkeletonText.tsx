import Skeleton from './Skeleton';

const SkeletonText = ({ width }) => {
  return (
    <td className="px-4 py-2 whitespace-nowrap ">
      <div className="w-full flex justify-center">
        <Skeleton width={width} />
      </div>
    </td>
  );
};

export default SkeletonText;
