import React from 'react'
import {Link} from 'react-scroll'
import background from '../assets/home.webp'

const Home = () => {
  return (
    <div name='Home' className='w-full h-screen' style={{ background:`url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>

        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <h1 className='text-4xl sm:text-7xl font-bold text-white'>
              Daniel Valean</h1>
        
            <div>
                <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#b1a296] hover:border-[#b1a296]'>
                <Link to="Work" smooth={true} offset={50} duration={500}>View Work</Link></button>
            </div>
        </div>
    </div>
  )
}

export default Home