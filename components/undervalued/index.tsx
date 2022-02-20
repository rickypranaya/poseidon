import { useState } from 'react';
import Dropdown from '../dropdown';
import { topNFT } from '../../constants/dummy';
import { timeframe } from '../../constants/dropdown';
import ItemCard from './ItemCard';

export default function Undervalued() {
  const [timeRange, setTimeRange] = useState(timeframe[0]);

  return (
    <div className="px-5 sm:px-8 pt-4 pb-8 ">
      <div className="flex space-x-5 items-center mb-2">
        <div className="text-white font-bold  text-2xl my-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r  from-sky-500 to-violet-500">
            Undervalued
          </span>{' '}
          NFT
        </div>
      </div>
      <ul
        role="list"
        className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 "
      >
        {topNFT.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
