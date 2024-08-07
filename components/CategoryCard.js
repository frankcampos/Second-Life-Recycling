import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteCategory } from '../api/categoryData';

function CategoryCard({ cateObj, onUpdate }) {
  const deleteThisCategory = () => {
    if (window.confirm(`Delete ${cateObj.category_name}?`)) {
      deleteCategory(cateObj.category).then(() => onUpdate());
    }
  };
  return (
    <Card className="card" style={{ width: '18rem', margin: '10px', border: '1px solid' }}>
      <Card.Body>
        <p className="card-text bold">{cateObj.category_name}</p>
        <Button variant="outline-danger" onClick={deleteThisCategory} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

CategoryCard.propTypes = {
  cateObj: PropTypes.shape({
    category: PropTypes.number,
    category_name: PropTypes.string,
    user_id: PropTypes.number,
    vendor_id: PropTypes.number,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default CategoryCard;
