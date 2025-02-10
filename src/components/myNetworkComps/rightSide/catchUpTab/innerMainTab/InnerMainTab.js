import React from 'react';
import { Tabs, Tab } from "react-bootstrap";
import AllTab from './AllTab';
import JobChangesTab from './JobChangesTab';
import BirthdaysTab from './BirthdaysTab';
import WorkAnniversaryTab from './WorkAnniversaryTab';
import EducationTab from './EducationTab';

function InnerMainTab() {
    return (
        <>
            {/* <div className="tab-content"> */}
            <div className='p-1'>
                <Tabs
                    id="controlled-tab-example"
                    defaultActiveKey="All"
                    className="mb-3 dzm-tabs"
                >
                    <Tab eventKey="All" title="All">
                        <AllTab />
                    </Tab>
                    <Tab eventKey="Job Changes" title="Job Changes">
                        <JobChangesTab />
                    </Tab>
                    <Tab eventKey="Birthdays" title="Birthdays">
                        <BirthdaysTab />
                    </Tab>
                    <Tab eventKey="Work Anniversaries" title="Work Anniversaries">
                        <WorkAnniversaryTab />
                    </Tab>
                    <Tab eventKey="Education" title="Education">
                        <EducationTab />
                    </Tab>
                </Tabs>
            </div>
            {/* </div> */}
        </>
    )
}

export default InnerMainTab