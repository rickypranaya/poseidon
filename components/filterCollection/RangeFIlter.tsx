import { useState, useRef } from 'react';
import classNames from 'classnames';
import { InformationCircleIcon } from '@heroicons/react/solid';
import {
  AdjustmentsIcon,
  CubeIcon,
  ClockIcon,
  ViewGridIcon,
} from '@heroicons/react/outline';
import Dropdown from '../dropdown';
import RangeInput from './RangeInput';
import { currencyOptions } from '../../constants/filter';
import { RangeFilter } from '../../types';

const RangeFilter = (props: RangeFilter) => {
  const { open, label, info, type, filterList, updateFilter } = props;
  const [active, setActive] = useState(false);
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const minRef = useRef('');
  const maxRef = useRef('');

  //only for floor price
  const [currency, setCurrency] = useState(currencyOptions[0]);

  //handle changing of currency
  const handleCurrency = (obj) => {
    setCurrency(obj);
    if (minRef.current || maxRef.current) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  const handleInput = (event, type) => {
    const value = event.target.value;
    if (!isNaN(value)) {
      if (type == 'min') {
        minRef.current = value;
        setMin(value);
      } else {
        maxRef.current = value;
        setMax(value);
      }
      if (minRef.current || maxRef.current) {
        setActive(true);
      } else {
        setActive(false);
      }
    }
  };

  const handleApply = () => {
    setActive(false);
    let filterLabel;

    switch (type) {
      case 'floor_price':
        // ================ SECOND PHASE ================
        // if (!maxRef.current) {
        //   filterLabel = `Floor Price: > ${currency.id} ${minRef.current}`;
        // } else if (!minRef.current) {
        //   filterLabel = `Floor Price: < ${currency.id} ${maxRef.current}`;
        // } else {
        //   filterLabel = `Floor Price: ${currency.id} ${minRef.current} - ${maxRef.current}`;
        // }
        // ==================================================
        if (!maxRef.current) {
          filterLabel = `Floor Price: > USD ${minRef.current}`;
        } else if (!minRef.current) {
          filterLabel = `Floor Price: < USD ${maxRef.current}`;
        } else {
          filterLabel = `Floor Price: USD ${minRef.current} - ${maxRef.current}`;
        }
        break;
      case 'liquidity':
        if (!maxRef.current) {
          filterLabel = `Liquidity: > ${minRef.current}`;
        } else if (!minRef.current) {
          filterLabel = `Liquidity: < ${maxRef.current}`;
        } else {
          filterLabel = `Liquidity: ${minRef.current} - ${maxRef.current}`;
        }
        break;
      case 'distribution':
        if (!maxRef.current) {
          filterLabel = `Distribution: > ${minRef.current}`;
        } else if (!minRef.current) {
          filterLabel = `Distribution: < ${maxRef.current}`;
        } else {
          filterLabel = `Distribution: ${minRef.current} - ${maxRef.current}`;
        }
        break;
      case 'flow':
        if (!maxRef.current) {
          filterLabel = `Flow:  > ${minRef.current}`;
        } else if (!minRef.current) {
          filterLabel = `Flow: < ${maxRef.current}`;
        } else {
          filterLabel = `Flow: ${minRef.current} - ${maxRef.current}`;
        }
        break;
      case 'age':
        if (!maxRef.current) {
          filterLabel = `Age: > ${minRef.current}`;
        } else if (!minRef.current) {
          filterLabel = `Age: < ${maxRef.current}`;
        } else {
          filterLabel = `Age: ${minRef.current} - ${maxRef.current}`;
        }
        break;

      default:
        break;
    }

    updateFilter(type, filterLabel, [minRef.current, maxRef.current]);
  };

  return (
    <div className={classNames('w-full', open ? 'block' : 'hidden')}>
      <div className="flex items-center relative mb-2 ">
        <span className="text-white  font-semibold">{label}</span>
        <InformationCircleIcon className="peer mx-1.5 w-4 h-4 text-dark-base cursor-pointer hover:text-white" />
        <div className="opacity-0 invisible peer-hover:visible peer-hover:opacity-100 duration-300 translate-y-2 peer-hover:translate-y-0 absolute bg-dark-darker text-zinc-300 shadow-xl rounded p-2 text-sm left-0 top-8 z-20">
          {info}
        </div>
      </div>

      {/* =================== ONGOING PROGRESS ====================
      {type == 'floor_price' && (
        <div className="mb-2">
          <Dropdown
            variant="small"
            // icon={<ViewGridIcon className="w-5 h-5 mr-2" />}
            width="w-36"
            data={currencyOptions}
            selected={currency}
            setSelected={handleCurrency}
          />
        </div>
      )}
      ======================================================== */}

      <div className="flex justify-between space-x-3 items-center">
        <RangeInput
          placeholder="From"
          type="min"
          onChange={handleInput}
          value={min}
        />
        {/* <span className="text-white text-xs mx-2">to</span> */}
        <RangeInput
          placeholder="To"
          type="max"
          onChange={handleInput}
          value={max}
        />
      </div>
      {active && (
        <div
          onClick={handleApply}
          className="py-2 px-5 bg-dark-darker mt-3 hover:bg-dark-base text-white cursor-pointer rounded-md text-xs font-semibold w-fit"
        >
          Apply
        </div>
      )}
    </div>
  );
};

export default RangeFilter;
