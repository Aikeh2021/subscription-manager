import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
// import SubMannyLogo from "client/src/assets/logos/SubMannyLogo.png";

const Footer = ({ logo }) => {
  return (
    // <footer>
    //     <div className="footer-nav">Copyright© Subscription Manager</div>
    //     <h1>
    //         Privacy Statement: We take steps to protect your Personal Information from unauthorized access and against unlawful processing, accidental loss, destruction and damage.
    //     </h1>
    // </footer>
    <footer
      className="page-footer"
      id="site-footer"
      style={{ fontSize: 10, font: "Roboto", backgroundColor: "#4B0082" }}
    >
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h5 className="white-text">Privacy Statement</h5>
            <div className="row">
              <div className="col s12">
                <div className="col s4">
                  <img id="footer-logo" src={logo} alt="Site Logo" />
                </div>
                <p className="col s2">
                  <NavLink to="/login" style={{ color: "white" }}>
                    Admin Portal
                  </NavLink>
                </p>
                <p className="white-text text-lighten-4 col s3">
                  We take steps to protect your Personal Information from
                  unauthorized access and against unlawful processing,
                  accidental loss, destruction and damage. We will only keep
                  your Personal Information for as long as we reasonably require
                  and, in any event, only for as long as the Date Protection
                  Legislation allows. Where you have chosen a Password which
                  allows you to access certain parts of the site,
                </p>
                <p className="white-text text-lighten=4 col s3">
                  you are responsible to keeping this password confidential. We
                  advice you not to share your password with anyone.
                  Unfortunately, the transmission of information via the
                  Internet is not completely secure and although we will take
                  steps to protect your Personal Information, we cannot
                  guarantee the security of your Personal Information
                  transmitted via the website, any transmission is therefore at
                  your own risk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          © 2021 Copyright
          {/* <a class="grey-text text-lighten-4 right" href="#!">More Links</a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
