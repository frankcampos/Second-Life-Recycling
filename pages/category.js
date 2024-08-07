import React, { useState, useEffect } from 'react';
import { getCategory } from '../api/categoryData';
import CategoryCard from '../components/CategoryCard';

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
          <CategoryCard key={cate.id} cateObj={cate} onUpdate={getAllCategories} />
        ))}
      </div>
    </div>
  );
}
