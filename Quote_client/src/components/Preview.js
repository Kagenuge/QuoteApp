import React from 'react';

const Preview = ({ id, author, quotetext }) => {
  return (
    <div>
      <span>{id}
        <p>"{quotetext}"</p>
        <p id={id}>–{author}</p>
      </span>
    </div>
  )
};

export default Preview;