import React from 'react';
import logo from '../../../Assets/images/logoWhiteGreen.png';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';

const Footer = () => {
  return (
    <>
      <div className='frontPage-footer-main'>
        <div className='frontPage-footer-nameDiv'>
          <img src={logo} alt='' />
          <h5>SAS Link</h5>
        </div>
        <div className='frontPage-footer-contactDiv'>
          <a href='#'>
            <AiIcons.AiOutlineMail />
            <span>saslink@gmail.com</span>
          </a>
          <a href='#'>
            <AiIcons.AiOutlinePhone />
            <span>+92 309 2031204</span>
          </a>
        </div>
        <div className='frontPage-footer-socials'>
          <a href='#'>
            <BsIcons.BsFacebook />
          </a>
          <a href='#'>
            <BsIcons.BsInstagram />
          </a>
          <a href='#'>
            <BsIcons.BsWhatsapp />
          </a>
          <a href='#'>
            <BsIcons.BsLinkedin />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
