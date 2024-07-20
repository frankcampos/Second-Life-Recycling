import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import { deleteItem } from '../api/itemData';

function ItemCard({ itemObj, onUpdate }) {
  console.warn('this is my item object', itemObj);
  const deleteThisItem = () => {
    if (window.confirm(`Delete ${itemObj.item_name}?`)) {
      deleteItem(itemObj.id).then(() => onUpdate());
    }
  };
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Title>{itemObj.item_name}</Card.Title>
      <Card.Body>
        <Card.Img variant="top" src={itemObj.image_url} alt={itemObj.item_name} style={{ height: '400px' }} />
        <p className="card-text bold">${itemObj.price}</p>
        <p className="card-text bold">{itemObj.category_id}</p>
        <p className="card-text bold">{itemObj.description}</p>
        <Link href="/index" passHref>
          <Button variant="info" className="m-2">VIEW</Button>
        </Link>
        <Link href={`/edit/${itemObj.id}`} passHref>
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
    image_url: PropTypes.string,
    item_name: PropTypes.string,
    price: PropTypes.number,
    category_id: PropTypes.number,
    description: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ItemCard;
