
import React from 'react'
import '../job/job.css'
import Jobleft from './jobleft/Jobleft'
import JobRight from './jobRight/JobRight'
const Job = () => {
    return (
        <>
            <div className="container my-4">
                <div className="row">
                    {/* Sidebar */}
                    <Jobleft />
                    <JobRight />

                    {/* Main Content */}

                </div>
            </div>

        </>
    )
}

export default Job