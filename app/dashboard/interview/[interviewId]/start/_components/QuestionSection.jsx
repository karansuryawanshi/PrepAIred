"use client";
import { index } from "drizzle-orm/mysql-core";
import { Volume2 } from "lucide-react";
import React, { useEffect } from "react";
import { Lightbulb } from "lucide-react";

const QuestionSection = ({ mockInterviewQuestions, activeIndexQuestion }) => {
  useEffect(() => {
    textToSpeech();
  }, [activeIndexQuestion]);

  const textToSpeech = () => {
    if ("speechSynthesis" in window) {
      const msg = new SpeechSynthesisUtterance(
        mockInterviewQuestions[activeIndexQuestion].question
      );
      window.speechSynthesis.speak(msg);
    } else {
      alert("Your browser doesn't support text to speech!");
    }
  };
  return (
    mockInterviewQuestions && (
      <div className=" p-5 border rounded-lg">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {mockInterviewQuestions.map((key, index) => (
            <div
              key={index}
              className={`p-3 border text-xs md:text-sm cursor-pointer rounded-md ${
                activeIndexQuestion === index
                  ? "bg-blue-300 text-blue-800"
                  : "bg-white"
              }`}
            >
              <p>Question #{index + 1}</p>
            </div>
          ))}
        </div>
        <h2 className="my-5 text-sm md:text-md">
          {mockInterviewQuestions[activeIndexQuestion].question}
        </h2>
        <Volume2
          className="cursor-pointer"
          onClick={() =>
            textToSpeech(mockInterviewQuestions[activeIndexQuestion].question)
          }
        />
        <div className="border rounded-lg p-5 bg-blue-100 my-10">
          <h2 className="flex gap-2 items-center text-blue-700">
            <Lightbulb></Lightbulb>
            <strong>Note:</strong>
          </h2>
          <h2 className="text-sm text-blue-600 my-2">
            Click on record answer when you want ot record answer. At the end of
            interview we will give you a feedback along with correct answer for
            each of the question and your answer to compare it.
          </h2>
        </div>
      </div>
    )
  );
};

export default QuestionSection;
