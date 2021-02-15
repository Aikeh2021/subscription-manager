import React from 'react';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import SubMannyLogo from '../../assets/logos/SubMannyLogo.png';

const Contact = () => {
    return (
        <div>
            <br />
            <img src={SubMannyLogo} alt="Sub Manny Logo" className="center valign center-block" style={{width: 400, height: 400, borderRadius: 30}}/>
            <h1 style={{textAlign:"center", fontFamily: 'Monoton'}}>CONTACT US</h1>
            <div className="divider"></div>
            <br />
            <div className="container">
                <div className="row">
                <div style={{paddingTop: 15, paddingBottom: 20, backgroundColor: "green", borderRadius: 30}}></div>
                <ContactInfo />
                <br />
                <div style={{paddingTop: 15, paddingBottom: 20, backgroundColor: "green", borderRadius: 30}}></div>
                </div>
            </div>
            
        </div>
    );
};

export default Contact;