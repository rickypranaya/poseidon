import classNames from 'classnames';
import ETH from '../ETH';
import Hotness from './Hotness';

function ItemCard({ item }) {
  let color;

  switch (item.level) {
    case 1:
      color = 'text-yellow-500';
      break;
    case 2:
      color = 'text-orange-500';
      break;
    case 3:
      color = 'text-red-500';
      break;
    default:
      break;
  }
  return (
    <li
      key={item.id}
      className=" col-span-1 flex flex-col rounded-2xl border border-dark-base p-3"
    >
      <img
        className="w-full  flex-shrink-0 mx-auto rounded-xl"
        src={item.image_url}
        alt=""
      />

      <div>
        <div className="pb-2 mt-3">
          <div className="text-white text-sm font-medium">{item.name}</div>
        </div>

        <div className="flex w-full justify-between">
          <div>
            <div className="text-gray-500 text-xs font-medium">Price</div>
            <div className="flex items-center">
              <ETH />
              <div className="text-white text-sm font-medium">{item.price}</div>
            </div>
          </div>

          <div>
            <div className="text-gray-500 text-xs font-medium">Valued at</div>
            <div className="flex items-center justify-end">
              <ETH />
              <div className="text-primary text-sm text font-bold">
                {item.valued}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-3">
          <Hotness color={color} level={item.level} />
          <div className={classNames('text-xs font-medium px-1', color)}>
            {item.difference}
          </div>
        </div>

        <div className="border border-sky-400 rounded-lg hover:text-white text-sky-400 hover:bg-sky-600 cursor-pointer  font-medium text-sm flex justify-center py-1.5 mt-3">
          View on Opensea
        </div>
      </div>
    </li>
  );
}

export default ItemCard;
