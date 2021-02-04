import React from 'react';


const SignUpForm = () => {
    return (
        <div>
          <div className="container">
             <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input placeholder="Placeholder" id="first_name" type="text" class="validate"/>
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate"/>
          <label for="last_name">Last Name</label>
        </div>
      </div>
    
      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" class="validate"/>
          <label for="password">Email</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate"/>
          <label for="email">Password</label>
        </div>
      </div>
      <button class="btn waves-effect waves-light" type="submit" name="action">Submit
   
  </button>
      
    </form>
  </div>
        </div>
        </div>
    );
};

export default SignUpForm;