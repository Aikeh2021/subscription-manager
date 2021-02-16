import React, { useState } from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom';



const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const history = useHistory();

  const handleFormSubmit = (e) => {

    e.preventDefault();
    axios
      .post(`/api/users/${email}`, {
        
      //  Added state to this component and pulled values from state into the POST body.
        email,
        password,
      })
      .then((response) => {
        //redirect to another page
        console.log(response) 
        // Storing logged in user id in local storage 
        localStorage.setItem("currentUserId", response.data._id)
        // alert("Welcome back!");
        history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
    <h1 style={{textAlign: 'center', fontFamily: 'Monoton'}}>LOGIN TO YOUR ACCOUNT</h1>
    <div className="divider"></div>
    <br />
    
    <div className="container" style={{fontFamily: "Roboto"}}>
    <div style={{paddingTop: 15, paddingBottom: 20, backgroundColor: "green", borderRadius: 30}}></div>
      <div className="row">
        <form className="col s12" onSubmit={handleFormSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input
              placeholder="Email"
                id="email"
                type="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label htmlFor="Email">{props.email}</label>
            </div>
           
              <div className="input-field col s12">
                <input
                placeholder="Password"
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              <label htmlFor="Email">{props.password}</label>
              </div>
            </div>
         
        </form>
         </div>
         <div className="row center valign">
         <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
          style={{
            borderRadius: 30,
            backgroundColor: "#008000",
            fontFamily: "Roboto",
          }}
          onClick={(e) => {
            handleFormSubmit(e);
          }}
        >
          Login
        </button>
         </div>
        
      </div>
    </>
  );
};

export default LoginPage;
