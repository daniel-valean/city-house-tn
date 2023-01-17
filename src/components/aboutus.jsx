import React from "react";
import Family from "../assets/family-1.jpg";
import Caldwell1 from "../assets/calwell-before.jpg";
import Caldwell2 from "../assets/caldwell-after.jpg";
import Condo1 from "../assets/condo-after-1.jpg";
import Condo2 from "../assets/condo-after-2.jpg";

const aboutus = () => {
  return (
    <div name="aboutus" className="bg-[#ffffff] mb-20">
      {/* container */}
      <div className="max-w-[1000px] mx-auto border shadow-2xl rounded-lg bg-[#6a8fb9ba] text-white p-4 flex flex-col w-full h-full">
        <div>
          <p className="text-5xl font-thin inline border-b-4 border-[#ffffff]">
            About Us
          </p>
        </div>
        <div className="max-w-[1000px] w-full mb-10 grid sm:grid-cols-2">
          <div>
            <img className="w-40 mt-10 ml-40" src={Family} alt="Family Pic" />
          </div>
          <div className="font-thin mt-10 w-full">
            <p className="">
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
        <div className="w-full grid gap-4 text-center py-8">
          <div className="border inline-flex shadow-2xl border-[#cdcbcb] bg-[#6a8fb9ba] rounded-lg text-black">
            <img
              className="w-96 m-5 ml-16 shadow-2xl rounded-lg mx-auto"
              src={Caldwell1}
              alt="Evaluation Icon"
            />
            <img
              className="w-96 m-5 ml-1 shadow-2xl rounded-lg mx-auto"
              src={Caldwell2}
              alt="Evaluation Icon"
            />
          </div>

          <div className="border inline-flex shadow-2xl border-[#cdcbcb] bg-[#6a8fb9ba] rounded-lg text-black">
            <img
              className="w-96 m-5 ml-16 shadow-2xl rounded-lg mx-auto"
              src={Condo1}
              alt="Evaluation Icon"
            />
            <img
              className=" w-96 m-5 ml-1 shadow-2xl rounded-lg mx-auto"
              src={Condo2}
              alt="Evaluation Icon"
            />
          </div>

          <div className="border inline-flex shadow-2xl border-[#cdcbcb] bg-[#6a8fb9ba] rounded-lg text-black">
            <img
              className="w-96 m-5 ml-16 shadow-2xl rounded-lg mx-auto"
              src={Caldwell1}
              alt="Evaluation Icon"
            />
            <img
              className=" w-96 m-5 ml-1 shadow-2xl rounded-lg mx-auto"
              src={Caldwell2}
              alt="Evaluation Icon"
            />
          </div>

          <div className="border inline-flex shadow-2xl border-[#cdcbcb] bg-[#6a8fb9ba] rounded-lg text-black">
            <img
              className="w-96 m-5 ml-16 shadow-2xl rounded-lg mx-auto"
              src={Caldwell1}
              alt="Evaluation Icon"
            />
            <img
              className=" w-96 m-5 ml-1 shadow-2xl rounded-lg mx-auto"
              src={Caldwell2}
              alt="Evaluation Icon"
            />
            {/* <p className='my-4 text-2xl font-thin'></p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutus;
