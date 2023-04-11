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
      <h1>{job_title}</h1>
    </div>
  );
};

export default JobDetailsPage;
