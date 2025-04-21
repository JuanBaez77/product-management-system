import React, { useState } from 'react';  
import api from '../../../api.jsx';


const AddCategory = () => {
  const [name, setName] = useState(''); //Variable para guardar el nombre de la categoria
  const [loading, setLoading] = useState(false); //Variable para controlar el loading
  const [error, setError] = useState(null); //Variable para controlar los errores

  // Funcion para agregar una categoria
  const handleSubmit = async (e) => {
    e.preventDefault(); //Prevenir el comportamiento predeterminado del formulario

    try {
      setLoading(true);//En caso de recargar asignamos true a loading nuevamente
      setError(null); //Limpia errores anteriores

      const response = await api.post('/categories', { category_name: name }); 
      const responseData = response.data;
      //console.log('Respuesta del backend:', responseData); //Comprobar si la respuesta del backend esta bien

      setName('');
    } catch (error) {
      setError(error);
      console.error('Error adding category:', error);
    } finally {
      setLoading(false);
    }
  };
    
  
  return (
    <div>
      <h2>Add Category</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input placeholder='Category Name...' type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <button type="submit">{loading ? 'Loading...' : 'Add Category'}</button>
      </form>
      {error && <p>{error.message}</p>}
    </div>
  );
};  

export default AddCategory;