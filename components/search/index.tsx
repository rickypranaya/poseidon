import { useState, useMemo, useRef } from 'react';
import { SearchIcon, XIcon } from '@heroicons/react/solid';
import classNames from 'classnames';
import debounce from 'lodash.debounce';
import SearchResults from './SearchResults';
import { API } from '../../constants/domain';
import DisplayCollection from '../displayCollection';

interface Props {
  placeholder: string;
}

function SearchBar(props: Props) {
  const { placeholder } = props;
  const [ready, setReady] = useState(false);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const searhTermRef = useRef('');
  const [focus, setFocus] = useState(false);
  const [id, setId] = useState(0);
  const [open, setOpen] = useState(false);

  const selectItem = (id) => {
    setId(id);
    setOpen(true);
    setData([]);
  };

  const handleInput = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    searhTermRef.current = value;
    debouncedResults();
    if (value == '') {
      setData([]);
    }
  };

  // search collection with keyword
  const fetchSearch = async () => {
    setReady(false);
    await fetch(`${API}keywords?keywords=${searhTermRef.current}`, {})
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setData(data.slice(0, 6));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const debouncedResults = useMemo(() => {
    return debounce(fetchSearch, 500);
  }, []);

  return (
    <div className="w-full relative">
      <label htmlFor="search" className="sr-only">
        {placeholder}
      </label>
      <div
        className={classNames(
          'flex relative border border-transparent hover:border-dark-lighter rounded-md',
          focus && 'border-dark-lighter'
        )}
      >
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon
            className="h-5 w-5 text-dark-lighter"
            aria-hidden="true"
          />
        </div>

        <input
          value={searchTerm}
          onChange={handleInput}
          onFocus={() => {
            setFocus(true);
          }}
          onBlur={() => {
            setFocus(false);
          }}
          id="search"
          name="search"
          className="caret-white  block w-full pl-10 pr-3 py-2 border-transparent rounded-l-md leading-5 bg-dark-darker text-zinc-300 placeholder-dark-lighter focus:outline-none focus:bg-dark-darkest  focus:border-transparent focus:ring-transparent  sm:text-sm"
          placeholder={placeholder}
          type="text"
          autoComplete="off"
        />
        <div
          onClick={() => {
            setSearchTerm('');
            setData([]);
          }}
          className={classNames(
            ' group flex items-center px-2  rounded-r-md',
            focus ? 'bg-dark-darkest' : 'bg-dark-darker',
            searchTerm && 'cursor-pointer'
          )}
        >
          <XIcon
            className={classNames(
              'group-hover:text-white h-4 w-4 text-zinc-300',
              searchTerm ? 'visible' : 'invisible'
            )}
            aria-hidden="true"
          />
        </div>
      </div>
      {data.length > 0 && searchTerm && (
        <SearchResults resultsData={data} selectItem={selectItem} />
      )}
      <DisplayCollection id={id} open={open} setOpen={setOpen} />
    </div>
  );
}

export default SearchBar;
