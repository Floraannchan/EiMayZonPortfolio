import { motion } from "framer-motion";
import FlipLink from "../TextDeco/page";
import SkillsSection from "./Skills";

export default function AboutMe() {
  // const { scrollY } = useScroll();
  // const opacity = useTransform(scrollY, [300, 600], [0, 1]); // Fades in
  // const y = useTransform(scrollY, [300, 600], [100, 0]); // Slides up

  return (
    <motion.div className="bg-foreground w-full">
      <div className="container py-10">
        <h1 className="font-jacques text-secondary">
          <FlipLink>About-Me</FlipLink>
        </h1>

        <div className="flex flex-col justify-around items-center mt-10 h-2/4 lg:flex-row p-4">
          <div className="w-1/3">
            <h1 className="text-4xl text-background bg-primary text-center">
              EI MAY ZON
            </h1>
            <p className="font-extrabold text-background text-center bg-secondary">
              Frontend Developer
            </p>
          </div>

          <div className="lg:w-1/2">
            <p className="text-3xl mt-6 leading-relaxed text-primary">
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
