import React, { useState } from 'react';
import CartItem from '../../components/CartItem';

export default function Cart() {
  const [cart, setCart] = useState([]);

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

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
        {cart.map((item) => (
          <CartItem key={item.id} item={item} onDelete={removeFromCart} />
        ))}
      </div>
    </div>
  );
}
