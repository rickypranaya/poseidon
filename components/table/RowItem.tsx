import classNames from 'classnames';
import SmallChart from '../SmallChart';
import { chartData } from '../../constants/dummy';
import ETH from '../ETH';

function RowItem(props) {
  const { type, collection } = props;

  // table column type [name, chart, normal]
  const columnType = (id) => {
    let type;
    if (id == 'name') {
      type = 'name';
    } else if (id == 'floor_price' || id == 'liquidity' || id == 'flow') {
      // type = 'chart'; uncomment to add chart later
      type = 'normal';
    } else {
      type = 'normal';
    }
    return type;
  };

  const value = () => {
    let value;
    switch (type) {
      case 'name':
        value = collection[type];
        break;
      case 'age':
        value = Number(collection[type]).toLocaleString();
        break;
      case 'floor_price':
        value = (
          <div className="flex items-center">
            <ETH />
            {Number(collection[type]).toLocaleString()}
          </div>
        );
        break;
      case 'liquidity':
        value = Number(collection[type]).toLocaleString();
        break;
      case 'flow':
        value = Number(collection[type]).toLocaleString();
        break;
      case 'total_supply':
        value = Number(collection[type]).toLocaleString();
        break;
      case 'distribution':
        value = (
          collection['total_supply'] / collection['owners_count']
        ).toFixed(2);
        break;

      default:
        break;
    }

    return value;
  };

  return (
    <td className="px-2 whitespace-nowrap text-sm font-medium text-zinc-200">
      <div
        className={classNames(
          'flex items-center rounded-md py-1 px-2  justify-start',
          columnType(type) == 'chart' && 'border border-dark-base justify-end',
          columnType(type) == 'normal' && 'justify-center'
        )}
      >
        <span
          className={classNames(
            'pr-2',
            columnType(type) == 'name' &&
              'self-start w-52 whitespace-normal line-clamp-2'
          )}
        >
          {value()}
        </span>
        {columnType(type) == 'chart' && (
          <div className="w-20 h-9">
            <SmallChart value="increase" data={chartData[0]} />
          </div>
        )}
      </div>
    </td>
  );
}

export default RowItem;
