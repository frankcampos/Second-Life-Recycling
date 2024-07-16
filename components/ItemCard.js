import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ItemCard({ itemObj }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Title>{itemObj.name}</Card.Title>
      <Card.Body>
        <Card.Img variant="top" src={itemObj.image} alt={itemObj.name} style={{ height: '400px' }} />
        <p className="card-text bold">${itemObj.price}</p>
        <p className="card-text bold">${itemObj.category}</p>
        <p className="card-text bold">${itemObj.description}</p>
        <Button variant="info" className="m-2">VIEW</Button>
        <Button variant="warning">EDIT</Button>
        <Button variant="danger" className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

ItemCard.propTypes = {
  itemObj: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    category: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
};

export default ItemCard;
