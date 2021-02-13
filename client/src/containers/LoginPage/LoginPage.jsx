import React , { useState}  from 'react';

const LoginPage = (props) => {

  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");

    return (
      <div>
      <h1> </h1>
        <div className="container">
        <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s12">
          <input placeholder="" id="email" type="email" value={email} onChange={(e) =>{
                 setEmail(e.target.value);
         }}/>
          <label for="Email">Email</label>
      </div>
    
        <div className="input-field col s12">

          <input placeholder="" id="password" type="password" value={password} onChange={(e) =>{
                 setPassword(e.target.value);
         }}/>
          <label for="email">Password</label>

        </div>
      </div>
   </form> 
   <button className="btn waves-effect waves-light" type="submit" name="action">Login
   </button>
   </div>
   </div>
   </div>
    );
};

export default LoginPage;