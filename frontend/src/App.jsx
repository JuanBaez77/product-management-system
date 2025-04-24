import React from 'react';
import './App.css';
import Sidenav from './Sidenav.jsx';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Settings from './pages/Settings.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx'; 


const App = () => {
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/settings" element={<Settings />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;