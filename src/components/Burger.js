import React, { useState } from 'react';
import './Burger.css';

const BurgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="burger-menu">
        <div className="burger-icon" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        </div>
      </div>

      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <div className='d-flex justify-content-center'><li><a href="#">Home</a></li></div>
          <div className='d-flex justify-content-center'><li><a href="#">About</a></li></div>
          <div className='d-flex justify-content-center'><li><a href="#">Services</a></li></div>
          <div className='d-flex justify-content-center'><li><a href="#">Contact</a></li></div>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
