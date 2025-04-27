function ProjectCard({
  image,
  name,
  description,
  tech,
  learnings,
  role,
  challenges,
  github,
}) {
  return (
    <div className="project-card bg-white shadow-lg rounded-lg p-4">
      <img
        src={image}
        alt={`Screenshot of ${name}`}
        className="project-pic w-full h-auto rounded-t-lg"
      />
      <h2 className="project-name text-2xl font-semibold text-gray-800 mt-4">
        {name}
      </h2>

      <p className="project-description text-gray-600 mt-2">
        <strong>Description:</strong> {description}
      </p>
      <p className="project-tech text-gray-600 mt-2">
        <strong>Tech Used:</strong> {tech}
      </p>
      <p className="project-learnings text-gray-600 mt-2">
        <strong>What I Learned:</strong> {learnings}
      </p>
      <p className="project-role text-gray-600 mt-2">
        <strong>Role:</strong> {role}
      </p>
      <p className="project-challenges text-gray-600 mt-2">
        <strong>Challenges:</strong> {challenges}
      </p>

      {}
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 mt-4 block"
      >
        View on GitHub
      </a>

      {}
      <a
        href={`#${name.replace(/\s+/g, "-").toLowerCase()}`}
        className="text-blue-500 hover:text-blue-700 mt-4 block"
      >
        View Project Details
      </a>
    </div>
  );
}

export default ProjectCard;
