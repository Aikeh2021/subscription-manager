import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const navbar = () => {
    return (
        <div>
          {/* <!-- Dropdown Structure --> */}
<ul id="dropdown1" class="dropdown-content">
  <li><NavLink to="/">About</NavLink></li>
  <li class="divider"></li>
  <li><NavLink to="/">Contact Us</NavLink></li>
  <li class="divider"></li>
  <li><NavLink to="/">Sign Out</NavLink></li>
</ul>
<nav>
  <div class="nav-wrapper">
    <Link to="/">Sub Manny</Link>
    <ul class="right hide-on-med-and-down">
      <li><NavLink to="/login">Login</NavLink></li>
      <li><NavLink to="/signup">Signup</NavLink></li>
      {/* <!-- Dropdown Trigger --> */}
      <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Options<i class="material-icons right">arrow_drop_down</i></a></li>
    </ul>
  </div>
</nav>
        </div>
    );
};

export default navbar;