import React, { useEffect, useState } from "react";
import axios from 'axios';

function ProjectSection() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("http://localhost:8080/project");
        setProjects(res.data);
      } catch (err) {
        console.error("Error fetching projects:", err);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section>
      <h2>Our Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div key={project._id} className="project-card">
            <img src={project.imageUrl} alt={project.name} width={200} />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <button>Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;