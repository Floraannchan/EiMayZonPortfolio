"use client";

import AboutMe from "./AboutMe";
import Education from "./Education";
import Hero from "./Hero";

export default function Home() {
  return (
    <main className="relative h-[100vh]">
      <Hero />
      <AboutMe />
      <Education />
    </main>
  );
}
