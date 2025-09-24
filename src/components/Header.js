import React from 'react';

function Header() {
  return (
    <header>
      <a href="#" className="logo">
        <img src="https://pngimg.com/d/starbucks_PNG5.png" alt="Starbucks Logo" />
      </a>
      <div className="bx bx-menu" id="menu-icon"></div>
      <ul className="navbar">
        <li><a href="#home">Home</a></li>
        <li><a href="#shop">Shop</a></li>
        <li><a href="#delivery">Delivery</a></li>
        <li><a href="#app">App</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </header>
  );
}

export default Header;