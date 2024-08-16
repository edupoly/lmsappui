import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css'; // Import the separate CSS file

function Sidebar() {
    return (
        <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
            <div className="position-sticky">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link to="./signup" className="nav-link">
                            Add Admin
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="./createcohort" className="nav-link">
                            Create Cohort
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="./viewallcohorts" className="nav-link">
                            View All Cohorts
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="./viewusers" className="nav-link">
                            View users
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Sidebar;
