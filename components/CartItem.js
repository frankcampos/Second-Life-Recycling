/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function CartItem({ item, onDelete }) {
  const handleDelete = () => {
    onDelete(item.id);
  };
  console.warn('this is my carttttt', item);
  return (
    <Card style={{
      width: '30rem', height: '12rem', margin: '10px', display: 'flex', flexDirection: 'row',
    }}
    >
      <Card.Img
        variant="left"
        src={item.item.image_url}
        alt={item.item_name}
        style={{
          height: '100%', objectFit: 'cover', width: '30%', maxWidth: '150px',
        }}
      />
      <Card.Body style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '70%',
      }}
      >
        <Card.Title style={{ fontSize: '1.25rem' }}>{item.item.item_name}</Card.Title>
        <Card.Text style={{ fontSize: '1rem' }}>${item.item.price}</Card.Text>
        <Button variant="danger" onClick={handleDelete} style={{ marginTop: 'auto' }}>Delete</Button>
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
