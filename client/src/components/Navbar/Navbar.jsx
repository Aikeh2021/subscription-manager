// import { Dropdown } from 'materialize-css';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// import M from 'materialize-css';


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
    <ul className="right hide-on-med-and-down" id="dropdown2">
      <li><NavLink to="/login">Login</NavLink></li>
      <li><NavLink to="/signup">Signup</NavLink></li>
      {/* <!-- Dropdown Trigger --> */}
      <li><a className="dropdown-trigger" href="#!" data-target="dropdown2">Options<i className="material-icons right">arrow_drop_down</i></a></li>
    </ul>
  </div>
</nav>
        </div>
    );
};

export default navbar;