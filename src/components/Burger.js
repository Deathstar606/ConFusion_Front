import React, { useState, useEffect } from 'react';
import { Reserve } from './HeaderComponenet';
import { NavLink, useLocation } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import './Burger.css';

const BurgerMenu = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [reserveOpen, setreserveOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleReserve = () => {
    setreserveOpen(!reserveOpen)
    setMenuOpen(!menuOpen);
  };

const [activeLink, setActiveLink] = useState('');

useEffect(() => {
  setActiveLink(location.pathname);
}, [location]);

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
          <div className='d-flex justify-content-center p-1'>
            <li>
              <NavLink
                to="/menu"
                activeClassName="active"
                onClick={() => {handleNavLinkClick('/menu'); toggleMenu()}} // Update active link on click
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
                onClick={() => {handleNavLinkClick('/location'); toggleMenu()}} // Update active link on click
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
                onClick={() => {handleNavLinkClick('/events'); toggleMenu()}} // Update active link on click
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
                onClick={() => {handleNavLinkClick('/gift'); toggleMenu()}} // Update active link on click
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
                onClick={() => {handleNavLinkClick('/gallery'); toggleMenu()}} // Update active link on click
              >
                <div className={`burg-menu pr-2 pl-2 ${activeLink === '/gallery' ? 'active' : ''}`}>
                  Gallery
                </div>
              </NavLink>
            </li>
          </div>
          <div className='d-flex justify-content-center'>
            <li>
              <NavLink
                to="/aboutus"
                activeClassName="active"
                onClick={() => {handleNavLinkClick('/aboutus'); toggleMenu()}} // Update active link on click
              >
                <div className={`burg-menu pr-2 pl-2 ${activeLink === '/aboutus' ? 'active' : ''}`}>
                  About
                </div>
              </NavLink>
            </li>
          </div>
          <div className='d-flex justify-content-center'>
            <li>
              <div className="burg-menu" onClick={toggleReserve}>
                Reservation
              </div>
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
      {reserveOpen && (
        <Reserve setResMod={toggleReserve}/>
      )}
    </div>
  );
};

export default BurgerMenu;
