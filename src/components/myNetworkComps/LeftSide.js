import React from 'react';
import { FaUserGroup } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { MdOutlineEventNote } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { MdEventNote } from "react-icons/md";

function LeftSide() {
    return (
        <>
            <div className="col-md-3">
                <div className="card">
                    <div className='left-my-network-heading'>
                        <h5>Manage My Network</h5>
                    </div>
                    <hr className='m-0' />
                    <div className='icon-text'>
                        <div className='icon-text-wrapper'>
                            <div>
                                <FaUserGroup /> <span>Connections</span>
                            </div>
                            <div>
                                <span>08</span>
                            </div>
                        </div>
                        <div className='icon-text-wrapper'>
                            <div>
                                <FaUser /> <span>Following</span>
                            </div>
                            <div>
                                <span>11</span>
                            </div>
                        </div>
                        <div className='icon-text-wrapper'>
                            <div>
                                <HiMiniUserGroup /> <span>Groups</span>
                            </div>
                            <div>
                                <span>16</span>
                            </div>
                        </div>
                        <div className='icon-text-wrapper'>
                            <div>
                                <MdOutlineEventNote /> <span>Events</span>
                            </div>
                            <div>
                                <span>12</span>
                            </div>
                        </div>
                        <div className='icon-text-wrapper'>
                            <div>
                                <FaRegBuilding /> <span>Pages</span>
                            </div>
                            <div>
                                <span>20</span>
                            </div>
                        </div>
                        <div className='icon-text-wrapper'>
                            <div>
                                <MdEventNote /> <span>Newsletter</span>
                            </div>
                            <div>
                                <span>10</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        </>
    )
}

export default LeftSide