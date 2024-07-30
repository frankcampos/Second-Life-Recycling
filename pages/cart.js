import React, { useState, useEffect } from 'react';
import CartItem from '../components/CartItem';
import { getCart, removeItem } from '../api/cartData';
import Loading from '../components/Loading';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCart().then((data) => {
      setCartItems(data);
      setLoading(false);
    });
  }, []);

  const handleRemoveItem = (itemId) => {
    removeItem(itemId).then(() => {
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '800px',
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
              onDelete={handleRemoveItem}
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
