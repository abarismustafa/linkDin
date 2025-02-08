
import React from 'react'
import { Link } from 'react-router-dom'

const Premium = () => {
    return (
        <>
            <div className='job-sec job-primium mt-3'>
                <h4 className="mb-3" style={{ color: '	#FFD700' }}>PREMIUM</h4>
                <h5 className="mb-3">Jobs where you’re more likely to hear back</h5>
                <p>Based on your chances of hearing back</p>
                <div className="job-card position-relative">
                    <div className="profile-pictures">
                        <img src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="Profile 1" />
                        <img src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="Profile 2" />
                        <img src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="Profile 3" />
                    </div>
                    <div className="text-content">
                        <h4>See the full list of jobs where you’d be a top applicant</h4>
                        <p><strong>VIKRAM</strong> and millions of other members use Premium</p>
                        <Link to="/premium" className="cta-button">Try Premium for ₹0</Link>
                        <p className="small-text">1-month free trial. We’ll send you a reminder 7 days before your trial ends.</p>
                    </div>
                </div>

                <div className="job-card position-relative">
                    <button className="btn-close" aria-label="Close" />
                    <div className="d-flex align-items-center">
                        <div className="company-logo">
                            <img src="https://www.abarissoftech.com/assets/img/logo-2.png" alt="Company Logo" />
                        </div>
                        <div>
                            <p className="job-title mb-0">Software Frontend Engineer</p>
                            <p className="job-location mb-0">ABC · Gurugram, Haryana, India (On-site)</p>
                            <p className="job-location mb-0">Gurugram, Haryana, India (On-site)</p>
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
                            <p className="job-title mb-0">Frontend Engineer</p>
                            <p className="job-location mb-0">ABC · Gurugram, Haryana, India (On-site)</p>
                            <p className="job-location mb-0">Gurugram, Haryana, India (On-site)</p>
                        </div>
                    </div>
                </div>
                <div className="text-align-center">
                    <button type='button' className='btn btn-primary'>Show All</button>
                </div>
            </div >
        </>
    )
}

export default Premium