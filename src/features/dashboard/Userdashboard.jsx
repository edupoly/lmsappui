import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Userdashboard() {
    const state = useSelector((state) => state.auth);
    return (
        <div>
            <header className="dashboard-header">
                <h1>User Dashboard</h1>
                {/* <div>
                    <Link to='./signup' className="dashboard-link">Add Admin</Link>
                </div> */}
            </header>
        </div>
    )
}

export default Userdashboard;
