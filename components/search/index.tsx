import { useState, useMemo, useRef } from 'react'
import { SearchIcon, XIcon } from '@heroicons/react/solid'
import classNames from 'classnames'
import debounce from 'lodash.debounce'
import SearchResults from './SearchResults'
import { API } from '../../constants/domain'
import DisplayCollection from '../displayCollection'

interface Props {
  placeholder: string
}

function SearchBar(props: Props) {
  const { placeholder } = props
  const [ready, setReady] = useState(false)
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const searhTermRef = useRef('')
  const [focus, setFocus] = useState(false)
  const [id, setId] = useState(0)
  const [open, setOpen] = useState(false)

  const selectItem = (id) => {
    setId(id)
    setOpen(true)
    setData([])
    setSearchTerm('')
    setReady(false)
  }

  const handleInput = (event) => {
    const value = event.target.value
    setSearchTerm(value)
    searhTermRef.current = value
    debouncedResults()
    if (value == '') {
      setData([])
    }
  }

  // search collection with keyword
  const fetchSearch = async () => {
    setReady(false)
    await fetch(`${API}/keyword`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        keyword: searhTermRef.current,
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

  const debouncedResults = useMemo(() => {
    return debounce(fetchSearch, 500)
  }, [])

  return (
    <div className="relative w-full">
      <label htmlFor="search" className="sr-only">
        {placeholder}
      </label>
      <div
        className={classNames(
          'relative flex rounded-md border border-transparent hover:border-dark-lighter',
          focus && 'border-dark-lighter'
        )}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <SearchIcon
            className="h-5 w-5 text-dark-lighter"
            aria-hidden="true"
          />
        </div>

        <input
          value={searchTerm}
          onChange={handleInput}
          onFocus={() => {
            setFocus(true)
          }}
          onBlur={() => {
            setFocus(false)
          }}
          id="search"
          name="search"
          className="block  w-full rounded-l-md border-transparent bg-dark-darker py-2 pl-10 pr-3 leading-5 text-zinc-300 placeholder-dark-lighter caret-white focus:border-transparent focus:bg-dark-darkest  focus:outline-none focus:ring-transparent  sm:text-sm"
          placeholder={placeholder}
          type="text"
          autoComplete="off"
        />
        <div
          onClick={() => {
            setSearchTerm('')
            setData([])
            setReady(false)
          }}
          className={classNames(
            ' group flex items-center rounded-r-md  px-2',
            focus ? 'bg-dark-darkest' : 'bg-dark-darker',
            searchTerm && 'cursor-pointer'
          )}
        >
          <XIcon
            className={classNames(
              'h-4 w-4 text-zinc-300 group-hover:text-white',
              searchTerm ? 'visible' : 'invisible'
            )}
            aria-hidden="true"
          />
        </div>
      </div>
      {data.length > 0 && searchTerm && ready && (
        <SearchResults resultsData={data} selectItem={selectItem} />
      )}
      {data.length == 0 && searchTerm && ready && (
        <div className="absolute mt-1 w-full rounded-md bg-dark-darker py-3 px-4 text-white">
          No Collections
        </div>
      )}
      <DisplayCollection id={id} open={open} setOpen={setOpen} />
    </div>
  )
}

export default SearchBar
