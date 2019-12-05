import React from 'react';
import Button from './Button';

const Quote = ({ id, author, quotetext, handleDelete, handleModify }) => {
  return (
    <div>
      <hr/>
      <span>{id}
        <p>"{quotetext}"</p>
        <p id={id}>–{author}</p>
        <Button handleClick={handleModify} buttonText="Modify" buttonClass="btn btn-dark" btnid={id} />
        <Button handleClick={handleDelete} buttonText="Delete" buttonClass="btn btn-danger" btnid={id} />
      </span>
    </div>
  )
};

export default Quote;