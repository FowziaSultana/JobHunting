import React from "react";
import "./SingleFeaturedJob.css";
import Frame4 from "../../assets/Icons/Frame4.png";
import Frame from "../../assets/Icons/Frame.png";
import { Link } from "react-router-dom";

const SingleFeaturedJob = ({ aJob }) => {
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
  } = aJob;
  return (
    <div className="singleFeaturedJob">
      <img className="my-5" src={company_logo}></img>
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
      <div className="mt-4">
        <Link className="btn-details " to={`/jobDetails/${id}`}>
          {" "}
          View Details{" "}
        </Link>
      </div>
    </div>
  );
};

export default SingleFeaturedJob;
