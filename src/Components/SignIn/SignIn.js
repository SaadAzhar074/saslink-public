import React from 'react';
import './SignIn.css';
import Navbar from './Childs/Navbar';
import signInBackground from '../../Assets/images/frontPageBackground.png';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
const SignIn = () => {
  return (
    <>
      <div className='signIn-main'>
        <Navbar />
        <form action=''>
          <h2>Sign In</h2>
          <div className='signIn-main-input-div'>
            <AiIcons.AiOutlineUser />
            <input type='text' placeholder='User Id' autoFocus />
          </div>
          <div className='signIn-main-input-div'>
            <RiIcons.RiLockPasswordLine />
            <input type='password' placeholder='Password' />
          </div>
          <span>
            <input type='checkbox' />
            <label htmlFor=''>Remember me</label>
            <a href='#'>forget password?</a>
          </span>
          <button type='submit'>SIGN IN</button>
          <h5>
            facing problem signing in? <br />
            Contact Help <a href='#'>+92 309 2031204</a>
            <a href='#'>saslink@gmail.com</a>
          </h5>
        </form>
      </div>
    </>
  );
};

export default SignIn;
