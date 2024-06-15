"use client";

import React from "react";

import { FlipWords } from "./ui/flip-words";
import Link from "next/link";

export function FlipWordsDemo() {
  const words = ["better.", "cute.", "beautiful.", "modern."];

  return (
    <div className="flip-text">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        I build websites that are
        <FlipWords words={words} />
      </div>
    </div>
  );
}

function Flipwords() {
  return <div>Flip words</div>;
}

export default FlipWordsDemo;
