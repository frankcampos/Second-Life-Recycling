import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router';
import CartItem from '../components/CartItem';
import { displayItem, removeItem, checkoutCart } from '../api/cartData';
import Loading from '../components/Loading';

const Cart = () => {
  const [cartItems, setCartItems] = useState({ cart_items: [], total: 0 });
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const router = useRouter();

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
      .catch(() => {
      });
  };

  const handleCheckout = () => {
    checkoutCart({ shopping_cart_id: 1 })
      .then(() => {
        setCartItems({ cart_items: [], total: 0 });
        setModalMessage('Thank you for shopping!');
        setShowModal(true);
      })
      .catch(() => {
        setModalMessage('An error occurred. Please try again.');
        setShowModal(true);
      });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    router.push('/');
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
        <Button
          variant="success"
          onClick={handleCheckout}
          style={{ marginTop: '20px' }}
        >
          Checkout
        </Button>
      </div>

      {/* Modal Component */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Return to Homepage
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cart;
