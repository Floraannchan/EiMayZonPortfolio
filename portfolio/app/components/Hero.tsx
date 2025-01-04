import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Flip from "../TextDeco/page";
import NavBar from "./Navbar";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300, 600], [0, -200, 0]); // Y movement
  const scale = useTransform(scrollY, [0, 300, 600], [1, 0.8, 1]); // Scale
  const rotate = useTransform(scrollY, [0, 300, 600], [0, 10, 0]); // Rotation
  // Fades out image

  return (
    <motion.div className="p-[2.5rem] container">
      <div>
        <NavBar />
      </div>
      <div className="flex justify-between lg:mt-24 flex-col md:flex-row mt-10 h-screen bg-background">
        <div>
          <div className="font-jacques text-secondary">
            <h1>
              <Flip>CODE</Flip>
            </h1>
            <h1 className=" ml-7 lg:ml-28 ">
              <Flip>DESIGN</Flip>
            </h1>
            <h1 className="ml-16 lg:ml-[16rem] ">
              <Flip>INNOVATE</Flip>
            </h1>
          </div>
          <div>
            <p className="text-primary mt-10 text-[16px] lg:text-[24px] ">
              I build sleek, modern websites tailored to your needs.
            </p>
          </div>
        </div>

        <motion.div style={{ scale, y, rotate }} className="relative">
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
