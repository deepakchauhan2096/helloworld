import React from 'react';
import 'Banner.css';

const Banner = () => {

    return (

        <div className="container-fluid Main-container">
            <div className="container">
                <div className="bg-container">
                    <div className="row">
                        <div className="content-container">
                            <div className="col-md-6">
                                <span className="calender">
                                    Get the Best Website Development and Mobile Application Development Services In New Jersey
                                </span>
                                <h3 className='main_heading'>We Have The Solutions To Grow Your Business</h3>
                                <button className="arrow-button">Learn more<span className="arrow"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Banner