import React, { useEffect, useState } from "react";
import "./JobCategoryList.css";

const JobCategoryList = () => {
  const [jobList, setJobList] = useState([]);
  useEffect(() => {
    fetch("jobList.json")
      .then((res) => res.json())
      .then((data) => setJobList(data));
  }, []);
  return (
    <div className=" container">
      <div className="text-center  mt-14 mb-8 ">
        <h1 className="font-bold md:text-5xl text-3xl">Job Category List</h1>
        <p className="font-medium text-base text-zinc-500 my-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {jobList.map((aJob) => (
          <div className="bg-primary rounded-lg p-8">
            <img className="my-5" src={aJob.logo}></img>
            <p className="text-xl font-extrabold mb-1">{aJob.name}</p>
            <p className="text-base font-medium text-zinc-500">
              {aJob.jobs_available} jobs available
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCategoryList;
