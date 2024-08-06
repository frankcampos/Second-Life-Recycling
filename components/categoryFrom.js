// import { useRouter } from 'next/router';
// import PropTypes from 'prop-types';
// import { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import { FloatingLabel } from 'react-bootstrap';
// import Form from 'react-bootstrap/Form';
// import { useAuth } from '../utils/context/authContext';
// import { createItem, updateItem } from '../api/itemData';
// import getCategory from '../api/categoryData';

// const initialState = {
//   item_name: '',
//   category: 1,
//   category_name: '',
//   vendor_id: 1,
// };

// function CategoryForm({ obj }) {
//   const [catInput, setCatInput] = useState(initialState);
//   const [categories, setCategories] = useState([]);
//   const router = useRouter();
//   const { user } = useAuth();

// //   useEffect(() => {
// //     getCategory().then(setCategories);
// //     if (obj.id) setCatInput(obj);
// //   }, [obj, user]);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setCatInput((prevFormInput) => ({
// //       ...prevFormInput,
// //       [name]: value,
// //     }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (obj.id) {
// //       updateItem({ ...catInput, vendor_id: 1 }).then(() => router.push('/'));
// //     } else {
// //       const payload = { ...catInput, user_id: user.id };
// //       createItem(payload).then(() => router.push('/'));
// //     }
// //   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <h2 className="text-black mt-5">{obj.id ? 'Update' : 'Create'} Category </h2>
//       <FloatingLabel controlId="floatingInput2" label="Item Category" className="mb-3">
//         <Form.Control
//           type="number"
//           placeholder="Item Category"
//           name="category"
//           value={catInput.category}
//           onChange={handleChange}
//           required
//         />
//       </FloatingLabel>
//       <Form.Control
//         type="hidden"
//         name="vendor_id"
//         value={catInput.vendor_id}
//         required
//       />
//       <Form.Control
//         type="hidden"
//         name="user_id"
//         value={catInput.user_id}
//         required
//       />
//       <Button variant="outline-primary" type="submit">{obj.id ? 'Update' : 'Create'} Category </Button>
//     </Form>
//   );
// }

// CategoryForm.propTypes = {
//   obj: PropTypes.shape({
//     category: PropTypes.number,
//     user_id: PropTypes.number,
//     vendor_id: PropTypes.number,
//     category_name: PropTypes.string,
//   }),
// };

// CategoryForm.defaultProps = {
//   obj: initialState,
// };

// export default CategoryForm;
