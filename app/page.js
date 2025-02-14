"use client";
import mainImage from "@/public/assets/mainImage.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HoverEffect } from "@/src/components/ui/card-hover-effect";
import BlurText from "@/src/blocks/TextAnimations/BlurText/BlurText";
import coinbase from "@/public/assets/coinbase.webp";
import meta from "@/public/assets/meta.webp";
import microsoft from "@/public/assets/microsoft.webp";
import spacex from "@/public/assets/spacex.png";
import spotify from "@/public/assets/spotify.webp";
import SpotlightCard from "@/components/ui/spotlightCard.jsx";
import generateImage from "@/public/magic.png";
import { AudioLines } from "lucide-react";
import { ThumbsUp } from "lucide-react";
import TestimonialCard from "@/components/TestimonialCard";
import { useRouter } from "next/navigation";

import "@google/model-viewer";

export default function Home() {
  if (typeof window !== "undefined") {
    // Code that uses window or self
    const navigate = useRouter();

    const redirect = () => {
      navigate.push("/dashboard");
      console.log("callsed");
    };
  }

  return (
    <div className=" bg-blue-50">
      <div className="bg-black">
        <header className="h-14 sticky top-2 z-50 flex items-center justify-center">
          <div className="text-white max-w-96 h-full pt-4 border-2 backdrop-blur-2xl bg-neutral-600/30 rounded-full">
            <ul className="flex gap-10 px-4 text-sm xs:text-md">
              <li>Home</li>
              <li>Question</li>
              <li>About</li>
              <li>Contact us</li>
            </ul>
          </div>
        </header>

        <main className="overflow-hidden ">
          <div className="relative w-full h-screen bg-[url('/assets/bannerBg.avif')] bg-cover bg-center">
            <video
              src="/assets/robot.mp4"
              className="inset-0 w-full h-full object-cover mix-blend-screen hidden sm:block"
              autoPlay
              muted
              loop
            ></video>
            <div className="absolute inset-0">
              <div className="flex flex-col gap-4 backdrop-blur-xl bg-gray/30 lg:p-16 rounded-lg w-auto sm:w-1/2 my-32 text-center mx-8">
                <h1 className="lg:text-6xl text-3xl text-center font-bold text-soft-ivory ">
                  <span className="text-yellow-500 backdrop-filter-xl">PR</span>
                  EP
                  <span className="text-red-500">AI</span>R
                  <span className="text-blue-400">ED</span>
                </h1>
                <div className="text-soft-ivory text-xl flex-wrap flex items-center justify-center">
                  <BlurText
                    text="Your AI powered path to Interview Success!"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-sm text-center lg:text-2xl mb-4 px-2"
                  />
                </div>
                <div className="absolute inset-0 border-2 border-stone-700 bg-gray-300/20 rounded-lg backdrop-blur-lg"></div>
                <div className="z-50 inset-10 py-4 cursor-pointer">
                  <Button onClick={redirect}>Get Started</Button>
                </div>
              </div>
              <div className="relative bottom-0 left-0 w-full h-1/2 bg-cover bg-center opacity-20"></div>
            </div>
            {/* <div className="relative w-full h-screen bg-[url('/assets/bannerBg.avif')] bg-cover bg-center rotate-180 mt-10"></div> */}
          </div>
          <div className="bg-black text-soft-ivory text-3xl font-extralight text-center py-4">
            <p>Get hired by top companies worldwide</p>
            <div className="bg-slate-200/30 backdrop-blur-2xl my-10 px-4 py-10 w-auto mx-8 md:mx-16 rounded-lg flex items-center justify-center flex-wrap gap-10">
              <Image src={coinbase} alt="coinbase" width={150} height={150} />
              <Image src={meta} alt="coinbase" width={150} height={150} />
              <Image src={microsoft} alt="coinbase" width={150} height={150} />
              <Image src={spacex} alt="coinbase" width={150} height={150} />
              <Image src={spotify} alt="coinbase" width={150} height={150} />
            </div>
          </div>
          <div className="bg-black flex items-center justify-center">
            <div className="h-auto w-11/12">
              <h1 className="text-xl text-gray-400 mb-8">How it works</h1>
              <section className="w-full flex lg:flex-row flex-col">
                <div className="lg:w-1/2 w-auto">
                  <p className="text-gray-300 font-light h-auto bg-neutral-600/40 backdrop-blur-2xl rounded-lg border border-neutral-600 p-5">
                    Our AI mock interviews are powered by gemini flash 1.5, your
                    job title, years of Experince, resume, and a job
                    description. When combined, we create a personalized
                    interview prep plan for you. If you want to see the quality
                    of our questions and feedback, we have thousands of
                    interview questions and answers that you can view.
                  </p>

                  <p className="text-gray-300 font-light h-auto mt-10 bg-neutral-600/40 backdrop-blur-2xl rounded-lg p-5 border border-neutral-600">
                    After you answer each question, you'll get instant AI
                    feedback and an improved answer showing how you could have
                    answered better using proven interview techniques like the
                    STAR method.
                  </p>
                  <p className="text-gray-300 font-light h-auto mt-10 bg-neutral-600/40 backdrop-blur-2xl rounded-lg p-5 border border-neutral-600">
                    Generating your first interview is free.
                  </p>
                </div>
                <div className="w-auto mx-4 flex items-center justify-center ">
                  <model-viewer
                    className=" rounded-xl"
                    src="/robot_playground.glb"
                    animation-name="Wave"
                    alt="A 3D model"
                    auto-rotate
                    autoplay
                    camera-orbit="0deg 70deg 10m"
                    field-of-view="50deg"
                    camera-controls
                    style={{ width: "600px", height: "400px" }}
                  />
                </div>
              </section>
              <section className="flex gap-6 flex-wrap md:flex-nowrap">
                <article className="w-auto h-auto mt-16">
                  <SpotlightCard
                    className="custom-spotlight-card flex flex-col"
                    spotlightColor="rgba(255, 255, 255, 0.2)"
                  >
                    <Image
                      className="w-8 h-8"
                      src={generateImage}
                      alt="Generate image"
                      width="50px"
                      height="50px"
                    ></Image>
                    <h1 className="text-lg text-white py-4">
                      Step 1: Generate questions
                    </h1>
                    <p className="text-gray-400">
                      Give us a job description and we'll generate behavioral
                      and technical interview questions tailored to your profile
                      and the job. Get more as needed.
                    </p>
                  </SpotlightCard>
                </article>

                <article className="w-auto h-auto mt-16">
                  <SpotlightCard
                    className="custom-spotlight-card flex flex-col"
                    spotlightColor="rgba(255, 255, 255, 0.2)"
                  >
                    <AudioLines className="w-8 h-8 text-gray-500" />
                    <h1 className="text-lg text-white py-4">
                      Step 2: Practice answering
                    </h1>
                    <p className="text-gray-400">
                      Record your answers with audio or text, simulating the
                      real interview experience. We also provide you with a
                      personalized score for each answer.
                    </p>
                  </SpotlightCard>
                </article>
                <article className="w-auto h-auto mt-16">
                  <SpotlightCard
                    className="custom-spotlight-card flex flex-col"
                    spotlightColor="rgba(255, 255, 255, 0.2)"
                  >
                    <ThumbsUp className="w-8 h-8 text-gray-500" />

                    <h1 className="text-lg text-white py-4">
                      Step 3: Get feedback
                    </h1>
                    <p className="text-gray-400">
                      Get instant feedback and suggestions on how to improve
                      your answers based on interview best practices. Your
                      Himalayas profile ensures all feedback is personal.
                    </p>
                  </SpotlightCard>
                </article>
              </section>
              <div>
                <h1 className="text-gray-400 py-8 text-xl">Success Stories</h1>
                <TestimonialCard></TestimonialCard>
              </div>
              {/* <div className=""> */}
              <footer className="flex items-center justify-center ">
                <div className="flex border border-neutral-600 rounded-xl backdrop-blur-2xl gap-24 my-10 bg-gradient-to-tr px-20 from-neutral-600/30 to-neutral-600/30">
                  <section className=" flex items-center justify-center flex-col gap-4 py-4">
                    <Image
                      src={mainImage}
                      alt="logo"
                      width={300}
                      height={300}
                    ></Image>
                    <p className=" text-xs text-gray-300">
                      Prepare interview preparation with PrepAIred we are your
                      well wishers!
                    </p>
                  </section>
                  <section className="my-4 md:block hidden">
                    <h1 className="text-gray-300">Prepaired</h1>
                    <ul className="text-gray-400 gap-1 pt-2">
                      <li>About us</li>
                      <li>Community</li>
                      <li>Tech Stack</li>
                      <li>Terms and Conditions</li>
                      <li>Privacy Policy</li>
                      <li>contact us</li>
                    </ul>
                  </section>
                  <section className="my-4 md:block hidden">
                    <h1 className="text-gray-300">Community</h1>
                    <ul className="text-gray-400 flex flex-col gap-1 pt-2">
                      <li>Join Discord</li>
                      <li>Follow on Twitter</li>
                      <li>Email newsletter</li>
                      <li>Github Discussion</li>
                    </ul>
                  </section>
                </div>
              </footer>
              {/* </div> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
