import React, { useEffect, useState } from 'react';
import api from '../../api.jsx';
import AddFruit from './AddFruit.jsx';

const FruitList = () => {
  const [fruits, setFruits] = useState([]);

  const fetchFruits = async () => {
    try {
      const response = await api.get('');
      console.log("GET response:", response.data);
      setFruits(response.data);
    } catch (error) {
      console.error("Error fetching fruits:", error.response?.data || error.message);
    }
  };

  const addFruit = async (fruit) => {
    try {
      console.log("Enviando fruta:", fruit);
      await api.post('', fruit);
      fetchFruits();
    } catch (error) {
      console.error("Error adding fruit:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    fetchFruits();
  }, []);

  return (
    <div>
      <h2>Fruits List</h2>
      <ul>
        {fruits?.map((fruit) => (
          <li key={fruit.id}>
            {fruit.id} - {fruit.name}
          </li>
        ))}
      </ul>
      <AddFruit addFruit={addFruit} />
    </div>
  );
};

export default FruitList;

