import React from 'react'
import Evaluation from '../assets/evaluation.png';
import Cashoffer from '../assets/cashoffer.png';
import Agreement from '../assets/agreement.png';
import Closed from '../assets/closed.png';


const howitworks = () => {
  return (
    <div name='howitworks' className='w-full h-screen bg-[#85858a] text-white'>
        <div className='flex flex-col w-full h-full'>
            <div className='max-w-full w-full px-4 mt-20 max-w-'>
                <div className='ml-28 pb-8 pl-4'>
                  <div>
                    <h1 className='text-6xl font-thin'>We Make It Easy To Sell Your House Fast</h1>
                    </div>
                    
                    <img className='w-40 mx-auto' src={Evaluation} alt="Evaluation"/>
                    <p className='max-w-6xl text-2xl font-bold mt-11'>Step 1 - Free Evaluation</p>
                    <p className='max-w-full text-1xl font-thin mt-6'>After we receive your information we will schedule a time to visit with you and evaluate the condition of your home.</p>

                    <img className='w-40 mx-auto' src={Cashoffer} alt="Cash Offer"/>
                    <p className='max-w-6xl text-2xl font-bold mt-11'>Step 2 - Cash Offer</p>
                    <p className='max-w-full text-1xl font-thin mt-6'>We usually make a cash offer on the spot - otherwise you will receive a cash offer within 24 hours.</p>

                    <img className='w-40 mx-auto' src={Agreement} alt="Agreement"/>
                    <p className='max-w-6xl text-2xl font-bold mt-11'>Step 3 - Agreement</p>
                    <p className='max-w-full text-1xl font-thin mt-6'>If you find the offer acceptable, we will prepare a standard Tennessee real estate sales contract for the sale of your home.</p>

                    <img className='w-40 mx-auto' src={Closed} alt="Closed"/>
                    <p className='max-w-6xl text-2xl font-bold mt-11'>Step 4 - Closing</p>
                    <p className='max-w-full text-1xl font-thin mt-6'>We will then visit the title company so they can complete the title search and schedule a day and time for closing.</p>

                </div>
            </div>
        </div>
    </div>
  )
}

export default howitworks