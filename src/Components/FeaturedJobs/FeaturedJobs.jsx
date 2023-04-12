import React, { useEffect, useState } from "react";
import "./FeaturedJobs.css";
import SingleFeaturedJob from "../SingleFeaturedJob/SingleFeaturedJob";
import { data } from "autoprefixer";
const FeaturedJobs = () => {
  let allJobs = [];
  let myData = [];
  const [featuredJobList, setFeaturedJobList] = useState([]);
  const [featuredJobListTemp, setFeaturedJobListTemp] = useState([]);
  const [limit, setLimit] = useState(false);

  useEffect(() => {
    fetch("featuredJobs.json")
      .then((res) => res.json())
      .then((data) => {
        loadDataRandom(data);
        setFeaturedJobList(data);
      });
  }, []);

  const loadDataRandom = (data) => {
    allJobs = [...data];
    const selectedElements = selectRandomElements(allJobs, 4);
    const newArray1 = [...selectedElements];
    setFeaturedJobListTemp(newArray1);
    return newArray1;
  };
  function selectRandomElements(array, numElements) {
    const selectedElements = [];
    for (let i = 0; i < numElements; i++) {
      const randomIndex = Math.floor(Math.random() * array.length);
      selectedElements.push(array[randomIndex]);
      array.splice(randomIndex, 1);
    }
    return selectedElements;
  }
  let handleSeeMore = () => {
    setLimit(true);
    setFeaturedJobListTemp(featuredJobList);
  };
  let handleSeeLess = () => {
    setLimit(false);
    loadDataRandom(featuredJobListTemp);
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
        {featuredJobListTemp.map((aJob) => (
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
