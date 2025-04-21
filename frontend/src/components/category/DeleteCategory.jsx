//DeleteCategory.jsx
// Este componente muestra un formulario para eliminar una categoría
// Incluye manejo de carga y errores

import React, { useState } from 'react';
import api from '../../../api.jsx';

const DeleteCategory = () => {
    const [id, setId] = useState(''); //Variable para guardar el id de la categoria a eliminar
    const [loading, setLoading] = useState(false); //Variable para controlar el loading
    const [error, setError] = useState(null); //Variable para controlar los errores

    // Funcion para eliminar una categoria
    const handleSubmit = async (e) => {
        e.preventDefault(); //Prevenir el comportamiento predeterminado del formulario

        try {
            setLoading(true); //En caso de recargar asignamos true a loading nuevamente
            setError(null); //Limpia errores anteriores

            await api.delete(`/categories/${id}`); 
            setId(''); //Limpia el id

        } catch (error) {
            setError(error);
            console.error('Error deleting category:', error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <h2>Delete Category</h2>
            <form onSubmit={handleSubmit}>
                <input type="number" placeholder="Category ID"value={id} onChange={(e) => setId(e.target.value)}/> <br />
                <button type="submit">Delete</button>    
            </form>
            {loading && <p>Loading...</p>} {/* Mostrar el loading */}
            {error && <p>Error: {error.message}</p>} {/* Mostrar los errores */}
        </div>
    );
}



export default DeleteCategory;