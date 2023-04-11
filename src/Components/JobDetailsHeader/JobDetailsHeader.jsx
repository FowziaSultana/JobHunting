import React from "react";
import vector from "../../assets/All Images/Vector.png";
import vector1 from "../../assets/All Images/Vector-1.png";

const JobDetailsHeader = () => {
  return (
    <div className="bg-primary pt-4">
      {/* <div className="md:container lg:flex justify-between items-center md:px-8  px-4 "> */}
      {/* <div className="text-center h-96">
        <img src={vector}></img>
        <h1>Jobs</h1>
        <img src={vector1}></img>
      </div> */}
      <div className="grid grid-cols-3 gap-4 h-96">
        <div className="place-self-end">
          <img src={vector}></img>
        </div>
        <div className="place-self-center">
          <h1>Jobs</h1>
        </div>
        <div className="place-self-start ">
          <img src={vector1}></img>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsHeader;
