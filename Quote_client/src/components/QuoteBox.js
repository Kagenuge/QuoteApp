import React, { useState, useEffect } from 'react';
import QuoteList from './QuoteList';
import { deleteQuote } from '../api/apiservice';

const QuoteBox = () => {
  const [quotes, setQuotes] = useState([]);

  async function fetchData() {
    const res = await fetch("/api/quotes");
    res
      .json()
      .then(res => setQuotes(res))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleModify = (event) => {
    console.log(event.target.id);
  };

  const handleDelete = event => {
    deleteQuote(event.target.id).then(res => {
      if (res.status !== 200) {
        alert("Error" + res.status)
      }
      fetchData();
    });
  };

  return (
    <div>
    <p>If this page is empty it means that the Node server at "Quote_Server" is not running</p>
      <QuoteList quotes={quotes} handleDelete={handleDelete} handleModify={handleModify} />
    </div>
  )
};

export default QuoteBox;