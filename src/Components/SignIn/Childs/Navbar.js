import React from 'react';
import logo from '../../../Assets/images/logoWhite.png';
import * as IoIcons from 'react-icons/io5';
const Navbar = () => {
  return (
    <>
      <div className='signIn-navbar-backDiv'>
        <a href='#'>
          <IoIcons.IoArrowBackOutline />
        </a>
      </div>
      <div className='signIn-navbar'>
        <img src={logo} alt='logo' />
      </div>
    </>
  );
};

export default Navbar;
