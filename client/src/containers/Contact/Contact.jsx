import React from 'react';
import ContactInfo from '../../components/ContactInfo/ContactInfo';

const Contact = () => {
    return (
        <div>
            <h1 style={{textAlign:"center", fontFamily: 'Monoton'}}>ABOUT SUB MANNY</h1>
            <div className="divider"></div>
            <br />
            <div className="container">
                <div className="row">
                <div style={{paddingTop: 15, paddingBottom: 20, backgroundColor: "green", borderRadius: 30}}></div>
                </div>
            </div>
            
            
            <ContactInfo />
        </div>
    );
};

export default Contact;