import React, { useState } from 'react';

const AddFruit = ({ addFruit }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (id && name) {
      addFruit({ id: parseInt(id), name });
      setId('');
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter fruit ID"
      />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter fruit name"
      />
      <button type="submit">Add Fruit</button>
    </form>
  );
};

export default AddFruit;

