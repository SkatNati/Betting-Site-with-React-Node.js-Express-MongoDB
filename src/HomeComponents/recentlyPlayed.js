import React from 'react'
import './recentlyPlayed.css'
import Img1 from '../Assets/images/img1.png'

function recentlyPlayed() {
  return (
    <div className='recentlyPlayed'>
      <h2 className='recentlyPlayed-title'>Recently Played</h2>
      <div className='recently-container'>
        <div className='recently-content'>
          <img className='recently-img' src={Img1} alt='Game' />
          <button className='recently-content-btn'>JetX</button>
        </div>
        <div className='recently-content'>
          {/* <img className='games-img' src={Img1} alt='Game' /> */}
        </div>
        <div className='recently-content'>
          {/* <img className='games-img' src={Img1} alt='Game' /> */}
        </div>
        <div className='recently-content'>
          {/* <img className='games-img' src={Img1} alt='Game' /> */}
        </div>
        <div className='recently-content'>
          {/* <img className='games-img' src={Img1} alt='Game' /> */}
        </div>
      </div>
    </div>
  )
}

export default recentlyPlayed
