import React from 'react';


const navbar = () => {
    return (
        <div>
           {/* <!-- Dropdown Structure --> */}
<ul id="dropdown1" class="dropdown-content">
  <li><a href="/">one</a></li>
  <li><a href="/">two</a></li>
  <li class="divider"></li>
  <li><a href="/">signout</a></li>
</ul>
<nav>
  <div class="nav-wrapper">
    <a href="/" class="brand-logo">Subscriptions</a>
    <ul class="right hide-on-med-and-down">
      {/* loads each page individually */}
      <li><a href="/login">login</a></li>
      <li><a href="/signup">signup</a></li>
      
 {/* This is a drop down arroww */}
      {/* <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i className="material-icons right">arrow_drop_down</i></a></li> */}
    </ul>
  </div>
</nav>
        </div>
    );
};

export default navbar;