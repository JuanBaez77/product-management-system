import React from 'react';
import './App.css';
import AddCategory from './components/category/AddCategory';
import CategoryList from './components/category/CategoryList';
import DeleteCategory from './components/category/DeleteCategory';

const App = () => {
  return(
    <div className="App">
      <header className="App-header">
        <h1>Pruebas</h1>
      </header>
      <main>
        <CategoryList />
        <AddCategory />
        <DeleteCategory />
      </main>
    </div>
  );
};

export default App;


