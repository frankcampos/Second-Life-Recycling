import React, { useState, useEffect } from 'react';
import CartItem from '../../components/CartItem';
import { displayItem } from '../../api/cartData';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const payload = { shopping_cart_id: 1 };

    displayItem(payload)
      .then((data) => {
        setCartItems(data.cart_items);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || 'Failed to fetch cart items');
        setLoading(false);
      });
  }, []);

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Your Cart</h1>
      <div className="d-flex flex-wrap">
        {cartItems.length > 0 ? (
          cartItems.map((cartItem) => (
            <CartItem
              key={cartItem.id}
              item={cartItem.item}
              onDelete={() => removeFromCart(cartItem.item.id)}
            />
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
