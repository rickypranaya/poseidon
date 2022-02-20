import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { API } from '../../constants/domain';
import Placeholder from './placeholder';
import ETH from '../ETH';
import ReadMore from './ReadMore';
import Urls from './Urls';

export default function DisplayCollection(props) {
  const [ready, setReady] = useState(false);
  const [collection, setCollection] = useState(null);
  const [urls, setUrls] = useState([]);
  const { id, open, setOpen } = props;

  useEffect(() => {
    if (id != 0) {
      fetchID();
    }
  }, [id]);

  useEffect(() => {
    if (collection) {
      getUrl();
    }
  }, [collection]);

  // get collection info by ID
  const fetchID = async () => {
    setReady(false);
    await fetch(`${API}id?id=${id}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setCollection(data);
        setReady(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUrl = () => {
    const tempUrls = [];

    if (collection.website_url) {
      tempUrls.push({
        logo: (
          <img className="w-3.5 h-3.5" src="social/website.svg" alt="Website" />
        ),
        label: 'Website',
        url: collection.website_url,
      });
    }
    if (collection.opensea_url) {
      tempUrls.push({
        logo: (
          <img className="w-6 h-6" src="social/opensea.svg" alt="Opensea" />
        ),
        label: 'Opensea',
        url: collection.opensea_url,
      });
    }
    if (collection.twitter_url) {
      tempUrls.push({
        logo: (
          <img className="w-4 h-4" src="social/twitter.svg" alt="Twitter" />
        ),
        label: 'Twitter',
        url: `https://twitter.com/${collection.twitter_url}`,
      });
    }
    if (collection.instagram_url) {
      tempUrls.push({
        logo: (
          <img className="w-4 h-4" src="social/instagram.svg" alt="Instagram" />
        ),
        label: 'Instagram',
        url: `https://www.instagram.com/${collection.instagram_url}`,
      });
    }
    if (collection.discord_url) {
      tempUrls.push({
        logo: (
          <img className="w-5 h-5" src="social/discord.svg" alt="Discord" />
        ),
        label: 'Discord',
        url: collection.discord_url,
      });
    }
    if (collection.medium_url) {
      tempUrls.push({
        logo: <img className="w-5 h-5" src="social/medium.svg" alt="Medium" />,
        label: 'Medium',
        url: `https://${collection.medium_url}.medium.com`,
      });
    }
    if (collection.telegram_url) {
      tempUrls.push({
        logo: (
          <img className="w-4 h-4" src="social/telegram.svg" alt="Telegram" />
        ),
        label: 'Telegram',
        url: collection.telegram_url,
      });
    }

    setUrls(tempUrls);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-50 inset-0 overflow-y-auto"
        onClose={setOpen}
      >
        <div className="flex flex-col px-5 md:px-0 items-center justify-center min-h-screen text-center">
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
            <div className="w-full inline-block align-middle bg-dark-darkest  max-w-sm md:max-w-2xl text-white  rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all ">
              {!ready ? (
                <Placeholder />
              ) : (
                <div className="flex">
                  <img
                    src={collection.image_url}
                    alt="collection image"
                    className="w-1/3 min-w-max rounded-md object-cover hidden md:block"
                  />

                  <div className="md:pl-8 w-full md:w-2/3">
                    <div className="flex md:block">
                      <img
                        src={collection.image_url}
                        alt="collection image"
                        className="w-2/5 min-w-max rounded-md object-cover block md:hidden"
                      />

                      <div className="flex pl-4 md:pl-0 items-center">
                        <div className="font-medium text-xl">
                          {collection.name}
                          {collection.is_verified && (
                            <img
                              className="mx-2 h-4 w-4 inline mb-1 object-cover"
                              src="verified.png"
                              alt=""
                            />
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="text-xs text-gray-400 mt-3 mb-2">
                      {collection.description.length > 120 ? (
                        <ReadMore>{collection.description}</ReadMore>
                      ) : (
                        <span>{collection.description}</span>
                      )}
                    </div>

                    <div className="grid grid-cols-3 justify gap-4 py-4">
                      <div className="flex justify-center items-center flex-col ">
                        <div className="font-medium text-xs md:text-base text-center">
                          Age
                        </div>
                        <div className="text-sm text-primary font-medium">
                          125
                        </div>
                      </div>
                      <div className="flex justify-center items-center flex-col">
                        <div className="font-medium text-xs md:text-base text-center">
                          Floor Price
                        </div>
                        <div className="flex items-center">
                          <ETH />
                          <div className="text-sm font-medium text-primary">
                            1.2
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center items-center flex-col">
                        <div className="font-medium text-xs md:text-base text-center">
                          Liquidity
                        </div>
                        <div className="text-sm text-primary font-medium">
                          125
                        </div>
                      </div>
                      <div className="flex justify-center items-center flex-col">
                        <div className="font-medium text-xs md:text-base text-center">
                          Flow
                        </div>
                        <div className="text-sm text-primary font-medium">
                          125
                        </div>
                      </div>
                      <div className="flex justify-center items-center flex-col ">
                        <div className="font-medium text-xs md:text-base text-center">
                          Total Supply
                        </div>
                        <div className="text-sm text-primary font-medium">
                          {Number(collection.total_supply).toLocaleString()}
                        </div>
                      </div>
                      <div className="flex justify-center items-center flex-col">
                        <div className="font-medium text-xs md:text-base text-center">
                          Distribution
                        </div>
                        <div className="text-sm text-primary font-medium">
                          {(
                            collection.total_supply / collection.owners_count
                          ).toFixed(2)}
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
  );
}
