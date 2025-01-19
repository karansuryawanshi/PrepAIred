"use client";
import React, { useEffect, useState } from "react";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import QuestionSection from "./_components/QuestionSection";

const page = ({ params }) => {
  const [interviewData, setInterviewData] = useState();
  const [mockInterviewQuestions, setMockInterviewQuestions] = useState([]);
  const [activeIndexQuestion, setActiveIndexQuestion] = useState(0);

  useEffect(() => {
    getInterview();
  }, []);

  const getInterview = async () => {
    const resolvedParams = await params;
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, resolvedParams.interviewId));

    setInterviewData(result[0]);

    const MockResponce = JSON.parse(result[0].jsonMockResp);
    console.log(MockResponce);
    setMockInterviewQuestions(MockResponce);
    setInterviewData(result[0]);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <QuestionSection
          mockInterviewQuestions={mockInterviewQuestions}
          activeIndexQuestion={activeIndexQuestion}
        ></QuestionSection>
      </div>
    </div>
  );
};

export default page;
