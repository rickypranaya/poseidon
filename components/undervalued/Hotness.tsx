import { FireIcon } from '@heroicons/react/solid';
import classNames from 'classnames';

const HotnessLevel = (props) => {
  const { level, color } = props;

  return (
    <div className="flex">
      {Array(level)
        .fill(0)
        .map((id) => (
          <FireIcon key={id} className={classNames('w-4 h-4', color)} />
        ))}

      {Array(3 - level)
        .fill(0)
        .map((id) => (
          <FireIcon
            key={id}
            className={classNames('w-4 h-4 text-opacity-20', color)}
          />
        ))}
    </div>
  );
};

export default HotnessLevel;
