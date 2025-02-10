"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const InterviewItemCard = ({ interview }) => {
  const router = useRouter();

  const onStart = () => {
    router.push("/dashboard/interview/" + interview?.mockId);
    console.log("proceessss");
  };

  const onfeedback = () => {
    router.push("/dashboard/interview/" + interview?.mockId + "/feedback");
    console.log("proceessss");
  };
  //   console.log("interview", interview);
  return (
    <div className="border shadow-sm rounded-lg p-3">
      <h2 className="font-bold text-blue-800">{interview?.jobPosition}</h2>
      <h2 className="text-sm text-gray-600">{interview.jobExperince}</h2>
      <h2 className="text-xs text-gray-400">
        created At:{interview.createdAt}{" "}
      </h2>
      <div className="flex justify-between gap-5">
        <Button
          className="w-full"
          size="sm"
          variant="outline"
          onClick={onfeedback}
        >
          Feedback
        </Button>
        <Button className="w-full" size="sm" onClick={onStart}>
          Start
        </Button>
      </div>
    </div>
  );
};

export default InterviewItemCard;
