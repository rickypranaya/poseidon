import classNames from 'classnames'
import ETH from '../ETH'
import Hotness from './Hotness'

function ItemCard({ item }) {
  let color

  switch (item.level) {
    case 1:
      color = 'text-yellow-500'
      break
    case 2:
      color = 'text-orange-500'
      break
    case 3:
      color = 'text-red-500'
      break
    default:
      break
  }
  return (
    <li
      key={item.id}
      className=" col-span-1 flex flex-col rounded-2xl border border-dark-base p-3"
    >
      <img
        className="mx-auto  w-full flex-shrink-0 rounded-xl"
        src={item.image_url}
        alt=""
      />
      <div className="mt-3 flex items-center justify-between">
        <Hotness color={color} level={item.level} />
        <div className={classNames('px-1 text-xs font-medium', color)}>
          {item.difference}
        </div>
      </div>

      <div>
        <div className="mt-3 pb-2">
          <div className="text-sm font-medium text-white">{item.name}</div>
        </div>

        <div className="flex w-full justify-between">
          <div>
            <div className="text-xs font-medium text-gray-500">Price</div>
            <div className="flex items-center">
              <ETH />
              <div className="text-sm font-medium text-white">{item.price}</div>
            </div>
          </div>

          <div>
            <div className="text-xs font-medium text-gray-500">Valued at</div>
            <div className="flex items-center justify-end">
              <ETH />
              <div className="text text-sm font-bold text-primary">
                {item.valued}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="border border-sky-400 rounded-lg hover:text-white text-sky-400 hover:bg-sky-600 cursor-pointer  font-medium text-sm flex justify-center py-1.5 mt-3">
          View on Opensea
        </div> */}
      </div>
    </li>
  )
}

export default ItemCard
