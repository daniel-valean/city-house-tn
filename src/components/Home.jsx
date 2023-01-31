import React from "react";

import background from "../assets/homepage-5.jpg";

const Home = () => {
  return (

    <div name='Home' className='w-full h-screen' style={{ background:`url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      {/* <div className='bg-overlay'></div> */}
      {/* container */}
      <div className="max-w-[1000px] mx-auto text-center ml-10 mt-36 md:ml-20 lg:ml-0 lg:mt-0 lg:text-left lg:px-8 flex flex-col lg:justify-center h-full lg:pl-28" id="writing">
        <h1 className="text-4xl sm:text-7xl text-white font-thin">
          We Buy Houses
        </h1>
        <h1 className="text-4xl sm:text-7xl text-white font-thin">As-Is</h1>
        <h1 className="text-4xl sm:text-7xl text-white font-thin">
          In Middle Tennessee
        </h1>
        <p className="md:text-4xl text-white font-thin mt-7">
          Fill out our privacy protected form or give
        </p>
        <p className="md:text-4xl text-white font-thin ">
          us a call to receive a fair no pressure cash offer
        </p>
      </div>

      <div
        name="form"
        className="w-full h-screen flex items-center justify-center mt-48 lg:mt-6 lg:justify-end lg:p-10 "
        id="form">
        <form
          method="POST"
          action="https://getform.io/f/560c6240-58a7-4478-ba2c-ee4ddb075957"
          className=" md:w-full flex flex-col max-w-[600px] border-2 bg-gray-400/50 shadow-md rounded px-10 md:px-10">
          <input className="bg-white mt-4 p-3" type="text" placeholder="Property Address" name="address"/>
          <input className="my-4 p-3 bg-white" type="text" placeholder="Full Name" name="name"/>
          <input className="bg-white p-3" type="number" placeholder="Phone Number" name="number"/>
          <input className="my-4 p-3 bg-white" type="email" placeholder="Email" name="email"/>

          <button className="text-white border-2 hover:border-[#282421a9] hover:bg-[#282421a9] px-4 py-3 my-8 mx-auto flex items-center">Get My Cash Offer</button>
        </form>
      </div>

    </div>
  );
};

export default Home;
