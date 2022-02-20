import { useState, useRef, useEffect } from 'react'
import { AdjustmentsIcon } from '@heroicons/react/outline'

//components
import Table from '../table'
import FilterCollection from '../../components/filterCollection'
import Pagination from '../pagination'
import { API } from '../../constants/domain'

import { resultsData } from '../../constants/dummy'

function TopCollection(props) {
  // const [ready, setReady] = useState(false);
  const [ready, setReady] = useState(false)
  const [filterOpen, setFilterOpen] = useState(false)
  const mainRef = useRef(null)

  // filter
  const [filters, setFilters] = useState([])
  const [age, setAge] = useState(['', ''])
  const [floorPrice, setFloorPrice] = useState(['', ''])
  const [liquidity, setLiquidity] = useState(['', ''])
  const [market, setMarket] = useState(['', ''])
  const [distribution, setDistribution] = useState(['', ''])

  // pagination
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [data, setData] = useState([])
  const [totalItems, setTotalItems] = useState(52)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage

  // when pagination button clicked
  const paginate = (num) => {
    setCurrentPage(num)
    mainRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  // fetch collections
  useEffect(() => {
    fetchCollection()
  }, [currentPage, age, floorPrice, liquidity, market, distribution])

  // fetch collections
  useEffect(() => {
    fetchCount()
  }, [age, floorPrice, liquidity, market, distribution])

  // fetching collection data
  const fetchCollection = async () => {
    setReady(false)
    await fetch(`${API}/collection_get`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        offset: indexOfFirstItem,
        itemsPerPage: itemsPerPage,
        age: age,
        floorPrice: floorPrice,
        liquidity: liquidity,
        market: market,
        distribution: distribution,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response.json()
      })
      .then((data) => {
        setData(data.data)
        setReady(true)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  // fetching collection count
  const fetchCount = async () => {
    await fetch(`${API}/collection_count`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        age: age,
        floorPrice: floorPrice,
        liquidity: liquidity,
        market: market,
        distribution: distribution,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response.json()
      })
      .then((data) => {
        setTotalItems(data.data[0]['COUNT(*)'])
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const updateFilter = (type, label, range) => {
    setCurrentPage(1)

    const array = filters.filter(function (obj) {
      return obj.id !== type
    })

    setFilters([{ id: type, label: label }, ...array])

    switch (type) {
      case 'floor_price':
        setFloorPrice(range)
        break
      case 'liquidity':
        setLiquidity(range)
        break
      case 'distribution':
        setDistribution(range)
        break
      case 'market_cap':
        setMarket(range)
        break
      case 'age':
        setAge(range)
        break
      default:
        break
    }
  }

  const deleteFilter = (id) => {
    setCurrentPage(1)
    const array = filters.filter(function (obj) {
      return obj.id !== id
    })

    switch (id) {
      case 'floor_price':
        setFloorPrice(['', ''])
        break
      case 'liquidity':
        setLiquidity(['', ''])
        break
      case 'distribution':
        setDistribution(['', ''])
        break
      case 'market_cap':
        setMarket(['', ''])
        break
      case 'age':
        setAge(['', ''])
        break
      default:
        break
    }

    setFilters(array)
  }

  const clearFilter = () => {
    setCurrentPage(1)

    setFloorPrice(['', ''])
    setLiquidity(['', ''])
    setDistribution(['', ''])
    setMarket(['', ''])
    setAge(['', ''])
    setFilters([])
  }

  // Gradient Filter Button
  const FilterButton = () => {
    return (
      <div
        onClick={() => {
          setFilterOpen((open) => !open)
          mainRef.current.scrollIntoView({ behavior: 'smooth' })
        }}
        className="flex h-9 w-fit cursor-pointer select-none items-center rounded-md bg-gradient-to-r from-sky-500 to-violet-500 py-2 px-4 text-base font-normal duration-100 hover:from-sky-600 hover:to-violet-600 "
      >
        <AdjustmentsIcon className="h-4 w-4" />
        <span className="ml-2 font-semibold">Filters</span>
      </div>
    )
  }

  return (
    <div>
      <div className="sticky top-0 z-[1000] border-b border-dark-base bg-dark-darkest bg-opacity-60 shadow-xl backdrop-blur-md">
        <div
          ref={mainRef}
          className=" px-5 text-2xl font-bold text-white sm:px-8"
        >
          <div className="mt-0 flex flex-grow items-center justify-between py-3">
            <FilterButton />
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={totalItems}
              currentPage={currentPage}
              paginate={paginate}
            />
          </div>
        </div>
        <FilterCollection
          filters={filters}
          deleteFilter={deleteFilter}
          updateFilter={updateFilter}
          clearFilter={clearFilter}
          open={filterOpen}
        />
      </div>

      <Table data={data} startIndex={indexOfFirstItem} ready={ready} />
    </div>
  )
}

export default TopCollection
