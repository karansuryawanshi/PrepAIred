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
import SpotlightCard from "@/components/ui/spotlightCard.jsx";
// import { Loading } from "@/components/Loading.jsx";
import Loader from "@/components/Loading.jsx";
import Loading from "@/components/Loading";

const page = () => {
  const [interviewData, setInterviewData] = useState();
  const [webCamEnable, setWebCamEnable] = useState(false);
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [loading, setLoading] = useState(false);

  const params = useParams();
  const getInterview = async () => {
    setLoading(true);

    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, params?.interviewId));
    setInterviewData(result[0]);

    setLoading(false);
  };

  useEffect(() => {
    getInterview();
  }, []);

  const checkPermissions = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      setPermissionGranted(true);
      setLoading(true);
      setWebCamEnable(true);
      setLoading(false);
    } catch (error) {
      setPermissionGranted(false);
      setWebCamEnable(false);
    }
  };

  return loading ? (
    <div className="w-screen h-screen flex items-center justify-center">
      <Loader></Loader>
    </div>
  ) : (
    <div className="my-10 text-neutral-400  w-full h-full">
      <h2 className="font-bold text-2xl">Let's get Started</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <SpotlightCard>
          <div className="flex flex-col my-5 ">
            <div className="flex flex-col gap-5 p-5 border rounded-lg">
              <h2>
                <strong className="text-gray-300">
                  Job Description :- {interviewData?.jobDesc}
                </strong>
              </h2>
              <h2>
                <strong className="text-gray-300">
                  Job Position :- {interviewData?.jobPosition}
                </strong>
              </h2>
              <h2>
                <strong className="text-gray-300">
                  Years of Experience :- {interviewData?.jobExperince}
                </strong>
              </h2>
            </div>
            <div className="p-5 border rounded-lg border-yellow-400  my-5">
              <h2 className="flex gap-2 items-center text-yellow-500">
                <Lightbulb />
                <strong>Information</strong>
              </h2>
              <h2 className="mt-3 text-yellow-500">
                Enable Video Web Cam and Microphone to start your AI-generated
                Mock Interview. It has 5 questions which you can answer, and at
                the end, you will get a report based on your answers.
                <br />
                <strong>NOTE:</strong> Recording will automatically start after
                10 seconds.
              </h2>
            </div>
          </div>
        </SpotlightCard>
        <div className="flex flex-col items-center justify-center bg-neutral-500/20 p-4 rounded-xl border border-neutral-800">
          {webCamEnable ? (
            <Webcam
              className="rounded-xl"
              onUserMedia={() => setWebCamEnable(true)}
              mirrored={true}
              onUserMediaError={() => setWebCamEnable(false)}
              style={{ width: "700px", height: "500px", borderRadius: "20px" }}
            />
          ) : (
            <>
              <WebcamIcon className="w-full my-7 h-72 p-20 bg-secondary rounded-lg border" />
              <Button
                className="w-full text-gray-700"
                variant="outline"
                onClick={checkPermissions}
              >
                Enable Webcam and Microphone
              </Button>
            </>
          )}
        </div>
      </div>
      <div className="flex justify-end items-end py-4">
        <Button disabled={!permissionGranted} variant="primary">
          <Link href={"/dashboard/interview/" + params?.interviewId + "/start"}>
            Start Interview
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default page;
