import React from 'react';


const navbar = () => {
    return (
        <div>
           {/* <!-- Dropdown Structure --> */}
<ul id="dropdown1" className="dropdown-content">
  <li><a href="/">one</a></li>
  <li><a href="/">two</a></li>
  <li class="divider"></li>
  <li><a href="/">signout</a></li>
</ul>
<nav>
  <div className="nav-wrapper">
    <a href="/" className="brand-logo">Subscriptions</a>
    <ul className="right hide-on-med-and-down">
      <li><a href="/">login</a></li>
      <li><a href="/">signup</a></li>
      
 {/* This is a drop down arroww */}
      {/* <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i className="material-icons right">arrow_drop_down</i></a></li> */}
    </ul>
  </div>
</nav>
        </div>
    );
};

export default navbar;