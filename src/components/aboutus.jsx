import React from 'react'
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Html from '../assets/html.png';
import Mongo from '../assets/mongo.png';



const aboutus = () => {
  return (
    <div name='about us' className='w-full h-screen bg-[#6d7178c3] text-white'>
    {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-5xl font-bold inline border-b-4 border-[#aacded]'>About Us</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>

            </div>
        </div>
    </div>
    );
};

export default aboutus