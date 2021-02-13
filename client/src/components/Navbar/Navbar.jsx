import { Dropdown } from 'materialize-css';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const navbar = () => {
    return (
        <div>
          {/* <!-- Dropdown Structure --> */}
<ul id="dropdown1" className="dropdown-content">
  <li><NavLink to="/">About</NavLink></li>
  <li className="divider"></li>
  <li><NavLink to="/">Contact Us</NavLink></li>
  <li className="divider"></li>
  <li><NavLink to="/">Sign Out</NavLink></li>
</ul>
<nav style={{backgroundColor: "#4B0082", fontFamily: 'Roboto'}}>
  <div className="nav-wrapper">
    <Link to="/" style={{fontFamily: 'Monoton'}}>Sub Manny</Link>
    <ul className="right hide-on-med-and-down">
      <li><NavLink to="/login">Login</NavLink></li>
      <li><NavLink to="/signup">Signup</NavLink></li>
      {/* <!-- Dropdown Trigger --> */}
      <li><a id="dropdown1" className="dropdown-trigger" onClick={() => {Dropdown()}} href="#!" data-target="dropdown1">Options<i className="material-icons right">arrow_drop_down</i></a></li>
    </ul>
  </div>
</nav>
        </div>
    );
};

export default navbar;