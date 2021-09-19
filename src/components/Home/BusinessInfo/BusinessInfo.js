import React from 'react'
import InfoCard from '../InfoCard/InfoCard';
import { faClock,faMapMarker,faPhone } from '@fortawesome/free-solid-svg-icons'
import './BusinessInfo'
function BusinessInfo() {
const dataInfos=[
  {
    title:'Opening Hours',
    description:'We are open at 7days',
    Icon:faClock,
    background:'primary',
   },
   {
    title:'Opening Hours',
    description:'Broklyan new york 10003,USA',
    Icon:faMapMarker,
    background:'dark',
   },

   {
    title:'Call us now',
    description:'We are open at 5days',
    Icon:faPhone,
    background:'primary',
   },





];
    return (
        <section className="row justify-content-center ">
         <div className="w-75 row">
         {
           dataInfos.map (info =><InfoCard info={info}></InfoCard>)   
          } 
           </div> 
        </section>
    )
}

export default BusinessInfo
