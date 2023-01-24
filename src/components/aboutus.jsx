import React from "react";
import Family from "../assets/family-1.jpg";
import Caldwell1 from "../assets/calwell-before.jpg";
import Caldwell2 from "../assets/caldwell-after.jpg";
 
const aboutus = () => {
  return (
    <div name="aboutus" className="bg-[#ffffff] mb-20">
      {/* container */}
      <div className="max-w-screen-xl mx-auto border shadow-2xl rounded-lg bg-[#6a8fb9ba] text-white p-4 w-full h-full">
        <div>
          <p className="text-5xl font-thin inline border-b-4 border-[#ffffff]">
            About Us
          </p>
        </div>
        <div className="max-w-screen-xl w-full mb-10">
          <div>
            <img className=" w-80 m-auto lg:ml-16 mt-14" src={Family} alt="Family Pic" />
          </div>
          <div className="font-thin mt-10 w-full">
            <p className=" text-center">
              We love Nashville and we love real estate! We have helped may home
              owners with difficult properties and situations, weather they
              needed costly repairs, owed back taxes, inherited a problem house,
              or were in a tough financial situation. At Cityhouse Properties we
              believe that we are successful because we make the selling process
              easy for any home seller. Every transaction is transparent, fair,
              and fast! No commission, no fees, no repairs, and close in as
              quick as 7 days. Call us for a no-obligations cash offer on your
              house!
            </p>
          </div>
        </div>

        <div>
          <p className="text-3xl inline font-thin border-b-4 border-[#ffffff]">
            Some of Our Work
          </p>
        </div>
        <div className="text-center py-8">
          <div className="border place-content-center grid sm:inline-flex shadow-2xl border-[#cdcbcb] bg-[#6a8fb9ba] rounded-lg text-black">
            <img
              className="w-full sm:w-96 lg:m-10 shadow-2xl rounded-lg mx-auto"
              src={Caldwell1} alt="Evaluation Icon"/>
            <img
              className="w-full sm:w-96 lg:m-10 shadow-2xl rounded-lg mx-auto"
              src={Caldwell2}
              alt="Evaluation Icon"/>
          </div>


            {/* <p className='my-4 text-2xl font-thin'></p> */}
          </div>
        </div>
      </div>
    
  );
};

export default aboutus;