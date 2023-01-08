import React from 'react'
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Html from '../assets/html.png';
import Mongo from '../assets/mongo.png';



const Skills = () => {
  return (
    <div name='Skills' className='w-full h-screen bg-[#3b5382c3] text-white'>
    {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-5xl font-bold inline border-b-4 border-[#aacded]'>Skills</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
            <div className='hover:scale-110 duration-500'>
                    <img className='w-40 mx-auto' src={Html} alt="HTML icon"/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-40 mx-auto' src={CSS} alt="CSS icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-40 mx-auto' src={JavaScript} alt="JAVASCRIPT icon" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-40 mx-auto' src={ReactImg} alt="REACT icon" />
                    <p className='my-4'>REACT</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-40 mx-auto' src={Node} alt="NODE icon" />
                    <p className='my-4'>NODE</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-40 mx-auto' src={Mongo} alt="MONGO icon" />
                    <p className='my-4'>MONGO</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Skills