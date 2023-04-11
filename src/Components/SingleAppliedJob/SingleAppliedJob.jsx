import React from "react";
import "./SingleAppliedJob.css";
import Frame4 from "../../assets/Icons/Frame4.png";
import Frame from "../../assets/Icons/Frame.png";
import { Link } from "react-router-dom";

const SingleAppliedJob = ({ singleAppliedJob }) => {
  let {
    id,
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    fulltime_or_parttime,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = singleAppliedJob;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 lg: gap-5  p-4 content-center border-2 border-zinc-200 rounded-lg">
      <div className="col-span-1 place-self-center">
        <img className="" src={company_logo}></img>
      </div>

      <div className="col-span-3">
        <p className="text-xl font-extrabold mb-1 my-4">{job_title}</p>
        <p className="text-base font-medium text-zinc-500">{company_name}</p>
        <div className="flex items-start gap-2 my-4 w-fit">
          <button className="workSite">{remote_or_onsite}</button>
          <span className="workSite">{fulltime_or_parttime}</span>
        </div>
        <div className="flex items-start gap-3 flex-col md:flex-row w-fit">
          <div className="flex">
            <span>
              <img src={Frame4}></img>
            </span>
            {location}
          </div>
          <div className=" flex">
            <span>
              <img src={Frame}></img>
            </span>
            Salary:{salary}
          </div>
        </div>
      </div>

      <button
        onClick={() => console.log("hello")}
        className="btn-details  place-self-center"
      >
        <Link to={`/jobDetails/${id}`}> View Details </Link>
      </button>
    </div>
  );
};

export default SingleAppliedJob;
