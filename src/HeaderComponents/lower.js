import React from 'react'
import { Link } from 'react-router-dom'; // Import Link
import './lower.css'
import Logo from '../Assets/images/logo3.png'

function lower() {
  return (
    <div className='lower'>
      <div className='lower-logo'>
        <Link to="/" className="logo-link">
          <img className='logo' src={Logo} alt='' />
        </Link>
      </div>
      <div className='lower-menu'>

      </div>
    </div>
  )
}

export default lower
