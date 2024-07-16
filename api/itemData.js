const endpoint = process.env.NEXT_PUBLIC_DATABASE_URL;

const getItems = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/recyclable_items`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export default getItems;
