import React from 'react'
import Family from '../assets/family-1.jpg'


const aboutus = () => {
return (
    <div name='aboutus' className='w-full h-screen bg-[#868689] text-white'>
    {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full'>
            <div className='mt-20'>
                <p className='text-6xl font-thin inline border-b-4 border-[#aacded]'>About Us</p>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2'>
            <div>
                    <img className='w-40 mt-10 ml-8' src={Family} alt="Family Pic"/>
            </div>
            <div className='font-thin mt-10 w-full'>                    
                <p className=''>We love Nashville and we love real estate! We have helped may home owners with difficult properties and situations, 
                weather they needed costly repairs, owed back taxes, inherited a problem house, or were in a tough financial situation.
                At Cityhouse Properties we believe that we are successful because we make the selling process easy for any home seller. 
                Every transaction is transparent, fair, and fast! No commission, no fees, no repairs, and close in as quick as 7 days.
                Call us for a no-obligations cash offer on your house!</p>
            </div>
                {/* <div className='hover:scale-110 duration-500'>
                    <img className='w-40 mx-auto' src={CSS} alt="CSS icon" />
                    <p className='my-4'>CSS</p>
                </div> */}
                {/* <div className='hover:scale-110 duration-500'>
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
                </div> */}
            </div>
        </div>
    </div>
    );
};

export default aboutus