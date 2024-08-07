import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { FloatingLabel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useAuth } from '../utils/context/authContext';
import { getCategory, createCategory } from '../api/categoryData';

const initialState = {
  category: 1,
  category_name: '',
  vendor_id: 1,
};

function CategoryForm({ cate }) {
  const [catInput, setCatInput] = useState(initialState);
  const [, setCategories] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getCategory().then(setCategories);
    if (cate) setCatInput(cate);
  }, [cate, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCatInput((prevFormInput) => ({
      ...prevFormInput,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); {
      const payload = { ...catInput, user_id: user.id };
      createCategory(payload).then(() => router.push('/'));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-black mt-5"> Create Category </h2>
      <FloatingLabel controlId="floatingInput2" label="Item Category" className="mb-3">
        <Form.Control
          type="number"
          placeholder="Item Category number"
          name="category"
          value={catInput.category}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput2" label="Category Name" className="mb-3">
        <Form.Control
          type="string"
          placeholder="Category Name"
          name="category_name"
          value={catInput.category_name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      <Form.Control
        type="hidden"
        name="vendor_id"
        value={catInput.vendor_id}
        required
      /><Form.Control
        type="hidden"
        name="user_id"
        value={catInput.user_id}
        required
      />
      <Button variant="outline-primary" type="submit">Create Category </Button>
    </Form>
  );
}

CategoryForm.propTypes = {
  cate: PropTypes.shape({
    category: PropTypes.number,
    category_name: PropTypes.string,
    user_id: PropTypes.number,
    vendor_id: PropTypes.number,
  }),
};

CategoryForm.defaultProps = {
  cate: initialState,
};

export default CategoryForm;
