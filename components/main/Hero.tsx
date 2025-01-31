import React from "react";
import HeroContent from "../sub/HeroContent";
import HeroComponent from "@/components/HeroSectionComponent/HeroComponent";
import MyProject from "@/components/MySkills/MyProject";

const Hero = () => {
  return (
      <section>
          <div className="relative flex flex-col h-full w-full" id="about-me">
              <video
                  autoPlay
                  muted
                  loop
                  className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[1] object-cover "
              >
                  <source src="/blackhole.webm" type="video/webm"/>
              </video>
              <HeroContent/>
          </div>
          <MyProject/>
          <HeroComponent/>
      </section>

  );
};

export default Hero;
