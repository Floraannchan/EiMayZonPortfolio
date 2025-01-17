"use client";
import Image from "next/image";
import FlipLink from "../TextDeco/page";
import { FaPaintBrush, FaReact } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiRedux,
  SiFigma,
} from "react-icons/si";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export default function Allprojects() {
  const router = useRouter();

  const handleClickToHome = () => {
    router.push("/Home");
  };

  const handleGitHubRedirect = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div>
      <motion.div
        className="flex items-center p-8"
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView="show"
      >
        <button onClick={handleClickToHome}>
          <FaArrowLeft className="text-black sm:text-3xl md:text-3xl lg:text-4xl " />
        </button>

        <h1 className="font-jacques text-secondary m-auto">
          <FlipLink>Projects</FlipLink>
        </h1>
      </motion.div>

      <motion.div
        className="bg-primary w-full flex justify-center items-center gap-16 flex-col md:flex-row p-16"
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        whileInView="show"
      >
        <div>
          <Image
            src="/images/ResumeProject.png"
            alt="ResumeProject"
            width={400}
            height={400}
          />
        </div>
        <div className="h-[220px]">
          <h1 className="text-4xl">Resume Builder</h1>
          <p className="text-gray-400">
            Easy to create resume with selected template
          </p>
          <div className="flex gap-4 mt-8 text-2xl">
            <div className="p-2 rounded-full bg-white">
              <FaHtml5 title="HTML" className="text-[#E34F26]" />
            </div>
            <div className="p-2 rounded-full bg-[#1572B6]">
              <FaCss3Alt title="CSS" className="text-white" />
            </div>
            <div className="p-2 rounded-full bg-[#F7DF1E]">
              <FaJs title="JavaScript" className="text-black" />
            </div>
          </div>
          <button
            className="bg-background text-primary px-8 py-2 rounded-md mt-8 mb-8"
            onClick={() =>
              handleGitHubRedirect(
                "https://github.com/Floraannchan/ResumeBuilder.git"
              )
            }
          >
            See More
          </button>
        </div>
      </motion.div>

      <motion.div
        className="bg-secondary w-full flex justify-center items-center gap-16 flex-col md:flex-row-reverse p-16"
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView="show"
      >
        <div>
          <Image
            src="/images/Ebook.png"
            alt="EbookProject"
            width={400}
            height={400}
          />
        </div>
        <div className="h-[220px]">
          <h1 className="text-4xl">Ebook library</h1>
          <p className="text-gray-400">Free online books</p>
          <div className="flex gap-4 mt-8 text-2xl">
            <div className="p-2 rounded-full bg-white">
              <SiNextdotjs title="Next.js" className="text-black" />
            </div>
            <div className="p-2 rounded-full bg-[#38B2AC]">
              <SiTailwindcss title="Tailwind CSS" className="text-white" />
            </div>
            <div className="p-2 rounded-full bg-[#0055FF]">
              <SiFramer title="Framer Motion" className="text-white" />
            </div>
            <div className="p-2 rounded-full bg-[#FFB703]">
              <FaPaintBrush title="Next-Theme" className="text-white" />
            </div>
          </div>
          <button
            className="bg-background text-primary px-8 py-2 rounded-md mt-8"
            onClick={() =>
              handleGitHubRedirect(
                "https://github.com/Floraannchan/ebooklibrary"
              )
            }
          >
            See More
          </button>
        </div>
      </motion.div>

      <motion.div
        className="bg-text_primay w-full flex justify-center items-center gap-16 flex-col md:flex-row p-16"
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        whileInView="show"
      >
        <div>
          <Image
            src="/images/businessPage.png"
            alt="EbookProject"
            width={400}
            height={400}
          />
        </div>
        <div className="h-[220px]">
          <h1 className="text-4xl">Business Online Shop</h1>
          <p className="text-gray-100">Mini eCommerce</p>
          <div className="flex gap-4 mt-8 text-2xl">
            <div className="p-2 rounded-full bg-[#61DAFB]">
              <FaReact title="React" className="text-black" />
            </div>
            <div className="p-2 rounded-full bg-[#38B2AC]">
              <SiTailwindcss title="Tailwind CSS" className="text-white" />
            </div>
            <div className="p-2 rounded-full bg-[#764ABC]">
              <SiRedux title="Redux Toolkit" className="text-white" />
            </div>
            <div className="p-2 rounded-full bg-[#F24E1E]">
              <SiFigma title="Figma" className="text-white" />
            </div>
          </div>
          <button
            className="bg-background text-primary px-8 py-2 rounded-md mt-8"
            onClick={() =>
              handleGitHubRedirect(
                "https://github.com/Floraannchan/YourBuddyOnlineShop.git"
              )
            }
          >
            See More
          </button>
        </div>
      </motion.div>
    </div>
  );
}
