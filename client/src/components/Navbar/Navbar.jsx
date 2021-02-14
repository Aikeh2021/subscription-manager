import React, {useEffect} from 'react';
import { Link, NavLink } from 'react-router-dom';
import M from "materialize-css";




const Navbar = () => {

useEffect(() => {
  let elems = document.querySelectorAll('.dropdown-trigger');
  let options = {
    alignment: "right",
        hover: true,
        coverTrigger: false
  };
  M.Dropdown.init(elems, options);
}, [])
 

    return (
        <div>
          {/* <!-- Dropdown Structure --> */}
<ul id="dropdown1" className="dropdown-content">
  <li><NavLink to="/" style={{fontFamily: 'Roboto', color: 'Black'}}>About</NavLink></li>
  <li className="divider"></li>
  <li><NavLink to="/" style={{fontFamily: 'Roboto', color: 'Black'}}>Contact Us</NavLink></li>
  <li className="divider"></li>
  <li><NavLink to="/" style={{fontFamily: 'Roboto', color: 'Black'}}>Sign Out</NavLink></li>
</ul>
<nav style={{backgroundColor: "#4B0082", fontFamily: 'Roboto'}}>
  <div className="nav-wrapper">
    <Link to="/" style={{fontFamily: 'Monoton'}}>Sub Manny</Link>
    <ul className="right hide-on-med-and-down">
      <li><NavLink to="/login">Login</NavLink></li>
      <li><NavLink to="/signup">Signup</NavLink></li>
      {/* <!-- Dropdown Trigger --> */}
      <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Options<i className="material-icons right">arrow_drop_down</i></a></li>
    </ul>
  </div>
</nav>
        </div>
    );
};

export default Navbar;