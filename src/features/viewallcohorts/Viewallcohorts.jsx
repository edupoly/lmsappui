import React, { useState } from 'react';
import { useGetcohortsApiQuery } from '../../services/getcohorts.service';
import './Viewallcohorts.css'; // Import the CSS file

function Viewallcohorts() {
    const { data, isLoading } = useGetcohortsApiQuery();
    const [searchTerms, setSearchTerms] = useState([]); // Stores multiple search terms
    const [sort, setSort] = useState('latest'); // Options: 'latest', 'oldest'

    if (isLoading) {
        return <p>Loading...</p>;
    }

    const handleSearchChange = (event) => {
        // Split input by commas and trim whitespace
        const terms = event.target.value.split(',').map(term => term.trim());
        setSearchTerms(terms);
    };

    const handleSortChange = (event) => {
        setSort(event.target.value);
    };

    // Filter cohorts based on search terms
    const filteredCohorts = data.filter(cohort => {
        // Check if every search term is included in the cohort's tags
        return searchTerms.every(term =>
            cohort.cohortid.toLowerCase().includes(term.toLowerCase()) ||
            cohort.cohorttags.some(tag => tag.toLowerCase().includes(term.toLowerCase()))
        );
    });

    // Sort the filtered cohorts
    const sortedCohorts = [...filteredCohorts].sort((a, b) => {
        const dateA = new Date(a.cohortdate);
        const dateB = new Date(b.cohortdate);
        return sort === 'latest' ? dateB - dateA : dateA - dateB;
    });

    return (
        <div className="container mt-5">
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
                            <div className="card shadow-sm">
                                <img
                                    src={cohort.cohortpic}
                                    className="card-img-top"
                                    alt={cohort.cohortname}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{cohort.cohortname}</h5>
                                    <p className="card-text">Cohort ID: {cohort.cohortid}</p>
                                    <p className="card-text">No. of Students Enrolled: 0</p>
                                    <p className="card-text">Date: {new Date(cohort.cohortdate).toLocaleDateString()}</p>
                                    <div className="card-tags">
                                        {cohort.cohorttags.map((tag, index) => (
                                            <span key={index} className="card-tag">
                                                #{tag}
                                            </span>
                                        ))}
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
