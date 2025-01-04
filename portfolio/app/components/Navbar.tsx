"use client";
import Image from "next/image";
import { TiThMenuOutline } from "react-icons/ti";
import { GiTireIronCross } from "react-icons/gi";
import { useState, useRef, useEffect, MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProfileVariant = {
  initial: {
    opacity: 0,
    x: -30,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 18,
      mass: 0.75,
    },
  },
};

const menuVariants = {
  closed: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export default function NavBar() {
  const [activeButton, setActiveButton] = useState("info");
  const [toggle, setToggle] = useState(false);
  const [profile, setProfile] = useState(false);
  const [shake, setShake] = useState(true);
  const ref = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    if (!ref.current) return;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX, y: middleY });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    const timer = setTimeout(() => setShake(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const { x, y } = position;

  return (
    <div className="relative">
      <motion.div
        className="flex justify-between p-4"
        transition={{ type: "tween", damping: 18, mass: 0.75 }}
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Profile Section */}
        <motion.div onClick={() => setProfile(!profile)}>
          <motion.div
            className={
              profile
                ? `text-text_primay`
                : `w-[60px] h-[60px] bg-foreground rounded-full flex items-center justify-center`
            }
            style={{ position: "relative" }}
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={shake ? { x: [0, -10, 10, -10, 10, 0] } : { x, y }}
            transition={
              shake
                ? { duration: 0.5, ease: "easeInOut", repeat: 2 }
                : { type: "spring", stiffness: 150, damping: 15, mass: 0.1 }
            }
          >
            {profile ? (
              <motion.div
                variants={ProfileVariant}
                initial="initial"
                animate="animate"
              >
                <h1 className="text-[24px] font-bold">EI MAY ZON</h1>
                <p className="text-[14px] text-foreground bg-primary text-center">
                  web developer
                </p>
              </motion.div>
            ) : (
              <Image
                src="/images/profile1.jpg"
                alt="profile 1"
                width={30}
                height={30}
                className="rounded-full"
              />
            )}
          </motion.div>
        </motion.div>

        {/* Desktop Navigation Buttons */}
        <motion.div className="hidden md:flex w-[160px] h-[50px] bg-foreground rounded-full justify-around items-center">
          <motion.button
            className={`text-white text-[20px] px-4 py-1.5 rounded-full ${
              activeButton === "info" ? "bg-primary" : ""
            }`}
            onClick={() => setActiveButton("info")}
          >
            Info
          </motion.button>

          <motion.button
            className={`text-white text-[20px] px-4 py-1.5 rounded-full ${
              activeButton === "work" ? "bg-primary" : ""
            }`}
            onClick={() => setActiveButton("work")}
          >
            Work
          </motion.button>
        </motion.div>

        {/* Menu Toggle Button */}
        <motion.div
          className="w-[70px] h-[70px] rounded-full bg-foreground flex justify-center items-center cursor-pointer"
          drag="y"
          dragConstraints={{
            top: 0,
            bottom: 700,
          }}
          onClick={() => setToggle(!toggle)}
          whileHover={{ backgroundColor: "#0077B6" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {toggle ? (
            <GiTireIronCross className="size-8 text-primary" />
          ) : (
            <TiThMenuOutline className="size-8 text-primary" />
          )}
        </motion.div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            className="absolute top-full right-0 w-48 bg-foreground rounded-lg shadow-lg overflow-hidden z-50 md:hidden"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.div className="flex flex-col p-4 space-y-3">
              <motion.button
                className={`text-white text-[20px] px-4 py-2 rounded-full w-full text-left transition-colors ${
                  activeButton === "info" ? "bg-primary" : "hover:bg-primary/50"
                }`}
                onClick={() => {
                  setActiveButton("info");
                  setToggle(false);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Info
              </motion.button>

              <motion.button
                className={`text-white text-[20px] px-4 py-2 rounded-full w-full text-left transition-colors ${
                  activeButton === "work" ? "bg-primary" : "hover:bg-primary/50"
                }`}
                onClick={() => {
                  setActiveButton("work");
                  setToggle(false);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Work
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
