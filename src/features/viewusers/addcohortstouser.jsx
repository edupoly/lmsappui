import React, { useState } from 'react';
import { useGetuseronsearchApiQuery } from '../../services/getuseronsearch.service';
import { Link, Outlet } from 'react-router-dom';
import Cohortstouser from '../viewusers/cohortstouser';

function Addcohortstouser() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);
    const { data: users, isLoading } = useGetuseronsearchApiQuery(searchTerm, {
        skip: !searchTerm // Skip fetching if searchTerm is empty
    });
    
    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value === '') {
            setSelectedUser(null);
        }
    };

    const handleAddCohorts = (user) => {
        setSelectedUser(user);
    };

    return (
        <div className="container">
            <Link to=".." className="btn btn-outline-primary d-inline-flex align-items-center mb-4">
                <i className="bi bi-arrow-left me-2"></i> Back
            </Link>
            <h1 className="mb-4">Search and Add Cohorts to Users</h1>
            <input 
                type="text" 
                placeholder="Search users by name, email, or contact..." 
                value={searchTerm}
                onChange={handleInputChange}
                className="form-control mb-3 shadow-sm"
                style={{ borderRadius: '20px', padding: '10px 20px' }}
            />
            {isLoading && <p>Loading...</p>}
            {users && users.length > 0 ? (
                <ul className="list-group">
                    {users.map(user => (
                        <li 
                            key={user._id} 
                            className="list-group-item d-flex justify-content-between align-items-center mb-2 shadow-sm" 
                            style={{ borderRadius: '15px', padding: '15px' }}
                        >
                            <div>
                                <h5 className="mb-1 text-primary">{user.username}</h5>
                                <p className="mb-0 text-muted">
                                    <i className="bi bi-envelope me-1"></i>{user.email}<br />
                                    <i className="bi bi-telephone me-1"></i>{user.contact}
                                </p>
                            </div>
                            <button 
                                className="btn btn-outline-success"
                                onClick={() => handleAddCohorts(user)}
                                style={{ borderRadius: '20px' }}
                            >
                                <i className="bi bi-plus-circle me-2"></i> Add Cohorts
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                !isLoading && searchTerm !== '' && <p>No users found</p>
            )}

            {selectedUser && (
                <Cohortstouser user={selectedUser} />
            )}
            
            <Outlet />
        </div>
    );
}

export default Addcohortstouser;
