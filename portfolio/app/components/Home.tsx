"use client";

// import { useScroll } from "motion/react";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Hero from "./Hero";
// import { useRef } from "react";

export default function Home() {
  return (
    <main className="relative h-[100vh]">
      <Hero />
      <AboutMe />
      <Education />
    </main>
  );
}
