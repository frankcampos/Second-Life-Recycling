import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function CartItem({ item, onDelete }) {
  const handleDelete = () => {
    onDelete(item.id);
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={item.image_url} alt={item.item_name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{item.item_name}</Card.Title>
        <Card.Text>${item.price}</Card.Text>
        <Button variant="danger" onClick={handleDelete}>Delete</Button>
      </Card.Body>
    </Card>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    item_name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CartItem;
