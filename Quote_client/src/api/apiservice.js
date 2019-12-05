const url = '/api/quotes';

export const deleteQuote = (id) => {
  return fetch(`${url}/${id}`, {
    method: 'DELETE',
  })
    .catch((err) => console.log(err))
};

export const modifyQuote = (id, body) => {
  return fetch(`${url}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
    .catch((err) => console.log(err))
}