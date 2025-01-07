"use client";

import React from "react";
// import Header from "./_component/Header";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Scene = ({ children }) => {
  return (
    <Canvas>
      <directionalLight position={[-5, -5, 5]} intensity={4} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
