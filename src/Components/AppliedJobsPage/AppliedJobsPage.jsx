import React, { useEffect, useState } from "react";
import "./AppliedJobsPage.css";
import SecondaryHeader from "../SecondaryHeader/SecondaryHeader";
import { getJobCart } from "../Utilities/fakedb";
import SingleAppliedJob from "../SingleAppliedJob/SingleAppliedJob";

const AppliedJobsPage = () => {
  const [jobCartList, setJobCartList] = useState([]);
  const [tempCartList, setTempCartList] = useState([]);

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
      setTempCartList(newCart);
    }
  };

  const [selectedOption, setSelectedOption] = useState("none");

  function handleSelectChange(event) {
    let chosenCart = [];
    setSelectedOption(event.target.value);
    let choices = event.target.value;

    if (choices === "Remote") {
      chosenCart = jobCartList.filter(
        (saj) => saj.remote_or_onsite === "Remote"
      );
      setTempCartList(chosenCart);
    } else if (choices === "Onsite") {
      chosenCart = jobCartList.filter(
        (saj) => saj.remote_or_onsite === "Onsite"
      );
      setTempCartList(chosenCart);
    } else setTempCartList(jobCartList);
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
            <option value="Remote">Remote</option>
            <option value="Onsite">Onsite</option>
          </select>
        </div>
        <div className="grid grid-cols-1 gap-3">
          {tempCartList.length != 0 ? (
            tempCartList.map((singleAppliedJob) => (
              <SingleAppliedJob
                singleAppliedJob={singleAppliedJob}
                key={singleAppliedJob.id}
              ></SingleAppliedJob>
            ))
          ) : (
            <div className="text-center">
              <h1 className="text-5xl text-purple-400">
                {" "}
                You Have Not Applied In Any Job Yet{" "}
              </h1>{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobsPage;
