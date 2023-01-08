import React from 'react'

const About = () => {
  return (
    <div name='About' className='w-full h-screen bg-[#b1a296ab] text-white'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-5xl font-bold inline border-b-4 border-[#816142]'>About</p>
                    <div></div>
                </div>
            </div>
              <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                  <p>Hi I'm Daniel, nice to meet you.</p>
                </div>
                <div className='text-2xl'>
                  <p>I'm a full-stack web developer with a focus on the MERN stack, but still exploring other technologies and frameworks that catch my interest. If you're looking for a developer to add to your team, I'd love to hear from you!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About