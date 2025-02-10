"use client";
import { db } from "@/utils/db";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { eq } from "drizzle-orm";
import { MockInterview } from "@/utils/schema";
import Webcam from "react-webcam";
import { WebcamIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Lightbulb } from "lucide-react";
import Link from "next/link";

const page = () => {
  const [interviewData, setInterviewData] = useState();
  const [webCamEnable, setWebCamEnable] = useState(false);
  const [permissionGranted, setPermissionGranted] = useState(false);
  const params = useParams();

  const getInterview = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, params?.interviewId));
    setInterviewData(result[0]);
  };

  useEffect(() => {
    getInterview();
  }, []);

  const checkPermissions = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      setPermissionGranted(true);
      setWebCamEnable(true);
    } catch (error) {
      setPermissionGranted(false);
      setWebCamEnable(false);
    }
  };

  return (
    <div className="my-10">
      <h2 className="font-bold text-2xl">Let's get Started</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col my-5 ">
          <div className="flex flex-col gap-5 p-5 border rounded-lg">
            <h2>
              <strong>Job Description :- {interviewData?.jobDesc}</strong>
            </h2>
            <h2>
              <strong>Job Position :- {interviewData?.jobPosition}</strong>
            </h2>
            <h2>
              <strong>
                Years of Experience :- {interviewData?.jobExperince}
              </strong>
            </h2>
          </div>
          <div className="p-5 border rounded-lg border-yellow-400 bg-yellow-50 my-5">
            <h2 className="flex gap-2 items-center text-yellow-500">
              <Lightbulb />
              <strong>Information</strong>
            </h2>
            <h2 className="mt-3 text-yellow-500">
              Enable Video Web Cam and Microphone to start your AI-generated
              Mock Interview. It has 5 questions which you can answer, and at
              the end, you will get a report based on your answers.
              <br />
              <strong>NOTE:</strong> We never record your video. Webcam access
              can be disabled anytime.
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          {webCamEnable ? (
            <Webcam
              onUserMedia={() => setWebCamEnable(true)}
              mirrored={true}
              onUserMediaError={() => setWebCamEnable(false)}
              style={{ width: "300px", height: "300px" }}
            />
          ) : (
            <>
              <WebcamIcon className="w-full my-7 h-72 p-20 bg-secondary rounded-lg border" />
              <Button className="w-full" onClick={checkPermissions}>
                Enable Webcam and Microphone
              </Button>
            </>
          )}
        </div>
      </div>
      <div className="flex justify-end items-end">
        <Link href={"/dashboard/interview/" + params?.interviewId + "/start"}>
          <Button disabled={!permissionGranted} className="" variant="primary">
            Start Interview
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default page;
