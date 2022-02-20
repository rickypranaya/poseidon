import classNames from 'classnames';

const Skeleton = ({ width }) => {
  return <div className={classNames('animate-pulse h-4 bg-dark-base rounded', width)} />;
};

export default Skeleton;
