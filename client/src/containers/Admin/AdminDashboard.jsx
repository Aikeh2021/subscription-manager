import React from 'react';
import AdminDB from '../../components/Dashboards/AdminDB';

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
            <AdminDB />
        </div>
    );
};

export default AdminDashboard;