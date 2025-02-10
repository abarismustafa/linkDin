
import React, { useState } from 'react'
import AllCollectionJob from './allCollectionJob/AllCollectionJob';
import JobMore from './jobMore/JobMore';
const jobListings = [
    {
        id: 1,
        companyLogo: "https://www.abarissoftech.com/assets/img/logo-2.png",
        jobTitle: "IT",
        companyName: "ABC",
        location: "Gurugram, Haryana, India",
        jobType: "On-site"
    },
    {
        id: 2,
        companyLogo: "https://www.abarissoftech.com/assets/img/logo-2.png",
        jobTitle: "React JS Developer",
        companyName: "XYZ Tech",
        location: "Bangalore, Karnataka, India",
        jobType: "Hybrid"
    },
    {
        id: 3,
        companyLogo: "https://www.abarissoftech.com/assets/img/logo-2.png",
        jobTitle: "Full Stack Developer",
        companyName: "DEF Solutions",
        location: "Pune, Maharashtra, India",
        jobType: "Remote"
    }
];
const JobCollection = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { label: "Easy Apply", component: <AllCollectionJob jobListings={jobListings} /> },
        { label: "Remote", component: <AllCollectionJob jobListings={jobListings} /> },
        { label: "IT", component: <AllCollectionJob jobListings={jobListings} /> },
        { label: "More", component: <JobMore /> },
    ];
    return (
        <>
            <div className='job-sec mt-3'>
                <h5 className="mb-3">Explore with job collections</h5>

                <div className="tabs-header">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            className={`tab-button-tab ${activeTab === index ? "active" : ""}`}
                            onClick={() => setActiveTab(index)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="tab-content">{tabs[activeTab].component}</div>

                <div className="text-align-center mt-3">
                    <button type='button' className='btn btn-primary'>Show All</button>
                </div>
            </div>
        </>
    )
}

export default JobCollection