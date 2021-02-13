import React from "react";
import axios from "axios";

const SignUpForm = () => {

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
                <input
                  placeholder="First Name"
                  id="first_name"
                  type="text"
                  className="validate"
                />
                <label htmlFor="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input id="last_name" type="text" className="validate" />
                <label htmlFor="last_name">Last Name</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" className="validate" />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="password" type="password" className="validate" />
                <label htmlFor="password">Password</label>
              </div>
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
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
