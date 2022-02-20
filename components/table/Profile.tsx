import classNames from 'classnames';

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
  } = props;

  const getUrl = () => {
    const tempUrls = [];

    if (website) {
      tempUrls.push({
        Website: website,
      });
    }
    if (opensea) {
      tempUrls.push({
        Opensea: opensea,
      });
    }
    if (twitter) {
      tempUrls.push({
        Twitter: `https://twitter.com/${twitter}`,
      });
    }
    if (instagram) {
      tempUrls.push({
        Instagram: `https://www.instagram.com/${instagram}`,
      });
    }
    if (discord) {
      tempUrls.push({
        Discord: discord,
      });
    }
    if (medium) {
      tempUrls.push({
        Medium: `https://${medium}.medium.com`,
      });
    }
    if (telegram) {
      tempUrls.push({
        Telegram: telegram,
      });
    }

    return tempUrls;
  };

  return (
    <td
      className={classNames(
        'sticky left-0 z-30 group cursor-pointer justify-center w-24 flex items-center space-x-3 px-6 py-3 whitespace-nowrap text-sm font-medium text-dark-darkest',
        index % 2 === 0 ? 'bg-dark-darkest' : 'bg-dark-darker '
      )}
    >
      <span className="text-zinc-300 text-xs">{rank}</span>
      <div className=" min-w-fit flex relative">
        <img
          onClick={() => {
            setDisplayID(id);
            setOpen(true);
          }}
          className="bg-gradient-to-t from-sky-400 to-violet-400 w-9 h-9 rounded-full object-cover"
          src={image}
          alt=""
        />

        <div
          className={classNames(
            'hidden sm:block invisible duration-300 opacity-0 translate-y-6 group-hover:translate-y-0  group-hover:opacity-100 group-hover:visible overflow-hidden absolute left-0.5 translate-x-14 z-50 bg-dark-base bg-opacity-70 backdrop-blur rounded-md l ',
            20 - index < 5 ? 'bottom-0' : 'top-0'
          )}
        >
          {getUrl().map((obj) => {
            const key = Object.keys(obj)[0];
            const value = Object.values(obj)[0];
            return (
              <div
                key={key}
                className="duration-100 hover:bg-dark-light hover:text-white text-gray-300 font-normal text-lg sm:text-sm px-3 py-1 "
              >
                <a href={`${value}`} target="_blank" rel="noreferrer noopener">
                  {key}
                </a>
              </div>
            );
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
  );
}

export default Profile;
