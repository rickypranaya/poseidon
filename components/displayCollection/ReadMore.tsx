import React, { useState } from 'react';

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="w-full">
      {isReadMore ? `${text.slice(0, 120)}...` : text}
      <span
        onClick={toggleReadMore}
        className=" hover:text-cyan-400 cursor-pointer text-primary text-xs"
      >
        {isReadMore ? ' Read more' : ' Show less'}
      </span>
    </p>
  );
};

export default ReadMore;
