import React from 'react';
import Dashboard from "../../components/Dashboards/UsersDB";
import UserDBGreeting from "../../components/UserDBGreeting/UserDBGreeting";
import SubMannyLogo from '../../assets/logos/SubMannyLogo.png';



const UserDashboard = () => {
  const styles = {
    p: {
      textAlign: "center",
      fontSize: 18
    }
  };

  
  return (
    <div>
      <img src={SubMannyLogo} alt="Sub Manny Logo" className="center valign center-block" style={{width: 400, height: 400, borderRadius: 30}}/>
      <UserDBGreeting />
      <div className="divider"></div>
      <div className="container">
        <div className="row">
          <br />
        <div style={{paddingTop: 15, paddingBottom: 20, backgroundColor: "green", borderRadius: 30}}></div>
        <p style={styles.p}>
        Welcome to your personal subscription tracker! Update or delete
        subscriptions as you please. Check your email for notifications when
        your plan pricing changes.
      </p>
        </div>
      </div>
      <Dashboard />
      <br />
    </div>
  );
};

export default UserDashboard;
