import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function ViewItemCard({ itemObj, onUpdate }) {
  console.warn('this is my item object', itemObj);
  // eslint-disable-next-line no-unused-vars
  const addThisItem = () => {
    if (window.confirm(`add ${itemObj.item_name}?`)) {
      addThisItem(itemObj.id).then(() => onUpdate());
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
      </Card.Body>
    </Card>
  );
}

ViewItemCard.propTypes = {
  itemObj: PropTypes.shape({
    image_url: PropTypes.string,
    item_name: PropTypes.string,
    price: PropTypes.number,
    category_id: PropTypes.number,
    description: PropTypes.string,
    id: PropTypes.string
  }).isRequired,
  onUpdate: PropTypes.func.isRequired
};

export default ViewItemCard;
