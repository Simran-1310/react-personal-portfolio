import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = ({ setSelectedProject }) => {
  const projects = [
    {
      title: "Password Checker",
      description: "A React app that validates passwords in real-time with interactive feedback.",
      technologies: "React, useState, useRef, useEffect",
      features: "Real-time validation, dynamic UI updates, responsive design",
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio showcasing my skills, projects, and contact info.",
      technologies: "React, Tailwind CSS, React Router",
      features: "Responsive layout, smooth navigation, modern card hover effects",
    },
    {
      title: "Skill Tracker",
      description: "Tracks skills dynamically and allows navigation between different skill sections.",
      technologies: "React, Context API, Hooks, React Router",
      features: "Dynamic state management, responsive UI, easy navigation",
    },
    {
      title: "Netflix Clone",
      description: "Frontend clone of Netflix with a grid layout for movies and interactive hover effects.",
      technologies: "HTML, CSS",
      features: "Responsive layout, hover effects, modern card design",
    },
    {
      title: "Resume Generator",
      description: "Generates resumes dynamically based on user input.",
      technologies: "JavaScript, HTML, CSS",
      features: "Dynamic content, user-friendly interface, print-ready format",
    },
  ];

  return (
    <div className="min-h-screen  py-16">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              setSelectedProject={setSelectedProject} // pass function here
            />
          ))}
        </div>
      </div>
    </div>
 

    
  );
};

export default Projects;
