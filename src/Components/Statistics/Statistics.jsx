import React, { useEffect, useState } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./Statistics.css";

const Statistics = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("assignmentsMarks.json")
      .then((res) => res.json())
      .then((data) => {
        setdata(data);
        console.log(data);
      });
  }, []);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="">
          <p>{`Marks:  ${payload[1].value}`}</p>
          <p>{`Name: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <div className="text-center my-28">
        <h1 className="text-5xl text-purple-400">
          {" "}
          Scatter Chart For Assignments Marks{" "}
        </h1>{" "}
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis dataKey="name" />
          <YAxis dataKey="marks" />
          <Tooltip content={<CustomTooltip />} />
          <Scatter data={data} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
