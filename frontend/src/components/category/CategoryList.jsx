import React, { useEffect, useState } from 'react';
import api from '../../../api.jsx';
import handleAddCategory from './AddCategory.jsx';
import AddCategory from './AddCategory.jsx';

const CategoryList = () => {
  const [category, setCategory] = useState([]);

  const fetchCategory = async () => {
    try {
      const response = await api.get('');
      console.log("GET response:", response.data);
      setCategory(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);


  return (
    <div>
      <h2>Category List</h2>
      <ul>
        {category?.map((cat) => (
          <li key={cat.id_category}>
              {cat.category_name}
          </li>
        ))}
      </ul>
      <AddCategory addCategory={handleAddCategory} />
    </div>
  );
};


export default CategoryList;

