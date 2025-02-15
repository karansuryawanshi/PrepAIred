"use client";
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq, desc } from "drizzle-orm";
import InterviewItemCard from "./InterviewItemCard";

const InterviewList = () => {
  const user = useUser();
  const [interviewList, setInterviewList] = useState([]);

  useEffect(() => {
    user && getInterviewList();
  });

  const getInterviewList = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(
        eq(
          MockInterview.createdBy,
          user?.user?.primaryEmailAddress?.emailAddress
        )
      )
      .orderBy(desc(MockInterview.id));

    // console.log(result);
    // setInterviewList(result);
    setInterviewList(result);
  };

  return (
    <div>
      <p className="font-medium text-xl my-4">Previous Mock Interview</p>
      {!interviewList && (
        <div className="text-white">No interview Available!</div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3">
        {interviewList.map((interview, index) => (
          <div key={index}>
            <InterviewItemCard interview={interview} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterviewList;
