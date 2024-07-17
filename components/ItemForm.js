// // /* eslint-disable import/extensions */
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { FloatingLabel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { propTypes } from 'react-bootstrap/esm/Image';
import { useAuth } from '../utils/context/authContext';
import { createItem, updateItem } from '../api/itemData';

const initialState = {
  item_name: '',
  vendor_id: '',
  price: '',
  image_url: '',
  description: '',
  category_id: '',
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
          type="text"
          placeholder="Enter price"
          name="price"
          value={formInput.price}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      {/* <FloatingLabel controlId="floatingInput2" label="Item Category" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Item Category"
          name="category"
          value={formInput.category_id}
          onChange={handleChange}
          required
        />
      </FloatingLabel> */}
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
      {/* <FloatingLabel controlId="floatingInput2" label="Vendor ID" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Vendor ID"
          name="vendor"
          value={formInput.vendor_id}
          onChange={handleChange}
          required
        />
      </FloatingLabel> */}
      <Button type="submit">{obj.id ? 'Update' : 'Create'} Item</Button>
    </Form>
  );
}

ItemForm.propTypes = {
  obj: PropTypes.shape({
    item_name: propTypes.string,
    price: propTypes.string,
    image_url: propTypes.string,
    description: propTypes.string,
    id: propTypes.string,
  }),
};

ItemForm.defaultProps = {
  obj: initialState,
};

export default ItemForm;
