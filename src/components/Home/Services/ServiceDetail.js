import React from 'react'

function ServiceDetail({service}) {
    return (
        <div className="col-md-4 text-center">
           <img style={{height:'50px'}} src={service.image} alt="" srcset="" /> 
           <h5 className="mt-5 mb-3">{service.name}</h5>
           <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, cupiditate.</p>
        </div>
    )
}

export default ServiceDetail
