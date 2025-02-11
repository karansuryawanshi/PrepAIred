"use client";
import mainImage from "@/public/assets/Logo.png";
import Image from "next/image";
import img from "@/public/assets/bgImage.jpeg";
import { Button } from "@/components/ui/button";
import { HoverEffect } from "@/src/components/ui/card-hover-effect";

export default function Home() {
  return (
    <div>
      <header className="h-14 bg-secondary">Hello!</header>
      <main className="">
        <div className="bg-chocoa flex items-center justify-space">
          <div className="backdrop-blur-xl bg-gray/30">
            <Image src={mainImage} alt="" width={700} height={100} />
            {/* <div className="absolute inset-0 rounded-lg backdrop-blur-xl"></div> */}
          </div>
          <div className="flex flex-col gap-4 backdrop-blur-xl bg-gray/30 p-16 rounded-lg">
            <h1 className="text-6xl font-bold text-soft-ivory ">
              <span className="text-yellow-500 backdrop-filter-xl">PR</span>EP
              <span className="text-red-500">AI</span>R
              <span className="text-blue-400">ED</span>
            </h1>
            <p className="text-white text-xl">
              Your <span className="text-red-400">AI powered</span> path to
              Interview Success!
            </p>
            <div className="absolute inset-0 border-2 border-stone-700 bg-stone-200/10 rounded-lg backdrop-blur-xl"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
