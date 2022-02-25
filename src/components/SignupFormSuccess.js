import React from 'react';
import "../App.css";

const SignupFormSuccess = () => {
  return <div className="container">
      <div className="app-wrapper">
        <div>
        <img src={require('./Squirrel-Logz.png')}></img>
        </div>
        <h1 className="form-success">Your Account has been created!</h1>
      </div>

  </div>;
};

export default SignupFormSuccess;
