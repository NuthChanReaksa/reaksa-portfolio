"use client"
import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";
import {slideInFromLeft} from "@/utils/motion";
import React from "react";

const HeroComponent = () => {
    return (
        <section>

            <div className="w-screen h-screen relative">
                <div
                    className="flex items-center w-full h-full bg-cover bg-center"
                    style={{backgroundImage: "url(/main-bg.webp)"}}
                >
                    <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
                        <h1 className="text-[50px] text-white font-semibold">
                            Unlock Limitless Creativity with
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
    {" "} Web Development
</span>
                        </h1>

                        <p className="text-gray-200 hidden md:block">
                        Transform ideas into reality with the power of web development.
                            Build innovative, scalable, and dynamic digital experiences that
                            shape the future of the internet.
                        </p>


                        <motion.a
                            variants={slideInFromLeft(1)}
                            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                        >
                            Get Started!
                        </motion.a>

                    </div>
                </div>


                <div className="absolute bottom-0 right-0 z-[10]">
                    <Image
                        src="/horse.png"
                        alt="horse"
                        height={300}
                        width={300}
                        className="absolute right-55 top-40"
                    />

                    <Image src="/cliff.webp" alt="cliff" width={480} height={480}/>
                </div>

                <div className="absolute bottom-0 z-[5] w-full h-auto">
                    <Image
                        src="/trees.webp"
                        alt="trees"
                        width={2000}
                        height={2000}
                        className="w-full h-full"
                    />
                </div>

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