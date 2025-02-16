"use client";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import React, { useEffect, useState, use } from "react";
import { eq } from "drizzle-orm";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const page = ({ params: paramsPromise }) => {
  const params = use(paramsPromise); // Unwrapping params

  const [feedbackList, setFeedbackList] = useState([]);
  const [overallResult, setOverallResult] = useState();

  useEffect(() => {
    if (!params?.interviewId) return;
    getFeedback();
  }, [params?.interviewId]);

  const getFeedback = async () => {
    const result = await db
      .select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockId, params.interviewId))
      .orderBy(UserAnswer.id);
    setFeedbackList(result);

    // const overallResult = result.reduce((sum, item) => sum + item.rating, 0);
    const overallResults = result.reduce(
      (sum, item) => sum + Number(item.rating),
      0
    );

    setOverallResult(overallResults / 40);

    // console.log(overallResult / 40);
  };

  const router = useRouter();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-green-500">Congratulations!</h1>
      <h2 className="font-bold text-2xl text-neutral-400">
        Here is your interview feedback
      </h2>
      <h2 className="text-blue-100 text-lg my-3">
        Your Overall Interview Rating : <strong>{overallResult}/10</strong>
      </h2>
      <h2 className="text-sm text-gray-400">
        Find Below Interview Question with correct Answer, your and feedback for
        improvement
      </h2>
      {feedbackList &&
        feedbackList.map((feedback, index) => (
          <Collapsible key={index}>
            <CollapsibleTrigger className="p-2 bg-secondary rounded-lg my-2 text-left flex justify-between gap-7 w-full">
              {feedback.question} <ChevronsUpDown className="h-5 w-5" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="flex flex-col gap-2">
                <h2 className="text-red-500 bg-red-50 p-2 border rounded-lg">
                  <strong>Rating:</strong> {feedback.rating}/10
                </h2>
                <h2 className="p-2 border rounded-lg bg-green-50 text-sm text-green-900">
                  <strong>Your Answer:</strong> {feedback.userAnswer}
                </h2>
                <h2 className="p-2 border rounded-lg bg-blue-50 text-sm text-blue-900">
                  <strong>Feedback:</strong> {feedback.feedback}
                </h2>
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}

      <Button
        variant="secondary"
        className="mt-2"
        onClick={() => {
          router.replace("/dashboard");
        }}
      >
        Go Home
      </Button>
    </div>
  );
};

export default page;
