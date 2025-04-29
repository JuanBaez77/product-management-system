import React, { useEffect, useState } from 'react';
import api from '../../../api.jsx';
import ProductTable from '../Table.jsx'; 

const ProductList = ({ onProductsLoaded }) => { 
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await api.get('/products');
            console.log('Respuesta del backend:', response.data);
            
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

            if (onProductsLoaded) {
                onProductsLoaded(mappedProducts); // 
            }

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
