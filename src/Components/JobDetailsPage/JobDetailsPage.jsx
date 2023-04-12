import React, { useEffect, useState } from "react";
import "./JobDetailsPage.css";
import SecondaryHeader from "../SecondaryHeader/SecondaryHeader";
import {
  Outlet,
  useLoaderData,
  useParams,
  useNavigation,
  Link,
} from "react-router-dom";
import Frame from "../../assets/Icons/Frame.png";
import Frame1 from "../../assets/Icons/Frame1.png";
import Frame2 from "../../assets/Icons/Frame2.png";
import Frame3 from "../../assets/Icons/Frame3.png";
import Frame4 from "../../assets/Icons/Frame4.png";
import { addToDb } from "../Utilities/fakedb";

const JobDetailsPage = () => {
  const handleApplyBtn = (id) => addToDb(id);
  const { singleData } = useLoaderData();

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
  } = singleData;

  return (
    <div>
      <SecondaryHeader name="Job Details"></SecondaryHeader>
      <div className="container grid grid-cols-1 lg:grid-cols-3 h-96 my-16 md:my-36 p-4 md:p-10 gap-3 lg:gap-6">
        <div className="details1 col-span-2 ">
          <div className="text-base mb-6">
            <span className="font-bold">Job Details: </span>
            <span className="text-zinc-500">{job_description}</span>
          </div>
          <div className="text-base mb-6">
            <span className="font-bold">Job Responsibility: </span>
            <span className="text-zinc-500">{job_responsibility}</span>
          </div>
          <div className="text-base mb-6">
            <span className="font-bold">Educational requirements: </span>
            <br />
            <p className="text-zinc-500">{educational_requirements}</p>
          </div>
          <div className="text-base mb-6">
            <span className="font-bold">Experiences : </span>
            <br />
            <p className="text-zinc-500">{experiences}</p>
          </div>
        </div>
        <div className="deatils2">
          <div className="p-7 bg-purple-50 mb-6">
            <span className="font-bold text-xl">Job Details </span>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

            <div className=" flex items-center gap-2 mb-4">
              <span>
                <img className="job_icons" src={Frame}></img>
              </span>
              <span className="font-bold">Salary:</span>
              {salary} (per Year)
            </div>
            <div className="flex items-center gap-2 mb-8">
              <span>
                <img className="job_icons" src={Frame1}></img>
              </span>
              <span className="font-bold"> Job Title:</span> {job_title}
            </div>
            <span className="font-bold text-xl">Contact Information</span>
            <hr className="h-px my-7 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div className=" flex items-center gap-2 mb-4">
              <span>
                <img className="job_icons" src={Frame2}></img>
              </span>
              <span className="font-bold">Phone:</span>
              {contact_information.phone}
            </div>
            <div className=" flex items-center gap-2 mb-4">
              <span>
                <img className="job_icons" src={Frame3}></img>
              </span>
              <span className="font-bold"> Email:</span>
              {contact_information.email}
            </div>
            <div className=" flex items-center gap-2 mb-4">
              <span>
                <img className="job_icons" src={Frame4}></img>
              </span>
              <span className="font-bold"> Address:</span>
              {location}
            </div>
          </div>{" "}
          <button
            className=" btn-primary applyNow"
            onClick={() => handleApplyBtn(id)}
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;
