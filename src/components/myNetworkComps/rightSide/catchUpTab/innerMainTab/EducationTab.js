import React from 'react'

function EducationTab() {
    return (
        <>
            <div className='innerTab-wrapper'>
                <div className='roundImg-sec'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYThRPnGjAvcFS19x-5vXINgIe3g2aP4Cp5A&s' alt='prof-img' />
                </div>
                <div className='content-sec'>
                    <h6>Sagar Kumar Singh</h6>
                    <p className='mb-0'>Congratulate Sagar Kumar Singh Completing Batechlor of Technology </p>
                    <button className='btn btn-primary'>Congrats On Completing...</button>
                </div>
            </div>
            <hr />
            <div className='innerTab-wrapper'>
                <div className='roundImg-sec'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ3Beo9RY-zWlwc2vyi0BvWL3qA6gREZuEJA&s' alt='prof-img' />
                </div>
                <div className='content-sec'>
                    <h6>Anshika Randhawa</h6>
                    <p className='mb-0'>Congratulate Anshika Randhawa Completing Batechlor of Science </p>
                    <button className='btn btn-primary'>Congrats On Completing...</button>
                </div>
            </div>
            <hr />

        </>
    )
}

export default EducationTab