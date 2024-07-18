// // /* eslint-disable import/extensions */
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { FloatingLabel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useAuth } from '../utils/context/authContext';
import { createItem, updateItem } from '../api/itemData';

const initialState = {
  item_name: '',
  price: 0,
  image_url: '',
  description: '',
  category_id: 0,
  vendor_id: 0,
  user_id: '',
};

function ItemForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.id) setFormInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevFormInput) => ({
      ...prevFormInput,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.id) {
      updateItem(formInput).then(() => router.push(`/recyclable_items/${obj.id}`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createItem(payload).then(({ name }) => {
        const patchPayload = { id: name };
        updateItem(patchPayload).then(() => {
          router.push('/');
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.id ? 'Update' : 'Create'} Item</h2>
      <FloatingLabel controlId="floatingInput1" label="Item Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter your Item Name"
          name="Name"
          value={formInput.name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput2" label="Item Image" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Enter an image url"
          name="image"
          value={formInput.image}
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
        <Form.Control
          type="number"
          placeholder="Item Category"
          name="category_id"
          value={formInput.category_id}
          onChange={handleChange}
          required
        />
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
      <Button type="submit">{obj.id ? 'Update' : 'Create'} Item</Button>
    </Form>
  );
}

ItemForm.propTypes = {
  obj: PropTypes.shape({
    item_name: PropTypes.string,
    price: PropTypes.number,
    image_url: PropTypes.string,
    description: PropTypes.string,
    category_id: PropTypes.number,
    id: PropTypes.string,
    vendor_id: PropTypes.number,
    user_id: PropTypes.string,
  }),
};

ItemForm.defaultProps = {
  obj: initialState,
};

export default ItemForm;
