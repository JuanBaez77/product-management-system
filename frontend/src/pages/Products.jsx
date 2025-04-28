import React from 'react';
import { Box } from '@mui/material';
import BasicTabs from '../components/Tabs';
import ProductList from '../components/product/ProductList';

const drawerWidthOpen = 240;
const drawerWidthClosed = 72;

export default function Products({ open }) {
  return (
    <Box
      sx={{
        marginLeft: open ? `${drawerWidthOpen}px` : `${drawerWidthClosed}px`,
        transition: 'margin 0.3s ease',
        padding: 3,
        backgroundColor: '#f8f9fa',
        minHeight: '100vh',
        position: 'relative',
        mt: 0
      }}
    >
      <h1>My Products</h1>
      <p>Acá podés gestionar tus productos 📦</p>
      <BasicTabs />  
      <ProductList />
    </Box>
  );
}
