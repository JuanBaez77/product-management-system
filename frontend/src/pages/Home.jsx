import React from 'react';
import { Box } from '@mui/material';


const drawerWidthOpen = 240;
const drawerWidthClosed = 72;

export default function Home({ open }) {
  return (
    <>
      <Box
      sx={{
        marginLeft: open ? `${drawerWidthOpen}px` : `${drawerWidthClosed}px`,
        transition: 'margin 0.3s ease',
        padding: 3,
        backgroundColor: '#f0f0f0',
        minHeight: '100vh',
      }}
    >
      <h1>Home</h1>
      <p>Bienvenido a tu sistema de gestión de productos 🚀</p>
    </Box>
    </>
  );
}