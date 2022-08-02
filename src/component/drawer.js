import React from 'react'
import "./drawer.css"
import './draweraccordian.css'
import logo from '../images/logo.png';


const Drawer = (props) => {

  const { showhide, hideDrawer } = props;

  return (
    <>
      <div className={showhide === "" ? "drawer_body" : ""}>
        <div className="drawer" style={{ marginRight: `${showhide}` }}>
          <div className="col" style={{ overflowY: "scroll", overflowX: "hidden", height: "100vh", width: "100%", marginRight: "0" }}>

            <div className="row" style={{ justifyContent: "end" }}>
              <div
                className="hideDrawer"
                aria-label="hidedrawer"
                role='button'
                tabIndex={0}
                onKeyDown={hideDrawer}
                onClick={hideDrawer}>
                <i className="fa fa-times icon_open_icon" style={{ fontSize: "20px" }}></i>
              </div>
            </div>

            <div className="row">
              <div className="col social_links">
                <a href="twitter" >Facebook</a>
                <a href="behance" >Instagram</a>
                <a href="yiutube" >LinkedIn</a>
              </div>
            </div>

            <div className="row">
              <div className="drawer_company_logo">
                <img src={logo} alt="vervebot" height={100} width={100} />
              </div>
            </div>
            <div className="row">
              <div className="Accordian_main">
                <div className='AccordianTitle'><a href="/" alt="#">Home</a></div>
              </div>
              <div className="Accordian_main">
                <div className='AccordianTitle'><a href="/icms" alt="#">ICMS</a></div>
              </div>
              <div className="Accordian_main">
                <div className='AccordianTitle'><a href="/faq" alt="#">Faq</a></div>
              </div>
              <div className="Accordian_main">
                <div className='AccordianTitle'><a href="/contact" alt="#">Contact</a></div>
              </div>
              <div className="Accordian_main">
                <div className='AccordianTitle'><a href="/pricing" alt="#">Pricing</a></div>
              </div>
              <div className="Accordian_main">
                <div className='AccordianTitle'><a href="/contact" alt="#">Contact</a></div>
              </div>
              <div className="Accordian_main">
                <div className='AccordianTitle'><a href="/portfolio" alt="#">Portfolio</a></div>
              </div>
              <div className="Accordian_main">
                <div className='AccordianTitle'><a href="/about-us" alt="#">About Us</a></div>
              </div>






              <p className="company_discription">Get the Best Website Development & Mobile Application Development Services In New Jersey</p>
              <div className="company_details">
                <a className="company_phone" href="tel:+13478093270"><i className="fa fa-phone" style={{ fontSize: "24px" }}></i>&nbsp;<span className="icon_details" >+1 347-809-3270</span></a>
                <a className="company_mail" href="mailto:info@vervebot.io"><i className="fa fa-envelope" style={{ fontSize: "24px" }}></i>&nbsp;<span className="icon_details">info@vervebot.io</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Drawer