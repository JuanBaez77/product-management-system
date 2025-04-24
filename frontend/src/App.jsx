import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Settings from './pages/Settings';
import Sidenav from './Sidenav';

export default function App() {
  const [open, setOpen] = React.useState(true);

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
