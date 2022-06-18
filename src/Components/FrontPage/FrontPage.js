import React from 'react';
import Navbar from './Childs/Navbar';
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
              allow you to manage orders from different <br /> delivery services
              from your existing POS.
            </h5>
            <div className='frontPage-sec1-leftDiv-buttonDiv'>
              <button className='frontPage-sec1-leftDiv-buttonDiv-registrationBtn'>
                Registration
              </button>
              <button className='frontPage-sec1-leftDiv-buttonDiv-signInBtn'>
                Sign In
              </button>
            </div>
          </div>
          <div className='frontPage-sec1-rightDiv'>
            <img src={backgroundImage} alt='' />
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontPage;
