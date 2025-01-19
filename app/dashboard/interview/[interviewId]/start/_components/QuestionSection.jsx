import React from "react";

const QuestionSection = ({ mockInterviewQuestions, activeIndexQuestion }) => {
  return (
    <div className=" p-5 border rounded-lg">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {mockInterviewQuestions &&
          mockInterviewQuestions.map((question, index) => (
            <h2
              key={index}
              className={`p-2 bg-secondary text-xs md:text-sm text-center cursor-pointer rounded-full my-5 ${
                activeIndexQuestion == index && "bg-blue-700 text-white"
              }`}
            >
              Question # {index + 1}
            </h2>
          ))}

        {/* <h2>{mockInterviewQuestions[activeIndexQuestion].question}</h2> */}
      </div>
    </div>
  );
};

export default QuestionSection;
