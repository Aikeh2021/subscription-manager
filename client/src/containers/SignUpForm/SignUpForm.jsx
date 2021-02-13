import React from "react";

const SignUpForm = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", fontFamily: "Monoton" }}>
        CREATE AN ACCOUNT
      </h1>
      <div className="container" style={{fontFamily: "Roboto"}}>
        <div class="row">
          <form class="col s12">
            <div class="row">
              <div class="input-field col s6">
                <input
                  placeholder="First Name"
                  id="first_name"
                  type="text"
                  class="validate"
                />
                <label for="first_name">First Name</label>
              </div>
              <div class="input-field col s6">
                <input id="last_name" type="text" class="validate" />
                <label for="last_name">Last Name</label>
              </div>
            </div>

            <div class="row">
              <div class="input-field col s12">
                <input id="email" type="email" class="validate" />
                <label for="email">Email</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input id="password" type="password" class="validate" />
                <label for="password">Password</label>
              </div>
            </div>
            <button
              class="btn waves-effect waves-light"
              type="submit"
              name="action"
              style={{
                borderRadius: 30,
                backgroundColor: "#008000",
                fontFamily: "Roboto",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
