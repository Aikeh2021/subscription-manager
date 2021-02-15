import React from 'react';
import AboutInfo from '../../components/AboutInfo/AboutInfo';
import SubMannyLogo from '../../assets/logos/SubMannyLogo.png';


const About = () => {
    return (
        
        <div className="center">
        <br />
        <img src={SubMannyLogo} alt="Sub Manny Logo" style={{width: 300, height: 300, borderRadius: 30}}/>
        <h1 style={{textAlign:"center", fontFamily: 'Monoton'}}>ABOUT SUB MANNY</h1>
        <div className="divider"></div>
        <br />
        <div className="container">
            <div className="row">
            <div style={{paddingTop: 15, paddingBottom: 20, backgroundColor: "green", borderRadius: 30}}></div>
            </div>
        </div>
        
        
        <AboutInfo />
    </div>
    );
};

export default About;