import React from 'react'
import BusinessInfo from '../BusinessInfo/BusinessInfo'
import MainHeader from '../MainHeader/MainHeader'
import Navbar from '../Navbar/Navbar'
import './Header.css'
function Header() {
    return (
        <div className="header_container">
           <Navbar/> 
           <MainHeader/>
           <BusinessInfo/>
        </div>
    )
}

export default Header
