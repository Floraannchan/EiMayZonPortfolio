import { motion } from "framer-motion";
import Image from "next/image";
import Flip from "../TextDeco/page";
import NavBar from "./Navbar";

const transformVariant = {
  start: {
    x: "-100vw",
  },
  end: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      delay: 0.5,
    },
  },
};
const ImageVariant = {
  start: {
    x: "100vw",
  },
  end: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      delay: 0.5,
    },
  },
};
export default function Hero() {
  return (
    <motion.div className="p-[2.5rem] container h-[100vh]">
      <div>
        <NavBar />
      </div>
      <div className="flex gap-4 md:justify-between lg:mt-24 flex-col md:flex-row mt-20 h-screen bg-background">
        <div>
          <motion.div
            variants={transformVariant}
            initial="start"
            animate="end"
            className="font-jacques text-secondary"
          >
            <h1>
              <Flip>CODE</Flip>
            </h1>
            <h1 className=" ml-7 lg:ml-28 ">
              <Flip>DESIGN</Flip>
            </h1>
            <h1 className="ml-16 lg:ml-[16rem] ">
              <Flip>INNOVATE</Flip>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "tween",
              duration: 1,
            }}
            className="mb-0"
          >
            <p className="text-primary text-[16px] lg:text-[22px] mt-32">
              I build sleek, modern websites tailored to your needs.
            </p>
          </motion.div>
        </div>

        <motion.div variants={ImageVariant} initial="start" animate="end">
          <Image
            src="/images/mypic.jpg"
            alt="mypic"
            width={400}
            height={400}
            className="rounded-full"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
