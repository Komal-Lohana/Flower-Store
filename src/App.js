import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <ProductList />
      <Footer />
    </div>
  );
};

export default App;
