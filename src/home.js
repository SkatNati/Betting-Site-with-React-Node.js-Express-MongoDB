import React from 'react'
import './home.css'
import Promotion from './HomeComponents/promotion'
import RecentlyPlayed from './HomeComponents/recentlyPlayed'
import Games from './HomeComponents/games'

function home() {
  return (
    <div className='home'>
      <Promotion />
      <RecentlyPlayed />
      <Games />
    </div>
  )
}

export default home
