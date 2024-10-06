// import logo from './logo.svg';
import React from 'react';
import './App.css';
import ProductList from './ProductList'
import './ProductList.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import essentialsData from './data/Essentials.json';
import EssentialProduct from './EssentialProduct';
// import EssentialProductList from './EssentialProductList';

function App() {
  return (
    <div>
      <Router>
      <Header /> {/* The Header now contains both the navigation and the routes */}
        </Router>
      <ProductList />
      <EssentialProduct data={essentialsData.data} /> 
    </div>
  );
}

export default App;
