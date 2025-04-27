import Profile from "./Components/Profile.jsx";
import Projects from "./pages/projects.jsx";
import ProjectCard from "./Components/projectcard.jsx";
import { useState } from "react";

function App() {
  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold text-gray-800">
            <a href="#profile" className="hover:text-gray-900">
              MyPortfolio
            </a>
          </div>

          {/* Navigation Links */}
          <div className="space-x-6">
            <a href="#aboutme" className="text-gray-600 hover:text-gray-900">
              About Me
            </a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900">
              Projects
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <div id="profile">
        <Profile title="Yessenia Carlos" age={30} isStudent={true} />
      </div>

      <div id="projects">
        <Projects /> {}
      </div>

      <div id="contact">{}</div>
    </>
  );
}

export default App;
