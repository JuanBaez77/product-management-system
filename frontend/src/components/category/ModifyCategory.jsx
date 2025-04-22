// ModifyCategory.jsx
// Este componente muestra un formulario para modificar una categoría
// Incluye manejo de carga y errores

import React, { useState } from 'react';
import api from '../../../api.jsx';

const ModifyCategory = () => {
    const [id, setId] = useState(''); //Variable para guardar el id de la categoria a modificar
    const [name, setName] = useState(''); //Variable para guardar el nombre de la categoria
    const [loading, setLoading] = useState(false); //Variable para controlar el loading
    const [error, setError] = useState(null); //Variable para controlar los errores

    // Funcion para modificar una categoria pasandole el id para buscarla
    const handleSubmit = async (e) => {
        e.preventDefault(); //Prevenir el comportamiento predeterminado del formulario

        try {
            setLoading(true);//En caso de recargar asignamos true a loading nuevamente
            setError(null); //Limpia errores anteriores

            const response = await api.put(`/categories/${id}`, { category_name: name }); 
            const responseData = response.data;
            //console.log('Respuesta del backend:', responseData); //Comprobar si la respuesta del backend esta bien

            setId(''); //Limpia el id
            setName(''); //Limpia el nombre
        } catch (error) {
            setError(error);
            console.error('Error modifying category:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Modify Category</h2>
            <form onSubmit={handleSubmit}>
                <input type="number" placeholder="Category ID" name="category_id" value={id} onChange={(e) => setId(e.target.value)}/> <br />
                <input type="text" placeholder="Category Name" name="category_name" value={name} onChange={(e) => setName(e.target.value)}/> <br />
                <button type="submit">Modify</button>   
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}
            </form>
        </div>
    );
}

export default ModifyCategory;