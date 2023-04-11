import React, { useEffect, useState } from "react";
import "./JobDetailsPage.css";
import {
  Outlet,
  useLoaderData,
  useParams,
  useNavigation,
} from "react-router-dom";
import Frame from "../../assets/Icons/Frame.png";
import Frame1 from "../../assets/Icons/Frame1.png";
import Frame2 from "../../assets/Icons/Frame2.png";
import Frame3 from "../../assets/Icons/Frame3.png";
import Frame4 from "../../assets/Icons/Frame4.png";

import JobDetailsHeader from "../JobDetailsHeader/JobDetailsHeader";

const JobDetailsPage = () => {
  const { id } = useParams();

  const { singleData } = useLoaderData();

  let {
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
      <JobDetailsHeader></JobDetailsHeader>
      <div className="container grid grid-cols-3 h-96 my-16 md:my-36">
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
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

            <div className=" flex items-center gap-2 mb-4">
              <span>
                <img className="job_icons" src={Frame}></img>
              </span>
              Salary:{salary} (per Year)
            </div>
            <div className="flex items-center gap-2 mb-8">
              <span>
                <img className="job_icons" src={Frame1}></img>
              </span>
              {job_title}
            </div>
            <span className="font-bold text-xl">Contact Information</span>
            <hr class="h-px my-7 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div className=" flex items-center gap-2 mb-4">
              <span>
                <img className="job_icons" src={Frame2}></img>
              </span>
              Phone:{contact_information.phone}
            </div>
            <div className=" flex items-center gap-2 mb-4">
              <span>
                <img className="job_icons" src={Frame3}></img>
              </span>
              Email:{contact_information.email}
            </div>
            <div className=" flex items-center gap-2 mb-4">
              <span>
                <img className="job_icons" src={Frame4}></img>
              </span>
              Address:{salary}
            </div>
          </div>
          <button className=" btn-primary applyNow ">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;
