import React, { useEffect, useState } from "react";
import {
  Outlet,
  useLoaderData,
  useParams,
  useNavigation,
} from "react-router-dom";

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
  } = singleData;

  return (
    <div>
      <JobDetailsHeader></JobDetailsHeader>
      <div className="container grid grid-cols-3 h-96 my-16 md:my-36">
        <div className="col-span-2 bg-slate-800 "></div>
        <div className="bg-orange-700"></div>
      </div>
    </div>
  );
};

export default JobDetailsPage;
