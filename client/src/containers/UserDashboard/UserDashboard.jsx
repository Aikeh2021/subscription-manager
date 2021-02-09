import React from "react";
import Dashboard from "../../components/Dashboards/UsersDB";
import UserDBGreeting from "../../components/UserDBGreeting/UserDBGreeting"

const UserDashboard = () => {
  const styles = {
    p: {
      textAlign: "center"
    }
  };

  
  return (
    <div>
      <UserDBGreeting UsersName={}/>
      <div className="divider"></div>
      <p style={styles.p}>
        Welcome to your personalized subscription tracker! Update or delete
        subscriptions as you please. Check your email for notifications when
        your plan pricing changes.
      </p>
      <Dashboard />
    </div>
  );
};

export default UserDashboard;
