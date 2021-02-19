import React, { useState } from "react";
import API from "../../Utils/Api";
import { useHistory } from "react-router-dom";

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    API.post("/users/login", { email, password })
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", response.data.token);
        // console.log(response.data);
        if (email === "submannysupport@gmail.com") {
          history.push("/admin/dashboard");
        } else {
          history.push("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <h1 style={{ textAlign: "center", fontFamily: "Monoton" }}>
        LOGIN TO YOUR ACCOUNT
      </h1>
      <div className="divider"></div>
      <br />

      <div className="container" style={{ fontFamily: "Roboto" }}>
        <div
          style={{
            paddingTop: 15,
            paddingBottom: 20,
            backgroundColor: "green",
            borderRadius: 30,
          }}
        ></div>
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
