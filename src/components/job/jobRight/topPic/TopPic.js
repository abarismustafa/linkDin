
import React from 'react'

const TopPic = () => {
    return (
        <>

            <div className='job-sec'>
                <h5 className="mb-3">Top job picks for you</h5>
                <p>Based on your profile, preferences, and activity like applies, searches, and saves</p>

                <div className="job-card position-relative">
                    <button className="btn-close" aria-label="Close" />
                    <div className="d-flex align-items-center">
                        <div className="company-logo">
                            <img src="https://www.abarissoftech.com/assets/img/logo-2.png" alt="Company Logo" />
                        </div>
                        <div>
                            <p className="job-title mb-0">Frontend Developers (ReactJS)</p>
                            <p className="job-location mb-0">Clover Infotech - Gurugram, Haryana, India (On-site)</p>
                        </div>
                    </div>
                </div>

                <div className="job-card position-relative">
                    <button className="btn-close" aria-label="Close" />
                    <div className="d-flex align-items-center">
                        <div className="company-logo">
                            <img src="https://www.abarissoftech.com/assets/img/logo-2.png" alt="Company Logo" />
                        </div>
                        <div>
                            <p className="job-title mb-0">Front End Developer</p>
                            <p className="job-location mb-0">Ericsson - Noida, Uttar Pradesh, India</p>
                            <p className="text-muted small">8 school alumni work here</p>
                        </div>
                    </div>
                </div>

                <div className="job-card position-relative">
                    <button className="btn-close" aria-label="Close" />
                    <div className="d-flex align-items-center">
                        <div className="company-logo">
                            <img src="https://www.abarissoftech.com/assets/img/logo-2.png" alt="Company Logo" />
                        </div>
                        <div>
                            <p className="job-title mb-0">Frontend (React) Developer For Appvector.io - Remote</p>
                            <p className="job-location mb-0">Next Labs - India (Remote)</p>
                        </div>
                    </div>
                </div>
                <div className="text-align-center">
                    <button type='button' className='btn btn-primary'>Show All</button>
                </div>
            </div>

        </>
    )
}

export default TopPic