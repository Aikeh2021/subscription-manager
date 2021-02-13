import React, { useState } from "react";
import axios from "axios";


const SignUpForm = (props) => {

    const [firstName, setFirstName]= useState("");
      const [lastName, setLastName]= useState("");
      const [email, setEmail]= useState("");
      const [password, setPassword]= useState("");

      const handleFormSubmit = (e) => {
            e.preventDefault();
            axios
              .post("/api/users", {
                // TODO: Add state to this component and pull values from state into this POST body.
                
                firstName: "Beyonce",
                lastName: "Knowels",
                email: "yonce@gmail.com",
                password: "password",
              })
              .then((response) => {
                //redirect to another page
                alert("User was created!");
              })
              .catch((err) => {
                console.log(err);
              });
          };
        return (
            <div>
            <h1 style={{ textAlign: "center", fontFamily: "Monoton" }}>
       CREATE AN ACCOUNT
       </h1>
       <div className="container" style={{ fontFamily: "Roboto" }}>
                <div className="row">
                <form className="col s12" onSubmit={handleFormSubmit}>
           <div className="row">
         <div className="input-field col s6">
           
              <input placeholder="First Name" id="first_name" type="text" className="validate" value={firstName} onChange={(e) =>{
                     setFirstName(e.target.value);
             }}/>
              <label htmlFor="first_name">{props.first_name}</label>

            </div>
    
            <div className="input-field col s6">
              <input placeholder="Last Name" id="last_name" type="text" className="validate" value={lastName} onChange={(e) =>{
                     setLastName(e.target.value);
             }}/>
              <label htmlFor="last_name">{props.last_name}</label>
            </div>
          </div>
        
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="Email" id="email" type="email" className="validate" value={email} onChange={(e) =>{
                     setEmail(e.target.value);
             }}/>
              <label htmlFor="email">{props.email}</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="Password" id="password" type="password" className="validate" value={password} onChange={(e) =>{
                     setPassword(e.target.value);
             }}/>
              <label htmlFor="password">{props.password}</label>
            </div>
          </div>
          <button className="btn waves-effect waves-light"
          type="submit"
          name="action"
          style={{
            borderRadius: 30,
            backgroundColor: "#008000",
            fontFamily: "Roboto",
          }}
        >
          Continue To Subscriptions
      </button>
        </form>
      </div>
            </div>
            </div>
        );
    };
    
    export default SignUpForm;














  