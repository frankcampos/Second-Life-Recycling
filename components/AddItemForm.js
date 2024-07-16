// /* eslint-disable import/extensions */
// import { useRouter } from 'next/router';
// import PropTypes from 'prop-types';
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { propTypes } from 'react-bootstrap/esm/Image';
// import { useAuth } from '../../utils/context/AuthContext';

// const initialState = {
//   item_name: '',
//   pickup_location_id: '',
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
//     getAuthors(user.uid).then(setAuthors);

//     if (obj.firebaseKey) setFormInput(obj);
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
//     if (obj.firebaseKey) {
//       updateBook(formInput).then(() => router.push(`/book/${obj.firebaseKey}`));
//     } else {
//       const payload = { ...formInput, uid: user.uid };
//       createBook(payload).then(({ name }) => {
//         const patchPayload = { firebaseKey: name };
//         updateBook(patchPayload).then(() => {
//           router.push('/');
//         });
//       });
//     }
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Book</h2>
//     </Form>
// );

// ItemForm.propTypes = {
//   obj: PropTypes.shape({
//     item_name: propTypes.string,
//     pickup_location_id: propTypes.string,
//     price: propTypes.string,
//     image_url: propTypes.string,
//     description: propTypes.string,
//     category_id: propTypes.string,
//   // firebaseKey: PropTypes.string,
//   }),
// };

// ItemForm.defaultProps = {
//   obj: initialState,
// };

// export default ItemForm;
