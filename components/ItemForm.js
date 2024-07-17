// // /* eslint-disable import/extensions */
// import { useRouter } from 'next/router';
// // import PropTypes from 'prop-types';
// import { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { propTypes } from 'react-bootstrap/esm/Image';
// import { useAuth } from '../utils/context/authContext';
// import { createItem, getItems, updateItem } from '../api/itemData';

// const initialState = {
//   item_name: '',
//   vendor_id: '',
//   price: '',
//   image_url: '',
//   description: '',
//   category_id: '',
// };

// function ItemForm({ obj }) {
//   const [formInput, setFormInput] = useState(initialState);
//   const router = useRouter();
//   const { user } = useAuth();

//   useEffect(() => {
//     setFormInput(obj);
//   }, [obj, user]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormInput((prevFormInput) => ({
//       ...prevFormInput,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (****) {
//       updateItem(formInput).then(() => router.push(`/recyclable_items/`));
//     } else {
//       const payload = { ...formInput, uid: user.uid };
//       createItem(payload).then(({ name }) => {
//         const patchPayload = { firebaseKey: name };
//         updateAuthor(patchPayload).then(() => {
//           router.push('/');
//         });
//       });
//     }
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <h2 className="text-white mt-5">{obj.**** ? 'Update' : 'Create'} Item</h2>
//       <FloatingLabel controlId="floatingInput1" label="Item Name" className="mb-3">
//         <Form.Control
//           type="text"
//           placeholder="Enter your Item Name"
//           name="Name"
//           value={formInput.title}
//           onChange={handleChange}
//           required
//         />
//       </FloatingLabel>
//     </Form>
// );

// ItemForm.propTypes = {
//   obj: PropTypes.shape({
//     item_name: propTypes.string,
//     vendor_id: propTypes.string,
//     price: propTypes.string,
//     image_url: propTypes.string,
//     description: propTypes.string,
//     category_id: propTypes.string,
//   }),
// };

// ItemForm.defaultProps = {
//   obj: initialState,
// };

// export default ItemForm;
