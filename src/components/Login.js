import React, { useState } from "react";
import ReactDOM from "react-dom";
import {GoogleLogin} from "react-google-login";

import "./styles/login.css";

function Login() {
  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData'))
      : null
  );

  const handleFailure = (result) => {
    alert(result);
  };

  const handleLogin = async (googleData) => {
    const res = await fetch('http://localhost:5000/api/google-login', {
      method: 'POST',
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    alert('1')
    console.log(res)
    const data = await res.json();
    alert('2')
    setLoginData(data);
    localStorage.setItem('loginData', JSON.stringify(data));
  };
  const handleLogout = () => {
    localStorage.removeItem('loginData');
    setLoginData(null);
  };



  return (
    <div className="login-page__container">
      <div className="login-form">
        <div className="logo">
          <img src={require("./Squirrel-Logz.png")}></img>
        </div>
        <br></br>
        <p>DrewU Marketplace</p>
        <div className="title">Sign In</div>
        <div>
        {loginData ? (
            <div>
              <h3>You logged in as {loginData.email}</h3>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <GoogleLogin
              clientId='765887044751-5jdrk0mv1k4sqg7uu87qo67h1v8lvdph.apps.googleusercontent.com'
              buttonText="Log in with Google"
              onSuccess={handleLogin}
              onFailure={handleFailure}
              cookiePolicy={'single_host_origin'}
            ></GoogleLogin>
          )}</div>    
      </div>
    </div>
  );
  
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Login />, rootElement);
export default Login;
