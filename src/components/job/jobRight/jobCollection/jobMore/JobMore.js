
import React from 'react'
import { FaGlobe } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { MdLocalPharmacy } from "react-icons/md";
import { SiAffinitydesigner } from "react-icons/si";
import { RiGovernmentFill } from "react-icons/ri";
import { MdOutlineDepartureBoard } from "react-icons/md";
import { GiManualJuicer } from "react-icons/gi";
import { FaBiohazard } from "react-icons/fa";


const JobMore = () => {
    return (
        <>
            <div className='row'>
                <div className='col-lg-4'>
                    <div className="job-card job-card-more">
                        <div className='iconset'>
                            <FaGlobe />
                        </div>
                        <div>
                            <h3>Sustainability</h3>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className="job-card job-card-more">
                        <div className='iconset'>
                            <CgProfile />
                        </div>
                        <div>
                            <h3>HR</h3>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className="job-card job-card-more">
                        <div className='iconset'>
                            <SiHomeassistantcommunitystore />
                        </div>
                        <div>
                            <h3>Hybrid</h3>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className="job-card job-card-more">
                        <div className='iconset'>
                            <MdLocalPharmacy />
                        </div>
                        <div>
                            <h3>Pharma</h3>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className="job-card job-card-more">
                        <div className='iconset'>
                            <SiAffinitydesigner />
                        </div>
                        <div>
                            <h3>Finance</h3>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className="job-card job-card-more">
                        <div className='iconset'>
                            <RiGovernmentFill />
                        </div>
                        <div>
                            <h3>Government</h3>
                        </div>
                    </div>
                </div>

                <div className='col-lg-4'>
                    <div className="job-card job-card-more">
                        <div className='iconset'>
                            <MdOutlineDepartureBoard />
                        </div>
                        <div>
                            <h3>Part-time</h3>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className="job-card job-card-more">
                        <div className='iconset'>
                            <GiManualJuicer />
                        </div>
                        <div>
                            <h3>Manufacturing</h3>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className="job-card job-card-more">
                        <div className='iconset'>
                            <FaBiohazard />
                        </div>
                        <div>
                            <h3>Biotech</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default JobMore