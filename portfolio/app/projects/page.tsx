"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Projects() {
  const container = useRef(null);
  const router = useRouter();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 25]);

  useEffect(() => {
    const unsubscribe = scale.onChange((value) => {
      if (value >= 24) {
        router.push("/Allprojects");
      }
    });

    return () => unsubscribe();
  }, [scale, router]);

  return (
    <div
      ref={container}
      className="relative bg-primary w-full h-[200vh] overflow-hidden"
    >
      <div className="w-[100px] h-[100px] bg-background rounded-full flex justify-center items-center text-primary m-auto">
        <p className="text-center">Enter</p>
      </div>
      <motion.div
        style={{ scale }}
        className="container py-10 sticky top-0 left-0 right-0"
      >
        <h1 className="font-jacques text-background text-9xl text-center m-auto">
          Projects
        </h1>
      </motion.div>
    </div>
  );
}
