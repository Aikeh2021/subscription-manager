import React, {useState} from 'react';


const SignUpForm = (props) => {

const [firstName, setFirstName]= useState("");
  const [lastName, setLastName]= useState("");
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");


    return (
        <div>
          <h1> </h1>
          <div className="container">
             <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <input placeholder="First Name" id="first_name" type="text" className="validate" value={firstName} onChange={(e) =>{
                 setFirstName(e.target.value);
         }}/>
          <label for="first_name">{props.first_name}</label>
        </div>

        <div className="input-field col s6">
          <input placeholder="Last Name" id="last_name" type="text" className="validate" value={lastName} onChange={(e) =>{
                 setLastName(e.target.value);
         }}/>
          <label for="last_name">{props.last_name}</label>
        </div>
      </div>
    
      <div className="row">
        <div className="input-field col s12">
          <input placeholder="Email" id="email" type="email" className="validate" value={email} onChange={(e) =>{
                 setEmail(e.target.value);
         }}/>
          <label for="email">{props.email}</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input placeholder="Password" id="password" type="password" className="validate" value={password} onChange={(e) =>{
                 setPassword(e.target.value);
         }}/>
          <label for="password">{props.password}</label>
        </div>
      </div>
      <button className="btn waves-effect waves-light" type="submit" name="action">Add to Dashboard
  </button>
    </form>
  </div>
        </div>
        </div>
    );
};

export default SignUpForm;