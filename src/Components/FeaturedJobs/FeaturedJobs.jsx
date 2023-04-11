import React, { useEffect, useState } from "react";
import "./FeaturedJobs.css";
import SingleFeaturedJob from "../SingleFeaturedJob/SingleFeaturedJob";
const FeaturedJobs = () => {
  const [featuredJobList, setFeaturedJobList] = useState([]);
  const [limit, setLimit] = useState(false);

  useEffect(() => {
    fetch("featuredJobs.json")
      .then((res) => res.json())
      .then((data) => setFeaturedJobList(data));
  }, []);
  let handleSeeMore = () => {
    return setLimit(true);
  };
  let handleSeeLess = () => {
    return setLimit(false);
  };

  return (
    <div className=" container">
      <div className="text-center  mt-14 mb-8 ">
        <h1 className="font-bold md:text-5xl text-3xl">Featured Jobs</h1>
        <p className="font-medium text-base text-zinc-500 my-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
        {limit
          ? featuredJobList.map((aJob) => (
              <SingleFeaturedJob aJob={aJob}></SingleFeaturedJob>
            ))
          : featuredJobList
              .slice(0, 4)
              .map((aJob) => (
                <SingleFeaturedJob aJob={aJob}></SingleFeaturedJob>
              ))}
      </div>
      <div className="text-center mt-10 mb-28">
        {!limit ? (
          <button onClick={handleSeeMore} className="btn-primary">
            See All
          </button>
        ) : (
          <button onClick={handleSeeLess} className="btn-primary">
            See less
          </button>
        )}
      </div>
    </div>
  );
};

export default FeaturedJobs;
