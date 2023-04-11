import React from "react";
import HomeHeader from "../HomeHeader/HomeHeader";
import JobCategoryList from "../JobCategoryList/JobCategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const HomePage = () => {
  return (
    <div>
      <HomeHeader></HomeHeader>
      <JobCategoryList></JobCategoryList>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default HomePage;
