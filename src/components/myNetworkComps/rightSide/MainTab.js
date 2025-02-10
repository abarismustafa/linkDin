import React from 'react'
import { useState } from 'react';
import GrowTab from './GrowTab';
import CatchupTab from './catchUpTab/CatchupTab';

function MainTab() {
    const [activeTab, setActiveTab] = useState("grow");

    const profiles = [
        {
            id: 1,
            name: "Tanya Gautam",
            description: "MARS Lab, IISc CSA",
            img: "https://via.placeholder.com/50",
        },
        {
            id: 2,
            name: "Achint Chaudhary",
            description: "AI/ML, Operations Research",
            img: "https://via.placeholder.com/50",
        },
    ];

    return (
        <>

            <div className="card">
                <div className="tab-header">
                    <button
                        className={activeTab === "grow" ? "active-tab-button" : "tab-button"}
                        onClick={() => setActiveTab("grow")}
                    >
                        Grow
                    </button>
                    <button
                        className={activeTab === "catch-up" ? "active-tab-button" : "tab-button"}
                        onClick={() => setActiveTab("catch-up")}
                    >
                        Catch up
                    </button>
                </div>
            </div>

            {activeTab === "grow" && (
                <>
                    <GrowTab />
                </>
            )
            }

            {
                activeTab === "catch-up" && (
                    <>
                        <CatchupTab />
                    </>
                )
            }


        </>
    )
}

export default MainTab