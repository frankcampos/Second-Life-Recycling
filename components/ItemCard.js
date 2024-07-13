import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';

function ItemCard({ itemObj }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Title>{itemObj.name}</Card.Title>
      <Card.Body>
        <Card.Img variant="top" src={itemObj.image} alt={itemObj.name} style={{ height: '400px' }} />
        <p className="card-text bold">${itemObj.price}</p>
        <p className="card-text bold">${itemObj.category}</p>
        <Link href={`/item/${itemObj.firebaseKey}`} passHref>
          <Button variant="info" className="m-2">VIEW</Button>
        </Link>
        <Link href={`/item/edit/${itemObj.firebaseKey}`} passHref>
          <Button variant="warning">EDIT</Button>
        </Link>
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
    price: PropTypes.string,
    category: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
};

export default ItemCard;
