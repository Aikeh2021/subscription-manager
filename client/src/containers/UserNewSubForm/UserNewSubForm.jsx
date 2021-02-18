import React from 'react';
import UserNewSub from '../../components/UserSubForms/UserNewSub';
import SubMannyLogo from '../../assets/logos/SubMannyLogo.png'

const UserNewSubForm = () => {
    return (
        <div>
            <br/>
            <img src={SubMannyLogo} alt="Sub Manny Logo" className="center valign center-block" style={{width: 400, height: 400, borderRadius: 30}}/>
            <h1 style={{textAlign:"center", fontFamily: 'Monoton'}}>ADD A NEW SUBSCRIPTION</h1>
            <div className="divider"></div>
            <br/>
        <div className="container">
            <div className="row">
            <div className="col s12">
            <div style={{paddingTop: 15, paddingBottom: 20, backgroundColor: "green", borderRadius: 30}}></div>
                <UserNewSub />
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div> 
        </div>
        </div>
        </div>
    );
};

export default UserNewSubForm;