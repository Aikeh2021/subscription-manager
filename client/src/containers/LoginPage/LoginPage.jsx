import React, { useState } from "react";

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
    <h1 style={{textAlign: 'center', fontFamily: 'Monoton'}}>LOGIN TO YOUR ACCOUNT</h1>
    <div className="container" style={{fontFamily: "Roboto"}}>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label for="Email">{props.email}</label>
            </div>
           
              <div className="input-field col s12">
                <input
                  id="password"
                  type="password\"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              <label for="Email">{props.password}</label>
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
