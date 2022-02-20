const ResultItem = (props) => {
  const { item, selectItem } = props;
  return (
    <div
      onClick={() => {
        selectItem(item.id);
      }}
      className="px-3 py-2 cursor-pointer hover:bg-dark-base"
    >
      <div className="flex items-center">
        <img
          className="bg-gray-400 h-8 w-8 rounded-full object-cover"
          src={item.image_url}
          alt=""
        />
        <div className="px-3 text-white text-sm font-medium">{item.name}</div>
      </div>
    </div>
  );
};

export default ResultItem;
