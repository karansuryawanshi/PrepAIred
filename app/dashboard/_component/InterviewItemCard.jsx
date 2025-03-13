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
    <div className=" bg-gradient-to-tr from-neutral-500/20 via-neutral-500/20 to-neutral-500/20 shadow-sm rounded-lg  p-3">
      {/* <div className="border bg-linear-to-l from-neutral-500 via-neutral-300 to-neutral-500 shadow-sm rounded-lg p-3"> */}
      <h2 className="font-semibold text-neutral-100 pb-1">
        {interview?.jobPosition}
      </h2>
      <h2 className="text-sm text-neutral-400 py-1">
        {interview.jobExperince}
      </h2>
      <h2 className="text-sm py-1 text-neutral-300">
        created At:{interview.createdAt}{" "}
      </h2>
      <div className="flex justify-between gap-5 py-2">
        <Button
          className="w-full text-sm"
          size="sm"
          variant="outline"
          onClick={onfeedback}
        >
          Feedback
        </Button>
        <Button
          className="w-full text-sm"
          variant="dark"
          size="sm"
          onClick={onStart}
        >
          Start
        </Button>
      </div>
    </div>
  );
};

export default InterviewItemCard;
