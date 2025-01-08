import React from "react";
import { UserButton } from "@clerk/nextjs";
import AddNewInterview from "./AddNewInterview";

const Dashboard = ({ children }) => {
  return (
    <div className="p-10">
      <h2 className="font-bold text-2xl">Dashboard</h2>
      <h2 className="text-gray-500">
        Create and start your AI mockup interview
      </h2>
      <div>
        <AddNewInterview className="grid grid-cols-1 md:grid-cols-3 my-5"></AddNewInterview>
      </div>
    </div>
  );
};

export default Dashboard;
