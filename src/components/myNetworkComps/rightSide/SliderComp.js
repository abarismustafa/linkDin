import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";

function SliderComp() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <>
            <div className="tab-content">
                <div className='p-1'>
                    <h6>Stay in touch through daily games</h6>
                    <Slider {...settings}>
                        <div>
                            <div className='slider-box-wrapper'>
                                <Link to="#">
                                    <div className='slider-content-box'>
                                        <img className='slider-image' src='https://media.licdn.com/media/AAYABATzAAwAAQAAAAAAAMf6E0TuucIkSYGFrDoCICokGw.png' />
                                        <div className='pt-2 pb-2'>
                                            <b>PinPoint <span style={{ color: 'gray' }}>#274</span></b>
                                            <p style={{ margin: '0', fontSize: '14px', color: 'gray' }}>Friday, Jan 30</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='btn btn-primary'>Solve</button>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div>
                            <div className='slider-box-wrapper'>
                                <Link to="#">
                                    <div className='slider-content-box'>
                                        <img className='slider-image' src='https://media.licdn.com/media/AAYABATzAAwAAQAAAAAAAInyIpJv34kES7qzS0STkOyrgw.png' />
                                        <div className='pt-2 pb-2'>
                                            <b>Queens <span style={{ color: 'gray' }}>#274</span></b>
                                            <p style={{ margin: '0', fontSize: '14px', color: 'gray' }}>Saturday, Dec 30</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='btn btn-primary'>Solve</button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <div className='slider-box-wrapper'>
                                <Link to="#">
                                    <div className='slider-content-box'>
                                        <img className='slider-image' src='https://media.licdn.com/media/AAYABATzAAwAAQAAAAAAAJi2zwcVtpjBQuipfPPLfXEkiQ.png' />
                                        <div className='pt-2 pb-2'>
                                            <b>CrossClimb <span style={{ color: 'gray' }}>#274</span></b>
                                            <p style={{ margin: '0', fontSize: '14px', color: 'gray' }}>Monday, Feb 30</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='btn btn-primary'>Solve</button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <div className='slider-box-wrapper'>
                                <Link to="#">
                                    <div className='slider-content-box'>
                                        <img className='slider-image' src='https://media.licdn.com/media/AAYABATzAAwAAQAAAAAAAInyIpJv34kES7qzS0STkOyrgw.png' />
                                        <div className='pt-2 pb-2'>
                                            <b>Tango <span style={{ color: 'gray' }}>#274</span></b>
                                            <p style={{ margin: '0', fontSize: '14px', color: 'gray' }}>Friday, Jan 30</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='btn btn-primary'>Solve</button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <div className='slider-box-wrapper'>
                                <Link to="#">
                                    <div className='slider-content-box'>
                                        <img className='slider-image' src='https://media.licdn.com/media/AAYABATzAAwAAQAAAAAAAMf6E0TuucIkSYGFrDoCICokGw.png' />
                                        <div className='pt-2 pb-2'>
                                            <b>PinPoint <span style={{ color: 'gray' }}>#274</span></b>
                                            <p style={{ margin: '0', fontSize: '14px', color: 'gray' }}>Wed, Jan 30</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='btn btn-primary'>Solve</button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <div className='slider-box-wrapper'>
                                <Link to="#">
                                    <div className='slider-content-box'>
                                        <img className='slider-image' src='https://media.licdn.com/media/AAYABATzAAwAAQAAAAAAAGVaGbRJrmxWT-aZpUWJq_yroQ.png' />
                                        <div className='pt-2 pb-2'>
                                            <b>CrossClimb <span style={{ color: 'gray' }}>#274</span></b>
                                            <p style={{ margin: '0', fontSize: '14px', color: 'gray' }}>Sun, Jan 30</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='btn btn-primary'>Solve</button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>

        </>
    )
}

export default SliderComp