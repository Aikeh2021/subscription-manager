import React from "react";

const ContactInfo = () => {
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Customer Support</h3>
      <p style={{ fontSize: 20 }}>
        Having issues with your account? No worries, just contact customer
        support at the email address below:
      </p>
      <div className="center valign">
        <a
          style={{ textAlign: "center", fontSize: 30 }}
          href="mailto:submannysupport@gmail.com"
          rel="noreferrer noopener"
          target="_blank"
        >
          submannysupport@gmail.com
        </a>
      </div>

      <h3 style={{ textAlign: "center" }}>Contact The Development Team</h3>
      <p style={{ fontSize: 20 }}>
        If you would like to get in contact with the development team for Sub
        Manny, please visit the github repository for this website to obtain the
        contact information for the application contributors.
      </p>
      <div className="center valign">
        <a
          href="https://github.com/Aikeh2021/subscription-manager"
          rel="noreferrer noopener"
          target="_blank"
          style={{ textAlign: "center", fontSize: 30 }}
        >
          Visit Sub Manny on Github
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
