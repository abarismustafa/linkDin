
import React from 'react'

const RecentJob = () => {
    return (
        <>

            <div className='job-sec mt-3'>
                <h5 className="mb-3">Recent job searches</h5>
                <div className="job-card position-relative">
                    <div className="d-flex align-items-center">
                        <div>
                            <p className="job-title mb-0">web designer. <span style={{ color: 'darkgreen' }}>1 New</span></p>
                            <p className="job-location mb-0">Alert On · Chatra district, India</p>
                        </div>
                    </div>
                </div>
                <div className="job-card position-relative">
                    <div className="d-flex align-items-center">
                        <div>
                            <p className="job-title mb-0">frontend developer. <span style={{ color: 'darkgreen' }}>80 New</span></p>
                            <p className="job-location mb-0">Alert On · Gurgaon, Haryana, India</p>
                        </div>
                    </div>
                </div>
                <div className="job-card position-relative">
                    <div className="d-flex align-items-center">
                        <div>
                            <p className="job-title mb-0">frontend developer. <span style={{ color: 'darkgreen' }}>101 New</span></p>
                            <p className="job-location mb-0">Bengaluru, Karnataka, India</p>
                        </div>
                    </div>
                </div>
                <div className="job-card position-relative">
                    <div className="d-flex align-items-center">
                        <div>
                            <p className="job-title mb-0">Full Stack developer. <span style={{ color: 'darkgreen' }}>5 New</span></p>
                            <p className="job-location mb-0">Bengaluru, Karnataka, India</p>
                        </div>
                    </div>
                </div>
                <div className="job-card position-relative">
                    <div className="d-flex align-items-center">
                        <div>
                            <p className="job-title mb-0">web designer. <span style={{ color: 'darkgreen' }}>1 New</span></p>
                            <p className="job-location mb-0">Alert On · Chatra district, India</p>
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

export default RecentJob