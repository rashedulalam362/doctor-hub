import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './InfoCard.css'
function InfoCard({info}) {
    return (
        <div className="col-md-4">
          <div className ={`d-flex justify-content-center  info_container info-${info.background}`} >
          <div>
            <FontAwesomeIcon className="icon" icon={info.Icon} ></FontAwesomeIcon>  
            </div>  
            <div>
            <h6>{info.title}</h6>  
            <small>{info.description}</small>
            </div>

          </div>
            
        </div>
    )
}

export default InfoCard
