import React, {useEffect, useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import M from "materialize-css";

const Navbar = () => {

const [open, setOpen] = useState(false);

  // Regular nav's initialization and options
useEffect(() => {
  let elems = document.querySelectorAll('.dropdown-trigger');
  let options = {
    alignment: "right",
        hover: true,
        coverTrigger: false
  };
  let properties = {
    isOpen: false,
  }
  M.Dropdown.init(elems, options, properties);
}, []);

// Side nav's initialization and options
useEffect(() => {
let sidePiece = document.querySelectorAll('.sidenav');
let options2 = {
  edge: 'right',
};
M.Sidenav.init(sidePiece, options2);
}, []);


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
{/* Main Navbar */}
<nav style={{backgroundColor: "#4B0082", fontFamily: 'Roboto'}}>
  <div className="nav-wrapper">
  <a href="#" data-target="slide-out" className="sidenav-trigger" onClick={() => setOpen(open => !open)}><i className="material-icons">menu</i></a>
    <Link to="/" style={{fontFamily: 'Monoton', fontSize: 32}}>Sub Manny</Link>
    <ul className="right hide-on-med-and-down">
      <li><NavLink to="/login">Login</NavLink></li>
      <li><NavLink to="/signup">Signup</NavLink></li>
      {/* <!-- Dropdown Trigger --> */}
      <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Options<i className="material-icons right">arrow_drop_down</i></a></li>
    </ul>
  </div>
</nav>
{/* Side Nav Pieces */}
<ul id="slide-out" className="sidenav">
    <li><div className="user-view">
      <div className="background">
        <img src="images/office.jpg" />
      </div>
      <a href="#user"><img className="circle" src="images/yuna.jpg" /></a>
      <a href="#name"><span className="white-text name">John Doe</span></a>
      <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
    </div></li>
    <li><Link to="/"><i className="material-icons">person</i>PUT USER'S NAME HERE</Link></li>
    <li><div className="divider"></div></li>
    <li><Link to="/login" className="sidenav-close">Login</Link></li>
    <li><Link to="/signup" className="sidenav-close">Signup</Link></li>
    <li><Link to="/about" className="sidenav-close">About</Link></li>
    <li><Link to="/contact" className="sidenav-close">Contact Us</Link></li>
    <li><a className="waves-effect sidenav-close" href="#!">Sign Out</a></li>
  </ul>
        </div>
    );
};

export default Navbar;