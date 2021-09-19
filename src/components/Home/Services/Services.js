import React from 'react'
import floride from '../../../images/flouride.png'
import cavity from '../../../images/cavity.png';
import tooh from '../../../images/tooth.png';
import ServiceDetail from './ServiceDetail';
function Services() {
    const serviceinfo =[
    {
        image:floride,
        name: 'Floride Treatment',

    },
    {
        image:cavity,
        name: 'Cavity Filling',

    },
    {
        image:tooh,
        name: 'Teeh Whiteening',

    },
      
        



    ]
    return (
        <section className = 'services-conatiner'>
           <div className="text-center">
           <h5 style={{color: '#1CC7C1'}} >Our Services</h5> 
           <h3>Services we provide</h3>
           </div>
         <div className="row justify-content-center ">
         <div className="w-75 row mt-5 pt-5">
         {
          serviceinfo.map(service =><ServiceDetail service={service} ></ServiceDetail> )
          } 
           </div> 
        </div>
        </section>
    )
}

export default Services
