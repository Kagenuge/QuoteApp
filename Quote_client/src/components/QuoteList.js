import React from 'react';
import Quote from './Quote';

const QuoteList = ({ quotes, handleDelete, handleModify }) => {
  const quoterows = quotes.map(quote => <Quote id={quote.id} key={quote.id} author={quote.author} quotetext={quote.quotetext} handleModify={handleModify} handleDelete={handleDelete} />);
  
  return (
    <div>
    {quoterows}
    </div>
  )
};

export default QuoteList;