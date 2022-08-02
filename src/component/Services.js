import React from 'react'
import "./services.css"
import mobile from "../images/mobile.jpg";
import cms from "../images/cms.png";
import img5 from "../images/img5.jpg"
import Category from './Category';






const Services = (props) => {

  const { serviceHeading } = props;

  const data = [

    {
      buttonName: "ICMS",
      image: img5,
      caption: "ML Powered Invoice Management System"
    },
  
    {
      buttonName: "Company Tools",
      image: cms,
      caption: "CRM/CMS/POS to take your bussiness on Next level"
    }
    ,
    {
      buttonName: "Web",
      image: img5,
      caption: "Websites and E-Commerce platform to Scale your business"
    }
  
  ]

  return (
    <div className='bg_trending_news'>
      <div className="container">
        <div className="row mb-5 padding_top_bottom">
          <div className='col-lg-9'>
            <div className="row">
              <div className="trendingMenu">
                <div className="heading">Services</div>
                <div className='filterlist'>
                  <a href="all">All</a>
                  <a href="travel">App</a>
                  <a href="finance">Web</a>
                  <a href="health">Software</a>
                  <a href="sports">Iot</a>
                </div>
                <div className="line"></div>
              </div>
            </div>


            <div className="row"> 
              <div className="col-lg-6">
                <div className="section_one">
                  <img src={mobile} alt='scale-img' className='image' />
                  <div >
                    <button>App Development</button>
                    <h4><b>{serviceHeading}</b></h4>
                  </div>
                </div>
              </div>

  

              <div className="col-lg-6">
                <div className='section_two'>
                  {data.map((items) => (
                    <>
                      <div className='section_two_line_one'></div>
                      <div className="section_two_content pl-2">
                        <img src={items.image} alt="img" />
                        <div>

                          <span><button className='p-2' style={{ width: '120px' }}>{items.buttonName}</button> &nbsp;

                          </span>
                          <b className='pt-3'>{items.caption}</b>
                        </div>
                      </div>
                      <div className='section_two_line_two'></div>
                    </>

                     ))}
                </div>
              </div>
            </div>
          </div>

          {/* ........................................category sidebar ............................*/}
          <div className="col-lg-3">
            <Category />
          </div>
        </div >
      </div>
    </div>

  )
}

export default Services