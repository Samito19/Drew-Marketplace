import { logDOM } from "@testing-library/react";
import React from "react";
import useForm from "./useForm";
import validation from "./useForm";

const SignupForm = ({submitForm}) => {
    const {handleChange, handleFormSubmit, values, errors} = useForm(
        submitForm
    );
  return(

   <div className="container">
       <div className="app-wrapper">
           <div className="logo">
           <img src={require('./Squirrel-Logz.png')}></img>
           </div>
           <br></br>
           <p>DrewU Marketplace</p>
           <div>
               <h1 className="title">Create an Account</h1>
           </div>
           <form className="form-wrapper">
               <div className="name">
                   <label className="label">Full Name</label>
                   <input 
                   className="input" 
                   type="text" 
                   name="fullname" 
                   value={values.fullname}
                   onChange={handleChange}
                   />
                   {errors.fullname && <h6 className="error">{errors.fullname}</h6>}
               </div>
               <div className="email">
                   <label className="label">Email Address</label>
                   <input 
                   className="input" 
                   type="email" 
                   name="email" 
                   value={values.email}
                   onChange={handleChange}
                   />
                   {errors.email && <h6 className="error">{errors.email}</h6>}
               </div>
               <div className="password">
                   <label className="label">Password</label>
                   <input 
                   className="input" 
                   type="password" 
                   name="password" 
                   value={values.password}
                   onChange={handleChange}
                   />
                   {errors.password && <h6 className="error">{errors.password}</h6>}
               </div>
               <div>
                   <button className="submit" onClick={handleFormSubmit}>
                       Sign Up
                    </button>
               </div>
               <br></br>
               <br></br>
               <div>
                   <h2>Already have an account? <a href="Login">Login here</a></h2>
               </div>
           </form>
       </div>
       </div>
       );
};

export default SignupForm;
