import React from 'react'
import './footer.css'
import Logo from './Assets/images/logo4.png'

function footer() {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img className='logo-footer' src={Logo} alt='' />
      </div>
    </div>
  )
}

export default footer
