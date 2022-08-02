import React, { useState } from 'react'
import './draweraccordian.css'

const DrawerAccordian = (props) => {

    const {title, urlData} = props

    const [accordian, accordianSet] = useState('')
    

    return (
        <div>
            <div className="Accordian_main">
                    <div className='AccordianTitle'>{title}</div> 
                    <div className='AccordianDown'
                            aria-label="toggle" 
                            role='button'
                            tabIndex={0} 
                            onKeyDown={() => accordianSet(s => !s)} 
                            onClick={() => accordianSet(s => !s)} ></div>
                     </div>
            {accordian ?  <div className='AccordianList'>
                  {urlData.map((data) =>(<a href={data.url} >{data.urlName}</a>))}
            </div> : null}
        </div>
    )
}

export default DrawerAccordian