import { motion } from "framer-motion";
import FlipLink from "../TextDeco/page";
import SkillsSection from "./Skills";
import { fadeIn } from "../variants";
export default function AboutMe() {
  return (
    <motion.div className="bg-foreground w-full h-full ">
      <motion.div className="container py-5">
        <motion.h1
          className="font-jacques text-secondary text-3xl sm:text-4xl "
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView="show"
        >
          <FlipLink>About-Me</FlipLink>
        </motion.h1>

        <div className="flex justify-between  gap-14 flex-col">
          <motion.div
            className="w-1/2 "
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView="show"
          >
            <p
              className="text-xl lg:text-2xl leading-relaxed text-primary indent-1 mt-11 
            "
            >
              I’m a passionate{" "}
              <motion.span
                className=" underline decoration-text_primay "
                variants={fadeIn("right", 0.8)}
                animate={{}}
              >
                frontend developer
              </motion.span>
              . I love the process of coding—transforming ideas into functional
              and visually appealing web experiences. Solving challenges and
              bringing designs to life keeps me inspired every day. Let’s build
              something amazing!
            </p>
          </motion.div>
          <div>
            <SkillsSection />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
