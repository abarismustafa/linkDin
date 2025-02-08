
import React from 'react'


const AllCollectionJob = ({ jobListings }) => {
    return (
        <>
            {jobListings.map((job) => (
                <div key={job.id} className="job-card position-relative">
                    <button className="btn-close" aria-label="Close"></button>
                    <div className="d-flex align-items-center">
                        <div className="company-logo">
                            <img src={job.companyLogo} alt="Company Logo" />
                        </div>
                        <div>
                            <p className="job-title mb-0">{job.jobTitle}</p>
                            <p className="job-location mb-0">
                                {job.companyName} · {job.location} ({job.jobType})
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default AllCollectionJob