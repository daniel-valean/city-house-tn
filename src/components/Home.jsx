import React from 'react'
import videobg from '../assets/home.mp4'

const Home = () => {
  return (
    <div name='Home' className='w-full h-screen z-50' >
        <video src={videobg} autoPlay loop muted id='video'/>
        {/* container */}
        <div className='max-w-[1000px] px-8 flex flex-col justify-center h-full' id='writing'>
            <h1 className='text-4xl sm:text-7xl text-white font-thin'>
              We Buy Houses</h1>
            <h1 className='text-4xl sm:text-7xl text-white font-thin'>As-Is</h1>
            <h1 className='text-4xl sm:text-7xl text-white font-thin'>In Middle Tennessee</h1>
        </div>
    </div>
  )
}

export default Home