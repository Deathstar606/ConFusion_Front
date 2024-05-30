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
          <div className='d-flex justify-content-center'><li><a href="/menu">Menu</a></li></div>
          <div className='d-flex justify-content-center'><li><a href="/location">Location</a></li></div>
          <div className='d-flex justify-content-center'><li><a href="/events">Events</a></li></div>
          <div className='d-flex justify-content-center'><li><a href="/gift">Gift Cards</a></li></div>
          <div className='d-flex justify-content-center'><li><a href="/gallery">Gallery</a></li></div>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
