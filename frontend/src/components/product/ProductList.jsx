// ProductList.jsx
// Este componente muestra una lista de productos obtenidos desde el backend
// Incluye manejo de carga y errores


import React, { useEffect, useState } from 'react';
import api from '../../../api.jsx';
import ProductTable from '../Table.jsx'; 

const ProductList = () => {
    const [products, setProducts] = useState([]);//Variable para guardar los productos
    const [loading, setLoading] = useState(true);//Variable para controlar el loading
    const [error, setError] = useState(null);//Variable para controlar los errores

    const fetchProducts = async () => {
        try {
            setLoading(true);//En caso de recargar asignamos true a loading nuevamente
            setError(null);//Limpia errores anteriores
            const response = await api.get('/products');
            console.log('Respuesta del backend:', response.data);
            
            // Mapea los productos para adaptarlos a la tabla
            const mappedProducts = response.data.map(product => ({
                product_id: product.product_id,
                product_name: product.product_name,
                product_description: product.product_description,
                price: "$"+product.price,
                stock: product.stock,
                category_name: product.category?.category_name || 'No Category',
                photo: product.photo || 'No Image',
            }));
    
            setProducts(mappedProducts);
        } catch (error) {
            setError(error);
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading products!</div>;

    return (
        <div>
            <ProductTable rows={products} />
        </div>
    );
};

export default ProductList;
