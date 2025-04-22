import React from 'react';
import './App.css';
import { Container, Typography, Box } from '@mui/material';
import AddCategory from './components/category/AddCategory';
import CategoryList from './components/category/CategoryList';
import DeleteCategory from './components/category/DeleteCategory';
import ModifyCategory from './components/category/ModifyCategory';
import Drawer from './components/Drawer';

const App = () => {
  return(
    <div className="App">
      <Drawer />
    </div>
  );
};

export default App;