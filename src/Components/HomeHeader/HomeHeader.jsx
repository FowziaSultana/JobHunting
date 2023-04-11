import React from "react";
import "./HomeHeader.css";
import image from "../../assets/All Images/P3OLGJ1 copy 1.png";

const HomeHeader = () => {
  return (
    <div className="bg-primary pt-4">
      {/* <div className="md:container lg:flex justify-between items-center md:px-8  px-4 "> */}
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-4 justify-items-center items-center">
        <div className="">
          <h1 className="md:text-6xl text-4xl font-extrabold ">
            One Step <br />
            Closer To Your
            <br />
            <span className="text-purple-600"> Dream Job</span>
          </h1>
          <p className="my-5 text-zinc-500">
            Explore thousands of job opportunities with all the
            <br /> information you need. Its your future. Come find it. Manage
            all <br></br>your job application from start to finish.
          </p>
          <button type="button" className="btn-primary">
            Get started
          </button>
        </div>

        <img src={image} className="w-full"></img>
      </div>
    </div>
  );
};

export default HomeHeader;
