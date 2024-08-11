/* eslint-disable react/prop-types */
// // /* eslint-disable import/extensions */
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { FloatingLabel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useAuth } from '../utils/context/authContext';
import { createItem, updateItem } from '../api/itemData';
import { getCategory } from '../api/categoryData';

const initialState = {
  item_name: '',
  price: 0,
  image_url: '',
  description: '',
  category: 1,
  vendor_id: 1
};

function ItemForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [categories, setCategories] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getCategory().then(setCategories);
    if (obj.id) {
      setFormInput(obj);
      const catId = obj.category.id;
      setFormInput((preVal) => ({ ...preVal, category: catId }));
    }
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevFormInput) => ({
      ...prevFormInput,
      [name]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.id) {
      console.warn('updateItem', formInput);
      updateItem({ ...formInput, vendor_id: 1 }).then(() => router.push('/'));
    } else {
      const payload = { ...formInput, user_id: user.id };
      createItem(payload).then(() => router.push('/'));
      console.warn(payload);
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-black mt-5">{obj.id ? 'Update' : 'Create'} Item</h2>
      <FloatingLabel controlId="floatingInput1" label="Item Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter your Item Name"
          name="item_name"
          value={formInput.item_name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput2" label="Item Image" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Enter an image url"
          name="image_url"
          value={formInput.image_url}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput3" label="Item Price" className="mb-3">
        <Form.Control
          type="number"
          placeholder="Enter price"
          name="price"
          value={formInput.price}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput2" label="Item Category" className="mb-3">
        <Form.Select
          type="number"
          placeholder="Item Category"
          name="category"
          value={formInput.category}
          onChange={handleChange}
          required
        >
          <option>Select a Category</option>
          {
           categories.map((cat) => (
             // eslint-disable-next-line react/jsx-key
             <option value={cat.id}>{cat.category_name}
             </option>
           ))
            }
        </Form.Select>
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput2" label="Description" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Item Description"
          name="description"
          value={formInput.description}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      <Form.Control
        type="hidden"
        name="vendor_id"
        value={formInput.vendor_id}
        required
      />
      <Form.Control
        type="hidden"
        name="user_id"
        value={formInput.user_id}
        required
      />
      <Button variant="outline-primary" type="submit">{obj.id ? 'Update' : 'Create'} Item</Button>
    </Form>
  );
}

ItemForm.propTypes = {
  obj: PropTypes.shape({
    item_name: PropTypes.string,
    price: PropTypes.number,
    image_url: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.number,
    user_id: PropTypes.number,
    vendor_id: PropTypes.number
  })
};

ItemForm.defaultProps = {
  obj: initialState
};

export default ItemForm;
