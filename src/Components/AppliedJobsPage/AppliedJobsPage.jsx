import React, { useEffect, useState } from "react";
import "./AppliedJobsPage.css";
import SecondaryHeader from "../SecondaryHeader/SecondaryHeader";
import { getJobCart } from "../Utilities/fakedb";
import SingleAppliedJob from "../SingleAppliedJob/SingleAppliedJob";

const AppliedJobsPage = () => {
  const [jobCartList, setJobCartList] = useState([]);
  useEffect(() => {
    fetch("featuredJobs.json")
      .then((res) => res.json())
      .then((data) => listOfJobs(data));
  }, []);

  const listOfJobs = (data) => {
    let stored = getJobCart();
    let newCart = [];
    for (const key in stored) {
      let temp = key;
      let ajob = data.find((job) => job.id == temp);
      if (ajob != undefined) {
        newCart.push(ajob);
      }
    }
    if (newCart.length != 0) {
      setJobCartList(newCart);
    }
  };

  const [selectedOption, setSelectedOption] = useState("none");

  function handleSelectChange(event) {
    setSelectedOption(event.target.value);
    console.log(`Selected option: ${event.target.value}`);
  }
  return (
    <div>
      <SecondaryHeader name="Applied Jobs"></SecondaryHeader>
      <div className="container my-24">
        <div className="text-end my-6">
          <select
            value={selectedOption}
            onChange={handleSelectChange}
            className=" block w-25 py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-blue-500 sm:text-sm"
          >
            <option value="none" disabled hidden>
              Filter
            </option>
            <option value="remote">Remote</option>
            <option value="onsite">Onsite</option>
          </select>
        </div>
        <div className="grid grid-cols-1 gap-3">
          {jobCartList.length != 0 ? (
            jobCartList.map((singleAppliedJob) => (
              <SingleAppliedJob
                singleAppliedJob={singleAppliedJob}
              ></SingleAppliedJob>
            ))
          ) : (
            <div>No data here </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobsPage;
