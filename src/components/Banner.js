import React from 'react';
import "./banner.css";

const Banner = (props) => {


    const { mainheading} = props;

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
                                <h3 className='main_heading'>{mainheading}</h3>
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