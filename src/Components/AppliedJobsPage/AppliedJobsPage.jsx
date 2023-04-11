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
  // listOfJobs();
  return (
    <div>
      <SecondaryHeader name="Applied Jobs"></SecondaryHeader>
      <div className="container my-24">
        <button className="mb-3">Filter</button>
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
