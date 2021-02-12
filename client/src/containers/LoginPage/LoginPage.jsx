import React , { useState}  from 'react';

const LoginPage = () => {

  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");

    return (
        <div className="container">
        <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" value={email} onChange={(e) =>{
                 setEmail(e.target.value);
         }}/>
          <label for="Email">Email</label>
      </div>
      <div classNameName="row">
        <div className="input-field col s12">
          <input id="password" type="password" value={password} onChange={(e) =>{
                 setPassword(e.target.value);
         }}/>
          <label for="email">Password</label>
        </div>
      </div>
      </div>
   </form> 
   <button className="btn waves-effect waves-light" type="submit" name="action">Login
   </button>
   </div>
    </div>
   
    );
};

export default LoginPage;