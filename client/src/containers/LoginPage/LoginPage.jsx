import React, { useState } from "react";
import axios from "axios";



const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  
  const handleFormSubmit = (e) => {

    e.preventDefault();
    axios
      .get("/api/subscriptions", {
        
      //  Added state to this component and pulled values from state into the POST body.
        email,
        password,
      })
      .then((response) => {
        //redirect to another page
        alert("User has returned!");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
    <h1 style={{textAlign: 'center', fontFamily: 'Monoton'}}>LOGIN TO YOUR ACCOUNT</h1>
    <div className="container" style={{fontFamily: "Roboto"}}>
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
                  type="text"
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
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
          style={{
            borderRadius: 30,
            backgroundColor: "#008000",
            fontFamily: "Roboto",
          }}
        >
          Login
        </button>
      </div>
    </>
  );
};

export default LoginPage;
