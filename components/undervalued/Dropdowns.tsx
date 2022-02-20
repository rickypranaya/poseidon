import { useState } from 'react';
import Dropdown from '../dropdown';
import { CubeIcon, ClockIcon, ViewGridIcon } from '@heroicons/react/outline';
import { categories, chains, timeframe } from '../../constants/dropdown';

function Dropdowns(props) {
  const [timeRange, setTimeRange] = useState(chains[0]);
  const [category, setCategory] = useState(categories[0]);
  const [chain, setChain] = useState(timeframe[0]);

  return (
    <div className="flex items-center">
      <div className="hidden mr-5 md:block">
        <Dropdown
          icon={<ViewGridIcon className="w-5 h-full self-center mr-2" />}
          width="w-36"
          data={categories}
          selected={category}
          setSelected={setCategory}
        />
      </div>
      <div className="flex space-x-5 items-center">
        <Dropdown
          responsive={true}
          icon={<CubeIcon className="w-5 h-full self-center mr-2" />}
          data={chains}
          selected={timeRange}
          setSelected={setTimeRange}
        />
        <Dropdown
          responsive={true}
          icon={<ClockIcon className="w-5 h-full self-center mr-2" />}
          type="time"
          data={timeframe}
          selected={chain}
          setSelected={setChain}
        />
      </div>
    </div>
  );
}

export default Dropdowns;
