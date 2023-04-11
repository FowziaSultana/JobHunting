import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import MainRoot from "./Components/MainRoot/MainRoot";
import FilterPage from "./Components/FilterPage/FilterPage";
import Blog from "./Components/Blog/Blog";
import Statistics from "./Components/Statistics/Statistics";
import Error from "./Components/Error/Error";
import JobDetailsPage from "./Components/JobDetailsPage/JobDetailsPage";
import AppliedJobsPage from "./Components/AppliedJobsPage/AppliedJobsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/Blog",
        element: <Blog></Blog>,
      },

      {
        path: "/jobDetails/:id",
        element: <JobDetailsPage></JobDetailsPage>,
        loader: async (params) => {
          let res = await fetch("/featuredJobs.json");
          let data = await res.json();
          let singleData = data.find((job) => job.id == params.params.id);
          return { singleData };
        },
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobsPage></AppliedJobsPage>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
