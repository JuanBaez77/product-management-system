
// CategoryList.jsx
// Este componente muestra una lista de categorías obtenidas desde el backend.
// Incluye manejo de carga, errores y posibilidad de cancelar la solicitud HTTP.


import React, { useEffect, useState } from 'react';
import api from '../../../api.jsx';


const CategoryList = () => {
  const [categories, setCategories] = useState([]); //Array donde se guardaran las categorias
  const [loading, setLoading] = useState(true); //Variable para controlar el loading
  const [error, setError] = useState(null); //Variable para controlar los errores
  const [controller, setController] = useState(null); //Variable para controlar la peticion

  //Funcion para obtener las categorias
  const fetchCategories = async () => {
    const abortController = new AbortController(); //Para cancelar la peticion si el componente se cierra
    setController(abortController); //Guardamos el controlador

    try {
      setLoading(true); //En caso de recargar asignamos true a loading nuevamente
      setError(null); //Limpia errores anteriores

      const response = await api.get('/categories', { signal: abortController.signal });
      //console.log('Respuesta del backend:', response.data); Comprobar si la respuesta del backend esta bien
      setCategories(response.data);
    } catch (error) {
          if (error.code === 'ERR_CANCELED') { //Por si la peticion se cancela y no es un error
              console.log('Request canceled by user');
          } else {
            setError(error);
            console.error('Error fetching categories:', error);
          }
    } finally {
        setLoading(false);
    }
  };

  //Funcion para cancelar la peticion
  const handleCancelRequest = () => {
    if (controller) {
      controller.abort();
      setError(new Error("Request canceled"));
      setLoading(false);
    }
  };

  //useEffect para llamar a fetchCategories al montar el componente
  useEffect(() => {
    fetchCategories();

    //Funcion para limpiar la peticion
    return () => {
      if (controller) {
        controller.abort(); //Funcion para limpiar la peticion antes de que se termine de realizar
        setError(new Error('Request canceled'));
      }
    }
  }, []);

  //Render
  return (
    <div>
      <h2>Categories</h2>  
       <button onClick={handleCancelRequest}>Cancel Request</button> //Boton para cancelar la peticion
        <ul>
          {error && <li>Error: {error.message}</li>}//Comprobar si hay errores
          {loading && <li>Loading...</li>}//Comprobar si esta cargando
          {!loading && !error && categories.map((category) => ( //Si no esta cargando ni hay errores obtenemos las categorias
            //console.log(category), Comprobar si se repilen las categorias
            <li key={category.category_id}>{category.category_name}</li> //Utilizamos el id como key para identificar cada categoria
            ))}
        </ul>
  </div>
  );
};

export default CategoryList;