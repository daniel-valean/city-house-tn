import React from 'react'
import {} from 'react-scroll'
import videobg from '../assets/home.mp4'

const Home = () => {
  return (
    <div name='Home' className='home' video src>
        <video src={videobg} autoPlay loop muted/>
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <h1 className='text-4xl sm:text-7xl font-bold text-white'>
              Daniel Valean</h1>
        </div>
    </div>
  )
}

export default Home