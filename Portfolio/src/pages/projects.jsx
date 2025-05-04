import ProjectCard from "../components/ProjectC";
import responsiveNav from "../assets/website.PNG";
import BarWebsite from "../assets/responsive.PNG";
import InvitationCard from "../assets/color.jpg";
import ProjectPopup from "../components/ProjectPopup";
import { useState } from "react";

function Projects() {
  const [showProjects, setShowProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = [
    {
      name: "Group BarWebsite",
      image: responsiveNav,
      description: "A website for a bar with a responsive design",
      learnings: "I learned about responsive design and CSS Flexbox.",
      github: "https://github.com/xOsitax/BarWebsite",
      tech: "HTML, CSS",
      role: "Solo Project",
      challenges:
        "Ensuring proper project structure and form validation to meet development best practices.",
    },
    {
      name: "Responsive Navigation Bar",
      image: BarWebsite,
      description: "A responsive navigation bar",
      learnings: "Works in different plataforms.",
      github: "https://github.com/xOsitax/responsive-navar",
      tech: "HTML, CSS",
      role: "Solo FrontEnd",
      challenges: "Making the layout pixel-perfect to the Figma design.",
    },
    {
      name: "Grid Color Palette",
      image: InvitationCard,
      description: "A color palette grid",
      learnings: "I learned about CSS Grid and color theory.",
      github: "https://github.com/xOsitax/Grid",
      tech: "HTML, CSS",
      role: "FrontEnd Developer",
      challenges: "Precise spacing and typography to match the design.",
    },
  ];

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <button
        className="projects-btn bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded mb-6"
        onClick={() => setShowProjects((prev) => !prev)}
      >
        {showProjects ? "Hide Projects" : " Projects"}
      </button>

      {showProjects && (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              image={project.image}
              github={project.github}
              tech={project.tech}
              description={project.description}
              learnings={project.learnings}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      )}

      {selectedProject && (
        <ProjectPopup
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default Projects;
