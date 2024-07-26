const endpoint = process.env.NEXT_PUBLIC_DATABASE_URL;

const getCartItems = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cart`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const removeItem = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cart/remove_from_cart`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => resolve((data)))
    .catch(reject);
});

const addToCart = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cart/add_to_cart`, {
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

const displayItem = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cart/display_item`, {
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

export {
  getCartItems,
  removeItem,
  addToCart,
  displayItem,
};
