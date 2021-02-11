import React from 'react';

const LoginPage = () => {
    return (
        <div className="container">
        <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email"/>
          <label htmlFor="Email">Email</label>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="password" type="password"/>
          <label htmlFor="email">Password</label>
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