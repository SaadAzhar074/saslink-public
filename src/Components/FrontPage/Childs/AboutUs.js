import React from 'react';
import shayanImg from '../../../Assets/images/shayan.JPG';
import ateebImg from '../../../Assets/images/ateeb.JPG';
import saadImg from '../../../Assets/images/saad.JPG';

const AboutUs = () => {
  return (
    <>
      <div id='frontPage-aboutUs' className='frontPage-aboutUs-main'>
        <div className='frontPage-aboutUs-Sec1'>
          <h1>Your Restaurant & Food delivery Solutions</h1>
          <p>
            SASlink is a powerful solution to all you restaurants problem, our
            POS dashboard, inventory management are designed to help you thrive,
            even in light of an increasingly competitive marketplace. In this
            modern world where every restaurant is facing rivalry, our SASlink
            Dashboard helps you compete with them.
          </p>
        </div>
        <div className='frontPage-aboutUs-Sec2'>
          <div className='frontPage-aboutUs-Sec2-img1'>
            <img src={shayanImg} alt='' />
            <h5>Shayan Sheikh</h5>
          </div>
          <div className='frontPage-aboutUs-Sec2-img2'>
            <img src={ateebImg} alt='' />
            <h5>Ateeb Khan</h5>
          </div>
          <div className='frontPage-aboutUs-Sec2-img3'>
            <img src={saadImg} alt='' />
            <h5>Saad Azhar</h5>
          </div>
        </div>
        {/* <div className='frontPage-aboutUs-Sec3'>
          <h1>Our Story</h1>
          <P>
           
          </P>
        </div> */}
      </div>
    </>
  );
};

export default AboutUs;
