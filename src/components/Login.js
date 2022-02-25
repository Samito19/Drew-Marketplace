import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles2.css";

function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Mock Database to test form
  const database = [
    {
      email: "marketplace@drew.edu",
      password: "drew"
    }
  ];

  const errors = {
    email: "Invalid Email Address!",
    password: "Invalid Password!"
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var { email, password } = document.forms[0];

    const userData = database.find((user) => user.email === email.value);

    if (userData) {
      if (userData.password !== password.value) {
        setErrorMessages({ name: "password", message: errors.password });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "email", message: errors.email });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label type="email">Email Address</label>
          <input type="text" name="email" required />
          {renderErrorMessage("email")}
        </div>
        <div className="input-container">
          <label type="password">Password</label>
          <input type="password" name="password" required />
          {renderErrorMessage("password")}
        </div>
        <div className="button-container">
        <button className="submit">Login</button>
        </div>
        <br></br>
               <br></br>
               <div>
                   <h2>Don't have an account? <a href="Form">Sign Up here</a></h2>
                   </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
      <div className="logo">
           <img src={require('./Squirrel-Logz.png')}></img>
           </div>
           <br></br>
           <p>DrewU Marketplace</p>
        <div className="title">Sign In</div>
        {isSubmitted ? <div type="success">User is successfully logged in!</div> : renderForm}
      </div>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Login />, rootElement);
export default Login;