import React, { useState } from 'react';
import './App.css';
import ChatGPTlogo from './/assets/ChatGPTlogo.png';
import GoogleImg from './assets/GoogleImg.png';
import MicrosoftImg from './assets/MicrosoftImg.png'
import TextField from '@mui/material/TextField';
import AppleImg from './assets/AppleImg.png';

function App() {

  return (
    <div className='container'>

      <div className="imagecontainer">
        <img src={ChatGPTlogo} alt="logo" />
      </div>

      <h1 className="welcome">Welcome back</h1>

      <div className="textcontainer">
        {/* <input type="text" className='Email' placeholder="Email address" /> */}
        <TextField label="Email address" id="outlined-size-normal" />
      </div>

      <div className="textcontainer1">
        <input className="button-continue" type="button" value="Continue" />
      </div>

      <div className="textnamemain" style={{ display: "flex" }}>
        <p className="textname1">Don't have an account?</p>
        <span className="textname2">Sign up</span>
      </div>

      <div className='h1line'>
        <hr className='horizontalline horizontalline-left' />
        <span className="oR1">OR</span>
        <hr className='horizontalline horizontalline-right' />
      </div>

      <div className="textcontainer">
        <img className="GImg" src={GoogleImg} alt="logo" />
        <span className='GImg1'>Continue with Google</span>
        <input type="button" className="Continue-Google" />
      </div>

      <div className="textcontainer-microsoft">
        <img className="MicrosoftImage" src={MicrosoftImg} alt="logo" />
        <span className='Microsoft'>Continue with Microsoft Account</span>
        <input type="button" className="Continue-Google" />
      </div>

      <div className="textcontainer-apple">
        <img className="AppleImage" src={AppleImg} alt="logo" />
        <span className='Apple'>Continue with Apple</span>
        <input type="button" className="Continue-Google" />
      </div>

        <footer className="footerofpage">
          <a className='termsofuse' href="https://openai.com/policies/terms-of-use" target="_blank">Terms of use</a>
          <span className='termsofuse'>  |  </span>
          <a className='termsofuse' href="https://openai.com/policies/privacy-policy" target="_blank">Privacy Policy</a>
        </footer>
      
    </div >
  );

}
export default App;
