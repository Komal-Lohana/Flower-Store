import React from 'react';
import '../App.css'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Komal's Flower Store</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
