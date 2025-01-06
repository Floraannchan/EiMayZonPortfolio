"use client";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFigma,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { motion, useTime, useTransform } from "framer-motion";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Java", icon: <DiJava className="text-red-600" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "Figma", icon: <SiFigma className="text-purple-500" /> },
];

const SkillsSection = () => {
  const time = useTime();
  const transform = useTransform(time, [0, 3000], [0, 360], { clamp: false });
  const rotateBg = useTransform(transform, (r) => {
    return `conic-gradient(from ${r}deg, var(--primary), var(--secondary))`;
  });

  return (
    <section className="py-10">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center p-4 rounded-md"
          >
            <div className="relative">
              <div className="relative p-2 rounded-lg text-4xl z-10 bg-foreground">
                {skill.icon}
              </div>
              <motion.div
                className="absolute -inset-1 rounded-md"
                style={{
                  background: rotateBg,
                }}
              ></motion.div>
            </div>

            {/* <p
              className="mt-2 text-sm font-medium"
              style={{ color: "var(--text)" }}
            >
              {skill.name}
            </p> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
