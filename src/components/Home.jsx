import React from 'react'
import videobg from '../assets/home.mp4'

const Home = () => {
  return (
    <div className='home'>
        <video src={videobg} autoPlay loop muted/>
      <div className='content-buy'>
          <h1>We buy houses as-is, in middle Tennessee</h1>
      </div>
    </div>
  )
}

export default Home