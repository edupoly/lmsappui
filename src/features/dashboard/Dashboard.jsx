import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
// import './Dashboard.css';
 // Import the CSS file for styling
import Admindashboard from './Admindashboard';
import Userdashboard from './Userdashboard';

function Dashboard() {
    const state = useSelector((state) => state.login);

    return (
        <div className="dashboard-container">
            {state.role === "admin" ? <Admindashboard /> : <Userdashboard />}
            <Outlet />
        </div>
    );
}

export default Dashboard;
