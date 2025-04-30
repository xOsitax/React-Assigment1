import ProjectCard from "../components/ProjectC";
import responsiveNav from "../assets/website.PNG";
import BarWebsite from "../assets/responsive.PNG";
import InvitationCard from "../assets/color.jpg";
import { useState } from "react";

function Projects() {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <button
        className="projects-btn bg-red-600 hover:bg-gray-700 text-white px-4 py-2 rounded mb-6"
        onClick={() => setShowProjects((prev) => !prev)}
      >
        {showProjects ? "Hide Projects" : " Projects"}
      </button>

      {showProjects && (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            name="Group BarWebsite"
            image={responsiveNav}
            github="https://github.com/xOsitax/BarWebsite"
            tech="HTML, CSS"
            description="Recreate the Figma file for Genesis portfolio."
            learnings="I learned how to structure a project properly, organize styles using Sass, and create responsive and accessible designs.."
            role="Solo Project"
            challenges="Ensuring proper project structure and form validation to meet development best practices."
          />

          <ProjectCard
            name="Responsive Nagivation Bar"
            image={BarWebsite}
            github="https://github.com/xOsitax/responsive-navar"
            tech="HTML, CSS"
            description="Recreate a Bar website from Figma."
            learnings="Ensuring compatibility across various devices."
            role="Solo FrontEnd"
            challenges="Making the layout pixel-perfect to the Figma design."
          />

          <ProjectCard
            name="Grid Color Palette"
            image={InvitationCard}
            github="https://github.com/xOsitax/Grid"
            tech="HTML, CSS"
            description="Recreate the CSS Grid Color Palette from Figma using Grid."
            learnings="Using CSS Grid."
            role="FrontEnd Developer"
            challenges="Precise spacing and typography to match the design."
          />
        </div>
      )}
    </div>
  );
}

export default Projects;
