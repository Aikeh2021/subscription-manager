import React from 'react';
import AboutInfo from '../../components/AboutInfo/AboutInfo';
import SubMannyLogo from '../../assets/logos/SubMannyLogo.png';


const About = () => {
    return (
        
        <div>
        <br />
        <img src={SubMannyLogo} alt="Sub Manny Logo" className="valign center-block" style={{width: 400, height: 400, borderRadius: 30}}/>
        <h1 style={{textAlign:"center", fontFamily: 'Monoton'}}>ABOUT SUB MANNY</h1>
        <div className="divider"></div>
        <br />
        <div className="container">
            <div className="row">
            <div style={{paddingTop: 15, paddingBottom: 20, backgroundColor: "green", borderRadius: 30}}></div>
            <AboutInfo />
            <div style={{paddingTop: 15, paddingBottom: 20, backgroundColor: "green", borderRadius: 30}}></div>
            </div>
        </div>
        
    </div>
    );
};

export default About;