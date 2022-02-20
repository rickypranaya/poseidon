import { useState, useRef, useEffect } from 'react';
import { AdjustmentsIcon } from '@heroicons/react/outline';

//components
import Table from '../table';
import FilterCollection from '../../components/filterCollection';
import Pagination from '../pagination';
import { API } from '../../constants/domain';
import Dropdowns from './Dropdowns'; // second phase

import { resultsData } from '../../constants/dummy';

function TopCollection(props) {
  // const [ready, setReady] = useState(false);
  const [ready, setReady] = useState(true);
  const [filterOpen, setFilterOpen] = useState(false);
  const mainRef = useRef(null);

  // filter
  const [filters, setFilters] = useState([]);
  const [age, setAge] = useState(['', '']);
  const [floorPrice, setFloorPrice] = useState(['', '']);
  const [liquidity, setLiquidity] = useState(['', '']);
  const [flow, setFlow] = useState(['', '']);
  const [distribution, setDistribution] = useState(['', '']);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [data, setData] = useState([]);
  const [totalItems, setTotalItems] = useState(120);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // when pagination button clicked
  const paginate = (num) => {
    setCurrentPage(num);
    mainRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // fetch collections
  useEffect(() => {
    fetchCollection();
  }, [currentPage, age, floorPrice, liquidity, flow, distribution]);

  // fetching collection data
  const fetchCollection = async () => {
    // setReady(false);
    await fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        start: indexOfFirstItem,
        count: itemsPerPage,
        // age: age,
        // floorPrice: floorPrice,
        // liquidity: liquidity,
        // flow: flow,
        // distribution: distribution,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setTotalItems(data.total);
        setData(data.results);
        setReady(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateFilter = (type, label, range) => {
    setCurrentPage(1);

    const array = filters.filter(function (obj) {
      return obj.id !== type;
    });

    setFilters([{ id: type, label: label }, ...array]);

    switch (type) {
      case 'floor_price':
        setFloorPrice(range);
        break;
      case 'liquidity':
        setLiquidity(range);
        break;
      case 'distribution':
        setDistribution(range);
        break;
      case 'flow':
        setFlow(range);
        break;
      case 'age':
        setAge(range);
        break;
      default:
        break;
    }
  };

  const deleteFilter = (id) => {
    setCurrentPage(1);
    const array = filters.filter(function (obj) {
      return obj.id !== id;
    });

    switch (id) {
      case 'floor_price':
        setFloorPrice(['', '']);
        break;
      case 'liquidity':
        setLiquidity(['', '']);
        break;
      case 'distribution':
        setDistribution(['', '']);
        break;
      case 'flow':
        setFlow(['', '']);
        break;
      case 'age':
        setAge(['', '']);
        break;
      default:
        break;
    }

    setFilters(array);
  };

  const clearFilter = () => {
    setCurrentPage(1);

    setFloorPrice(['', '']);
    setLiquidity(['', '']);
    setDistribution(['', '']);
    setFlow(['', '']);
    setAge(['', '']);
    setFilters([]);
  };

  // Gradient Filter Button
  const FilterButton = () => {
    return (
      <div
        onClick={() => {
          setFilterOpen((open) => !open);
          mainRef.current.scrollIntoView({ behavior: 'smooth' });
        }}
        className="select-none cursor-pointer bg-gradient-to-r hover:from-sky-600 hover:to-violet-600 h-9 from-sky-500 to-violet-500 duration-100 flex items-center font-normal text-base rounded-md w-fit py-2 px-4 "
      >
        <AdjustmentsIcon className="w-4 h-4" />
        <span className="ml-2 font-semibold">Filters</span>
      </div>
    );
  };

  return (
    <div>
      <div className="sticky top-0 bg-dark-darkest bg-opacity-60 backdrop-blur-md z-40 border-b border-dark-base shadow-xl">
        <div
          ref={mainRef}
          className=" text-white font-bold text-2xl px-5 sm:px-8"
        >
          <div className="justify-between mt-0 flex-grow flex items-center py-3">
            {/* ======== SECOND PHASE ========
            <Dropdowns />
            =================================== */}

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

      <Table data={resultsData} startIndex={indexOfFirstItem} ready={ready} />
    </div>
  );
}

export default TopCollection;
