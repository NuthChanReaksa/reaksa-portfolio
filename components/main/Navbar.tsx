"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu
  };

  return (
      <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
        <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">

          {/* Logo */}
          <a
              href="#about-me"
              className="h-auto w-auto flex flex-row items-center"
          >
            <Image
                src="/logoProject/idonate-logo3.png"
                alt="logo"
                width={50}
                height={50}
                className="cursor-pointer hover:animate-slowspin"
            />
            <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Bro Chain
          </span>
          </a>

          {/* Socials (now after the logo) */}
          <div className="hidden lg:flex flex-row gap-5 items-center ml-[10px]">
            {Socials.map((social) => (
                <Image
                    src={social.src}
                    alt={social.name}
                    key={social.name}
                    width={24}
                    height={24}
                />
            ))}
          </div>


          {/* Menu for larger screens */}
          <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20">
            <div
                className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
              <a href="#about-me" className="cursor-pointer">About me</a>
              <a href="#skills" className="cursor-pointer">Skills</a>
              <a href="#projects" className="cursor-pointer">Projects</a>
            </div>
          </div>

          {/* Burger menu for small screens */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-200">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="stroke-current"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Burger menu dropdown */}
        {isMenuOpen && (
            <div className="md:hidden flex flex-col items-center bg-[#0300145e] text-gray-200 py-4">
              <a href="#about-me" className="cursor-pointer py-2" onClick={closeMenu}>
                About me
              </a>
              <a href="#skills" className="cursor-pointer py-2" onClick={closeMenu}>
                Skills
              </a>
              <a href="#projects" className="cursor-pointer py-2" onClick={closeMenu}>
                Projects
              </a>
            </div>
        )}
      </div>
  );
};

export default Navbar;
