import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Skills from "@/components/MySkills/Skills";
import MyProject from "@/components/MySkills/MyProject";

const Projects = () => {
  return (
      <section>
        <div>
          <Skills />
        </div>
        <div
            className="flex flex-col items-center justify-center py-10"
            id="projects"
        >
          <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
            My Projects
          </h1>
          <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
            <ProjectCard
                src="/logoProject/img.png"
                title="ISTAD Learning Management System"
                description="The ISTAD LMS is a platform that provides students and instructors with easy access to course materials, assignments, and exams, streamlining the learning and teaching process."
            />
              <ProjectCard
                  src="/logoProject/img2.png"
                  title="Donate - Donation Platform"
                  description="iDonate is a platform that verifies the authenticity of donation requests, ensuring trust through an admin approval system for credible organizations, a power by blockchain technology"
              />

          </div>
        </div>
          <MyProject/>
      </section>

  );
};

export default Projects;
