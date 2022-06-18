import React from 'react';
import logo from '../../../Assets/images/logoWhite.png';

const Navbar = () => {
  return (
    <>
      <div className='frontPage-navbar'>
        <div className='frontPage-navbar-logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='frontPage-navbar-links'>
          <ul>
            <li>
              <a href='#'>Features</a>
            </li>
            <li>
              <div></div>
            </li>
            <li>
              <a href='#'>About Us</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
