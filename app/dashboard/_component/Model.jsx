"use client";

import React from "react";
import { useEffect } from "react";
import dynamic from "next/dynamic";

const Model = ({ children }) => {
  useEffect(() => {
    // Dynamically load model-viewer from the CDN
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://cdn.jsdelivr.net/npm/@google/model-viewer@4.0.0/dist/model-viewer.min.js";
    document.head.appendChild(script);
  }, []);

  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        {/* <h1>3D Model Viewer in Next.js</h1> */}
        <model-viewer
          src="/robot_playground.glb" // Path to your .glb file
          alt="A 3D model of an object"
          camera-controls
          auto-rotate
          ar
          autoPlay
          // auto-rotate-delay="2"
          style={{ width: "100%", height: "500px" }}
        ></model-viewer>
      </div>
    </div>
  );
};

export default Model;
