import React, { useState, useEffect } from 'react';
import { useGetcohortsApiQuery } from '../../services/getcohorts.service';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Viewallcohorts.css'; // Import the CSS file

function Viewallcohorts() {
    const { data, isLoading, refetch } = useGetcohortsApiQuery();
    const [searchTerms, setSearchTerms] = useState([]); // Stores multiple search terms
    const [sort, setSort] = useState('latest'); // Options: 'latest', 'oldest'
    const location = useLocation();

    useEffect(() => {
        refetch(); // Trigger re-fetch of data when the component mounts or route changes
    }, [location, refetch]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (!data) {
        return <p>Error loading cohorts.</p>;
    }

    console.log("Cohorts Data:", data);

    const handleSearchChange = (event) => {
        const terms = event.target.value.split(',').map(term => term.trim());
        console.log("Search Terms:", terms);
        setSearchTerms(terms);
    };

    const handleSortChange = (event) => {
        setSort(event.target.value);
    };

    // Ensure data is defined and is an array
    const cohorts = Array.isArray(data) ? data : [];

    // Filter cohorts based on search terms
    const filteredCohorts = cohorts.length ? cohorts.filter(cohort => {
        const matchesSearchTerms = searchTerms.every(term =>
            cohort.cohortid.toLowerCase().includes(term.toLowerCase()) ||
            cohort.cohorttags.some(tag => tag.toLowerCase().includes(term.toLowerCase()))
        );
        console.log("Cohort:", cohort, "Matches:", matchesSearchTerms);
        return matchesSearchTerms;
    }) : [];

    console.log("Filtered Cohorts:", filteredCohorts);

    // Sort the filtered cohorts
    const sortedCohorts = [...filteredCohorts].sort((a, b) => {
        const dateA = new Date(a.cohortdate);
        const dateB = new Date(b.cohortdate);
        console.log("Date A:", dateA, "Date B:", dateB);
        return sort === 'latest' ? dateB - dateA : dateA - dateB;
    });

    return (
        <div className="container mt-5">
            <Link to=".." className="btn btn-outline-primary d-inline-flex align-items-center mb-4">
                <i className="bi bi-arrow-left me-2"></i> Back
            </Link>
            <div className="row">
                <div className="col-md-12 mb-4">
                    <div className="d-flex mb-3">
                        <input
                            type="text"
                            className="form-control me-2"
                            style={{ width: '75%' }}
                            placeholder="Search by Cohort ID or Tags (comma-separated)"
                            onChange={handleSearchChange}
                        />
                        <select
                            className="form-select"
                            style={{ width: '25%' }}
                            value={sort}
                            onChange={handleSortChange}
                        >
                            <option value="latest">Sort by Latest</option>
                            <option value="oldest">Sort by Oldest</option>
                        </select>
                    </div>
                </div>

                {sortedCohorts.length > 0 ? (
                    sortedCohorts.map(cohort => (
                        <div key={cohort._id} className="col-md-4 mb-4">
                            <div className="card shadow-sm h-100">
                                <img
                                    src={cohort.cohortpic}
                                    className="card-img-top"
                                    alt={cohort.cohortname}
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{cohort.cohortname}</h5>
                                    <div className="cohort-details d-flex justify-content-between">
                                        <p className="card-text">Cohort ID: <strong>{cohort.cohortid}</strong></p>
                                        <p className="card-text">Date: <strong>{new Date(cohort.cohortdate).toLocaleDateString()}</strong></p>
                                    </div>
                                    <p className="card-text">No. of Students Enrolled: <strong>{cohort.studentCount || 0}</strong></p>
                                    <div className="mt-auto">
                                        <Link to={`../${cohort.cohortid}/addusers`} className="btn btn-primary mb-3">
                                            Add Users
                                        </Link>
                                        <div className="card-tags">
                                            {cohort.cohorttags.map((tag, index) => (
                                                <span key={index} className="badge bg-secondary me-1 mb-1">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No cohorts found.</p>
                )}
            </div>
        </div>
    );
}

export default Viewallcohorts;
