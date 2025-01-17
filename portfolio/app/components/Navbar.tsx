"use client";
import { TiThMenuOutline } from "react-icons/ti";
import { GiTireIronCross } from "react-icons/gi";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const menuVariants = {
  closed: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.2 },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

export default function NavBar() {
  const [activeButton, setActiveButton] = useState("info");
  const [toggle, setToggle] = useState(false);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "tween",
        duration: 1,
      }}
    >
      <div className="flex justify-between p-4">
        <div>
          <h1 className="text-[24px] font-bold text-text_primay">EI MAY ZON</h1>
          <p className="text-[14px] text-foreground bg-primary text-center ">
            web developer
          </p>
        </div>

        <div className="hidden md:flex w-[160px] h-[50px] bg-foreground rounded-full justify-around items-center">
          <Link href="/Home">
            <button
              className={`text-white text-[20px] px-4 py-1.5 rounded-full ${
                activeButton === "info" ? "bg-primary" : ""
              }`}
              onClick={() => setActiveButton("info")}
            >
              Info
            </button>
          </Link>
          <Link href="/Allprojects">
            <button
              className={`text-white text-[20px] px-4 py-1.5 rounded-full ${
                activeButton === "work" ? "bg-primary" : ""
              }`}
              onClick={() => setActiveButton("work")}
            >
              Work
            </button>
          </Link>
        </div>
        <div
          className="w-[60px] h-[60px] rounded-full bg-foreground flex justify-center items-center cursor-pointer"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? (
            <GiTireIronCross className="size-6 text-primary" />
          ) : (
            <TiThMenuOutline className="size-6 text-primary" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            className="absolute top-full right-0 w-48 bg-foreground rounded-lg shadow-lg z-50 md:hidden"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex flex-col p-4 space-y-3">
              <Link href="/Home">
                <button
                  className={`text-white text-[20px] px-4 py-2 rounded-full w-full text-left ${
                    activeButton === "info"
                      ? "bg-primary"
                      : "hover:bg-primary/50"
                  }`}
                  onClick={() => {
                    setActiveButton("info");
                    setToggle(false);
                  }}
                >
                  Info
                </button>
              </Link>
              <Link href="/Allprojects">
                <button
                  className={`text-white text-[20px] px-4 py-2 rounded-full w-full text-left ${
                    activeButton === "work"
                      ? "bg-primary"
                      : "hover:bg-primary/50"
                  }`}
                  onClick={() => {
                    setActiveButton("work");
                    setToggle(false);
                  }}
                >
                  Work
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
