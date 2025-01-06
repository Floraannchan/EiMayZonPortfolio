import { motion } from "framer-motion";
import FlipLink from "../TextDeco/page";
import SkillsSection from "./Skills";

export default function AboutMe() {
  return (
    <motion.div className="bg-foreground w-full">
      <div className="container py-10">
        <h1 className="font-jacques text-secondary text-3xl sm:text-4xl">
          <FlipLink>About-Me</FlipLink>
        </h1>

        <div className="flex flex-col justify-around items-center mt-10 lg:flex-row p-4 space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="hidden w-full lg:w-1/3 text-center md:inline">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl text-background bg-primary py-2">
              EI MAY ZON
            </h1>
            <p className="font-extrabold text-background bg-secondary py-1">
              Frontend Developer
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <p className="text-lg sm:text-xl lg:text-3xl mt-6 leading-relaxed text-primary text-justify">
              I’m a passionate frontend developer! I love the process of
              coding—transforming ideas into functional and visually appealing
              web experiences. Solving challenges and bringing designs to life
              keeps me inspired every day. Let’s build something amazing!
            </p>
          </div>
        </div>

        <div className="mt-10">
          <SkillsSection />
        </div>
      </div>
    </motion.div>
  );
}
