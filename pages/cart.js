import React, { useState, useEffect } from 'react';
import CartItem from '../components/CartItem';
import { displayItem, removeItem } from '../api/cartData';
import Loading from '../components/Loading';

const Cart = () => {
  const [cartItems, setCartItems] = useState({ cart_items: [], total: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    displayItem({ shopping_cart_id: 1 })
      .then((data) => {
        setCartItems(data);
        setLoading(false);
      })
      .catch(() => {
        setCartItems({ cart_items: [], total: 0 });
        setLoading(false);
      });
  }, []);

  const handleRemoveItem = (itemId) => {
    removeItem({ shopping_cart_id: 1, item_id: itemId })
      .then(() => {
        setCartItems((prevState) => {
          const updatedItems = prevState.cart_items.filter((item) => item.item.id !== itemId);
          const updatedTotal = updatedItems.reduce((acc, item) => acc + parseFloat(item.item.price), 0);

          return {
            ...prevState,
            cart_items: updatedItems,
            total: updatedTotal,
          };
        });
      })
      .catch((error) => {
        console.error('Failed to remove item:', error);
      });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: '80vh',
        padding: '30px',
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      <div className="text-center" style={{ width: '100%' }}>
        <h1>Your Cart</h1>
        <div
          className="d-flex flex-column align-items-center"
          style={{
            maxHeight: '400px',
            overflowY: 'auto',
            border: '1px solid #ddd',
            padding: '10px',
            borderRadius: '5px',
          }}
        >
          {cartItems.cart_items.length > 0 ? (
            cartItems.cart_items.map((cartItem) => (
              <CartItem
                key={cartItem.item.id}
                item={cartItem.item}
                onDelete={handleRemoveItem}
              />
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
        <h1 className="text-black mt-5">Total: ${cartItems.total.toFixed(2)}</h1>
      </div>
    </div>
  );
};

export default Cart;
