import React from 'react';
import Dashboard from "../../components/Dashboards/UsersDB";
import UserDBGreeting from "../../components/UserDBGreeting/UserDBGreeting";



const UserDashboard = () => {
  const styles = {
    p: {
      textAlign: "center",
      fontSize: 18
    }
  };

  
  return (
    <div>
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
