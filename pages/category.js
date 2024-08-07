import React, { useState, useEffect } from 'react';
import CategoryForm from '../components/categoryFrom';
import { getCategory } from '../api/categoryData';

export default function AddCategory() {
  const [categories, setCategories] = useState([]);

  const getAllCategories = () => {
    getCategory().then(setCategories);
  };
  useEffect(() => {
    getCategory().then((data) => {
      console.warn(data);
      setCategories(data);
    });
  }, []);

  return (
    <div>
      <div width="50rem" className="d-flex flex-wrap justify-content-evenly">
        {categories.map((cate) => (
          <CategoryForm key={cate.id} cateObj={cate} onUpdate={getAllCategories} />
        ))}
      </div>
    </div>
  );
}
