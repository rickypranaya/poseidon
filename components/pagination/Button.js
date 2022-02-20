import classNames from 'classnames';

const PageButton = (props) => {
  const { pageNumber, active, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={classNames(
        'select-none z-10 cursor-pointer border-dark-base  hover:bg-dark-darker  relative inline-flex items-center px-4 py-2 border text-sm font-medium',
        active ? 'bg-dark-base text-zinc-200' : 'bg-dark-darkest text-zinc-400',
        style
      )}
    >
      {pageNumber}
    </div>
  );
};

export default PageButton;
