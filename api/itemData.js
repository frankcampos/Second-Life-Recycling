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

const deleteItem = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/recyclable_items/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => resolve((data)))
    .catch(reject);
});

const createItem = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/recyclable_items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateItem = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/recyclable_items/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((data) => resolve(data))
    .catch(reject);
});

const getSingleItem = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/recyclable_items/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const searchItems = (searchValue) => new Promise((resolve, reject) => {
  getItems()
    .then((items) => {
      const filteredItems = items.filter((item) => item.item_name.toLowerCase().includes(searchValue.toLowerCase())
        || item.category.category_name.toLowerCase().includes(searchValue.toLowerCase()));
      resolve(filteredItems);
    })
    .catch(reject);
});

export {
  getItems,
  deleteItem,
  createItem,
  updateItem,
  getSingleItem,
  searchItems,
};
