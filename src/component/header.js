import React, { useState } from 'react'
import "./header.css"
import verbotlogo from "./logo.png"
import Drawer from './drawer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Helmet } from "react-helmet";



const Header = () => {



    const [showhide, showhideValue] = useState("-310px");

    const showDrawer = () => {
        showhideValue("")
    }

    const hideDrawer = () => {
        showhideValue("-310px")
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            </Helmet>
            <header style={{ backgroundColor: "#ffffff" }}>
                <div className="container container-large">
                    <div className='nav_bar'>
                        <a href='/'><img className="web-logo-main" src={verbotlogo} alt='web-logo' /></a>
                        <div className="list-items" ><a href="/">Home</a></div>
                        <div className="list-items" ><a href="/icms">ICMS</a></div>
                        <div className="list-items" ><a href="/faq">faq</a></div>
                        <div className="list-items" ><a href="/contact">Contact</a></div>
                        <div className="list-items" ><a href="/blog">Blog</a></div>
                        <div className="list-items" ><a href="/pricing">Pricing</a></div>
                        <div className="list-items" ><a href="/contact">Contact</a></div>
                        <div className="list-items" ><a href="/portfolio">Portfolio</a></div>
                        <div className="list-items" ><a href="/about-us">About Us</a></div>
                        <div className="icon_open"
                            role="button"
                            tabIndex={0}
                            onClick={showDrawer}
                            onKeyDown={showDrawer} >
                            {/* <FontAwesomeIcon className="icon_open_icon" style={{ fontSize: "20px" }} icon={faBars} /> */}
                            <i className="fa fa-bars icon_open_icon" style={{fontSize:"24px"}}></i>
                        </div>
                    </div>
                </div>
            </header>
            <Drawer showhide={showhide} hideDrawer={hideDrawer} />

        </>
    )
}

export default Header
