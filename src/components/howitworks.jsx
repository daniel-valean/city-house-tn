import React from "react";
import Evaluation from "../assets/evaluation.png";
import Cashoffer from "../assets/cashoffer.png";
import Agreement from "../assets/agreement.png";
import Closed from "../assets/closed.png";

const howitworks = () => {
  return (
    <div
      name="howItWorks"
      className="w-full h-screen bg-[#ffffffcb] text-black mb-96 md:mt-0 md:mb-0">
      {/* container */}
      <div className="max-w-[1000px] mx-auto mt-20 p-4 justify-center w-full h-full text-center">
        <div>
          <p className="text-6xl font-thin inline border-b-4 border-[#dcdcdc]">
            We Make It Easy To Sell Your House Fast
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-2 gap-4 text-center py-8">
          <div className="hover:scale-110 duration-500">
            <img
              className="w-40 mx-auto"
              src={Evaluation}
              alt="Evaluation Icon"
            />
            <p className="my-4 text-2xl">Step 1 - Free Evaluation</p>
            <p className="my-4 font-thin">
              After we receive your information we will schedule a time to visit
              with you and evaluate the condition of your home.
            </p>
          </div>

          <div className="hover:scale-110 duration-500">
            <img
              className="w-40 mx-auto"
              src={Cashoffer}
              alt="Cash Offer Icon"
            />
            <p className="my-4 text-2xl">Step 2 - Cash Offer</p>
            <p className="my-4 font-thin">
              We usually make a cash offer on the spot - otherwise you will
              receive a cash offer within 24 hours.
            </p>
          </div>

          <div className="hover:scale-110 duration-500">
            <img
              className="w-40 mx-auto"
              src={Agreement}
              alt="Agreement Icon"
            />
            <p className="my-4 text-2xl">Step 3 - Agreement</p>
            <p className="my-4 font-thin">
              If you find the offer acceptable, we will prepare a standard
              Tennessee real estate sales contract for the sale of your home.
            </p>
          </div>

          <div className="hover:scale-110 duration-500">
            <img className="w-40 mx-auto" src={Closed} alt="Closed" />
            <p className="my-4 text-2xl">Step 4 - Closed</p>
            <p className="my-4 font-thin">
              We will then visit the title company so they can complete the
              title search and schedule a day and time for closing.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default howitworks;

