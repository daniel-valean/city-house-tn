import React from 'react'
import Family from '../assets/family-1.jpg'
import Caldwell1 from '../assets/calwell-before.jpg';
import Cashoffer from '../assets/cashoffer.png';
import Agreement from '../assets/agreement.png';
import Closed from '../assets/closed.png';


const aboutus = () => {
return (
    <div name='aboutus' className='w-full h-screen bg-[#ffffff] text-black'>
    {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full'>
            <div className='mt-20'>
                <p className='text-5xl font-thin inline border-b-4 border-[#aacded]'>About Us</p>
            </div>
            <div className='max-w-[1000px] w-full mb-10 grid sm:grid-cols-2'>
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
        </div>


            <div className='bg-grey-400'>
                <p className='text-5xl font-thin inline border-b-4 border-[#dcdcdc]'>Some of Our Work</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-2 gap-4 text-center py-8'>
            <div className='border'>
                    <img className='w-40 mx-auto' src={Caldwell1} alt="Evaluation Icon"/>
                    <p className='my-4 text-2xl'>Step 1 - Free Evaluation</p>
                </div>

                <div className='border border-[#000000] rounded-md bg-[#7575758f] text-white'>
                    <img className='w-40 mx-auto' src={Cashoffer} alt="Cash Offer Icon"/>
                    <p className='my-4 text-2xl font-thin'>Step 2 - Cash Offer</p>
                </div>

                <div className='hover:scale-110 duration-500'>
                    <img className='w-40 mx-auto' src={Agreement} alt="Agreement Icon"/>
                    <p className='my-4 text-2xl'>Step 3 - Agreement</p>
                </div>

                <div className='hover:scale-110 duration-500'>
                    <img className='w-40 mx-auto' src={Closed} alt="Closed"/>
                    <p className='my-4 text-2xl'>Step 4 - Closed</p>
                </div>


            </div>
        </div>
    </div>
    );
};

export default aboutus