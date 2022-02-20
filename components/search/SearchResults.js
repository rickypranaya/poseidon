import ResultItem from './ResultItem';

function SearchResults(props) {
  const { resultsData, selectItem } = props;
  return (
    <div className="absolute z-50 bg-dark-darker rounded-md overflow-clip w-full mt-1  shadow-xl">
      {resultsData.map((result) => (
        <ResultItem key={result.id} item={result} selectItem={selectItem} />
      ))}
    </div>
  );
}

export default SearchResults;
