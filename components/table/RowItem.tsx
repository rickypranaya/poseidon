import classNames from 'classnames'
import SmallChart from '../SmallChart'
import { chartData } from '../../constants/dummy'
import ETH from '../ETH'

function RowItem(props) {
  const { type, collection } = props

  // table column type [name, chart, normal]
  const columnType = (id) => {
    let type
    if (id == 'name') {
      type = 'name'
    } else if (id == 'floor_price' || id == 'liquidity' || id == 'market_cap') {
      // type = 'chart'; uncomment to add chart later
      type = 'normal'
    } else {
      type = 'normal'
    }
    return type
  }

  const value = () => {
    let value
    switch (type) {
      case 'name':
        value = collection[type]
        break
      case 'age':
        value = `${Number(collection[type]).toLocaleString()} days`
        break
      case 'floor_price':
        value = (
          <div className="flex items-center">
            <ETH />
            {Number(collection[type]).toLocaleString()}
          </div>
        )
        break
      case 'liquidity':
        value = Number(collection[type]).toLocaleString()
        break
      case 'market_cap':
        value = (
          <div className="flex items-center">
            <ETH />
            {Number(collection[type]).toLocaleString()}
          </div>
        )
        break
      case 'total_supply':
        value = Number(collection[type]).toLocaleString()
        break
      case 'distribution':
        value = collection['distribution'].toFixed(2)
        break

      default:
        break
    }

    return value
  }

  return (
    <td className="whitespace-nowrap px-2 text-sm font-medium text-zinc-200">
      <div
        className={classNames(
          'flex items-center justify-start rounded-md py-1  px-2',
          columnType(type) == 'chart' && 'justify-end border border-dark-base',
          columnType(type) == 'normal' && 'justify-center'
        )}
      >
        <span
          className={classNames(
            'pr-2',
            columnType(type) == 'name' &&
              'line-clamp-2 w-52 self-start whitespace-normal'
          )}
        >
          {value()}
        </span>
        {columnType(type) == 'chart' && (
          <div className="h-9 w-20">
            <SmallChart value="increase" data={chartData[0]} />
          </div>
        )}
      </div>
    </td>
  )
}

export default RowItem
