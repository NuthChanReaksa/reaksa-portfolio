"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
      <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row items-center justify-center px-6 sm:px-10 md:px-20 mt-20 sm:mt-40 w-full z-[20]"
      >
        <div className="h-full w-full flex flex-col gap-5 justify-center text-center sm:text-left">
          <motion.div
              variants={slideInFromTop}
              className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] flex items-center justify-center sm:justify-start"
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-xs sm:text-sm md:text-base text-center sm:text-left max-w-[250px] sm:max-w-none break-words">
              Fullstack Developer & Blockchain & DevOps Engineering
            </h1>

          </motion.div>

          <motion.div
              variants={slideInFromLeft(0.5)}
              className="flex flex-col gap-6 mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-white max-w-full sm:max-w-[600px]"
          >
          <span>
            Turning
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
              {" "} visions {" "}
            </span>
            into digital reality
          </span>
          </motion.div>

          <motion.p
              variants={slideInFromLeft(0.8)}
              className="text-lg text-gray-400 my-5 max-w-full sm:max-w-[600px]"
          >
            I&apos;m a Full Stack Developer passionate about crafting seamless
            digital solutions in Web, Mobile, and Blockchain. Explore my work and
            let’s innovate together.
          </motion.p>

          <motion.a
              variants={slideInFromLeft(1)}
              className="py-2 button-primary text-center text-white cursor-pointer rounded-lg w-full sm:w-auto max-w-[200px] mx-auto sm:mx-0"
          >
            Get Started!
          </motion.a>
        </div>

        <motion.div
            variants={slideInFromRight(0.8)}
            className="w-full h-full flex justify-center items-center mt-10 md:mt-0"
        >
          <Image
              src="/mainIconsdark.svg"
              alt="Development Illustration"
              width={350}
              height={350}
              className="sm:w-[500px] sm:h-[500px] md:w-[650px] md:h-[650px]"
          />
        </motion.div>
      </motion.div>
  );
};

export default HeroContent;
