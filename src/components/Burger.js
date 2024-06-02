import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import './Burger.css';

const BurgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

const [activeLink, setActiveLink] = useState('');

  // Function to handle click on NavLink
const handleNavLinkClick = (to) => {
  setActiveLink(to);
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
          <div className='d-flex justify-content-center'>
            <li>
              <NavLink
                to="/menu"
                activeClassName="active"
                onClick={() => handleNavLinkClick('/menu')} // Update active link on click
              >
                <div className={`burg-menu pr-2 pl-2 ${activeLink === '/menu' ? 'active' : ''}`}>
                  Menu
                </div>
              </NavLink>
            </li>
          </div>
          <div className='d-flex justify-content-center'>
            <li>
              <NavLink
                to="/location"
                activeClassName="active"
                onClick={() => handleNavLinkClick('/location')} // Update active link on click
              >
                <div className={`burg-menu pr-2 pl-2 ${activeLink === '/location' ? 'active' : ''}`}>
                  Location
                </div>
              </NavLink>
            </li>
          </div>
          <div className='d-flex justify-content-center'>
            <li>
              <NavLink
                to="/events"
                activeClassName="active"
                onClick={() => handleNavLinkClick('/events')} // Update active link on click
              >
                <div className={`burg-menu pr-2 pl-2 ${activeLink === '/events' ? 'active' : ''}`}>
                  Events
                </div>
              </NavLink>
            </li>
          </div>
          <div className='d-flex justify-content-center'>
            <li>
              <NavLink
                to="/gift"
                activeClassName="active"
                onClick={() => handleNavLinkClick('/gift')} // Update active link on click
              >
                <div className={`burg-menu pr-2 pl-2 ${activeLink === '/gift' ? 'active' : ''}`}>
                  Gift Cards
                </div>
              </NavLink>
            </li>
          </div>
          <div className='d-flex justify-content-center'>
            <li>
              <NavLink
                to="/gallery"
                activeClassName="active"
                onClick={() => handleNavLinkClick('/gallery')} // Update active link on click
              >
                <div className={`burg-menu pr-2 pl-2 ${activeLink === '/gallery' ? 'active' : ''}`}>
                  Gallery
                </div>
              </NavLink>
            </li>
          </div>
          <li className='d-flex justify-content-center mt-5 pt-5'>
            <div>
              <FaFacebook color="rgb(255, 193, 0)" size={40} className='mr-3'/>
              <FaWhatsapp color="rgb(255, 193, 0)" size={40} className='mr-3'/>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
