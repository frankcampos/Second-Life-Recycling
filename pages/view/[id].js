import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button';
import { getSingleItem } from '../../api/itemData';
import ViewItemCard from '../../components/SingleItemCard';
import { addToCart } from '../../api/cartData';
import { useAuth } from '../../utils/context/authContext';
import { useShoppingCart } from '../../utils/context/ShoppingCartContext';


export default function ViewItem() {
  const [editobj, setEditobj] = useState({});
  const router = useRouter();
  const { id } = router.query;
  const { user } = useAuth();
  const { updateShoppingCartId } = useShoppingCart();



  useEffect(() => {
    if (id) {
      getSingleItem(id)
        .then((data) => setEditobj(data))
        .catch((error) => console.error('Error fetching item:', error));
    }
  }, [id]);

  const handleAddToCart = () => {
    if (editobj.id && user) {
      addToCart({ itemId: editobj.id, userId: user.id })
        .then((respond) => {
          console.warn('shooping_cart id', respond.cart.id)
          updateShoppingCartId(respond.cart.id);
          alert(`${editobj.item_name} added to cart!`);
        })
        .catch((error) => {
          console.error('Error adding item to cart:', error);
          alert('Failed to add item to cart. Please try again.');
        });
    } else {
      alert('User is not authenticated.');
    }
  };
  return (
    <>
      <ViewItemCard itemObj={editobj} />
      <Button variant="outline-primary" onClick={handleAddToCart} className="m-2">
        Add to Cart
      </Button>
    </>
  );
}
