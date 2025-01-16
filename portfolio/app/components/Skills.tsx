"use client";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFigma,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, bgColor: "bg-orange-400" },
  { name: "CSS", icon: <FaCss3Alt />, bgColor: "bg-blue-400" },
  { name: "JavaScript", icon: <FaJs />, bgColor: "bg-yellow-400" },
  { name: "TypeScript", icon: <SiTypescript />, bgColor: "bg-blue-400" },
  { name: "React", icon: <FaReact />, bgColor: "bg-blue-400" },
  { name: "Next.js", icon: <SiNextdotjs />, bgColor: "bg-gray-400" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, bgColor: "bg-teal-400" },
  { name: "Java", icon: <DiJava />, bgColor: "bg-red-400" },
  { name: "Git", icon: <FaGitAlt />, bgColor: "bg-red-400" },
  { name: "Figma", icon: <SiFigma />, bgColor: "bg-purple-400" },
];

const SkillsSection = () => {
  return (
    <section className="py-10">
      <motion.div
        className="max-w-2xl mx-auto px-6 grid grid-cols-5 gap-6"
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView="show"
      >
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center p-4"
          >
            <div className="relative">
              <div
                className={`p-4 rounded-full ${skill.bgColor} text-4xl text-white shadow-md`}
              >
                {skill.icon}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsSection;
