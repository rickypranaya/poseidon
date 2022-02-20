import classNames from 'classnames';
import RangeFilter from './RangeFIlter';
import FilterButton from './FilterButton';
import { filterMetrics } from '../../constants/filter';

function Filter(props) {
  const { filters, open, updateFilter, deleteFilter, clearFilter } = props;

  return (
    <div>
      <div
        className={classNames(
          'duration-100 px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 ',
          open ? 'pt-4 pb-6' : 'h-0'
        )}
      >
        {filterMetrics.map((metric) => (
          <RangeFilter
            key={metric.id}
            filterList={filters}
            open={open}
            type={metric.id}
            label={metric.label}
            info={metric.info}
            updateFilter={updateFilter}
          />
        ))}
      </div>
      {filters.length > 0 && (
        <div className=" px-5 pb-3 flex flex-wrap items-center">
          {filters.map((filter) => (
            <FilterButton
              deleteItem={deleteFilter}
              key={filter.label}
              item={filter}
            />
          ))}

          <span
            onClick={clearFilter}
            className="text-zinc-500 py-2 cursor-pointer select-none hover:text-white font-semibold text-sm px-2"
          >
            Clear All
          </span>
        </div>
      )}
    </div>
  );
}

export default Filter;
