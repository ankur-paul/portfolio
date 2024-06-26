"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";

export default function SparklesPreview() {
  return (
    <div className="h-[5rem] w-50 bg-none dark:bg-black flex flex-col items-left justify-left overflow-hidden rounded-md">
      <h2 className="font-bold text-2xl text-left text-slate-900 dark:text-white relative z-20">
        Contact Me
      </h2>
      <div className="w-[11rem] h-5 relative">
        {/* Gradients */}
        <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-11 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        {/* <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" /> */}

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-[75%] h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full dark:bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
