import React from 'react'

import './header.css'
import whatsapp from '../assets/whatsapp.png'

function Header() {
  return (
    <div className='header-section'>
        <div className="logo">MKS <br />SOLUTIONS</div>
        <div className="left-top-section">
            <div>our services now available KERALA and BANGALORE</div>
            <div>contact 8129092016 <img src={whatsapp} alt="whatsapp" id='whatsapp' />  </div>
        </div>
      
    </div>
  )
}

export default Header
