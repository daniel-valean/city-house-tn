import React from 'react'
import videobg from '../assets/home.mp4'

const Home = () => {
  return (
    <div name='Home' className='w-full h-screen' >
        <video src={videobg} autoPlay loop muted id='video'/>
        {/* container */}
        <div className='max-w-[1000px] px-20 flex flex-col justify-center h-full' id='writing'>
            <h1 className='text-4xl sm:text-7xl text-white font-thin'>We Buy Houses</h1>
            <h1 className='text-4xl sm:text-7xl text-white font-thin'>As-Is</h1>
            <h1 className='text-4xl sm:text-7xl text-white font-thin'>In Middle Tennessee</h1>
            <p className='text-white font-thin text-2xl mt-7'>Fill out our privacy protected form or give us a call</p>
            <p className='text-white font-thin text-2xl'>to receive a fair no pressure cash offer</p>
        </div>
        <div name='form' className='w-full -screen flex justify-end items-center p-60' id='form'>
            <form method='POST' action="https://getform.io/f/df14e171-a498-41f8-8d20-96162deb1c43" className='flex flex-col max-w-[400px] border-2 bg-gray-400/50 shadow-md rounded px-8'>
                <div>
                <p className='text-white py-3'>Contact Us</p>
                </div>
                <input className='bg-white p-2' type="text" placeholder='Property Address' name='address'/>
                <input className='my-4 p-2 bg-white' type="text" placeholder='Full Name' name='name'/>
                <input className='bg-white p-2' type="number" placeholder='Phone Number' name='number'/>
                <input className='my-4 p-2 bg-white' type="email" placeholder='Email' name='email'/>

                <button className='text-white border-2 hover:border-[#282421a9] hover:bg-[#282421a9] px-4 py-3 my-8 mx-auto flex items-center'>Send</button>
            </form>
        </div>
    </div>
  )
}

export default Home