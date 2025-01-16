"use client";

import { useRef } from "react";
import Image from "next/image";
import FlipLink from "../TextDeco/page";
import { motion, useTransform, useScroll } from "framer-motion";
import Projects from "../projects/page";
import { fadeIn } from "../variants";

interface EducationItem {
  id: number;
  scaleRange: [number, number];
  scaleOutput: [number, number];
  content: {
    title?: string;
    date?: string;
    image: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
    degree?: string;
    school?: string;
    gpa?: string;
    topOffset?: string;
  };
}

export default function Education() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const educationData: EducationItem[] = [
    {
      id: 1,
      scaleRange: [0, 1],
      scaleOutput: [1, 0.85],
      content: {
        date: "2021 - 2025",
        image: {
          src: "/images/stamfordlogo.png",
          alt: "Stamford logo",
          width: 200,
          height: 200,
        },
        degree: "Bachelor of Information Technology",
        school: "Stamford International University (Thailand)",
        gpa: "GPA - 3.95",
        topOffset: "-10%",
      },
    },
    {
      id: 2,
      scaleRange: [0.25, 1],
      scaleOutput: [1, 0.9],
      content: {
        image: {
          src: "/images/ThaiCertificate.jpg",
          alt: "Thai certificate",
          width: 400,
          height: 400,
        },
        topOffset: "-6%",
      },
    },
    {
      id: 3,
      scaleRange: [0.5, 1],
      scaleOutput: [1, 0.95],
      content: {
        image: {
          src: "/images/EngCertificate.jpg",
          alt: "English certificate",
          width: 400,
          height: 400,
        },
        topOffset: "-2%",
      },
    },
  ];

  // Move useTransform to the top level
  const scaleValues = educationData.map((item) =>
    useTransform(scrollYProgress, item.scaleRange, item.scaleOutput)
  );

  const renderEducationItem = (item: EducationItem, index: number) => {
    const isFirstItem = index === 0;

    return (
      <motion.div
        key={item.id}
        style={{ scale: scaleValues[index] }}
        className="h-[100vh] sticky top-0 flex justify-center items-center"
      >
        <div
          className={`relative ${
            isFirstItem
              ? "py-5 px-8 rounded-lg text-primary z-10 bg-white flex flex-col gap-4 justify-center"
              : "w-[400px] h-[280px]"
          }`}
          style={{ top: item.content.topOffset || "0%" }}
        >
          {isFirstItem ? (
            <>
              <h2 className="font-bold">{item.content.date}</h2>
              <Image
                src={item.content.image.src}
                alt={item.content.image.alt}
                width={item.content.image.width}
                height={item.content.image.height}
                priority
              />
              <p className="font-bold text-xl">{item.content.degree}</p>
              <p>{item.content.school}</p>
              <p className="bg-primary text-white w-2/3 p-2">
                {item.content.gpa}
              </p>
            </>
          ) : (
            <Image
              src={item.content.image.src}
              alt={item.content.image.alt}
              width={item.content.image.width}
              height={item.content.image.height}
              className="object-fill"
              priority={index === 0}
            />
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <div
      ref={container}
      className="w-full h-screen relative"
      role="region"
      aria-label="Education timeline"
    >
      <div className="container">
        <div className="flex gap-8 flex-col">
          <div className="sticky top-0 h-screen">
            <motion.h1
              className="font-jacques text-secondary"
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView="show"
            >
              <FlipLink>EDUCATION</FlipLink>
            </motion.h1>
          </div>
          {educationData.map((item, index) => renderEducationItem(item, index))}
        </div>
      </div>
      <div>
        <Projects />
      </div>
    </div>
  );
}
