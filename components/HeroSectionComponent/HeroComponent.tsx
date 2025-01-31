"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import React from "react";

const HeroComponent = () => {
    return (
        <section>
            <div className="w-screen h-screen relative">
                {/* Background Section */}
                <div
                    className="flex items-center w-full h-full bg-cover bg-center px-6 sm:px-10 md:px-20"
                    style={{ backgroundImage: "url(/main-bg.webp)" }}
                >
                    <div className="pb-20 flex flex-col gap-5 z-[10] max-w-[750px] text-center sm:text-left">
                        {/* Heading */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-semibold">
                            Unlock Limitless Creativity with
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                {" "} Web Development
              </span>
                        </h1>

                        {/* Paragraph */}
                        <p className="text-gray-200 text-sm sm:text-base max-w-[500px] mx-auto sm:mx-0">
                            Transform ideas into reality with the power of web development.
                            Build innovative, scalable, and dynamic digital experiences that
                            shape the future of the internet.
                        </p>

                        {/* Button */}
                        <motion.a
                            variants={slideInFromLeft(1)}
                            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg w-full sm:w-auto max-w-[200px] mx-auto sm:mx-0"
                        >
                            Get Started!
                        </motion.a>
                    </div>
                </div>

                {/* Image Section */}
                <div className="absolute bottom-0 right-0 z-[10]">
                    {/* Horse Image */}
                    <Image
                        src="/horse.png"
                        alt="horse"
                        height={300}
                        width={300}
                        className="absolute right-10 sm:right-20 md:right-40 top-10 sm:top-20 md:top-40 w-[150px] sm:w-[200px] md:w-[300px]"
                    />

                    {/* Cliff Image */}
                    <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
                </div>

                {/* Trees Image */}
                <div className="absolute bottom-0 z-[5] w-full h-auto">
                    <Image
                        src="/trees.webp"
                        alt="trees"
                        width={2000}
                        height={2000}
                        className="w-full h-auto max-h-[500px] sm:max-h-[700px]"
                    />
                </div>

                {/* Stars Image */}
                <Image
                    src="/stars.png"
                    alt="stars"
                    height={300}
                    width={300}
                    className="absolute top-0 left-0 z-[10]"
                />
            </div>
        </section>
    );
};

export default HeroComponent;
