import React, { useState, useEffect } from 'react';
import CartItem from '../components/CartItem';
import { getCartItems } from '../api/cartData';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCartItems().then((data) => {
      setCartItems(data);
      setLoading(false);
    });
  }, []);

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  if (loading) {
    return <p>Loading...</p>;
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
              item={cartItem}
              onDelete={() => removeFromCart(cartItem.id)}
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
