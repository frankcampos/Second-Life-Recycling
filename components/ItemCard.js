import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import { deleteItem } from '../api/itemData';

function ItemCard({ itemObj, onUpdate }) {
  const deleteThisItem = () => {
    if (window.confirm(`Delete ${itemObj.name}?`)) {
      deleteItem(itemObj.id).then(() => onUpdate());
    }
  };
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Title>{itemObj.name}</Card.Title>
      <Card.Body>
        <Card.Img variant="top" src={itemObj.image} alt={itemObj.name} style={{ height: '400px' }} />
        <p className="card-text bold">${itemObj.price}</p>
        <p className="card-text bold">${itemObj.category}</p>
        <p className="card-text bold">${itemObj.description}</p>
        <Link href={`/recyclable_itemsedit/${itemObj.id}`} passHref>
          <Button variant="info" className="m-2">VIEW</Button>
        </Link>
        <Link href={`/recyclable_itemsedit/${itemObj.id}`} passHref>
          <Button variant="warning">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisItem} className="m-2">
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
    id: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ItemCard;
