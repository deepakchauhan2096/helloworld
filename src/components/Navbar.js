import React, { useState } from 'react'
import "./navbar.css"
import Drawer from './Drawer'
import logo from '../images/logo.png'



const Navbar = () => {



    const [showhide, showhideValue] = useState("-310px");

    const showDrawer = () => {
        showhideValue("")
    }

    const hideDrawer = () => {
        showhideValue("-310px")
    }

    return (
        <>
            <header style={{ backgroundColor: "#ffffff" }}>
                <div className="container container-large">
                    <div className='nav_bar'>
                        <a href='/'><img className="web-logo-main" src={logo} alt='web-logo' /></a>
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
                            <i className="fa fa-bars icon_open_icon" style={{fontSize:"24px"}}></i>
                        </div>
                    </div>
                </div>
            </header>
            <Drawer showhide={showhide} hideDrawer={hideDrawer} />

        </>
    )
}

export default Navbar
