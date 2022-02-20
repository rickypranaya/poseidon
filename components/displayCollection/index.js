import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { API } from '../../constants/domain'
import Placeholder from './placeholder'
import ETH from '../ETH'
import ReadMore from './ReadMore'
import Urls from './Urls'

export default function DisplayCollection(props) {
  const [ready, setReady] = useState(false)
  const [collection, setCollection] = useState(null)
  const [urls, setUrls] = useState([])
  const { id, open, setOpen } = props

  useEffect(() => {
    if (id != 0) {
      fetchID()
    }
  }, [id])

  useEffect(() => {
    if (collection) {
      getUrl()
    }
  }, [collection])

  // get collection info by ID
  const fetchID = async () => {
    setReady(false)
    await fetch(`${API}/id`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response.json()
      })
      .then((data) => {
        setCollection(data.data[0])
        setReady(true)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const getUrl = () => {
    const tempUrls = []

    if (collection.website_url) {
      tempUrls.push({
        logo: (
          <img className="h-3.5 w-3.5" src="social/website.svg" alt="Website" />
        ),
        label: 'Website',
        url: collection.website_url,
      })
    }
    if (collection.opensea_url) {
      tempUrls.push({
        logo: (
          <img className="h-6 w-6" src="social/opensea.svg" alt="Opensea" />
        ),
        label: 'Opensea',
        url: collection.opensea_url,
      })
    }
    if (collection.twitter_url) {
      tempUrls.push({
        logo: (
          <img className="h-4 w-4" src="social/twitter.svg" alt="Twitter" />
        ),
        label: 'Twitter',
        url: `https://twitter.com/${collection.twitter_url}`,
      })
    }
    if (collection.instagram_url) {
      tempUrls.push({
        logo: (
          <img className="h-4 w-4" src="social/instagram.svg" alt="Instagram" />
        ),
        label: 'Instagram',
        url: `https://www.instagram.com/${collection.instagram_url}`,
      })
    }
    if (collection.discord_url) {
      tempUrls.push({
        logo: (
          <img className="h-5 w-5" src="social/discord.svg" alt="Discord" />
        ),
        label: 'Discord',
        url: collection.discord_url,
      })
    }
    if (collection.medium_url) {
      tempUrls.push({
        logo: <img className="h-5 w-5" src="social/medium.svg" alt="Medium" />,
        label: 'Medium',
        url: `https://${collection.medium_url}.medium.com`,
      })
    }
    if (collection.telegram_url) {
      tempUrls.push({
        logo: (
          <img className="h-4 w-4" src="social/telegram.svg" alt="Telegram" />
        ),
        label: 'Telegram',
        url: collection.telegram_url,
      })
    }

    setUrls(tempUrls)
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-[9999] overflow-y-auto"
        onClose={setOpen}
      >
        <div className="flex min-h-screen flex-col items-center justify-center px-5 text-center md:px-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-dark-base bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block w-full max-w-sm transform  overflow-hidden rounded-lg bg-dark-darkest  px-4 pt-5 pb-4 text-left align-middle text-white shadow-xl transition-all md:max-w-2xl ">
              {!ready ? (
                <Placeholder />
              ) : (
                <div className="flex">
                  <div
                    style={{
                      backgroundImage: `url(${collection.image_url})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                    className="hidden w-1/3 rounded-md md:block"
                  />

                  <div className="w-full md:w-2/3 md:pl-8">
                    <div className="flex md:block">
                      <div
                        style={{
                          backgroundImage: `url(${collection.image_url})`,
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                        }}
                        className="block h-36 w-2/5 rounded-md md:hidden"
                      />

                      <div className="flex w-3/5 items-center pl-4 md:w-full md:pl-0">
                        <div className="text-xl font-medium">
                          {collection.name}
                          {collection.is_verified && (
                            <img
                              className="mx-2 mb-1 inline h-4 w-4 object-cover"
                              src="verified.png"
                              alt=""
                            />
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 mb-2 text-xs text-gray-400">
                      {collection.description.length > 120 ? (
                        <ReadMore>{collection.description}</ReadMore>
                      ) : (
                        <span>{collection.description}</span>
                      )}
                    </div>

                    <div className="justify grid grid-cols-3 gap-4 py-4">
                      <div className="flex flex-col items-center justify-center ">
                        <div className="text-center text-xs font-medium md:text-base">
                          Age
                        </div>
                        <div className="text-sm font-medium text-primary">
                          {collection.age} d
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <div className="text-center text-xs font-medium md:text-base">
                          Floor Price
                        </div>
                        <div className="flex items-center">
                          <ETH />
                          <div className="text-sm font-medium text-primary">
                            {collection.floor_price}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <div className="text-center text-xs font-medium md:text-base">
                          Liquidity
                        </div>
                        <div className="text-sm font-medium text-primary">
                          {collection.liquidity}
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <div className="text-center text-xs font-medium md:text-base">
                          Market Cap
                        </div>
                        <div className="flex items-center">
                          <ETH />
                          <div className="text-sm font-medium text-primary">
                            {Number(collection.market_cap).toLocaleString()}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center ">
                        <div className="text-center text-xs font-medium md:text-base">
                          Total Supply
                        </div>
                        <div className="text-sm font-medium text-primary">
                          {Number(collection.total_supply).toLocaleString()}
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <div className="text-center text-xs font-medium md:text-base">
                          Distribution
                        </div>
                        <div className="text-sm font-medium text-primary">
                          {collection.distribution.toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Transition.Child>
          {ready && <Urls urls={urls} />}
        </div>
      </Dialog>
    </Transition.Root>
  )
}
