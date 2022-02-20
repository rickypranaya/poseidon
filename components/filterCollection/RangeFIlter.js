import { useState, useRef } from 'react'
import classNames from 'classnames'
import { InformationCircleIcon } from '@heroicons/react/solid'
import {
  AdjustmentsIcon,
  CubeIcon,
  ClockIcon,
  ViewGridIcon,
} from '@heroicons/react/outline'
import Dropdown from '../dropdown'
import RangeInput from './RangeInput'
import { currencyOptions } from '../../constants/filter'
import { RangeFilter } from '../../types'

const RangeFilter = (props) => {
  const { open, label, info, type, filterList, updateFilter } = props
  const [active, setActive] = useState(false)
  const [min, setMin] = useState('')
  const [max, setMax] = useState('')
  const minRef = useRef('')
  const maxRef = useRef('')

  //only for floor price
  const [currency, setCurrency] = useState(currencyOptions[0])

  //handle changing of currency
  const handleCurrency = (obj) => {
    setCurrency(obj)
    if (minRef.current || maxRef.current) {
      setActive(true)
    } else {
      setActive(false)
    }
  }

  const handleInput = (event, type) => {
    const value = event.target.value
    if (!isNaN(value)) {
      if (type == 'min') {
        minRef.current = value
        setMin(value)
      } else {
        maxRef.current = value
        setMax(value)
      }
      if (minRef.current || maxRef.current) {
        setActive(true)
      } else {
        setActive(false)
      }
    }
  }

  const handleApply = () => {
    setActive(false)
    let filterLabel

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
          filterLabel = `Floor Price: > USD ${minRef.current}`
        } else if (!minRef.current) {
          filterLabel = `Floor Price: < USD ${maxRef.current}`
        } else {
          filterLabel = `Floor Price: USD ${minRef.current} - ${maxRef.current}`
        }
        break
      case 'liquidity':
        if (!maxRef.current) {
          filterLabel = `Liquidity: > ${minRef.current}`
        } else if (!minRef.current) {
          filterLabel = `Liquidity: < ${maxRef.current}`
        } else {
          filterLabel = `Liquidity: ${minRef.current} - ${maxRef.current}`
        }
        break
      case 'distribution':
        if (!maxRef.current) {
          filterLabel = `Distribution: > ${minRef.current}`
        } else if (!minRef.current) {
          filterLabel = `Distribution: < ${maxRef.current}`
        } else {
          filterLabel = `Distribution: ${minRef.current} - ${maxRef.current}`
        }
        break
      case 'market_cap':
        if (!maxRef.current) {
          filterLabel = `Market Cap:  > ${minRef.current}`
        } else if (!minRef.current) {
          filterLabel = `Market Cap: < ${maxRef.current}`
        } else {
          filterLabel = `Market Cap: ${minRef.current} - ${maxRef.current}`
        }
        break
      case 'age':
        if (!maxRef.current) {
          filterLabel = `Age: > ${minRef.current} days`
        } else if (!minRef.current) {
          filterLabel = `Age: < ${maxRef.current} days`
        } else {
          filterLabel = `Age: ${minRef.current} - ${maxRef.current} days`
        }
        break

      default:
        break
    }

    updateFilter(type, filterLabel, [minRef.current, maxRef.current])
  }

  return (
    <div className={classNames('w-full', open ? 'block' : 'hidden')}>
      <div className="relative mb-2 flex items-center ">
        <span className="font-semibold  text-white">{label}</span>
        <InformationCircleIcon className="peer mx-1.5 h-4 w-4 cursor-pointer text-dark-base hover:text-white" />
        <div className="invisible absolute left-0 top-8 z-20 translate-y-2 rounded bg-dark-darker p-2 text-sm text-zinc-300 opacity-0 shadow-xl duration-300 peer-hover:visible peer-hover:translate-y-0 peer-hover:opacity-100">
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

      <div className="flex items-center justify-between space-x-3">
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
          className="mt-3 w-fit cursor-pointer rounded-md bg-dark-darker py-2 px-5 text-xs font-semibold text-white hover:bg-dark-base"
        >
          Apply
        </div>
      )}
    </div>
  )
}

export default RangeFilter
