import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './rightSide/RightSide';
import '././rightSide/RightSide.css';

function MyNetworks() {
    return (
        <>
            <div class="container py-4">
                <div class="row">
                    <LeftSide />
                    <RightSide />
                </div>
            </div>
        </>
    )
}

export default MyNetworks