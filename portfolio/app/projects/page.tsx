"use client";
import {
  motion,
  useTransform,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fadeIn } from "../variants";

export default function Projects() {
  const container = useRef(null);
  const router = useRouter();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 25]);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const unsubscribe = scale.onChange((value) => {
      if (value >= 24 && !isLeaving) {
        setIsLeaving(true);
        setTimeout(() => router.push("/Allprojects"), 500);
      }
    });

    return () => unsubscribe();
  }, [scale, router, isLeaving]);

  return (
    <motion.div
      key="projects"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "tween", duration: 0.8 }}
      className="relative bg-primary w-full h-[200vh] overflow-hidden"
      ref={container}
    >
      <motion.div
        className="w-[100px] h-[100px] bg-background rounded-full flex justify-center items-center text-primary m-auto"
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView="show"
      >
        <p className="text-center">Enter</p>
      </motion.div>
      <AnimatePresence>
        {!isLeaving && (
          <motion.div
            style={{ scale }}
            className="container py-10 sticky top-0 left-0 right-0"
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView="show"
          >
            <motion.h1
              className="font-jacques text-background text-8xl md:text-9xl text-center m-auto"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              Projects
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
