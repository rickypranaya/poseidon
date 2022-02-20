import classNames from 'classnames'

function Profile(props) {
  const {
    index,
    id,
    setDisplayID,
    setOpen,
    rank,
    image,
    website,
    opensea,
    twitter,
    instagram,
    discord,
    medium,
    telegram,
    verified,
  } = props

  const getUrl = () => {
    const tempUrls = []

    if (website) {
      tempUrls.push({
        Website: website,
      })
    }
    if (opensea) {
      tempUrls.push({
        Opensea: opensea,
      })
    }
    if (twitter) {
      tempUrls.push({
        Twitter: `https://twitter.com/${twitter}`,
      })
    }
    if (instagram) {
      tempUrls.push({
        Instagram: `https://www.instagram.com/${instagram}`,
      })
    }
    if (discord) {
      tempUrls.push({
        Discord: discord,
      })
    }
    if (medium) {
      tempUrls.push({
        Medium: `https://${medium}.medium.com`,
      })
    }
    if (telegram) {
      tempUrls.push({
        Telegram: telegram,
      })
    }

    return tempUrls
  }

  return (
    <td
      className={classNames(
        'group sticky left-0 z-50 flex w-24 cursor-pointer items-center justify-center space-x-3 whitespace-nowrap px-6 py-3 text-sm font-medium text-dark-darkest',
        index % 2 === 0 ? 'bg-dark-darkest' : 'bg-dark-darker '
      )}
    >
      <span className="text-xs text-zinc-300">{rank}</span>
      <div className=" relative flex min-w-fit">
        <img
          onClick={() => {
            setDisplayID(id)
            setOpen(true)
          }}
          className="h-9 w-9 rounded-full bg-gradient-to-t from-sky-400 to-violet-400 object-cover"
          src={image}
          alt=""
        />

        <div
          className={classNames(
            'l invisible absolute left-0.5 z-50 hidden translate-y-6  translate-x-14 overflow-hidden rounded-md bg-dark-base bg-opacity-70 opacity-0 backdrop-blur duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 sm:block ',
            10 - index < 5 ? 'bottom-0' : 'top-0'
          )}
        >
          {getUrl().map((obj) => {
            const key = Object.keys(obj)[0]
            const value = Object.values(obj)[0]
            return (
              <div
                key={key}
                className="px-3 py-1 text-lg font-normal text-gray-300 duration-100 hover:bg-dark-light hover:text-white sm:text-sm "
              >
                <a href={`${value}`} target="_blank" rel="noreferrer noopener">
                  {key}
                </a>
              </div>
            )
          })}
        </div>

        {verified && (
          <img
            className=" absolute -bottom-1 -right-1 h-3.5 w-3.5  object-cover"
            src="verified.png"
            alt=""
          />
        )}
      </div>
    </td>
  )
}

export default Profile
