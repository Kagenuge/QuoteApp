import React, { useState } from 'react';
import Preview from './Preview';

const Form = () => {
  const [quote, setQuote] = useState([]);

  const handleChange = (change) => {
    setQuote({ ...quote, [change.target.name]: change.target.value })
  }

  const handleCreateClick = event => {
    event.preventDefault();
    fetch("/api/quotes", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(quote)
    });
    alert('Quote Created!')
  };

  return (
    <div>
      <form>
        <input name="quotetext" type="text" placeholder="Quote here" onChange={handleChange} />
        <input name="author" type="text" placeholder="Author here" onChange={handleChange} />
        <br/>
        <br/>
        <button type="submit" className="btn btn-dark" onClick={handleCreateClick}>Create Quote</button>
      </form>
      <br/>
      <p><b>Preview: </b></p>
      <Preview author={quote.author} quotetext={quote.quotetext} />
    </div>
  )
};

export default Form;