import React, { useState } from 'react';

const AddCategory = ({ addCategory }) => {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name) {
      addCategory({ category_name: name });
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter category name"
      />
      <button type="submit">Add Category</button>
    </form>
  );
};

export default AddCategory;

