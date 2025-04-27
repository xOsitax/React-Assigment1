import ProjectCard from "../Components/projectcard";
import responsiveNav from "../assets/responsive.png";
import Barwebsite from "../assets/website.png";
import Pallet from "../assets/color.jpg";

function Projects() {
  return (
    <div id="projects" className="projects-section p-8">
      <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          image={responsiveNav}
          name="Responsive Navigation Bar"
          description="A responsive navigation bar that adapts to different screen sizes."
          tech="HTML, CSS, JavaScript"
          learnings="Learned about responsive design and media queries."
          role="Frontend Developer"
          challenges="Ensuring compatibility across various devices."
          github="https://github.com/xOsitax/responsive-navar"
        />
        <ProjectCard
          image={Barwebsite}
          name="Group Website"
          description="A portfolio website showcasing my projects and skills."
          tech="html,CSS"
          learnings="Gained experience in React and styled components with Tailwind."
          role="Full Stack Developer"
          challenges="Creating an interactive, dynamic portfolio."
          github="https://github.com/xOsitax/BarWebsite"
        />
        <ProjectCard
          image={Pallet}
          name="Grid Color Pallet"
          description="A portfolio website showcasing my projects and skills."
          tech="html,CSS"
          learnings="Gained experience in React and styled components with Tailwind."
          role="Full Stack Developer"
          challenges="Creating an interactive, dynamic portfolio."
          github="https://github.com/xOsitax/Grid"
        />
      </div>

      {/* Specific project sections with IDs */}
      <div id="responsive-navigation" className="project-section"></div>

      <div id="personal-portfolio" className="project-section"></div>
    </div>
  );
}

export default Projects;
