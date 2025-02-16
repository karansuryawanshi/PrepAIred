"use client";
import React, { useEffect, useState } from "react";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import QuestionSection from "./_components/QuestionSection";
import RecordAnsSection from "./_components/RecordAnsSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Loader from "@/components/Loading";

const page = ({ params }) => {
  const [interviewData, setInterviewData] = useState();
  const [mockInterviewQuestions, setMockInterviewQuestions] = useState([]);
  const [activeIndexQuestion, setActiveIndexQuestion] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getInterview();
    setLoading(false);
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

  return loading ? (
    <div className="w-screen h-screen flex items-center justify-center">
      <Loader />
    </div>
  ) : (
    <div className="flex mt-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mockInterviewQuestions.length > 0 && (
          <QuestionSection
            mockInterviewQuestions={mockInterviewQuestions}
            activeIndexQuestion={activeIndexQuestion}
          ></QuestionSection>
        )}
        <RecordAnsSection
          mockInterviewQuestions={mockInterviewQuestions}
          activeIndexQuestion={activeIndexQuestion}
          interviewData={interviewData}
        ></RecordAnsSection>
        <div className="flex justify-center gap-6 my-2">
          {/* {activeIndexQuestion > 0 && <Button>Previous Question</Button>} */}
          {activeIndexQuestion != mockInterviewQuestions?.length - 1 && (
            <Button
              onClick={() => {
                setActiveIndexQuestion(activeIndexQuestion + 1);
              }}
            >
              Next Question
            </Button>
          )}

          {activeIndexQuestion == mockInterviewQuestions?.length - 1 && (
            <Link
              href={
                "/dashboard/interview/" + interviewData?.mockId + "/feedback"
              }
            >
              <Button>End Interview</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
