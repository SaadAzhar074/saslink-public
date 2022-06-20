import React from 'react';
import Navbar from './Childs/Navbar';
import Features from './Childs/Features';
import AboutUs from './Childs/AboutUs';
import Register from './Childs/Register';
import Footer from './Childs/Footer';
import './FrontPage.css';
import backgroundImage from '../../Assets/images/frontPageBackground.png';
const FrontPage = () => {
  return (
    <>
      <div className='frontPage-main'>
        <Navbar />
        <div className='frontPage-sec1'>
          <div className='frontPage-sec1-leftDiv'>
            <h1>
              Manage your food <br />
              delivery channels on <br />
              <span>one dashboard</span>
            </h1>
            <h5>
              No more juggling multiple dashboards. SAS Link's POS integrations
              allow you to manage orders from different delivery services from
              your existing POS.
            </h5>
            <div className='frontPage-sec1-leftDiv-buttonDiv'>
              <a
                href='#frontPage-register'
                className='frontPage-sec1-leftDiv-buttonDiv-registrationBtn'
              >
                Registration
              </a>
              <button className='frontPage-sec1-leftDiv-buttonDiv-signInBtn'>
                Sign In
              </button>
            </div>
          </div>
          <div className='frontPage-sec1-rightDiv'>
            <img src={backgroundImage} alt='' />
          </div>
        </div>
        <Features />
        <AboutUs />
        <Register />
        <Footer />
      </div>
    </>
  );
};

export default FrontPage;
