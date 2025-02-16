"use client";
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq, desc } from "drizzle-orm";
import InterviewItemCard from "./InterviewItemCard";
import Loading from "@/components/Loading";

const InterviewList = () => {
  const user = useUser();
  const [interviewList, setInterviewList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    user && getInterviewList();
    setLoading(false);
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

  return loading ? (
    <div>
      <Loading></Loading>
    </div>
  ) : (
    <div>
      <p className="font-medium text-xl text-neutral-400 my-4">
        Previous Mock Interview
      </p>
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
