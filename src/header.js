import React from 'react'
import './header.css'
import Upper from './HeaderComponents/upper'
import Lower from './HeaderComponents/lower'

function header() {
  return (
    <div className='header'>
      <Upper />
      <Lower />
    </div>
  )
}

export default header
