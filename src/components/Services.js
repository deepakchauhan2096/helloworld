import React from 'react'
import "./services.css"
import mobile from "../images/mobile.jpg";
import seo from "../images/seo.png";
import branding from "../images/branding.jpg";
import iot from "../images/iot.png";
import img3 from "../images/img3.jpg"
import img4 from "../images/img4.jpg"
import img5 from "../images/img5.jpg"






const Services = () => {

  const cardData = [{
    image: img5,
    caption: "Lorem ipsum dolor"
  },
  
  {
    image: img3,
    caption: "Lorem ipsum dolor"
  }
    ,
  {
    image: img4,
    caption: "Lorem ipsum dolor"
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
                  <a href="/all">All</a>
                  <a href="/travel">App</a>
                  <a href="/finance">Web</a>
                  <a href="/health">Software</a>
                  <a href="/sports">Iot</a>
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
                    <h4><b>Get your dream Mobile App Development built in not time.</b></h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className='section_two'>
                  {cardData.map((items) => (
                    <>
                      <div className='section_two_line_one'></div>
                      <div className="section_two_content">
                        <img src={items.image} alt="img" />
                        <div>
                          <span><button>Technology</button></span>
                          <b>{items.caption}</b>
                        </div>
                      </div>
                      <div className='section_two_line_two'></div>
                    </>

                  ))}
                </div>
              </div>

            </div>
          </div>


          <div className="col-lg-3">
            <div className="row">
              <div className="category_sidebar_container">
                <div className="cate_banner"><p>Category</p></div>
              </div>
            </div>

            <div className="row" style={{ paddingLeft: 0, paddingRight: 0, paddingBottom: 0 }}>
              <div className="category_sidebar">
                <div className="bussiness">
                  <img src={iot} alt='Bussiness' className="business-img" style={{ width: "100%", height: "100%", }} />
                  <button className=' p-2'>IOT</button>
                </div>
                <div className="bussiness">
                  <img src={seo} alt='Food and Health' className="business-img" style={{ width: "100%", height: "100%" }} />
                  <button className='p-2'>Digital Marketing</button>
                </div>
                <div className="bussiness text-center">
                  <img src={branding} style={{ width: "100%", height: "100%", }} alt='vedio' className="business-img" />

                  <button className='p-2'>Branding</button>

                </div>
              </div>
            </div>
          </div>
        </div >
      </div>
    </div>

  )
}

export default Services