import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description of Project 1',
      image: 'https://via.placeholder.com/150', 
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description of Project 2',
      image: 'https://via.placeholder.com/150', 
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Description of Project 3',
      image: 'https://via.placeholder.com/150', 
    },
    // Add more projects as needed
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="section"
    >
      <section>
        <h2>Projects</h2>
        <div className="projects-container">
          {projects.map(project => (
            <motion.div
              key={project.id}
              className="project"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={project.image} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  <button>Preview</button>
                  <button>Code</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
