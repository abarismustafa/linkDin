import React from 'react'
import SliderComp from '../../SliderComp'

function AllTab() {
    return (
        <>
            <div className='innerTab-wrapper'>
                <div className='roundImg-sec'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv6a2Z3qxu-oOT6uHtmmfbVQMEkA79IhxadA&s' alt='prof-img' />
                </div>
                <div className='content-sec'>
                    <h6>Harsha Vardhan Reddy Katari</h6>
                    <p className='mb-0'>Congratulate Harsha Vardhan Reddy Katari On Completing School At Delhi Public School,Ranchi</p>
                    <button className='btn btn-primary'>Congrats On Finishing Up At...</button>
                </div>
            </div>
            <hr />
            <div className='innerTab-wrapper'>
                <div className='roundImg-sec'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_xO4UktfIe6YAE0bSQ1nbm8VJwY7gh5_NjA&s' alt='prof-img' />
                </div>
                <div className='content-sec'>
                    <h6>Ashraf Faheem Khan</h6>
                    <p className='mb-0'>Congratulate Ashraf Faheem Khan Started a New Position As Frontend Developer</p>
                    <button className='btn btn-primary'>Congrats On Starting New Role...</button>
                </div>
            </div>
            <hr />
            <div className='innerTab-wrapper'>
                <div className='roundImg-sec'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp3oYa9BljpcyhfIwVizBrEuo4HjsWq1mNzw&s' alt='prof-img' />
                </div>
                <div className='content-sec'>
                    <h6>Mohammad Fahad Haider</h6>
                    <p className='mb-0'>Congratulate Mohammad Fahad Haider Started a New Position As Backend Developer</p>
                    <button className='btn btn-primary'>Congrats On Starting New Role...</button>
                </div>
            </div>
            <hr />


            <SliderComp />

        </>
    )
}

export default AllTab