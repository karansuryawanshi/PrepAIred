"use client";
import React, { useEffect, useState } from "react";
import { WebcamIcon } from "lucide-react";
import Webcam from "react-webcam";
import { Button } from "@/components/ui/button";
import useSpeechToText from "react-hook-speech-to-text";
import { db } from "@/utils/db";
import { Mic } from "lucide-react";
import { toast } from "sonner";
import { chatSession } from "@/utils/GeminiAiModel";
import { UserAnswer } from "@/utils/schema";
import moment from "moment";
import { useUser } from "@clerk/nextjs";
import webcam from "../../../../../../public/assets/webcam.svg";

const RecordAnsSection = ({
  mockInterviewQuestions,
  activeIndexQuestion,
  interviewData,
}) => {
  const [userAnswer, setUserAnswer] = useState("");
  const [loading, setLoading] = useState("false");
  const { user } = useUser();

  const mailId = user?.emailAddresses[0]?.emailAddress;
  // console.log("user", mailId);

  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  useEffect(() => {
    results.map((result) => {
      setUserAnswer((prevAns) => prevAns + result?.transcript);
    });
  }, [results]);

  // useEffect(() => {
  //   if (!isRecording && userAnswer?.length > 10) {
  //     UpdateUserAnswerinDB();
  //   }
  // });

  useEffect(() => {
    if (!isRecording && userAnswer?.length > 10) {
      UpdateUserAnswerinDB();
    }
    return () => {
      setUserAnswer("");
    };
  }, [isRecording]);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isRecording) {
        startStopRecording();
        console.log("recording started");
      }
    }, 20000);

    return () => clearTimeout(timer);
  }, [activeIndexQuestion]);

  const startStopRecording = async () => {
    if (isRecording) {
      setLoading(true);
      stopSpeechToText();

      setLoading(false);
    } else {
      startSpeechToText();
    }
  };

  // const UpdateUserAnswerinDB = async () => {
  //   setLoading(true);
  //   const feedbackAnswer =
  //     "question" +
  //     mockInterviewQuestions[activeIndexQuestion].question +
  //     ",user Answer: " +
  //     userAnswer +
  //     "Depend on question and user Answer for give interview question" +
  //     "please give us rating for answer and feedback as area of improvement if any" +
  //     "in just 3 to 5 lines to improve it in json format with rating field and feedback field. ";

  //   const result = await chatSession.sendMessage(feedbackAnswer);
  //   const mockJsonResponse = result.response
  //     .text()
  //     .replace("```json", " ")
  //     .replace("```", " ");

  //   console.log(mockJsonResponse);

  //   const mockJsonResponseParsed = JSON.parse(mockJsonResponse);

  //   const response = await db.insert(UserAnswer).values({
  //     mockId: interviewData?.mockId,
  //     question: mockInterviewQuestions[activeIndexQuestion].question,
  //     correctAnswer: mockInterviewQuestions[activeIndexQuestion].answer,
  //     userAnswer: userAnswer,
  //     feedback: mockJsonResponseParsed?.feedback,
  //     rating: mockJsonResponseParsed?.rating,
  //     userEmail: user?.emailAddresses[0]?.emailAddress,
  //     createdAt: moment().format("DD-MM-YYYY HH:mm:ss"),
  //   });
  //   if (response) {
  //     toast.success("Answer saved successfully");
  //     setResults([]);
  //   }
  //   // setResults([]);
  //   setUserAnswer("");
  //   setLoading(false);
  // };

  let isUpdating = false; // Add this flag

  const UpdateUserAnswerinDB = async () => {
    if (isUpdating) return; // Prevent duplicate calls
    isUpdating = true;

    setLoading(true);
    const feedbackAnswer =
      "question" +
      mockInterviewQuestions[activeIndexQuestion].question +
      ",user Answer: " +
      userAnswer +
      "Depend on question and user Answer for give interview question" +
      "please give us rating for answer and feedback as area of improvement if any" +
      "in just 3 to 5 lines to improve it in json format with rating field and feedback field. ";

    const result = await chatSession.sendMessage(feedbackAnswer);
    const mockJsonResponse = result.response
      .text()
      .replace("```json", " ")
      .replace("```", " ");

    console.log(mockJsonResponse);

    const mockJsonResponseParsed = JSON.parse(mockJsonResponse);

    const response = await db.insert(UserAnswer).values({
      mockId: interviewData?.mockId,
      question: mockInterviewQuestions[activeIndexQuestion].question,
      correctAnswer: mockInterviewQuestions[activeIndexQuestion].answer,
      userAnswer: userAnswer,
      feedback: mockJsonResponseParsed?.feedback,
      rating: mockJsonResponseParsed?.rating,
      userEmail: user?.emailAddresses[0]?.emailAddress,
      createdAt: moment().format("DD-MM-YYYY HH:mm:ss"),
    });

    if (response) {
      toast.success("Answer saved successfully");
      setResults([]);
    }

    setUserAnswer("");
    setLoading(false);
    isUpdating = false; // Reset flag
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex flex-col items-center rounded-lg p-5">
        <WebcamIcon width={200} height={200} className="absolute " />
        <Webcam
          mirrored={true}
          style={{
            width: "100%",
            height: "300",
            zIndex: 10,
            borderRadius: "10px",
          }}
        />
      </div>
      <Button className="mt-10" onClick={startStopRecording}>
        {isRecording ? (
          <h2 className="flex items-center gap-2">
            <Mic />
            Recording...
          </h2>
        ) : (
          "Start Recording"
        )}
      </Button>
      {/* <Button
        onClick={() => {
          console.log(userAnswer);
        }}
      >
        Show answer
      </Button> */}
    </div>
  );
};

export default RecordAnsSection;
