"use client";
import React from "react";
import image1 from "@/public/image1.png";
import Image from "next/image";
import { motion } from "framer-motion";
// import Spline from '@splinetool/react-spline/next';

const TestimonialCard = () => {
  const cardData = [
    {
      name: "James Harrington",
      image: "/image1.png",
      description:
        "Prepaired AI turned my interview game around! The precisely tailored mock interviews and in-depth feedback truly boosted my confidence!",
    },
    {
      name: "Emily Dawson",
      image: "/image2.png",
      description:
        "Navigating finance interviews can be challenging, but prepaired AI made it seamless. The detailed feedback transformed my approach.",
    },
    {
      name: "Charlotte Whitmore",
      image: "/image3.png",
      description:
        "Effective communication is a project manager's cornerstone. Prepaired AI honed my skills, and I aced the interview at my dream company.",
    },
    {
      name: "William Fletcher",
      image: "/image4.png",
      description:
        "The AI mock interview felt like a real one! The feedback on my answers helped me improve, and I landed my dream job in just two weeks!",
    },
    {
      name: "Thomas Bennett",
      image: "/image5.png",
      description:
        "I struggled with technical interviews, but PrepAIred's mock sessions made me more prepared. The AI's suggestions and personalized insights were a game-changer!",
    },
    {
      name: "Olivia Sutton",
      image: "/image6.png",
      description:
        "PrepAIred helped me ace my frontend interview! The AI-generated questions were spot-on, and real-time feedback improved my confidence. Highly recommend it!",
    },
  ];
  return (
    <div className="flex justify-between w-auto flex-wrap gap-4">
      {cardData.map((cardData, key) => (
        <motion.article
          key={key}
          whileInView={{ y: [50, 0] }}
          transition={{ delay: `0.${key}`, transition: 2 }}
          className="rounded-xl w-full md:w-96 border border-neutral-900 bg-gradient-to-tr from-neutral-400/20  via-neutral-500/20 to-neutral-600/20 hover:bg-gradient-to-tr 
          backdrop-blur-2xl p-4"
        >
          {/* hover:from-neutral-600/20  hover:via-neutral-400/20 hover:to-neutral-300/20   */}
          <div className="flex items-center gap-4">
            <Image
              src={cardData.image}
              alt="Profile"
              width={64}
              height={64}
              className="rounded-full object-cover"
            />

            <div>
              <h3 className="text-lg font-medium text-white">
                {cardData.name}
              </h3>

              <div className="flow-root">
                <ul className="-m-1 flex flex-wrap">
                  <li className="p-1 leading-none">
                    <a href="#" className="text-xs font-medium text-gray-300">
                      Twitter
                    </a>
                  </li>

                  <li className="p-1 leading-none">
                    <a href="#" className="text-xs font-medium text-gray-300">
                      GitHub
                    </a>
                  </li>

                  <li className="p-1 leading-none">
                    <a href="#" className="text-xs font-medium text-gray-300">
                      Website
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <ul className="mt-4 space-y-2">
            <li>
              <a
                href="#"
                className="block h-full rounded-lg border border-neutral-700 p-4 hover:border-neutral-600"
              >
                {/* <strong className="font-medium text-white">Project A</strong> */}

                <p className="mt-1 text-xs font-medium text-gray-300">
                  {cardData.description}
                </p>
              </a>
            </li>
          </ul>
        </motion.article>
      ))}
    </div>
  );
};

export default TestimonialCard;
