import React, { useState, useEffect } from 'react';
import CartItem from '../components/CartItem';
import { displayItem, removeItem } from '../api/cartData';
import Loading from '../components/Loading';

const Cart = () => {
  const [cartItems, setCartItems] = useState({ cart_items: [], total: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    displayItem({ shopping_cart_id: 1 }).then((data) => {
      setCartItems(data);
      setLoading(false);
    });
  }, []);

  const handleRemoveItem = (itemId) => {
    removeItem(itemId).then(() => {
      setCartItems((prevState) => ({
        ...prevState,
        cart_items: prevState.cart_items.filter((item) => item.id !== itemId),
      }));
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
        {cartItems.cart_items.length > 0 ? (
          cartItems.cart_items.map((cartItem) => (
            <CartItem
              key={cartItem.id}
              item={cartItem}
              onDelete={handleRemoveItem}
            />
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
        <h1 className="text-black mt-5">Total: ${cartItems.total}</h1>
      </div>
    </div>
  );
};

export default Cart;