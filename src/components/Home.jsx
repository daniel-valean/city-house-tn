import React from "react";
import videobg from "../assets/home.mp4";

const Home = () => {
  return (

    <div name="Home" className="w-full h-screen">
      <video src={videobg} autoPlay loop muted playsInLine id="video" />
      {/* <div className='bg-overlay'></div> */}
      {/* container */}
      <div
        className="max-w-[1000px] text-center ml-8 md:ml-20 mt-28 md:mt-60 lg:pl-80 lg:mt-20 lg h-full" id="writing">
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
        className="w-full h-screen mt-80 md:pt-80 md:pl-28 lg:ml-80 lg:mt-24 "
        id="form">
        <form
          method="POST"
          action="https://getform.io/f/560c6240-58a7-4478-ba2c-ee4ddb075957"
          className="flex flex-col max-w-[600px] border-2 bg-gray-400/50 shadow-md rounded px-8">
          <input
            className="bg-white mt-4 p-2"
            type="text"
            placeholder="Property Address"
            name="address"/>
          <input
            className="my-4 p-2 bg-white"
            type="text"
            placeholder="Full Name"
            name="name"/>
          <input
            className="bg-white p-2"
            type="number"
            placeholder="Phone Number"
            name="number"/>
          <input
            className="my-4 p-2 bg-white"
            type="email"
            placeholder="Email"
            name="email"/>

          <button className="text-white border-2 hover:border-[#282421a9] hover:bg-[#282421a9] px-4 py-3 my-8 mx-auto flex items-center">
            Get My Cash Offer
          </button>
        </form>
      </div>

    </div>
  );
};

export default Home;
