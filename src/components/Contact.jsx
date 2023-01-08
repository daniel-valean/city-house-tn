import React from 'react'
import burnt from '../assets/burntorange.png'

const Contact = () => {
  return (
    <div name='Contact' className='w-full h-screen flex justify-center items-center p-4'style={{ background:`url(${burnt})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <form method='POST' action="https://getform.io/f/df14e171-a498-41f8-8d20-96162deb1c43" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-5xl front-bold inline border-b-4 text-white border-[#282421a9]'>Contact</p>
                    <p className='text-white py-4'>Submit the form below or shoot me an email - Dannyvalean@gmail.com</p>
                </div>
                <input className='bg-white p-2' type="text" placeholder='Name' name='name'/>
                <input className='my-4 p-2 bg-white' type="email" placeholder='Email' name='email'/>
                <textarea className='bg-white p-2' name="message" rows="10" placeholder='Message'></textarea>
                <button className='text-white border-2 hover:border-[#282421a9] hover:bg-[#282421a9] px-4 py-3 my-8 mx-auto flex items-center'>Send</button>
            </form>
    </div>
  )
}

export default Contact 