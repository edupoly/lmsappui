import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Sidebar from '../adminsidebar/Adminsidebar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Userdashboard() {
    const state = useSelector((state) => state.auth);

    return (
        <div className="container-fluid">
            <h1 className="sidebar-heading">Admin Dashboard</h1>
            <hr />
            <div className="row">
                {/* Sidebar */}
                <Sidebar />

                {/* Main content */}
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default Userdashboard;
