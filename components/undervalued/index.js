import { useState } from 'react'
import Dropdown from '../dropdown'
import { topNFT } from '../../constants/dummy'
import { timeframe } from '../../constants/dropdown'
import ItemCard from './ItemCard'
import Dropdowns from './Dropdowns'
export default function Undervalued() {
  const [timeRange, setTimeRange] = useState(timeframe[0])

  return (
    <div className="px-5 pt-4 pb-8 sm:px-8 ">
      <div className="mb-2 flex items-center">
        <div className="my-4 mr-5 hidden text-2xl font-bold text-white sm:block">
          Hot NFT
        </div>
        <div className="my-4">
          <Dropdowns />
        </div>
      </div>
      <ul
        role="list"
        className="relative grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6 "
      >
        {topNFT.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </ul>
    </div>
  )
}
