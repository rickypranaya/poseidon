import { useEffect, useState, useRef } from 'react'
import useDraggableScroll from 'use-draggable-scroll'
import { thLists } from '../../constants/table'
import Theader from './Theader'
import Placeholder from './placeholder'
import Profile from './Profile'
import RowItem from './RowItem'
import classNames from 'classnames'
import DisplayCollection from '../displayCollection'

export default function Table(props) {
  const [open, setOpen] = useState(false)
  const [displayID, setDisplayID] = useState(0)
  const { data, startIndex, ready } = props
  const [collections, setCollections] = useState([])
  const tableRef = useRef(null)
  const { onMouseDown } = useDraggableScroll(tableRef, {
    direction: 'horizontal',
  })

  // updating table from pagination
  useEffect(() => {
    if (data) {
      const temp = data.map((object) => ({
        ...object,
      }))
      setCollections(() => [...temp])
    } else {
      setCollections([])
    }
  }, [data])

  return (
    <div className=" flex flex-col ">
      <div className="inline-block min-w-full overflow-hidden align-middle ">
        <div
          ref={tableRef}
          onMouseDown={onMouseDown}
          className="collection-table w-screen overflow-x-auto overflow-y-hidden border-b border-dark-base shadow "
        >
          <table className="min-w-full divide-y divide-dark-base ">
            <thead className="z-50 bg-dark-darker">
              <tr>
                <th />
                {thLists.map((th) => (
                  <Theader key={th.id} label={th.label} info={th.info} />
                ))}
              </tr>
            </thead>
            {!ready ? (
              <tbody>
                {Array(15)
                  .fill(0)
                  .map((i, idx) => (
                    <Placeholder key={idx} idx={idx} />
                  ))}
              </tbody>
            ) : (
              <tbody>
                {collections.map((collection, idx) => (
                  <tr
                    key={collection.id}
                    className={
                      idx % 2 === 0 ? 'bg-dark-darkest ' : 'bg-dark-darker '
                    }
                  >
                    <Profile
                      setDisplayID={setDisplayID}
                      index={idx}
                      id={collection.id}
                      setOpen={setOpen}
                      rank={idx + startIndex + 1}
                      image={collection.image_url}
                      verified={Boolean(collection.is_verified)}
                      website={collection.website_url}
                      opensea={collection.opensea_url}
                      twitter={collection.twitter_url}
                      instagram={collection.instagram_url}
                      discord={collection.discord_url}
                      medium={collection.medium_url}
                      telegram={collection.telegram_url}
                    />

                    {thLists.map((item) => (
                      <RowItem
                        key={item.id}
                        type={item.id}
                        collection={collection}
                      />
                    ))}
                  </tr>
                ))}
              </tbody>
            )}
          </table>
          {!data && ready && (
            <div className="w-full px-8 py-4 font-medium text-white">
              No Collections found
            </div>
          )}
        </div>
      </div>
      <DisplayCollection id={displayID} open={open} setOpen={setOpen} />
    </div>
  )
}
