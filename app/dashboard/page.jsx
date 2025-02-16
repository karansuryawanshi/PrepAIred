"use client";
import React from "react";
import { UserButton } from "@clerk/nextjs";
import AddNewInterview from "./AddNewInterview";
import InterviewList from "./_component/InterviewList";
// import SpotlightCard from "@/components/ui/spotlightCard.jsx";

const Dashboard = ({ children }) => {
  return (
    // <SpotlightCard>
    <div className="p-10 ">
      <h2 className="font-semibold text-3xl text-neutral-300">Dashboard</h2>
      <h2 className="text-neutral-400">
        Create and start your AI mockup interview
      </h2>
      <div>
        <AddNewInterview className="grid grid-cols-1 md:grid-cols-3 my-5"></AddNewInterview>
      </div>
      {/* Privious Interview */}
      <InterviewList></InterviewList>
    </div>
  );
};

export default Dashboard;
