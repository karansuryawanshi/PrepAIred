"use client";
import React, { useEffect, useState } from "react";
import { WebcamIcon } from "lucide-react";
import Webcam from "react-webcam";
import { Button } from "@/components/ui/button";
import useSpeechToText from "react-hook-speech-to-text";
import { Mic } from "lucide-react";
import { toast } from "sonner";
import { chatSession } from "@/utils/GeminiAiModel";

const RecordAnsSection = ({ mockInterviewQuestions, activeIndexQuestion }) => {
  const [userAnswer, setUserAnswer] = useState("");

  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  useEffect(() => {
    results.map((result) => {
      setUserAnswer((prevAns) => prevAns + result?.transcript);
    });
  }, [results]);

  const saveAnswer = async () => {
    if (isRecording) {
      stopSpeechToText();
      if (userAnswer?.length < 10) {
        toast("Error while saving your answer");
        return;
      }
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
    } else {
      startSpeechToText();
    }
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex flex-col mt-20 items-center bg-secondary rounded-lg p-5">
        <WebcamIcon width={200} height={200} className="absolute" />
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
      <Button className="my-10" onClick={saveAnswer}>
        {isRecording ? (
          <h2 className="flex items-center gap-2">
            <Mic />
            Recording...
          </h2>
        ) : (
          "Start Recording"
        )}
      </Button>
      <Button
        onClick={() => {
          console.log(userAnswer);
        }}
      >
        Show answer
      </Button>
    </div>
  );
};

export default RecordAnsSection;
