import React from 'react';
import Dashboard from '../../components/Dashboards/Dashboard';

const AdminDashboard = () => {
    const styles = {
        h1: {
            textAlign: "center"
        }
    }
    return (
        <div>
            <h1 style={styles.h1}>Admin Subscription Dashboard</h1>
            <br />
            <Dashboard />
        </div>
    );
};

export default AdminDashboard;