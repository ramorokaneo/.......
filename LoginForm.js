import React, { useState } from "react";
import './LoginForm.css'
import {link} from 'react-router-dom';
import logo from '/mylist/src/logoimg.png';
import welcomeimg from '/mylist/src/welcomeimg.png';

function Login() {

  const [emailval, setemailval] = useState("");
  const [passval, setpassval] = useState("");

  const handlesubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className='main-Login'>
      Login Page <br />

      <div className="login-contain">
        <div className="left-side">
          <div className="img-class">
            <img src={logo} id='img-id' alt="" srcset=""  />
          </div>

          <form onSubmit={handlesubmit}>
            <label for="email">Email</label>
            <input placeholder="Enter your email..." type="email" value={emailval}
              onChange={(e)=>{setemailval(e.target.value)} } id="emil1" />
            <label for="pwd1">password</label>
            <input placeholder="Enter password" type="password" 
            value={passval} 
            id="pwd1"/>
            <button type="submit" id="sub_butt">Login</button>
          </form>

            <div className="footer">
              <h4>Don't have an Account ? <Link to='/Signup'>Signup Now</Link></h4>
            </div>
        </div>
        <div className="right-side">
          <div className="welcomeNote">
            <h3>Welcome Back,</h3>
          </div>
          <div className="welcomeImg">
            <img src={welcomeimg} id='wel-img-id' alt="" srcset="" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login;