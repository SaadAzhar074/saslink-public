import React from 'react';

const Register = () => {
  return (
    <>
      <div id='frontPage-register' className='frontPage-register'>
        <div className='frontPage-register-headingDiv'>
          <h1>Join Us!</h1>
          <p>
            Join the ranks of restaurant businesses nationwide who have
            partnered with <br /> SASlink and trusted us to empower their
            business and their brand.
          </p>
        </div>
        <form action=''>
          <input type='text' placeholder='Full Name' />
          <input type='text' placeholder='Business Name' />
          <input type='email' placeholder='Email Address' />
          <input type='text' placeholder='+92 3xx xxxxxxx' />
          <textarea placeholder='Message'></textarea>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Register;
