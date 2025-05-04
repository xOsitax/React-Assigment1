import React from "react";

function ProjectPopup({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          &times;
        </button>
        <p className="text-gray-700 mb-4">
          <strong>Tech Used:</strong> {project.tech}
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Role:</strong> {project.role}
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Challenges:</strong> {project.challenges}
        </p>
      </div>
    </div>
  );
}
export default ProjectPopup;
