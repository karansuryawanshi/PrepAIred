"use client";

import React from "react";
import { useEffect } from "react";
import Header from "./_component/Header";
// import Model from "./_component/Model";
// import SpotlightCard from "@/components/ui/spotlightCard.jsx";

import dynamic from "next/dynamic";

const DashboardLayout = ({ children }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://cdn.jsdelivr.net/npm/@google/model-viewer@4.0.0/dist/model-viewer.min.js";
    document.head.appendChild(script);
  }, []);

  return (
    <div className="bg-black w-screen h-screen">
      <Header></Header>
      <div className="mx-5 md:mx-20 lg:mx-36">{children}</div>
    </div>
  );
};

export default DashboardLayout;
