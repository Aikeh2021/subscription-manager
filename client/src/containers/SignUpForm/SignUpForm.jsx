import React, {useState} from 'react';


const SignUpForm = (props) => {
    return (
        <div>
          <h1> </h1>
          <div className="container">
             <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <input placeholder="First Name" id="first_name" type="text" className="validate"/>
          <label for="first_name">{props.first_name}</label>
        </div>
        <div className="input-field col s6">
          <input id="last_name" type="text" className="validate"/>
          <label for="last_name">{props.last_name}</label>
        </div>
      </div>
    
      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" className="validate"/>
          <label for="email">{props.email}</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="password" type="password" className="validate"/>
          <label for="password">{props.password}</label>
        </div>
      </div>
      <button className="btn waves-effect waves-light" type="submit" name="action">{props.submit}
   
  </button>
      
    </form>
  </div>
        </div>
        </div>
    );
};

export default SignUpForm;