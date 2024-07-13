import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ItemCard from './ItemCard';

function ItemForm({ user, updateUser }) {
  const [formInput, setFormInput] = useState({
    item_name: '',
    last_name: '',
    photo: '',
    email: '',
    uid: user.uid,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevFormInput) => ({
      ...prevFormInput,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ItemCard(formInput)
      .then(() => updateUser(user.uid))
      .catch((error) => {
        console.error('Registration error:', error);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formFirstName">
        <Form.Label>Name of Item</Form.Label>
        <Form.Control
          type="text"
          name="item_name"
          placeholder="Enter Item Name"
          value={formInput.item_name}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          name="last_name"
          placeholder="Enter your last name"
          value={formInput.last_name}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPhoto">
        <Form.Label>Photo</Form.Label>
        <Form.Control
          type="text"
          name="photo"
          placeholder="Enter URL of your photo"
          value={formInput.photo}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formInput.email}
          onChange={handleChange}
          required
        />
        <Form.Text className="text-muted" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

ItemForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string.isRequired,
  }).isRequired,
  updateUser: PropTypes.func.isRequired,
};

export default ItemForm;
