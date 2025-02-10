
import React from 'react'
import TopPic from './topPic/TopPic'
import RecentJob from './recentJob/RecentJob'
import ExploreCompanies from './exploreCompanies/ExploreCompanies'
import FrontendCom from './frontendCom/FrontendCom'
import Premium from './premium/Premium'
import JobCollection from './jobCollection/JobCollection'

const JobRight = () => {
    return (
        <>
            <div className="col-md-9">
                <TopPic />
                <RecentJob />
                <ExploreCompanies />
                <FrontendCom />
                <Premium />
                <JobCollection />
            </div>

        </>

    )
}

export default JobRight