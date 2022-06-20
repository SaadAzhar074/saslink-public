import React, { useState, useEffect } from 'react';
import logo from '../../../Assets/images/logoWhite.png';

const Navbar = () => {
  //
  const [navbarClass, setNavBarClass] = useState('frontPage-navbar');
  //
  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 2) {
      setNavBarClass('frontPage-navbar scroll');
      console.log(window.scrollY + 'Scrolling');
    } else {
      setNavBarClass('frontPage-navbar');
      console.log(window.screenY + 'back to top');
    }
  };
  useEffect(() => {
    // changeBackground();
    // adding the event when scroll change background
    window.addEventListener('scroll', changeBackground);
  });
  return (
    <>
      <div className={navbarClass}>
        <div className='frontPage-navbar-logo'>
          <a href='#'>
            <img src={logo} alt='logo' />
          </a>
        </div>
        <div className='frontPage-navbar-links'>
          <ul>
            <li>
              <a href='#firstPage-features'>Features</a>
            </li>
            <li>
              <div></div>
            </li>
            <li>
              <a href='#frontPage-aboutUs'>About Us</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
