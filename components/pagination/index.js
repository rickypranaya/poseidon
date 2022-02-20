import { useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import PageButton from './Button';

export default function Pagination(props) {
  const { itemsPerPage, totalItems, currentPage, paginate } = props;
  const [sliceFrom, setSliceFrom] = useState(0);
  const [sliceTo, setSliceTo] = useState(0);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  const [maxIndex, setMaxIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const maxIndex = Math.ceil(pageNumbers.length / 5);
    setMaxIndex(maxIndex);
  }, [totalItems]);

  useEffect(() => {
    const multiplier = Math.ceil(currentPage / 5);
    setCurrentIndex(multiplier);
    setSliceFrom(multiplier * 5 - 5);
    setSliceTo(multiplier * 5);
  }, [currentPage]);

  //handle click previous
  const handlePrevious = () => {
    if (currentPage <= 1) {
      return;
    } else {
      paginate(currentPage - 1);
    }
  };

  //hanlde click next
  const handleNext = () => {
    if (itemsPerPage * currentPage >= totalItems) {
      return;
    } else {
      paginate(currentPage + 1);
    }
  };

  //handle click previous
  const handlePrevious5 = () => {
    if (currentPage <= 1) {
      return;
    } else {
      paginate(5 * currentIndex - 5);
    }
  };

  //hanlde click next
  const handleNext5 = () => {
    if (itemsPerPage * currentPage >= totalItems) {
      return;
    } else {
      paginate(5 * currentIndex + 1);
    }
  };

  // styling pagination button
  const buttonStyle = (num) => {
    let style;
    if (currentIndex == 1 && num == 1) {
      style = 'rounded-l-md';
    } else if (
      currentIndex == maxIndex &&
      num == pageNumbers[pageNumbers.length - 1]
    ) {
      style = 'rounded-r-md';
    }
    return style;
  };

  const DisplayButton = () => {
    return (
      <>
        {pageNumbers.length <= 5
          ? pageNumbers.map((num) => (
              <PageButton
                key={num}
                pageNumber={num}
                active={currentPage == num}
                onClick={() => paginate(num)}
                style={buttonStyle(num)}
              />
            ))
          : pageNumbers
              .slice(sliceFrom, sliceTo)
              .map((num) => (
                <PageButton
                  key={num}
                  pageNumber={num}
                  active={currentPage == num}
                  onClick={() => paginate(num)}
                  style={buttonStyle(num)}
                />
              ))}
      </>
    );
  };

  return (
    <div className="flex items-center justify-between ">
      <div className="flex-1 flex justify-between sm:hidden space-x-5">
        {currentPage > 1 && (
          <PageButton
            onClick={handlePrevious}
            pageNumber="Previous"
            style="rounded-md"
          />
        )}
        {itemsPerPage * currentPage < totalItems && (
          <PageButton
            onClick={handleNext}
            pageNumber="Next"
            style="rounded-md"
          />
        )}
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            {currentIndex > 1 && (
              <div
                onClick={handlePrevious5}
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-dark-base bg-dark-darkest text-sm font-medium text-gray-300 hover:bg-dark-darker"
              >
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </div>
            )}
            <DisplayButton />

            {currentIndex < maxIndex && (
              <div
                onClick={handleNext5}
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-dark-base bg-dark-darkest text-sm font-medium text-gray-300 hover:bg-dark-darker"
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </div>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}
