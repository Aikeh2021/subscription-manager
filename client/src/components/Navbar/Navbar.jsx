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
}, []);

useEffect(() => {
let sidePiece = document.querySelectorAll('sidenav-trigger');
let options2 = {
  edge: 'right',

};
M.Dropdown.init(sidePiece, options2);
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
  <a href="/" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
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
<ul id="slide-out" class="sidenav">
    <li><div class="user-view">
      <div class="background">
        <img src="images/office.jpg" />
      </div>
      <a href="#user"><img class="circle" src="images/yuna.jpg" /></a>
      <a href="#name"><span class="white-text name">John Doe</span></a>
      <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
    </div></li>
    <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
    <li><a href="#!">Second Link</a></li>
    <li><div class="divider"></div></li>
    <li><a class="subheader">Subheader</a></li>
    <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
  </ul>
        </div>
    );
};

export default Navbar;