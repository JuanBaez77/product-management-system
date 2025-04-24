import React from 'react';
import { Box } from '@mui/material';

const drawerWidthOpen = 240;
const drawerWidthClosed = 72;

export default function Settings({ open }) {
  return (
    <Box
      sx={{
        marginLeft: open ? `${drawerWidthOpen}px` : `${drawerWidthClosed}px`,
        transition: 'margin 0.3s ease',
        padding: 3,
        backgroundColor: '#fff',
        minHeight: '100vh',
      }}
    >
      <h1>Configuración</h1>
      <p>Ajustes generales del sistema ⚙️</p>
    </Box>
  );
}
