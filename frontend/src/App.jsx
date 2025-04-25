import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Settings from './pages/Settings';
import Sidenav from './components/Sidenav';
import { useMediaQuery, useTheme } from '@mui/material';

export default function App() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = React.useState(!isSmallScreen);


  React.useEffect(() => {
    // Solo cerrar el drawer si pasamos a mobile
    if (isSmallScreen) {
      setOpen(false);
    }
    // No abrirlo automáticamente cuando volvés a desktop
  }, [isSmallScreen]);

  return (
    <Router>
      <Sidenav open={open} setOpen={setOpen} />
      <Routes>
        <Route path="/" element={<Home open={open} />} />
        <Route path="/products" element={<Products open={open} />} />
        <Route path="/settings" element={<Settings open={open} />} />
      </Routes>
    </Router>
  );
}
