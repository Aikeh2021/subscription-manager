import React from "react";
import Dashboard from "../../components/Dashboards/Dashboard";

const UserDashboard = () => {
  const styles = {
    h1: {
      textAlign: "center",
    },
    p: {
      textAlign: "center"
    }
  };
  return (
    <div>
      <h1 style={styles.h1}>Subscription Dashboard</h1>
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
